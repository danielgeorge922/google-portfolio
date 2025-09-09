import { BsFillGrid3X3GapFill } from "react-icons/bs";
import {
  FiUser,
  FiBriefcase,
  FiFolder,
  FiZap,
  FiFileText,
  FiMail,
  FiGithub,
} from "react-icons/fi";


const LinksModalConsts = [
  {
    name: "About Me",
    icon: FiUser,
    url: "/about",
    description: "Learn about my background",
  },
  {
    name: "Projects",
    icon: FiFolder,
    url: "/projects",
    description: "View my development work",
  },
  {
    name: "Experience",
    icon: FiBriefcase,
    url: "/experience",
    description: "My professional journey",
  },
  {
    name: "Resume",
    icon: FiFileText,
    url: "/resume",
    description: "Download my resume",
  },
  {
    name: "Contact",
    icon: FiMail,
    url: "/contact",
    description: "Get in touch with me",
  },
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/danielgeorge922",
    description: "View my code repositories",
    external: true,
  },
  {
    name: "LinkedIn",
    icon: FiBriefcase,
    url: "https://linkedin.com/in/danielgeorge922",
    description: "Professional network",
    external: true,
  },
  {
    name: "Skills",
    icon: FiZap,
    url: "/skills",
    description: "Technologies I work with",
  },
];

export default LinksModalConsts;
