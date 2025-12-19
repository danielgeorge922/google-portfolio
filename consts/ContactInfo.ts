import { SiGithub, SiLinkedin, SiGmail, SiInstagram } from "react-icons/si";

export const contacts = [
  {
    name: "Email",
    icon: SiGmail,
    url: "/contact",
    description: "Get in touch with me",
    hoverColor: "group-hover:text-red-500", // Google red
  },
  {
    name: "GitHub",
    icon: SiGithub,
    url: "https://github.com/danielgeorge922",
    description: "View my code repositories",
    external: true,
    hoverColor: "group-hover:text-black", // Black
  },
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    url: "https://linkedin.com/in/danielgeorge922",
    description: "Professional network",
    external: true,
    hoverColor: "group-hover:text-blue-600", // LinkedIn blue
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    url: "https://instagram.com/danielgeorge347",
    description: "Personal photos and updates",
    external: true,
    hoverColor: "group-hover:text-pink-500", // Instagram gradient approximation
  },
];