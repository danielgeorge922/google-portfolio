// /consts/SearchResults.ts
import { SearchResult } from "@/types/SearchResultsTypes";
import { FiUser, FiFolder, FiBriefcase, FiFileText, FiMail, FiZap } from "react-icons/fi";

const SearchResults: SearchResult[] = [
  {
    id: "about",
    title: "About Me",
    description: "Learn more about Daniel George - my background, skills, and interests",
    url: "/about",
    icon: FiUser,
    category: "page",
  },
  {
    id: "projects",
    title: "Projects",
    description: "View my latest development projects and technical work",
    url: "/projects",
    icon: FiFolder,
    category: "page",
  },
  {
    id: "experience",
    title: "Experience",
    description: "My professional experience and work history",
    url: "/experience",
    icon: FiBriefcase,
    category: "experience",
  },
  {
    id: "resume",
    title: "Resume",
    description: "Download or view my current resume",
    url: "/resume",
    icon: FiFileText,
    category: "page",
  },
  {
    id: "contact",
    title: "Contact",
    description: "Get in touch with me for opportunities or collaborations",
    url: "/contact",
    icon: FiMail,
    category: "contact",
  },
  {
    id: "skills",
    title: "Skills & Technologies",
    description: "Programming languages, frameworks, and tools I work with",
    url: "/skills",
    icon: FiZap,
    category: "page",
  },
];

export default SearchResults;
