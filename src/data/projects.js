export const projects = [
  {
    id: 1,
    slug: "customer-support-service-portal",
    title: "Customer Support Service Portal",
    type: "Web Application",
    status: "In Progress",
    year: "2026",
    description:
      "A web-based service knowledge portal designed to help support agents access service details, pricing rows, notes, eligibility rules, and admin-managed updates.",
    fullDescription:
      "The Customer Support Service Portal is a workflow-based web application built to organize service information in a way that is easier for support agents to search, review, and update. The project focuses on service details, pricing rows, notes, eligibility rules, admin-managed content, and practical support workflows.",
    problem:
      "Support agents often need to access scattered service information quickly while handling customer cases. The goal was to design a clearer internal-style portal that organizes service data, notes, and pricing information in one structured place.",
    role: "Frontend Developer · UI/UX · Workflow Design",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage API", "Vercel"],
    features: [
      "Service information organized by category and department",
      "Searchable content for faster access",
      "Admin-managed editing for service details and price rows",
      "Notes and eligibility rules for support workflows",
      "Demo-safe data structure to avoid exposing confidential information",
    ],
    learnings: [
      "Designing interfaces around real support workflows",
      "Handling editable service content and structured data",
      "Testing user flows and debugging frontend behavior",
    ],
    image: "/images/projects/service-portal-dashboard.png",
    gallery: [
      "/images/projects/service-portal-dashboard.png",
      "/images/projects/service-portal-search.png",
      "/images/projects/service-portal-category.png",
      "/images/projects/service-portal-eligibility.png",
      "/images/projects/service-portal-notes.png",
      "/images/projects/service-portal-admin-login.png",
      "/images/projects/service-portal-admin-workspace.png",
      "/images/projects/service-portal-recently-deleted.png",
    ],
    liveUrl: "https://customer-support-service-portal-dem.vercel.app/",
    githubUrl:
      "https://github.com/Ammal-khaled/customer-support-service-portal-demo",
    figmaUrl: "",
  },
  {
    id: 2,
    slug: "cancare",
    title: "CanCare",
    type: "Graduation Project",
    status: "In Progress",
    year: "2026",
    description:
      "A cancer patient management assistant app focused on appointments, medications, treatment workflows, reminders, publications, and patient support.",
    fullDescription:
      "CanCare is a cancer patient management assistant project designed to support patients, doctors, nurses, and admins through appointment management, medication workflows, treatment organization, reminders, publications, and community support.",
    problem:
      "Cancer care involves repeated appointments, medication schedules, role-based responsibilities, and sensitive patient needs. The goal was to create a system that makes these workflows clearer and easier to manage.",
    role: "UI/UX · Frontend Web Side · Requirements Analysis",
    tech: ["React", "Firebase", "UI/UX", "Requirements"],
    features: [
      "Patient, doctor, nurse, and admin role planning",
      "Appointment slots and reminders",
      "Medication workflow logic",
      "Publications and patient support concept",
      "Soft visual direction suitable for sensitive healthcare use",
    ],
    learnings: [
      "Planning role-based healthcare workflows",
      "Designing with accessibility and emotional sensitivity in mind",
      "Translating requirements into interface structure",
    ],
    image: "/images/projects/cancare.png",
    gallery: ["/images/projects/cancare.png"],
    liveUrl: "",
    githubUrl: "",
    figmaUrl: "",
  },
  {
    id: 3,
    slug: "sair",
    title: "SAIR",
    type: "Competition Project",
    status: "Prototype",
    year: "2025",
    description:
      "A smart accident information reporting system concept for reporting minor car accidents using location sharing, evidence upload, and digital report generation.",
    fullDescription:
      "SAIR is a smart accident information reporting system concept designed to help users report minor car accidents digitally using GPS location, evidence upload, document details, remote validation, and digital report generation.",
    problem:
      "Minor car accidents can involve delays, unclear documentation, and repeated manual reporting steps. The goal was to propose a smarter reporting flow that improves speed, structure, and validation.",
    role: "UI/UX · Product Concept · Digital Transformation",
    tech: ["Figma", "UI/UX", "User Flows", "Case Study"],
    features: [
      "GPS-based accident location sharing",
      "Photo and video evidence upload",
      "Document details and digital signature planning",
      "Police-side dashboard concept",
      "Risky-location analytics and patrol routing concept",
    ],
    learnings: [
      "Designing reporting flows for real-world scenarios",
      "Thinking about fraud prevention and validation",
      "Structuring a concept for both user and authority sides",
    ],
    image: "/images/projects/sair.png",
    gallery: ["/images/projects/sair.png"],
    liveUrl: "",
    githubUrl: "",
    figmaUrl: "",
  },
  {
    id: 4,
    slug: "government-app-redesign",
    title: "Government App Redesign",
    type: "UI/UX Prototype",
    status: "Prototype",
    year: "2025",
    description:
      "A government services mobile app redesign focused on improving service discovery, bilingual navigation, application steps, and user experience.",
    fullDescription:
      "A UI/UX redesign concept for a government services app, focused on making services easier to find, understand, apply for, and track. The design considers bilingual layout needs and mobile-first user behavior.",
    problem:
      "Government service apps can feel confusing when service discovery, application steps, and tracking are not clearly structured. The goal was to improve navigation and reduce user confusion.",
    role: "UI/UX Designer",
    tech: ["Figma", "User Flow", "Mobile UI", "Bilingual Design"],
    features: [
      "Service discovery flow",
      "Application steps and progress tracking",
      "Bilingual layout considerations",
      "Mobile-first interface planning",
    ],
    learnings: [
      "Designing clearer mobile service journeys",
      "Planning bilingual interface structure",
      "Preparing designs for prototype and handoff",
    ],
    image: "/images/projects/government-app.png",
    gallery: ["/images/projects/government-app.png"],
    liveUrl: "",
    githubUrl: "",
    figmaUrl: "",
  },
];
