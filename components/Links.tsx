import React from "react";
import Link from "next/link";
import {
  FiUser,
  FiFolder,
  FiBriefcase,
  FiFileText,
  FiMail,
  FiZap,
} from "react-icons/fi";

type LinkItem = {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  url: string;
  description: string;
  external?: boolean;
};

const links: LinkItem[] = [
  { name: "About", url: "/about", icon: FiUser, description: "General information about me and my background!" },
  { name: "Experience", url: "/experience", icon: FiBriefcase, description: "My work experience and professional journey" },
  { name: "Projects", url: "/projects", icon: FiFolder, description: "Software projects and applications I've built" },
  { name: "Skills", url: "/skills", icon: FiZap, description: "Technical skills and programming languages I know" },
  { name: "Resume", url: "/resume", icon: FiFileText, description: "Download my professional resume and CV" },
  { name: "Contact", url: "/contact", icon: FiMail, description: "Get in touch with me for opportunities and collaboration" },
];

function hostnameOrPath(url: string) {
  try {
    const u = new URL(url);
    return u.hostname.replace(/^www\./, "");
  } catch {
    // internal route
    return "danielgeorge.com";
  }
}

export default function Links() {
  return (
    <div className="w-full max-w-3xl">
      <ul className="space-y-6">
        {links.map((item) => {
          const Icon = item.icon;
          const host = hostnameOrPath(item.url);

          const Title = (
            <span className="text-[#1a0dab] hover:underline text-[18px] leading-snug">
              {item.name}
            </span>
          );

          const Snippet = (
            <p className="text-[#4d5156] text-[14px] leading-6 mt-1">
              {item.description}
            </p>
          );

          return (
            <li key={item.name} className="group">
              {/* Gray meta/header line (favicon + host + subtle dot) */}
              <div className="flex items-center gap-3 text-[#70757a] text-[12px]">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full p-1.5 bg-gray-100">
                  <Icon size={16} className="align-middle" />
                </span>
                <span>{host}</span>
                <span className="select-none">›</span>
                <span className="truncate">{item.name.toLowerCase()}</span>
              </div>

              {/* Title link (blue) */}
              {item.external ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {Title}
                </a>
              ) : (
                <Link href={item.url} className="block">
                  {Title}
                </Link>
              )}

              {/* Snippet */}
              {Snippet}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
