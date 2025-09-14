import React from "react";

const UniversityCard = () => {
  return (
    <div className="bg-[var(--uf-blue)] flex flex-col rounded-2xl p-4 w-full lg:w-80">
      <h1 className="text-white text-2xl">University of Florida</h1>
      <p className="text-sm text-gray-300">B.S. Computer Science</p>
      <p className="text-sm text-gray-300 border-b border-[var(--uf-orange)] pb-2 mb-2">
        Minor: Public Health
      </p>
      <p className="text-white">Expected Graduation: May 2026</p>
    </div>
  );
};

export default UniversityCard;