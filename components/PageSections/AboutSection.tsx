import React from "react";
import ImageSection from "../ImageSection";
import Link from "next/link";
import Image from "next/image";
import Experiences from "@/consts/Experiences";

const images = [
  "/logos/DTE.jpg",
  "/logos/UF.svg",
  "/logos/Intradiem.jpg",
  "/logos/Vetra.png",
];

const AboutSection = () => {
  return (
    <div className="flex bg-blue-10 gap-4 flex-col px-8 max-w-[1500px] mx-auto">
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

        {/* Right side cards */}
        <div className="flex flex-col gap-4 flex-1">
          {/* First Card */}
          <div className="bg-[var(--uf-blue)] flex flex-col rounded-2xl p-4 w-80">
            <h1 className="text-white text-2xl">University of Florida</h1>
            <p className="text-sm text-gray-300">B.S. Computer Science</p>
            <p className="text-sm text-gray-300 border-b border-[var(--uf-orange)] pb-2 mb-2">
              Minor: Public Health
            </p>
            <p className="text-white">Expected Graduation: May 2026</p>
          </div>

          {/* Second Card */}
          <Link
            href="/experience"
            className="bg-[#fef1ef] flex-1 rounded-2xl p-4 w-80 hover:scale-105 hover:p-6 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col gap-4">
              <p>Check out some of my work experience!</p>
              <div className="flex gap-2 justify-center flex-wrap">
                {images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`Logo ${index + 1}`}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ))}
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="w-full border-b mt-4 border-black"></div>

      <div className="flex mb-8">
        <div className="flex flex-1 p-4 border-r border-[#acafac]">
          <h1 className="text-[20px] text-gray-800">Top Experiences</h1>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {Experiences.map((exp, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg">
                {/* Add your experience content here */}
              </div>
            ))}
          </div>
        </div>

        {/* OVERVIEW (RIGHT) SECTION */}
        <div className="w-[37%] flex flex-col p-4">

          <h1 className="text-[20px]">Overview</h1>
          <p className="my-4 text-gray-600">
            I&apos;m a software engineer with experience in full-stack
            development. Currently, I&apos;m pursuing a B.S. in Computer Science
            at the University of Florida.
          </p>

          <h2 className="text-gray-800">
            <strong>Expected Graduation:</strong> May 2026
          </h2>
          <h2 className="text-gray-800 mt-2">
            <strong>Location:</strong> Gainesville, FL
          </h2>
          <h2 className="text-gray-800 mt-2">
            <strong>Email:</strong> danielgeorge922@gmail.com
          </h2>

          {/* PROFILES UNDERNEATH OVERVIEW SECTION */}
          <div className="w-full border-b mt-8 border-black"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
