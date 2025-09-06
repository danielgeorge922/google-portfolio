import PageSearchBar from "@/components/PageSearchBar";
import AboutSection from "@/components/PageSections/AboutSection";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col h-full">
      <PageSearchBar />
      <div className="flex-1 pt-12 overflow-auto">
        <AboutSection />
      </div>
    </div>
  );
};

export default page;
