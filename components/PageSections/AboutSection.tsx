"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ImageSection from "../ImageSection";
import Experiences from "@/consts/Experiences";
import UniversityCard from "./AboutSection/UniversityCard";
import ExperienceCard from "./AboutSection/ExperienceCard";
import Overview from "./AboutSection/Overview";
import BabyExperienceCard from "../BabyExperienceCard";
import { FiChevronRight } from "react-icons/fi";
import FaqSection from "../FaqSection";
import Links from "../Links";

const AboutSection = () => {
  const router = useRouter();

  return (
    <div className="flex gap-4 flex-col px-4 md:px-8 max-w-[1500px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4">
        <div className="flex flex-col">
          <h1 className="text-xl sm:text-2xl">Daniel Martin George</h1>
          <p className="text-sm text-gray-600">Software Engineer</p>
        </div>
        <button className="bg-[#fef1ef] border cursor-pointer border-black text-grey-600 px-4 py-2 rounded-full hover:bg-[#fce8e6] transition">
          Overview
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex justify-center lg:justify-start">
          <ImageSection />
        </div>

        <div className="grid grid-cols-2 gap-4 w-full max-w-xl mx-auto lg:flex lg:flex-col lg:flex-1 lg:items-start lg:max-w-none lg:mx-0">
          <UniversityCard />
          <ExperienceCard />
        </div>
      </div>

      <div className="w-full border-b mt-4 border-black"></div>

      <div className="flex flex-col xl:flex-row mb-8">
        <div className="flex flex-1 p-2 md:p-4 xl:border-r border-gray-500">
          <div className="flex-col w-full">
            <h1 className="text-lg md:text-[20px] text-gray-800">
              Top Experiences
            </h1>
            
            <div className="w-full border-b mt-4 border-gray-500"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {Experiences.slice(0, 4).map((exp, index) => (
                <BabyExperienceCard key={index} experience={exp} />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center mt-4 gap-2">
              <div className="flex-1 border-b border-gray-500 hidden sm:block"></div>
              <button
                onClick={() => router.push("/experience")}
                className="bg-gray-200 p-3 md:p-4 cursor-pointer rounded-2xl flex items-center gap-2 text-sm md:text-base"
              >
                <h1>See All Experiences</h1>
                <FiChevronRight size={20} />
              </button>
              <div className="flex-1 border-b border-gray-500 hidden sm:block"></div>
            </div>
            
            <div className="mt-4">
              <Links />
            </div>

            <div className="mt-8">
              <FaqSection />
            </div>

          </div>
        </div>

        <Overview />
      </div>
    </div>
  );
};

export default AboutSection;
