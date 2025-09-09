import { Experience } from "@/types/Experience";

const Experiences: Experience[] = [
  {
    company: "Intradiem",
    role: "Software Engineering Intern",
    duration: "Jun 2025 - Aug 2025",
    description: [
      "Built a Java + Spring Boot ingestion service processing 8,000+ daily data points",
      "Automated pipelines with AWS SQS + EventBridge",
      "Migrated EC2 services to Kubernetes",
    ],
    images: ["/Daniel.png", "/Daniel2.png"],
    logo: "/logos/Intradiem.jpg",
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
  },
  {
    company: "Dream Team Engineering",
    role: "Software Captain",
    duration: "Aug 2025 - Present",
    description: [
      "Lead a 5-engineer team",
      "Maintain platforms for 230+ members",
      "Implement Grafana alerting with auto rollbacks",
      "Conduct weekly code reviews to lower defects",
    ],
    images: [],
    logo: "/logos/DTE.jpg",
  },
];

export default Experiences;
