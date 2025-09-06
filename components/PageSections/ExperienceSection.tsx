import Experiences from "@/consts/Experiences";
import React from "react";
import ExperienceCard from "../ExperienceCard";

const ExperienceSection = () => {
  return (
    <div className="flex pt-4 bg-blue-10 gap-4 flex-col px-4 max-w-7xl mx-auto">
      <p className="text-sm text-gray-600 pb-4">
        About 6 work experiences loaded (0.84 seconds)
      </p>
      {Experiences.map((experience) => (
        <ExperienceCard key={experience.company} experience={experience} />
      ))}
    </div>
  );
};

export default ExperienceSection;
