"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const PfpWithModal = ({ 
  size = "w-8 h-8", 
  onClick 
}: { 
  size?: string;
  onClick?: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

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

  const handleEmailClick = () => {
    window.location.href = "mailto:danielgeorge922@gmail.com";
  };

  const handleGithubClick = () => {
    window.open("https://github.com/danielgeorge922", "_blank");
  };

  return (
    <div className="relative">
      {/* Profile Picture Button */}
      <button
        onClick={onClick || (() => setIsOpen(true))}
        className={`${size} flex items-center rounded-full cursor-pointer hover:ring-2 hover:ring-blue-200 transition-all`}
      >
        <Image
          src="/Daniel.png"
          alt="Daniel George"
          width={32}
          height={32}
          className="w-full h-full rounded-full object-cover"
        />
      </button>

      {/* Modal Dropdown */}
      {isOpen && (
        <div
          ref={modalRef}
          className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-2xl border border-gray-300 w-80 z-50"
          style={{ zIndex: 1000000000 }}
        >
          {/* Header */}
          <div className="px-6 py-4 text-center border-b border-gray-200 relative">
            <div className="text-sm text-gray-700 mb-2">
              danielgeorge922@gmail.com
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              ✕
            </button>
          </div>

          {/* Profile Section */}
          <div className="px-6 py-6 text-center">
            <div className="w-20 h-20 mx-auto mb-4 relative">
              <Image
                src="/Daniel.png"
                alt="Daniel George"
                width={80}
                height={80}
                className="w-full h-full rounded-full object-cover border-4 border-white shadow-sm"
              />
            </div>
            <h3 className="text-xl font-normal text-gray-900 mb-1">
              Hi, Daniel!
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              danielgeorge922@gmail.com
            </p>
            <p className="text-sm text-gray-600">please hire me!</p>
          </div>

          {/* Action Buttons */}
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleEmailClick}
                className="px-4 cursor-pointer py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-md transition-colors font-medium"
              >
                Email
              </button>
              <button
                onClick={handleGithubClick}
                className="px-4 py-2 cursor-pointer text-sm text-blue-600 hover:bg-blue-50 rounded-md transition-colors font-medium"
              >
                GitHub
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PfpWithModal;
