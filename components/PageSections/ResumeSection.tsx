import React from "react";

const ResumeSection = () => {
  return (
    <div className="flex pt-4 bg-blue-10 gap-4 flex-col px-4 max-w-7xl mx-auto">
      <p className="text-sm text-gray-600 pb-4">Resume (PDF loaded)</p>
      <iframe
        src="/resume.pdf"
        width="100%"
        height="800px"
        title="Daniel Martin George Resume"
      />
    </div>
  );
};

export default ResumeSection;
         