import PageSearchBar from "@/components/PageSearchBar";
import ExperienceSection from "@/components/PageSections/ExperienceSection";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col h-full">
      <PageSearchBar />
      <div className="flex-1 overflow-auto">
        <ExperienceSection />
      </div>
    </div>
  );
};
export default page;
