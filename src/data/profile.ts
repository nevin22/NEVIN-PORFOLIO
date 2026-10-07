export const profile = {
  name: "Nevin Gabriel Prequencia",
  shortName: "Nevin",
  role: "Full-Stack Developer",
  location: "Malaybalay, Northern Mindanao, Philippines",
  email: "gabrielnevin@gmail.com",
  linkedin: "https://www.linkedin.com/in/nevingabriel",
  linkedinLabel: "linkedin.com/in/nevingabriel",
  github: "https://github.com/nevin22",
  githubLabel: "github.com/nevin22",
  resumeHref: "/Nevin-Gabriel-Prequencia-Resume.pdf",
  availability: "Open to work",
  summary:
    "Full-stack developer working in React, TypeScript, and Node.js for the web, and React Native for mobile, with real-time systems on MQTT and Redis and cloud delivery on Azure and GCP.",
  howIWork:
    "I take a feature from the requirement through the interface, the API, and deployment, then stay with it in production: releases, bugs, and the next change. That is the kind of ownership a small team needs.",
};

export const buildPhrases = ["real-time systems", "AI features", "mobile apps"] as const;

export const highlights = [
  "React",
  "TypeScript",
  "Node.js",
  "Vercel AI SDK",
  "Next.js",
  "Express",
  "MQTT",
  "Redis",
  "React Native",
  "PostgreSQL",
  "Azure",
  "GCP",
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
      "Take features from client requirements through the React and TypeScript interface and the Node.js and Express API, then support them in production.",
      "Stream live device and sensor data over MQTT into dashboards, and use Redis for caching and backend workflows.",
      "Post-process demographic data and vehicle attributes in Databricks.",
      "Write Python scripts for broker subscriptions and related tasks.",
      "Deploy and run those systems on Azure and GCP, covering hosting, messaging, and data processing.",
      "Own the release path: CI/CD, production debugging, and root-cause analysis when something breaks.",
    ],
  },
  {
    company: "Agila Innovation",
    role: "Mobile Software Developer",
    location: "Cagayan de Oro City, Philippines",
    dates: "March 2018 — February 2021",
    current: false,
    points: [
      "Designed and shipped React Native apps, including Visitour and Streetby, from the requirement through the interface and the release.",
      "Tested builds before they went out, and worked with performance engineers on bottlenecks.",
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
    title: "AI",
    lead: "LLM integration",
    items: ["Vercel AI SDK", "Tool-calling agents", "RAG implementation"],
    note: "",
  },
  {
    title: "Frontend",
    lead: "React",
    items: ["Next.js", "TypeScript"],
  },
  {
    title: "Backend",
    lead: "Node.js",
    items: ["Express.js", "Python", "REST APIs"],
  },
  {
    title: "Real-time",
    lead: "MQTT",
    items: ["Redis", "WebSocket"],
  },
  {
    title: "Cloud",
    lead: "Azure",
    items: ["GCP", "AWS", "Docker", "CI/CD", "Pub/Sub"],
  },
  {
    title: "Data",
    lead: "PostgreSQL",
    items: ["SQL", "MongoDB", "Snowflake", "Databricks"],
  },
  {
    title: "Mobile",
    lead: "React Native",
    items: ["Xcode", "Android Studio", "Ionic"] as string[],
  }
];

export const workNote = "These screenshots are client work, and the code is not public.";

export type WorkItem = {
  title: string;
  summary: string;
  image: string;
  tags: string[];
  nda?: boolean;
  github?: string;
  demo?: string;
};

export const work: WorkItem[] = [
  {
    title: "Streetby",
    summary:
      "Streetby is a lifestyle platform where merchants and consumers share a marketplace in one mobile app. It was built with React Native, and Node.js with Hapi.js on the backend, with PayMongo as the payment gateway.",
    image: "/work/streetby.jpg",
    tags: ["React Native", "Node.js", "Hapi.js", "PayMongo"],
  },
  {
    title: "Streetby",
    summary:
      "Merchant ordering screen inside Streetby. It lets people order food from more than one merchant. Much like food panda. Though streetby offers more than just food.",
    image: "/work/streetby-order.png",
    tags: ["React Native", "Node.js"],
  },
  {
    title: "Visitour",
    summary:
      "Visitour is an all-in-one app for tourists, built with React Native and a Node.js and Express backend, with PesoPay as the payment gateway. People can book places to stay, book trips, and see what there is to explore wherever they are.",
    image: "/work/visitour.png",
    tags: ["React Native", "Node.js", "Express", "PesoPay"],
  },
  {
    title: "User management",
    summary:
      "This admin panel was built with React and Ant Design. It manages user roles, site access, and more in one place, and it supports multi-tenancy.",
    image: "/work/user-management.png",
    tags: ["React", "Ant Design"],
    nda: true,
  },
  {
    title: "Coatro targeting",
    summary:
      "Signage campaigns had to hit the right displays, on a schedule, with weighted segments. I built the React screens and the Node.js services for strategy, displays, schedule, and segment weight.",
    image: "/work/coatro.png",
    tags: ["React", "Node.js", "Tailwind CSS"],
    nda: true,
  },
  {
    title: "Device monitoring",
    summary:
      "This device monitoring tool was built with React, Tailwind, and Material UI. It tracks device and sensor data across multiple networks.",
    image: "/work/device-monitoring.png",
    tags: ["React", "Tailwind", "Material UI"],
    nda: true,
  },
  {
    title: "Device resource history",
    summary:
      "Device resource history is a feature of the device monitoring tool. It lets people look back at a device’s disk, CPU, and memory usage, and it shows the pain points, such as when the device was down or in a critical state, so those moments are easier to spot.",
    image: "/work/device-history.png",
    tags: ["React", "Tailwind", "Material UI"],
    nda: true,
  },
];

export const nav = [
  { id: "overview", label: "Overview" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;
