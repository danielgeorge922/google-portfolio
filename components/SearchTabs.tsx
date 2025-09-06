"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  FiUser,
  FiFolder,
  FiBriefcase,
  FiFileText,
  FiMail,
  FiZap,
} from "react-icons/fi";

interface SearchTabsProps {
  pathname: string;
}

const SearchTabs = ({ pathname }: SearchTabsProps) => {
  const router = useRouter();

  const tabs = [
    { name: "About", path: "/about", icon: FiUser },
    { name: "Experience", path: "/experience", icon: FiBriefcase },
    { name: "Projects", path: "/projects", icon: FiFolder },
    { name: "Skills", path: "/skills", icon: FiZap },
    { name: "Resume", path: "/resume", icon: FiFileText },
    { name: "Contact", path: "/contact", icon: FiMail },
  ];

  const handleTabClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex px-12">
      {tabs.map((tab) => {
        const isActive = pathname === tab.path;
        const IconComponent = tab.icon;

        return (
          <button
            key={tab.path}
            onClick={() => handleTabClick(tab.path)}
            className={`flex items-center cursor-pointer gap-2 px-4 py-3 border-b-2 transition-all duration-200 ${
              isActive
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
            }`}
          >
            <IconComponent size={16} />
            <span className="text-sm font-medium">{tab.name}</span>
          </button>
        );
      })}
    </div>
  );
};

export default SearchTabs;