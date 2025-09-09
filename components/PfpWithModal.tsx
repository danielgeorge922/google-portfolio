"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const PfpWithModal = ({ size = "w-8 h-8" }: { size?: string }) => {
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

  return (
    <div className="relative">
      {/* Profile Picture Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`${size} rounded-full cursor-pointer hover:ring-2 hover:ring-blue-200 transition-all`}
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
          className="absolute top-full right-0 mt-2 bg-green-100 rounded-2xl shadow-2xl w-80 z-50"
        >
          {/* Header */}
          <div className="px-6 py-4 text-center border-b border-gray-600">
            <div className="text-sm text-gray-700 mb-2">
              danielgeorge922@gmail.com
            </div>
            <button className="absolute top-4 right-4 text-gray-400 hover:text-white">
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
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-normal mb-4">Hi, I&apos;m Daniel!</h3>
          </div>

          <div className="px-6 py-3 text-xs text-gray-700 text-center border-t border-gray-600">
            <span className="mr-4 cursor-pointer">
              Email
            </span>
            <span className=" cursor-pointer">
              Github
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PfpWithModal;
