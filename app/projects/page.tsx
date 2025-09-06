import PageSearchBar from "@/components/PageSearchBar";
import ProjectSection from "@/components/PageSections/ProjectSection";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col h-full">
      <PageSearchBar />
      <div className="flex-1 overflow-auto">
        <ProjectSection  />
      </div>
    </div>
  );
};

export default page;
