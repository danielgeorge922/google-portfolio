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
        className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors gap-2 font-medium flex items-center"
      >
        <IoMdDocument className="mr-[12px]" size={18} />
        Download Resume
      </button>
      <button
        onClick={handleViewProjects}
        className="bg-[#34a853] gap-2 cursor-pointer hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center"
      >
        <SiMinutemailer className="mr-2" size={18} />
        Email me
      </button>
    </div>
  );
};

export default MainButtons;
