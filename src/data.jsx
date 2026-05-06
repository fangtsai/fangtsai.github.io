// Shared portfolio content. Bilingual (zh / en).
// All identifiable employer names abstracted to industry descriptors.

export const PORTFOLIO_DATA = {
  name: { zh: "Fang", en: "Fang" },
  handle: "@fangtsai",
  role: {
    zh: "後端 / 全端工程師",
    en: "Backend / Full-stack Engineer",
  },
  location: { zh: "台灣", en: "Taiwan" },
  available: { zh: "積極學習新技能中", en: "Actively learning new skills" },

  tagline: {
    zh: "工程經驗涵蓋製造業內部系統與 SaaS 產品開發；專注於 AI 協作開發流程，並具備自架 Linux 服務部署能力。",
    en: "Engineering experience spans manufacturing internal systems and SaaS product development, with focus on AI-assisted workflows and self-hosted Linux deployment.",
  },

  about: {
    zh: [
      "具備工程判斷能力，能權衡擴充既有方法、開發新模組或抽取共用底層之間的設計取捨。",
      "具備端到端開發能力，可獨立完成從規格撰寫、實作、CI/CD 部署至自架 Linux 上線的完整流程。",
      "具備跨角色溝通能力，能於客戶、系統導入顧問與產品團隊間翻譯需求；領域知識涵蓋製造、維修與物流。",
    ],
    en: [
      "Strong engineering judgement in evaluating trade-offs between extending existing methods, building new modules, and abstracting shared base layers.",
      "End-to-end delivery capability, independently handling specification, implementation, CI/CD, and self-hosted Linux deployment.",
      "Cross-functional communication, translating requirements among customers, implementation consultants, and product teams; domain knowledge spans manufacturing, maintenance, and logistics.",
    ],
  },

  // Career phases — abstracted away from specific employers.
  phases: [
    {
      id: "phase-1",
      tag: { zh: "Phase I", en: "Phase I" },
      title: {
        zh: "大型製造業 — 系統工程師",
        en: "Heavy-industry Manufacturing — Systems Engineer",
      },
      period: "2024 — 2025",
      summary: {
        zh: "於大型製造業負責內部工具與圖說管理系統開發；將既有 WinForm 單體應用抽取出獨立服務層，並重構為前後端分離的網頁架構。",
        en: "Responsible for internal tools and engineering-drawing system development at a heavy-industry manufacturing site; extracted independent service layers from a legacy WinForm monolith and rebuilt the stack as a decoupled front-end / Web API architecture.",
      },
    },
    {
      id: "phase-2",
      tag: { zh: "Phase II", en: "Phase II" },
      title: {
        zh: "智慧製造系統 — 全端工程師",
        en: "Smart Manufacturing — Full-stack Engineer",
      },
      period: "2025 — 2026",
      summary: {
        zh: "於智慧製造產品平台負責雙軌開發：針對不同產業客戶之領域需求進行模組客製化，並參與產品本身之功能設計與架構演進。",
        en: "Dual-track development on a smart-manufacturing product platform: customization modules for clients across different industries, alongside contributions to the platform's own feature design and architectural evolution.",
      },
    },
    {
      id: "phase-3",
      tag: { zh: "Phase III", en: "Phase III" },
      title: {
        zh: "Side Projects",
        en: "Side Projects",
      },
      period: "2026 — Present",
      summary: {
        zh: "獨立開發個人 side projects，部署於自架 Linux 環境；建立以 AI 協作為核心、涵蓋規格撰寫、實作與上線驗證的開發流程。",
        en: "Independent development of personal side projects deployed on a self-hosted Linux environment; established an AI-assisted workflow spanning specification, implementation, and production verification.",
      },
    },
  ],

  works: [
    {
      id: "node-control",
      phase: "I",
      year: "2024",
      title: {
        zh: "製程節點控管系統",
        en: "Production Node Control",
      },
      kicker: { zh: "內部工具 · WinForm", en: "Internal Tool · WinForm" },
      summary: {
        zh: "針對使用多年、無分層的 WinForm 單體應用進行架構重構。保留既有使用者介面，於底層獨立開發 DDD 服務專案，將主節點與子單位次節點之 CRUD、批次匯入、歷史追蹤功能解耦，建立可持續擴充的服務層基礎。",
        en: "Refactored a long-running, unlayered WinForm monolith. Preserved the existing UI while developing a separate DDD service project, decoupling CRUD, batch import, and history tracking for main and sub-unit nodes from the legacy codebase to establish an extensible service foundation.",
      },
      stack: [".NET Framework 4.8", "WinForm", "DDD", "MSSQL", "Oracle"],
      role: { zh: "獨立開發", en: "Solo build" },
      image: "/assets/works/node-control.jpg",
      placeholder: "WINFORM SCREEN",
    },
    {
      id: "drawing-portal",
      phase: "I",
      year: "2024",
      title: {
        zh: "工程圖說查詢入口",
        en: "Engineering Drawing Portal",
      },
      kicker: { zh: "內部網頁 · .NET Core MVC", en: "Internal Web · .NET Core MVC" },
      summary: {
        zh: "全新規劃並開發內部圖說查詢平台，以 Clean Architecture + DDD 為核心架構。專案拆分為 Web API、MVC 前端與權限控制三個獨立專案：API 層處理圖說狀態查詢與檔案下載、前端負責搜尋介面、權限控制專案集中管理 RBAC 與單張圖說存取，使 API 層可作為日後其他子系統的共用基礎。",
        en: "Designed and developed an internal engineering-drawing portal from the ground up on Clean Architecture + DDD. Architected as three independent projects with clear separation of concerns: a Web API for drawing-status queries and downloads, an MVC front-end for the search interface, and a dedicated access-control service for RBAC and per-drawing permissions, enabling the API layer to serve as a shared foundation for future systems.",
      },
      stack: [".NET Core MVC", "Web API", "Clean Architecture", "DDD", "RBAC"],
      role: { zh: "架構規劃 + 全端", en: "Architecture + Full-stack" },
      image: "/assets/works/drawing-portal.jpg",
      placeholder: "WEB PORTAL",
    },
    {
      id: "custom-modules",
      phase: "II",
      year: "2025",
      title: {
        zh: "客製化模組",
        en: "Customization Modules",
      },
      kicker: { zh: "客戶導向開發", en: "Customer-driven Development" },
      summary: {
        zh: "於分層良好的產品平台架構上負責客製化模組開發，與系統導入顧問協作，將客戶業務邏輯實作至產品中。核心工作為設計取捨：判斷應以 Repository Pattern 結合繼承覆寫擴充既有方法，或開發新模組以滿足需求；過程中需熟悉產品設計脈絡並維持主架構穩定，同時涵蓋不同產業客戶之領域需求。",
        en: "Customization module development on a well-layered product platform, collaborating with implementation consultants to translate client business logic into code. Core responsibility involved design trade-offs: deciding when to extend existing methods through Repository pattern with inheritance/override, versus building dedicated modules — maintaining product architecture stability while addressing the domain needs of clients across different industries.",
      },
      stack: [".NET Core", "Web API", "MSSQL", "Vue"],
      role: { zh: "全端工程師", en: "Full-stack Engineer" },
      image: "/assets/works/custom-modules.jpg",
      placeholder: "PLATFORM UI",
    },
    {
      id: "product-features",
      phase: "II",
      year: "2026",
      title: {
        zh: "產品功能優化",
        en: "Product Feature Enhancements",
      },
      kicker: { zh: "產品工程", en: "Product Engineering" },
      summary: {
        zh: "以產品工程思維評估功能通用性。除實作之外，主要工作包含解析既有架構、抽取共用底層方法、將資料存取層收斂至 Repository Pattern，使功能能適應多種客戶情境並維持長期可維護性；同時持續分析市面競品差異，將具參考價值之設計整合至產品中以提升競爭力。",
        en: "Approached feature design with a product-engineering mindset focused on generality. Beyond implementation, primary responsibilities included analyzing existing architecture, extracting shared base methods, and consolidating data access through the Repository pattern, enabling features to serve multiple customer scenarios while preserving long-term maintainability. Continuously analyzed competing products and integrated valuable design ideas to strengthen the product's competitive position.",
      },
      stack: [".NET Core", "Web API", "MSSQL", "Vue", "ECharts"],
      role: { zh: "產品工程師", en: "Product Engineer" },
      image: "/assets/works/product-features.jpg",
      placeholder: "PRODUCT UI",
    },
    {
      id: "home-finance",
      phase: "III",
      year: "2026",
      title: {
        zh: "家庭財務管理系統",
        en: "Home Finance Stack",
      },
      kicker: { zh: "Side Project · Self-hosted · 開發測試中", en: "Side Project · Self-hosted · In Development" },
      summary: {
        zh: "獨立開發私有家庭財務管理系統。透過 Docker Compose 整合 Firefly III、PostgreSQL 與 Homebox 服務，提供記帳、動產清冊與自動備份功能。前端為自行開發之 Vue 3 + Vite 行動優先 PWA，包含自訂色彩 token 設計系統與 SVG 線條圖示；採用 nginx 作為 REST API 反向代理，支援多人身份即時切換與帳戶總覽。",
        en: "Independently developed a private home finance management system. Integrated Firefly III, PostgreSQL, and Homebox via Docker Compose to provide accounting, asset inventory, and automated backup capabilities. Built a mobile-first PWA front-end with Vue 3 + Vite, featuring a custom color-token design system and SVG line icons; uses nginx as a REST API reverse proxy with support for multi-identity switching and live account overviews.",
      },
      stack: ["Docker Compose", "PostgreSQL", "Vue 3", "Vite", "PWA", "nginx"],
      role: { zh: "獨立開發", en: "Solo build" },
      images: [
        "/assets/works/home-finance-entry.jpg",
        "/assets/works/home-finance-stats.jpg",
      ],
      placeholder: "PWA FINANCE APP",
    },
  ],

  skills: [
    {
      heading: { zh: "程式開發", en: "Development" },
      items: [
        "C# WinForm",
        "ASP.NET Core MVC / Web API",
        ".NET Core 微服務",
        "Vue 2 / Vue 3 (Composition API)",
        "Next.js 15 / TypeScript",
        "HTML / CSS / JavaScript",
        "Entity Framework",
        "VBA (Excel 自動化)",
      ],
    },
    {
      heading: { zh: "資料庫", en: "Databases" },
      items: ["MSSQL", "PostgreSQL (+ pgvector)", "Oracle", "Supabase", "Access"],
    },
    {
      heading: { zh: "容器與部署", en: "Containers & Deploy" },
      items: [
        "Docker / Docker Compose",
        "Kubernetes (k8s)",
        "WSL",
        "Cloudflare Tunnel",
        "Self-hosted Linux",
      ],
    },
    {
      heading: { zh: "工具鏈", en: "Tooling" },
      items: ["Git", "GitHub Actions", "AD 帳號管理", "Linux CLI", "nginx"],
    },
    {
      heading: { zh: "AI 輔助開發", en: "AI-Assisted Dev" },
      items: [
        "Claude Code CLI 全端協作開發（涵蓋規格撰寫、實作至 code review）",
        "以 CLAUDE.md 專案憲章規範 AI 開發行為（架構約束、命名慣例、安全規則）",
        "AI 協作除錯流程（問題定位、根因分析、修復驗證）",
      ],
    },
    {
      heading: { zh: "其他", en: "Other" },
      items: [
        "系統思考與分析",
        "專案管理",
        "跨領域知識（製造／維修／物流）",
      ],
    },
  ],

  contact: {
    email: "fangbsuse@gmail.com",
    github: "github.com/fangtsai",
  },
};
