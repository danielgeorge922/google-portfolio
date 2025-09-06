import PageSearchBar from "@/components/PageSearchBar";
import SkillsSection from "@/components/PageSections/SkillsSection";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col h-full">
      <PageSearchBar />
      <div className="flex-1 overflow-auto">
        <SkillsSection />
      </div>
    </div>
  );
};

export default page;
