import React from "react";
import Image from "next/image";
import { Experience } from "@/types/Experience";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="rounded-2xl p-4 bg-gray-50 flex flex-col items-center justify-center aspect-square min-h-[200px] overflow-hidden">
      {/* Company Logo - Always visible */}
      <div className="flex flex-col items-center gap-2 group-hover:mb-4">
        <Image
          src={experience.logo}
          alt={`${experience.company} logo`}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full object-cover transition-all duration-300 group-hover:w-20 group-hover:h-20"
        />
        <h3 className="font-semibold text-center text-sm group-hover:text-base transition-all duration-300">
          {experience.company}
        </h3>
      </div>

      {/* Expanded Content - Only visible on hover */}
      <div className="duration-300 flex flex-col gap-2 text-center max-w-md">
        <p className="text-sm font-medium text-[#4b67a3]">{experience.role}</p>
        <p className="text-xs text-gray-600">{experience.duration}</p>

        {experience.description && experience.description.length > 0 && (
          <ul className="text-xs text-gray-700 mt-2 space-y-1 text-left px-4">
            {experience.description.slice(0, 3).map((item, index) => (
              <li key={index} className="list-disc">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
