import { Experience } from "@/types/Experience";

const Experiences: Experience[] = [
  {
    company: "Intradiem",
    role: "Software Engineering Intern",
    duration: "Jun 2025 - Aug 2025",
    description:
      "Built a Java + Spring Boot ingestion service processing 8,000+ daily data points, automated pipelines with AWS SQS + EventBridge, and migrated EC2 services to Kubernetes.",
    logo: "/logos/Intradiem.jpg",
  },
  {
    company: "University of Florida College of Medicine",
    role: "Software Developer",
    duration: "Jun 2024 - Jun 2025 | Aug 2025 - Present",
    description:
      "Built and deployed 13+ internal tools with React + Node.js, co-architected Snowflake data warehouse, and engineered ML classification systems with Llama 3.1.",
    logo: "/logos/UF.svg",
  },
  {
    company: "LemasLab, University of Florida",
    role: "Undergraduate Research Assistant",
    duration: "Aug 2023 - Sep 2025",
    description:
      "Debugged TensorFlow CNNs, built Docker + CUDA + SLURM pipelines on HiPerGator, developed a React + FastAPI job platform, and created NLP models on clinical notes.",
    logo: "/logos/UF.svg",
  },
  {
    company: "Vetra (tryvetra.ai)",
    role: "Lead Software Engineer",
    duration: "Sep 2024 - May 2025",
    description:
      "Led development of AI-powered patent search platform using Next.js + TypeScript + AWS S3, automated embedding pipeline with OpenAI + Pinecone, and built CI/CD with AWS ECS.",
    logo: "/logos/Vetra.png",
  },
  {
    company: "Dream Team Engineering",
    role: "Software Captain",
    duration: "Aug 2025 - Present",
    description:
      "Lead a 5-engineer team, maintain platforms for 230+ members, implement Grafana alerting with auto rollbacks, and conduct weekly code reviews to lower defects.",
    logo: "/logos/DTE.jpg",
  },
];

export default Experiences;
