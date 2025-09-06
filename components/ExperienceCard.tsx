import React from "react";
import Image from "next/image";

interface ExperienceCardProps {
  experience: {
    company: string;
    role: string;
    duration: string;
    description: string;
    logo: string;
  };
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className="flex gap-4 bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <Image
        src={experience.logo}
        alt={`${experience.company} logo`}
        width={48}
        height={48}
        className="w-12 h-12 rounded-full object-cover border border-gray-100"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {experience.role}
        </h3>
        <p className="text-sm font-medium text-[var(--uf-blue)] mb-1">
          {experience.company}
        </p>
        <p className="text-xs text-gray-500 mb-2">{experience.duration}</p>
        <p className="text-sm text-gray-700 leading-relaxed">
          {experience.description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
