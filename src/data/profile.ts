/**
 * Portfolio content.
 *
 * To feature a real project screenshot:
 * 1. Put the image in public/work (png or jpg).
 * 2. Change that slide's `image` path, for example "/work/dashboard.png".
 * 3. Update the title, summary, and tags.
 */

export const profile = {
  name: "Nevin Gabriel Prequencia",
  shortName: "Nevin",
  role: "Full-Stack Developer",
  location: "Malaybalay, Northern Mindanao, Philippines",
  email: "gabrielnevin@gmail.com",
  phoneDisplay: "0926 896 0194",
  phoneHref: "tel:+639268960194",
  linkedin: "https://www.linkedin.com/in/nevingabriel",
  linkedinLabel: "linkedin.com/in/nevingabriel",
  resumeHref: "/Nevin-Gabriel-Prequencia-Resume.pdf",
  availability: "Open to work",
  summary:
    "I build web applications with React, TypeScript, and Node.js, and stay with them through APIs, databases, cloud deployment, CI/CD, and production support. My recent work also covers real-time messaging, React Native, and AI features such as LLM integration and tool-calling agents.",
};

export const highlights = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Express",
  "React Native",
  "PostgreSQL",
  "MQTT",
  "Redis",
  "Azure",
  "GCP",
  "Vercel AI SDK",
];

export const stats = [
  { value: "8 yrs", label: "Building software", note: "Since 2018" },
  { value: "React", label: "TypeScript & Node", note: "Web applications" },
  { value: "MQTT", label: "Real-time systems", note: "Redis workflows" },
  { value: "Azure", label: "GCP and AWS", note: "Cloud & CI/CD" },
];

export const jobs = [
  {
    company: "MeldCX",
    role: "Full-Stack Developer",
    location: "Cagayan de Oro City, Philippines",
    dates: "April 2021 — Present",
    current: true,
    points: [
      "Build and maintain full-stack web applications with React, TypeScript, JavaScript, Node.js, and Express, including reusable interfaces, backend services, and APIs.",
      "Integrate MQTT for real-time device and system data, and use Redis for caching, messaging, and backend workflows.",
      "Ship and support applications on Microsoft Azure and Google Cloud Platform, including hosting, data processing, messaging, and system integrations.",
      "Maintain CI/CD pipelines and production systems: releases, debugging, and root-cause analysis.",
      "Work with clients, project managers, and developers to turn requirements into technical design and working software.",
    ],
  },
  {
    company: "Agila Innovation",
    role: "Mobile Software Developer",
    location: "Cagayan de Oro City, Philippines",
    dates: "March 2018 — February 2021",
    current: false,
    points: [
      "Designed, built, and maintained React Native applications from requirements through features, interfaces, and release.",
      "Tested and troubleshot builds before deployment, and worked with developers and performance engineers on bottlenecks and supportability.",
    ],
  },
  {
    company: "NEC Telecom",
    role: "Intern — Quality Assurance Engineer",
    location: "Cebu City, Philippines",
    dates: "October 2017 — March 2018",
    current: false,
    points: [
      "Wrote and ran test cases for manual software testing, and kept technical documentation up to date.",
      "Identified functional issues and proposed improvements around usability, functionality, and performance.",
    ],
  },
];

export const education = {
  school: "Bukidnon State University",
  place: "Malaybalay, Bukidnon",
  credential: "Bachelor of Science in Information Technology",
  year: "2018",
};

export const skillGroups = [
  {
    title: "Frontend",
    lead: "React",
    items: ["Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Vite"],
  },
  {
    title: "Backend",
    lead: "Node.js",
    items: ["Express.js", "Hapi.js", "REST APIs", "GraphQL"],
  },
  {
    title: "Mobile",
    lead: "React Native",
    items: ["Xcode", "Android Studio"],
  },
  {
    title: "Real-time",
    lead: "MQTT",
    items: ["Redis", "Pub/Sub"],
  },
  {
    title: "Cloud",
    lead: "Azure & GCP",
    items: ["AWS", "DigitalOcean", "CI/CD"],
  },
  {
    title: "Data",
    lead: "PostgreSQL",
    items: ["SQL", "MongoDB", "Firebase", "Snowflake", "Databricks"],
  },
  {
    title: "AI",
    lead: "LLM integration",
    items: ["OpenAI", "Anthropic Claude", "Vercel AI SDK", "Prompt engineering", "Tool-calling agents"],
  },
  {
    title: "Tools",
    lead: "Git",
    items: ["CI/CD pipelines", "SVN", "Python", "Cursor", "GitHub Copilot"],
  },
];

export const workNote = "";

export const work = [
  {
    title: "Visitour",
    summary:
      "One of my first two mobile apps. People browse attractions, beaches, mountains, and cities. Built with React Native and a Node.js backend.",
    image: "/work/visitour.png",
    tags: ["React Native", "Node.js"],
  },
  {
    title: "Streetby",
    summary:
      "The other of my first two mobile apps. On-demand delivery, parcels, grocery, and personal shopping. React Native on the app, Node.js on the backend.",
    image: "/work/streetby.png",
    tags: ["React Native", "Node.js"],
  },
  {
    title: "Streetby ordering",
    summary:
      "Merchant ordering inside Streetby. Categories, item quantities, and a cart before checkout, on the same React Native and Node.js stack.",
    image: "/work/streetby-order.png",
    tags: ["React Native", "Node.js"],
  },
  {
    title: "User management",
    summary:
      "After the mobile apps, full-stack web work. This admin screen covers users, roles, and site access, with React on the front and Node.js for the API.",
    image: "/work/user-management.png",
    tags: ["React", "Node.js"],
  },
  {
    title: "Coatro targeting",
    summary:
      "Signage campaigns in Coatro. React screens for the strategy, which displays it runs on, the schedule, and how segments are weighted. Node.js on the backend.",
    image: "/work/coatro.png",
    tags: ["React", "Node.js"],
  },
  {
    title: "Device monitoring",
    summary:
      "Live view of edge devices and sensors. React dashboards, MQTT clients for the device data, and Databricks for post-processing before it hits the screen.",
    image: "/work/device-monitoring.png",
    tags: ["React", "MQTT", "Databricks"],
  },
  {
    title: "Device resource history",
    summary:
      "Drill-in for one device: CPU, memory, and disk over a day. Same MQTT client setup and Databricks post-processing as the monitoring board.",
    image: "/work/device-history.png",
    tags: ["React", "MQTT", "Databricks"],
  },
];

export const nav = [
  { id: "overview", label: "Overview" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;
