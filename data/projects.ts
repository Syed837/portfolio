import type { Project } from "@/types/project";

/**
 * All projects are sourced from the resume's "Training & Projects" section.
 * They were individual, time-boxed training projects (not production deployments) —
 * copy below is written to reflect that honestly while still explaining the real
 * engineering thinking behind each one.
 */
export const projects: Project[] = [
  {
    slug: "ztna-simulator-dashboard",
    title: "ZTNA Simulator Dashboard",
    tagline:
      "A working simulator for Zero Trust Network Access — policy-based auth/authz you can watch execute step by step.",
    category: ["security", "networking"],
    duration: "40 days",
    role: "Developer",
    teamSize: "Individual",
    environment: "Windows",
    year: "2026",
    overview:
      "A browser-based simulator that walks through how a Zero Trust Network Access (ZTNA) system decides whether to grant or deny access. Instead of describing Zero Trust in the abstract, the dashboard runs a request through user identity, device state, and policy checks in sequence, and shows the outcome of each step.",
    problem:
      "Zero Trust is easy to describe in a slide ('never trust, always verify') and hard to picture as a running system. Most explanations stop at the principle and skip the mechanics of how a real access decision actually gets made across identity, device, and policy layers.",
    motivation:
      "I wanted to understand ZTNA past the marketing definition, and the fastest way to do that was to force myself to implement the decision logic — not just read about it.",
    architecture:
      "A policy-evaluation layer written in Java models access requests as a sequence of checks: user identity validation, device-state validation, and policy-rule matching. Each request produces an explicit allow/deny result with the reasoning attached, rather than a single opaque pass/fail. The front end (HTML/CSS/JS) renders that sequence as an interactive flow so each stage of the decision is visible, not just the final outcome.",
    features: [
      "Configurable access policies tied to user role, device type, and resource sensitivity",
      "Simulated user and device profiles to test different access scenarios",
      "Step-by-step visualization of the auth/authz decision flow, not just a pass/fail result",
      "An audit-style log recording why each request was allowed or denied",
    ],
    technicalDecisions: [
      "Modeled policy evaluation as an explicit, ordered rule-checking sequence rather than a single black-box function, so every decision stays traceable",
      "Kept user, device, and policy data as separate structures instead of one flat object, mirroring how real ZTNA systems separate those concerns",
      "Built the visualization to expose intermediate states (checking identity → checking device → checking policy) instead of only the final allow/deny",
    ],
    challenges: [
      "Modeling policy logic that was realistic enough to be instructive without becoming an unmaintainable rules engine",
      "Representing a multi-factor decision (identity + device + policy) visually without the dashboard turning into clutter",
    ],
    solutions: [
      "Constrained the policy model to a small, composable rule set and prioritized clarity of the decision path over rule coverage",
      "Used a linear step indicator for the decision flow so each factor gets its own visual beat instead of competing for attention at once",
    ],
    lessonsLearned: [
      "Zero Trust is less a single technology and more a discipline of making every access decision explicit and re-checkable",
      "Building the thing you're trying to learn surfaces edge cases that reading never does",
    ],
    techStack: ["Java", "HTML5", "CSS3", "JavaScript"],
    futureImprovements: [
      "Integrate a real identity provider (OAuth 2.0 / OIDC) instead of simulated identities",
      "Add device posture checks (patch level, disk encryption) as a real signal, not a mock value",
      "Move policy definitions into a simple policy-as-code format that can be edited without touching application code",
    ],
    githubUrl: "https://github.com/Syed837/ztna-simulator-dashboard",
    demoUrl: "https://github.com/Syed837/ztna-simulator-dashboard",
    coverImage: "/projects/ztna-dashboard.png",
    featured: true,
  },
  {
    slug: "network-control-plane-dashboard",
    title: "Network Control Plane Dashboard",
    tagline: "A centralized dashboard for visualizing routing, signaling, and control-plane state.",
    category: ["networking"],
    duration: "35 days",
    role: "Developer",
    teamSize: "Individual",
    environment: "Windows",
    year: "2026",
    overview:
      "A dashboard that models a network's control plane — the part of a network responsible for deciding how traffic should be routed — and renders routing, signaling, and status data in one centralized interface, in place of scattered logs and CLI output.",
    problem:
      "Control-plane behavior is usually inspected through fragmented tools: routing tables in one place, signaling/status data in another, none of it correlated in real time. That makes it slow to understand what a network is actually deciding and why.",
    motivation:
      "I wanted a single view that answered 'what is the control plane doing right now,' both to make the underlying routing concepts concrete for myself and to practice building dashboards that present dense, fast-changing data legibly.",
    architecture:
      "A Java-based service layer models control-plane concepts — routes, signaling events, and node/link status — and feeds a front-end dashboard (HTML/CSS/JS) that renders that state as a structured, filterable view instead of a raw feed. The presentation layer is deliberately framework-free so the focus stays on how the domain data is structured and displayed.",
    features: [
      "Centralized view of routing table entries, signaling events, and control data",
      "Real-time-style status indicators for network nodes and links",
      "Filterable views so a specific node, route, or event type can be isolated",
      "An event/signal log panel for tracing how state changed over time",
    ],
    technicalDecisions: [
      "Used Java for the control-plane data/service layer to keep routing and signaling logic separate from presentation",
      "Modeled routing and signaling as distinct data types rather than a single generic 'event,' matching how control planes actually separate those concerns",
      "Prioritized information hierarchy (status → routes → signaling detail) over showing everything at once",
    ],
    challenges: [
      "Representing continuously changing routing state without the UI feeling like a wall of scrolling text",
      "Designing an information hierarchy dense enough to be useful but not overwhelming",
    ],
    solutions: [
      "Grouped data into status-first, drill-down-second views: a glance shows overall health, a click shows the underlying routes or signaling detail",
      "Used consistent status indicators (color + label, not color alone) so state is readable at a glance and remains accessible",
    ],
    lessonsLearned: [
      "The gap between 'data exists' and 'data is understandable' is almost entirely a design problem, not a data problem",
      "Separating control-plane logic from the view layer early made later UI changes far less risky",
    ],
    techStack: ["Java", "HTML5", "CSS3", "JavaScript"],
    futureImprovements: [
      "Connect to a real routing daemon (e.g., FRRouting) instead of modeled data",
      "Add historical trend charts for route stability and signaling volume over time",
      "Replace polling with WebSocket-based live updates",
    ],
    githubUrl: "https://github.com/Syed837/network-control-plane-dashboard",
    demoUrl: "https://github.com/Syed837/network-control-plane-dashboard",
    coverImage: "/projects/network-control-plane.png",
    featured: true,
  },
  {
    slug: "3-d-system-visualization",
    title: "3D System Visualization",
    tagline: "An interactive 3D interface for exploring how system components connect and interact.",
    category: ["visualization"],
    duration: "30 days",
    role: "Developer",
    teamSize: "Individual",
    environment: "Windows",
    year: "2026",
    overview:
      "A browser-based 3D interface for exploring system components and the relationships between them, built to make component interactions easier to reason about than static diagrams or documentation allow.",
    problem:
      "System architecture is usually communicated through flat diagrams that lose the sense of how components actually relate and interact. Understanding real-time system behavior from a static picture is harder than it should be.",
    motivation:
      "I wanted to see whether an interactive 3D representation could make system structure easier to explore than a 2D diagram, and to learn the fundamentals of 3D rendering and camera interaction in the browser without reaching for a heavyweight library first.",
    architecture:
      "Built with HTML5, CSS3 3D transforms, and vanilla JavaScript. A component/data layer defines system components and their relationships; a rendering layer positions and rotates them in 3D space; an interaction layer handles camera movement and lets a user select a component to inspect its details.",
    features: [
      "Interactive 3D views of system components and how they connect",
      "Camera controls for rotating and navigating the component space",
      "Click-to-inspect interaction for viewing details about a selected component",
      "Real-time-style views intended for ongoing system monitoring, not just a static snapshot",
    ],
    technicalDecisions: [
      "Used native CSS 3D transforms instead of a rendering library (e.g., Three.js/WebGL) to learn the underlying 3D math and keep the project dependency-free",
      "Structured components and relationships as a plain data layer, separate from rendering, so the visualization could be redriven by different data",
    ],
    challenges: [
      "Getting camera controls to feel intuitive using only CSS transforms and vanilla JS event handling",
      "Structuring component-relationship data in a way that scaled past a handful of hardcoded components",
    ],
    solutions: [
      "Iterated on the camera-control math against real interaction testing rather than tuning it in the abstract",
      "Refactored component data into a reusable structure early, once the hardcoded version became hard to extend",
    ],
    lessonsLearned: [
      "3D interaction is mostly a UX problem wearing a math costume — the hard part is making the controls feel predictable",
      "Doing this without a library first made a later library like Three.js much easier to understand conceptually",
    ],
    techStack: ["HTML5", "CSS3 (3D Transforms)", "JavaScript (Vanilla)"],
    futureImprovements: [
      "Rebuild the rendering layer on WebGL/Three.js for better performance with larger component graphs",
      "Feed the visualization from a real, live data source instead of static/mock component data",
      "Add touch controls for a usable mobile experience",
    ],
    githubUrl: "https://github.com/Syed837/3-d-system-visualization",
    demoUrl: "https://github.com/Syed837/3-d-system-visualization",
    coverImage: "/projects/system-3d-viz.png",
    featured: true,
  },
  {
    slug: "adcn-project",
    title: "Adaptive Disaster Communication Network (ADCN)",
    tagline:
      "A resilient communication backbone dynamically switching between networks using MAB algorithms.",
    category: ["networking", "go"],
    duration: "45 days",
    role: "Developer",
    teamSize: "Individual",
    environment: "Windows",
    year: "2026",
    overview:
      "A prototype for an Adaptive Disaster Communication Network designed to maintain reliable communication during infrastructure failures by dynamically switching between available communication networks (Wi-Fi, Bluetooth, cellular) using a Federated Hybrid architecture.",
    problem:
      "During disasters, traditional communication channels often fail. Relying on a single network or centralized coordination points leads to catastrophic communication breakdowns when those specific infrastructure pieces are damaged.",
    motivation:
      "I wanted to build a resilient, decentralized communication tool that could automatically find the best path for messages when standard networks are unreliable.",
    architecture:
      "A Federated Hybrid Model implemented in Go. It combines local peer-to-peer communication with elected 'Community Leaders' for coordination. A Multi-Armed Bandit (MAB) algorithm dynamically selects the best-performing network path from available options.",
    features: [
      "Dynamic Network Adaptation using Multi-Armed Bandit algorithms",
      "Store-and-Forward Reliability with end-to-end acknowledgments",
      "End-to-End Encryption & Digital Signatures for security",
      "Federated Hybrid P2P Architecture with automatic leader election",
    ],
    technicalDecisions: [
      "Used Go for its concurrency model (goroutines), which is ideal for managing multiple network interfaces and running the MAB algorithm asynchronously",
      "Implemented as a single, statically-linked binary for simple deployment to diverse, low-power hardware in disaster zones",
    ],
    challenges: [
      "Implementing seamless network switching without dropping critical messages",
      "Balancing the need for decentralized resilience with the efficiency of coordinated routing",
    ],
    solutions: [
      "Treated available network paths as 'arms' in a Multi-Armed Bandit problem, dynamically learning their real-time performance to optimize routing",
      "Designed a graceful degradation path from community-leader coordination down to pure P2P operation",
    ],
    lessonsLearned: [
      "Concurrency is critical for resilient networking, and Go makes managing complex asynchronous network operations significantly easier",
      "True resilience requires assuming every single part of the network can and will fail",
    ],
    techStack: ["Go", "HTML5", "CSS3", "JavaScript"],
    futureImprovements: [
      "Integrate actual hardware interfaces for Bluetooth and LoRa",
      "Refine MAB reward functions based on more granular real-time performance metrics",
    ],
    githubUrl: "https://github.com/Syed837/adcn-project",
    demoUrl: "https://github.com/Syed837/adcn-project",
    coverImage: "/projects/adcn-project.png",
    featured: true,
  },
  {
    slug: "network-configuration-manager",
    title: "Automated Network Configuration Manager",
    tagline:
      "A production-grade network automation system with configuration diffing and automatic rollback.",
    category: ["networking", "automation", "python"],
    duration: "30 days",
    role: "Developer",
    teamSize: "Individual",
    environment: "Windows",
    year: "2026",
    overview:
      "A sophisticated Python-based network automation system for managing Cisco and other network devices. It features configuration diffing, dry-run validation, transaction-like multi-device behavior, and comprehensive automatic rollback.",
    problem:
      "Manual network configuration is error-prone and risky. Applying changes to multiple devices without pre-validation or automated rollback mechanisms often leads to network outages and tedious recovery processes.",
    motivation:
      "I needed a tool that brought software engineering practices (like dry-runs, visual diffs, and atomic transactions) to network infrastructure management.",
    architecture:
      "Built using a layered architecture: a Core Engine orchestrates operations, a Device Abstraction Layer handles multi-vendor SSH connections (via Netmiko/Napalm), an Enhanced Validation Pipeline ensures safety checks, and an Advanced Deployment Engine executes the changes.",
    features: [
      "Configuration Diffing (running vs. candidate configs)",
      "Dry-Run Mode for previewing changes without applying them",
      "Interface-Aware Validation to protect critical ports from accidental shutdown",
      "Transaction-Like Behavior with Automatic Rollback across multiple devices",
    ],
    technicalDecisions: [
      "Used a plugin pattern for device abstractions to easily support new vendors",
      "Implemented a per-device state machine to track deployment status accurately across the fleet",
      "Built fail-fast validation that stops deployment if safety checks fail before touching the device",
    ],
    challenges: [
      "Handling inconsistent SSH outputs and error messages from different network devices",
      "Designing a reliable rollback mechanism that works even if the device connection drops mid-deployment",
    ],
    solutions: [
      "Wrapped all device interactions in strict error handling and state tracking",
      "Implemented a 'transaction' model where any failure triggers a rollback on all previously successful devices in the batch",
    ],
    lessonsLearned: [
      "Network automation requires extremely defensive programming; you have to plan for the device to fail at the worst possible moment",
      "Pre-deployment validation is just as important as the deployment code itself",
    ],
    techStack: ["Python", "Netmiko", "Napalm", "Typer", "Rich"],
    futureImprovements: [
      "Add support for Juniper and Arista devices",
      "Integrate with a Git repository as the single source of truth for candidate configurations",
      "Build a web dashboard for execution summaries and auditing",
    ],
    githubUrl: "https://github.com/Syed837/network-configuration-manager",
    demoUrl: "https://github.com/Syed837/network-configuration-manager",
    coverImage: "/projects/network-config-manager.png",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getAdjacentProjects(slug: string): { prev: Project | null; next: Project | null } {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { prev: null, next: null };
  const prev = index === 0 ? projects[projects.length - 1] : projects[index - 1];
  const next = index === projects.length - 1 ? projects[0] : projects[index + 1];
  return { prev: prev ?? null, next: next ?? null };
}
