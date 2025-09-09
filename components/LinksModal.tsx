"use client";
import React, { useState, useRef, useEffect } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import LinksModalConsts from "@/consts/LinksModalConsts";

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

  const handleAppClick = (app: (typeof LinksModalConsts)[0]) => {
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
        className="p-2 rounded-full hover:bg-gray-100 cursor-pointer transition-colors"
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
              {LinksModalConsts.map((app) => (
                <button
                  key={app.name}
                  onClick={() => handleAppClick(app)}
                  className="flex flex-col items-center p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors group"
                  title={app.description}
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                    <app.icon size={24} />
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
