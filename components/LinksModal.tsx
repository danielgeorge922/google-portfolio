"use client";
import React, { useState, useRef, useEffect } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

const LinksModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const apps = [
    {
      name: "About Me",
      icon: "👨‍💻",
      url: "/about",
      description: "Learn about my background",
    },
    {
      name: "Projects",
      icon: "💻",
      url: "/projects",
      description: "View my development work",
    },
    {
      name: "Experience",
      icon: "💼",
      url: "/experience",
      description: "My professional journey",
    },
    {
      name: "Resume",
      icon: "📄",
      url: "/resume",
      description: "Download my resume",
    },
    {
      name: "Contact",
      icon: "📧",
      url: "/contact",
      description: "Get in touch with me",
    },
    {
      name: "GitHub",
      icon: "🐙",
      url: "https://github.com/danielgeorge922",
      description: "View my code repositories",
      external: true,
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://linkedin.com/in/danielgeorge922",
      description: "Professional network",
      external: true,
    },
    {
      name: "Skills",
      icon: "⚡",
      url: "/skills",
      description: "Technologies I work with",
    },
  ];

  const handleAppClick = (app: (typeof apps)[0]) => {
    if (app.external) {
      window.open(app.url, "_blank");
    } else {
      router.push(app.url);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Grid Icon Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        title="Daniel's Apps"
      >
        <BsFillGrid3X3GapFill size={20} className="text-gray-600" />
      </button>

      {/* Apps Modal */}
      {isOpen && (
        <div
          ref={modalRef}
          className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 w-80 z-50"
        >
          {/* Apps Grid */}
          <div className="p-4">
            <div className="grid grid-cols-3 gap-3">
              {apps.map((app) => (
                <button
                  key={app.name}
                  onClick={() => handleAppClick(app)}
                  className="flex flex-col items-center p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors group"
                  title={app.description}
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                    {app.icon}
                  </div>
                  <span className="text-xs text-gray-700 text-center font-medium">
                    {app.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LinksModal;
