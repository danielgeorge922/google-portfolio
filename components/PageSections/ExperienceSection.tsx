import Experiences from "@/consts/Experiences";
import React from "react";
import ExperienceCard from "../ExperienceCard";

const ExperienceSection = () => {
  return (
    <div className="flex pt-4 bg-blue-10 gap-8 flex-col px-4 max-w-7xl mx-auto">
      <p className="text-sm text-gray-600">
        About {Experiences.length} work experiences loaded (0.84 seconds)
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Experiences.map((experience) => (
          <ExperienceCard key={experience.company} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
