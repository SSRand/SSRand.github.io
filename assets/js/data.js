// ============================================================
//  Site content. Edit this file to update news & publications.
// ============================================================

// Your name as it appears in author lists (will be bolded).
window.SELF_NAME = "Changjiang Han";

// ---------- News ----------
// date: "YYYY-MM" or "YYYY-MM-DD"; text may contain HTML.
// TODO: acceptance months below are estimates — please verify.
window.NEWS = [
  { date: "2026-10", text: "Our paper on <b>data scaling laws for agentic RL</b> is accepted to <b>NeurIPS 2026</b>." },
  { date: "2026-08", text: "<b>QUACK</b> is accepted to <b>EMNLP 2026</b>." },
  { date: "2026-07", text: "Released <b>Restoring Collaborative Signals in Semantic-ID Generative Recommendation</b> (first author) and <b>OxygenREC-v2</b> on arXiv." },
  { date: "2026-05", text: "<b>Preference Heads in LLMs</b> is accepted to <b>ACL 2026</b>." },
  { date: "2025-09", text: "Started my M.Sc. in Machine Learning at <a href=\"https://mbzuai.ac.ae\">MBZUAI</a>, advised by <a href=\"https://cs.mcgill.ca/~xueliu/site/intro.html\">Prof. Xue (Steve) Liu</a>." },
  { date: "2025-06", text: "Graduated from HUST with the <b>Outstanding Thesis Award</b> (top 3%) and <b>Outstanding Graduate Award</b>." },
];

// ---------- Publications ----------
// venue:    short badge text (e.g. "NeurIPS 2026", "arXiv")
// type:     "conference" | "preprint" | "journal" | "workshop"
// selected: true → shown under "Academic Research" on the About page
// group:    "industry" → shown under "Industry Research" on the About page
//           (with optional org: "Company · Team" and highlight: one-line impact)
// equal:    list of author names with equal contribution (gets a *)
// links:    { arxiv, pdf, code, project, bib } — any subset
window.PUBLICATIONS = [
  {
    title: "How Data Scales in Agentic Reinforcement Learning: Laws and Synthesis Strategies",
    authors: ["Bowei He", "Yankai Chen", "Xiaokun Zhang", "Changjiang Han", "Ye Yuan", "Chong Li", "Xue Liu"],
    venue: "NeurIPS 2026", type: "conference", year: 2026, selected: true,
    tldr: "Treats agentic-RL data as multi-dimensional (tasks, environments, trajectories) and derives scaling laws and synthesis strategies along each axis.",
    links: { arxiv: "https://arxiv.org/abs/2610.23946" },
  },
  {
    title: "Restoring Collaborative Signals in Semantic-ID Generative Recommendation via Personalized Natural Language",
    authors: ["Changjiang Han", "Qingyang Li", "Yaqiang Zang", "Jikun Kang", "Pinghua Gong", "Xue Liu", "Bowei He"],
    venue: "arXiv", type: "preprint", year: 2026, selected: true,
    tldr: "Recovers the collaborative signal lost by semantic-ID tokenization by expressing user preferences in personalized natural language, letting LLM recommenders reason explicitly.",
    links: { arxiv: "https://arxiv.org/abs/2607.27682" },
  },
  {
    title: "OxygenREC-v2: Internalizing Discrimination into Generative Recommendation",
    authors: ["Guo Tang", "Hanye Wu", "Changjiang Han", "Qingyang Li", "Ming Zhang", "Xiangyu Qian", "Yanchen Qiao", "Huanjie Wang", "Zhi Ma", "Zhen Li", "Yaqiang Zang", "Pinghua Gong"],
    equal: ["Guo Tang", "Hanye Wu", "Changjiang Han"],
    venue: "arXiv", type: "preprint", year: 2026,
    group: "industry", org: "JD.com · Generative Recommendation",
    highlight: "Co-first author on the core algorithm of OxygenREC, JD.com's production generative recommender, deployed online across core e-commerce scenarios.",
    tldr: "Internalizes discriminative behavior signals (clicks, carts, orders) into a generative recommender that decodes semantic-ID sequences.",
    links: { arxiv: "https://arxiv.org/abs/2607.24255" },
  },
  {
    title: "Preference Heads in Large Language Models: A Mechanistic Framework for Interpretable Personalization",
    authors: ["Weixu Zhang", "Ye Yuan", "Changjiang Han", "Yuxing Tian", "Zipeng Sun", "Linfeng Du", "Jikun Kang", "Hong Kang", "Xue Liu", "Haolun Wu"],
    venue: "ACL 2026", type: "conference", year: 2026, selected: true,
    tldr: "Identifies causal \"preference heads\" in LLMs and steers them at decoding time for training-free, interpretable personalization.",
    links: { arxiv: "https://arxiv.org/abs/2604.22345" },
  },
  {
    title: "QUACK: Questioning, Understanding, and Auditing Communicated Knowledge in Multimodal Social Deduction Agents",
    authors: ["Ye Yuan", "Rui Song", "Weien Li", "Zeyu Li", "Haochen Liu", "Xiangyu Kong", "Changjiang Han", "Yonghan Yang", "Zichen Zhao", "Zixuan Dong", "Fuyuan Lyu", "Bowei He", "Haolun Wu", "Jikun Kang", "Xue Liu"],
    venue: "EMNLP 2026", type: "conference", year: 2026, selected: false,
    tldr: "A multimodal social-deduction environment that audits what agents communicate, going beyond win rates to evaluate reasoning, deception and belief modeling.",
    links: { arxiv: "https://arxiv.org/abs/2605.27068" },
  },
  {
    title: "Discrete Diffusion Models: A Unified Framework from Tokenization to Generation",
    authors: ["Ye Yuan", "Weien Li", "Rui Song", "Zeyu Li", "Haochen Liu", "Xiangyu Kong", "Zixuan Dong", "Linfeng Du", "Zipeng Sun", "Weixu Zhang", "Jiaxin Huang", "Changjiang Han", "Yonghan Yang", "Zichen Zhao", "Xiuyuan Hu", "Haolun Wu", "Yankai Chen", "Fengran Mo", "Jikun Kang", "Bowei He", "Dawn Song", "Philip S. Yu", "Xue Liu"],
    venue: "arXiv", type: "preprint", year: 2026, selected: false,
    tldr: "A survey that unifies discrete denoising diffusion models, from tokenization to generation, as an alternative to autoregressive modeling.",
    links: { arxiv: "https://arxiv.org/abs/2607.13431" },
  },
  {
    title: "Beyond Message Passing: A Semantic View of Agent Communication Protocols",
    authors: ["Dun Yuan", "Fuyuan Lyu", "Ye Yuan", "Weixu Zhang", "Bowei He", "Jiayi Geng", "Linfeng Du", "Zipeng Sun", "Yankai Chen", "Changjiang Han", "Jikun Kang", "Xi Chen", "Haolun Wu", "Xue Liu"],
    venue: "arXiv", type: "preprint", year: 2026, selected: false,
    tldr: "A human-inspired, semantic perspective on agent communication protocols for tool use and multi-agent coordination.",
    links: { arxiv: "https://arxiv.org/abs/2604.02369" },
  },
];
