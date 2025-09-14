import React from "react";
import { Experience } from "@/types/Experience";
import Image from "next/image";

// Experience {
//   company: string;
//   role: string;
//   duration: string;
//   description: string[];
//   images?: string[];
//   logo: string;
// }

const BabyExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <div className="bg-gray-100 p-4 flex rounded-2xl">
      {/* Left side - grows to fill space */}
      <div className="flex-1 flex flex-col gap-4 justify-center">
        
        <div className="">
          <h1 className="font-medium">{experience.company}</h1>
          <p className="text-sm text-gray-600">{experience.role}</p>
        </div>

        <div>
          <p className="text-sm text-gray-600">{experience.duration}</p>
        </div>

      </div>

      {/* Right side - fixed size logo */}
      <div className="flex items-center ml-2">
        <Image
          src={experience.logo}
          alt={experience.company}
          width={64}
          height={64}
          className="rounded-full w-16 h-16 object-cover"
        />
      </div>
    </div>
  );
};

export default BabyExperienceCard;
