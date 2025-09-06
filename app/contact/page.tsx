import PageSearchBar from "@/components/PageSearchBar";
import ContactSection from "@/components/PageSections/ContactSection";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col h-full">
      <PageSearchBar />
      <div className="flex-1 overflow-auto">
        <ContactSection />
      </div>
    </div>
  );
};

export default page;
