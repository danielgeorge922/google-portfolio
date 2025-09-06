"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { downloadResume } from "@/utils/base-utils";
import { IoMdDocument } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";

const MainButtons = () => {
  const router = useRouter();

  const handleDownloadResume = () => {
    downloadResume();
  };

  const handleViewProjects = () => {
    router.push("/projects");
  };

  return (
    <div className="flex gap-4 justify-center mt-8">
      <button
        onClick={handleDownloadResume}
        className="bg-[#f8f9fa] hover:bg-gray-100 border cursor-pointer border-[#f8f9fa] hover:border-[#dadce0] text-[#3c4043] px-6 py-3 rounded transition-all duration-100 font-medium flex items-center hover:shadow-sm"
      >
        <IoMdDocument className="mr-3" size={18} />
        Download Resume
      </button>
      <button
        onClick={handleViewProjects}
        className="bg-[#f8f9fa] hover:bg-gray-100 cursor-pointer border border-[#f8f9fa] hover:border-[#dadce0] text-[#3c4043] px-6 py-3 rounded transition-all duration-100 font-medium flex items-center hover:shadow-sm"
      >
        <SiMinutemailer className="mr-3" size={18} />
        Email me
      </button>
    </div>
  );
};

export default MainButtons;