(function () {
  const SELF = window.SELF_NAME;
  const PUBS = window.PUBLICATIONS || [];
  const NEWS = window.NEWS || [];
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // ---------- News ----------
  function fmtDate(d) {
    const [y, m] = d.split("-");
    return m ? `${MONTHS[+m - 1]} ${y}` : y;
  }
  document.getElementById("news-list").innerHTML = NEWS.map(
    (n) => `<li><span class="date">${fmtDate(n.date)}</span><span>${n.text}</span></li>`
  ).join("");

  // ---------- Publications ----------
  const isFirst = (p) => p.authors[0] === SELF || (p.equal || []).includes(SELF);

  function authorHTML(name, p) {
    const star = (p.equal || []).includes(name) ? "*" : "";
    const cls = name === SELF ? ' class="me"' : "";
    return `<span${cls}>${esc(name)}${star}</span>`;
  }

  // Show up to 6 authors (always including SELF); collapse the rest behind a toggle.
  function authorsBlock(p) {
    const all = p.authors.map((a) => authorHTML(a, p));
    const selfIdx = p.authors.indexOf(SELF);
    const limit = Math.max(6, selfIdx + 1);
    if (all.length <= limit + 1) return all.join(", ");
    const shown = all.slice(0, limit).join(", ");
    const rest = all.slice(limit).join(", ");
    return `${shown}, <span class="rest" hidden>${rest}</span><button class="more" type="button">and ${all.length - limit} more</button>`;
  }

  function bibtex(p) {
    const last = (n) => n.split(" ").slice(-1)[0];
    const key = `${last(p.authors[0]).toLowerCase()}${p.year}${p.title.split(/\W+/)[0].toLowerCase()}`;
    const authors = p.authors.map((n) => { const parts = n.split(" "); return `${parts.pop()}, ${parts.join(" ")}`; }).join(" and ");
    const venueField = p.type === "preprint"
      ? `  journal   = {arXiv preprint${p.links.arxiv ? " arXiv:" + p.links.arxiv.split("/").pop() : ""}},`
      : `  booktitle = {${p.venue}},`;
    const kind = p.type === "preprint" || p.type === "journal" ? "article" : "inproceedings";
    return `@${kind}{${key},\n  title     = {${p.title}},\n  author    = {${authors}},\n${venueField}\n  year      = {${p.year}}\n}`;
  }

  function pubHTML(p, idPrefix) {
    const i = PUBS.indexOf(p);
    const L = p.links || {};
    const links = [
      L.arxiv && `<a href="${L.arxiv}" target="_blank" rel="noopener">arXiv</a>`,
      L.pdf && `<a href="${L.pdf}" target="_blank" rel="noopener">PDF</a>`,
      L.code && `<a href="${L.code}" target="_blank" rel="noopener">Code</a>`,
      L.project && `<a href="${L.project}" target="_blank" rel="noopener">Project</a>`,
      `<button type="button" class="bib-btn">BibTeX</button>`,
    ].filter(Boolean).join("");
    return `
      <li class="pub" id="${idPrefix}-${i}">
        <span class="badge ${p.type}">${esc(p.venue)}</span>
        <div>
          <div class="pub-title">${esc(p.title)}</div>
          <div class="pub-authors">${authorsBlock(p)}</div>
          ${p.tldr ? `<div class="pub-tldr">${esc(p.tldr)}</div>` : ""}
          <div class="pub-links">${links}</div>
          <pre class="bibtex">${esc(L.bib || bibtex(p))}</pre>
        </div>
      </li>`;
  }

  document.getElementById("selected-pubs").innerHTML =
    PUBS.filter((p) => p.selected && p.group !== "industry").map((p) => pubHTML(p, "sel")).join("");
  document.getElementById("industry-pubs").innerHTML =
    PUBS.filter((p) => p.group === "industry").map((p) => pubHTML(p, "sel")).join("");

  function renderAll(filter) {
    const list = PUBS.filter((p) =>
      filter === "all" ? true : filter === "first" ? isFirst(p) : p.type === filter
    );
    const years = [...new Set(list.map((p) => p.year))].sort((a, b) => b - a);
    document.getElementById("all-pubs").innerHTML = years.map((y) =>
      `<div class="year-heading">${y}</div><ol class="pubs">${list.filter((p) => p.year === y).map((p) => pubHTML(p, "pub")).join("")}</ol>`
    ).join("") || `<p class="note">No publications in this category yet.</p>`;
  }
  renderAll("all");

  document.getElementById("pub-filters").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    document.querySelectorAll(".filter").forEach((b) => b.classList.toggle("active", b === btn));
    renderAll(btn.dataset.filter);
  });

  // Delegated handlers: author expand + BibTeX toggle.
  document.addEventListener("click", (e) => {
    if (e.target.matches(".more")) {
      e.target.previousElementSibling.hidden = false;
      e.target.remove();
    } else if (e.target.matches(".bib-btn")) {
      e.target.closest(".pub").querySelector(".bibtex").classList.toggle("open");
    }
  });

  // ---------- Tabs (hash routing) ----------
  const TABS = ["about", "publications", "experience"];
  const navLinks = document.querySelector(".nav-links");
  const navToggle = document.querySelector(".nav-toggle");

  function route() {
    const hash = location.hash.slice(1) || "about";
    let tab = TABS.includes(hash) ? hash : "about";
    let target = null;
    if (hash.startsWith("pub-")) { tab = "publications"; target = hash; }
    document.querySelectorAll(".tab").forEach((s) => s.classList.toggle("active", s.dataset.tab === tab));
    document.querySelectorAll(".nav-links a[data-tab]").forEach((a) => a.classList.toggle("active", a.dataset.tab === tab));
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    if (target) {
      const el = document.getElementById(target);
      if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "center" }));
    } else {
      window.scrollTo({ top: 0 });
    }
  }
  window.addEventListener("hashchange", route);
  route();

  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  // ---------- Theme toggle ----------
  document.querySelector(".theme-toggle").addEventListener("click", () => {
    const root = document.documentElement;
    const current = root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
