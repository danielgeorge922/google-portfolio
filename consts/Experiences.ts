import { Experience } from "@/types/Experience";

const Experiences: Experience[] = [
  {
    company: "Meta",
    role: "Data Engineering Intern",
    duration: "May 2026 - Aug 2026",
    description: ["Incoming Summer 2026 Internship"],
    images: ["/Daniel.png", "/Daniel2.png"],
    logo: "/logos/Meta.png",
    status: "incoming",
  },
  {
    company: "Intradiem",
    role: "Software Engineering Intern",
    duration: "May 2025 - Aug 2025",
    description: [
      "Built a Java + Spring Boot ingestion service processing 8,000+ daily data points",
      "Automated pipelines with AWS SQS + EventBridge",
      "Migrated EC2 services to Kubernetes",
    ],
    images: ["/Daniel.png", "/Daniel2.png"],
    logo: "/logos/Intradiem.jpg",
    status: "previous",
  },
  {
    company: "University of Florida College of Medicine",
    role: "Software Developer",
    duration: "Jun 2024 - Jun 2025 | Aug 2025 - Present",
    description: [
      "Built and deployed 13+ internal tools with React + Node.js",
      "Co-architected Snowflake data warehouse",
      "Engineered ML classification systems with Llama 3.1",
    ],
    images: [],
    logo: "/logos/UF.svg",
    status: "current",
  },
  {
    company: "LemasLab, University of Florida",
    role: "Undergraduate Research Assistant",
    duration: "Aug 2023 - Sep 2025",
    description: [
      "Debugged TensorFlow CNNs",
      "Built Docker + CUDA + SLURM pipelines on HiPerGator",
      "Developed a React + FastAPI job platform",
      "Created NLP models on clinical notes",
    ],
    images: [],
    logo: "/logos/UF.svg",
    status: "previous",
  },
  {
    company: "University of Florida",
    role: "Undergraduate Research Intern",
    duration: "Aug 2024 - Dec 2024",
    description: [
      "Developed network analysis models in R pinpointing high-risk frosty pod disease zones in the Caribbean",
      "Worked under PI: Karen Garrett",
      "Skills: R",
    ],
    images: ["/images/cacao-team.jpg", "/images/research-symposium.jpg"],
    logo: "/logos/UF.svg",
    status: "previous",
  },
  {
    company: "Vetra (tryvetra.ai)",
    role: "Lead Software Engineer",
    duration: "Sep 2024 - May 2025",
    description: [
      "Led development of AI-powered patent search platform using Next.js + TypeScript + AWS S3",
      "Automated embedding pipeline with OpenAI + Pinecone",
      "Built CI/CD with AWS ECS",
    ],
    images: [],
    logo: "/logos/Vetra.png",
    status: "previous",
  },
  {
    company: "Dream Team Engineering",
    role: "Software Captain",
    duration: "Aug 2025 - Present",
    description: [
      "Lead a 5-engineer team",
      "Develop recruitment platform for 230+ members",
      "Conduct weekly code reviews to lower defects",
    ],
    images: [],
    logo: "/logos/DTE.jpg",
    status: "previous",
  },
];

export default Experiences;
