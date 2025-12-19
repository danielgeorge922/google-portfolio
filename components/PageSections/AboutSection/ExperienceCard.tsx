import React from "react";
import Link from "next/link";
import Image from "next/image";

const images = [
  "/logos/DTE.jpg",
  "/logos/UF.svg",
  "/logos/Intradiem.jpg",
  "/logos/Vetra.png",
];

const ExperienceCard = () => {
  return (
    <Link
      href="/experience"
      className="bg-[#eff4fe] flex-1 rounded-2xl p-4 w-full lg:w-80 hover:scale-105 hover:p-6 transition-all duration-300 cursor-pointer"
    >
      <div className="flex flex-col gap-4">
        <p className="text-[#4b67a3]">Check out some of my work experience!</p>
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
  );
};

export default ExperienceCard;
