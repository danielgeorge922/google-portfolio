import PageSearchBar from "@/components/PageSearchBar";
import ResumeSection from "@/components/PageSections/ResumeSection";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col h-full">
      <PageSearchBar />
      <div className="flex-1 overflow-auto">
        <ResumeSection />
      </div>
    </div>
  );
};

export default page;
