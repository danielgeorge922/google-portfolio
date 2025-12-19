import React from "react";
import Image from "next/image";
import { Experience } from "@/types/Experience";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="relative rounded-2xl p-4 bg-gray-100 flex flex-col items-center justify-center aspect-square min-h-[200px] overflow-hidden">
      {/* Status badge */}
      {experience.status !== "previous" && (
        <span
          className={`absolute top-3 right-3 text-xs font-medium px-2 py-0.5 rounded-full ${
            experience.status === "current"
              ? "bg-green-100 text-green-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {experience.status === "current" ? "Current" : "Incoming"}
        </span>
      )}

      <div className="flex flex-col items-center gap-2">
        <Image
          src={experience.logo}
          alt={`${experience.company} logo`}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full object-cover"
        />
        <h3 className="text-xl text-center font-medium">{experience.company}</h3>
      </div>

      <div className="flex flex-col gap-1 text-center mt-2">
        <p className="text-sm font-medium text-gray-700">{experience.role}</p>
        <p className="text-xs text-gray-500">{experience.duration}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
