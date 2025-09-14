import React from "react";
import ImageSection from "../ImageSection";
import Experiences from "@/consts/Experiences";
import UniversityCard from "./AboutSection/UniversityCard";
import ExperienceCard from "./AboutSection/ExperienceCard";
import Overview from "./AboutSection/Overview";
import BabyExperienceCard from "../BabyExperienceCard";
import { FiChevronRight } from "react-icons/fi";

const AboutSection = () => {
  return (
    <div className="flex gap-4 flex-col px-8 max-w-[1500px] mx-auto">
      <div className="flex justify-start items-center gap-4">
        <div className="flex flex-col">
          <h1 className="text-2xl">Daniel Martin George</h1>
          <p className="text-sm text-gray-600">Software Engineer</p>
        </div>
        <button className="bg-[#fef1ef] border cursor-pointer border-black text-grey-600 px-4 py-2 rounded-full hover:bg-[#fce8e6] transition">
          Overview
        </button>
      </div>

      <div className="flex gap-4">
        <ImageSection />

        <div className="flex flex-col gap-4 flex-1">
          <UniversityCard />
          <ExperienceCard />
        </div>
      </div>

      <div className="w-full border-b mt-4 border-black"></div>

      <div className="flex mb-8">
        <div className="flex flex-1 p-4 border-r border-gray-500">
          <div className="flex-col">
            <h1 className="text-[20px] text-gray-800">Top Experiences</h1>
            <div className="w-full border-b mt-4 border-gray-500"></div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {Experiences.slice(0, 4).map((exp, index) => (
                <BabyExperienceCard key={index} experience={exp} />
              ))}
            </div>

            <div className="flex items-center mt-4">
              <div className="flex-1 border-b border-black"></div>
              <button className="bg-gray-200 p-4 cursor-pointer rounded-2xl flex items-center gap-2">
                <h1>See All Experiences</h1>
                <FiChevronRight size={20} />
              </button>
              <div className="flex-1 border-b border-black"></div>
            </div>
          </div>
        </div>

        <Overview />
      </div>
    </div>
  );
};

export default AboutSection;
