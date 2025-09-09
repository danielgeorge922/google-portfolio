"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

interface ExperienceCardProps {
  experience: {
    company: string;
    role: string;
    duration: string;
    description: string[];
    logo: string;
  };
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleExpandClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="flex gap-4 bg-white rounded-lg p-8 border border-gray-200 hover:shadow-md transition-shadow duration-200 group cursor-pointer items-start"
      onClick={handleExpandClick}
    >
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
        {isOpen && (
          <div className="mt-2">
            <ul className="text-sm flex flex-col text-gray-700 leading-relaxed space-y-1">
              {experience.description.map((bullet, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-gray-700 mt-1">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <span className="inline-flex items-center rounded-2xl px-4 py-2 bg-gray-100 self-start shrink-0">
        {experience.duration}
      </span>

      {isOpen ? (
        <IoChevronUp className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors self-start" />
      ) : (
        <IoChevronDown className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors self-start" />
      )}
    </div>
  );
};

export default ExperienceCard;
