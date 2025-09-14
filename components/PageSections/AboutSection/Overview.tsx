import Link from "next/link";
import React from "react";
import { FiMail, FiGithub, FiBriefcase } from "react-icons/fi";
import { SiGithub, SiLinkedin, SiGmail, SiInstagram } from "react-icons/si";

const contacts = [
  {
    name: "Contact",
    icon: SiGmail,
    url: "/contact",
    description: "Get in touch with me",
    hoverColor: "group-hover:text-red-500", // Google red
  },
  {
    name: "GitHub",
    icon: SiGithub,
    url: "https://github.com/danielgeorge922",
    description: "View my code repositories",
    external: true,
    hoverColor: "group-hover:text-black", // Black
  },
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    url: "https://linkedin.com/in/danielgeorge922",
    description: "Professional network",
    external: true,
    hoverColor: "group-hover:text-blue-600", // LinkedIn blue
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    url: "https://instagram.com/danielgeorge347",
    description: "Personal photos and updates",
    external: true,
    hoverColor: "group-hover:text-pink-500", // Instagram gradient approximation
  },
];

const Overview = () => {
  return (
    <div className="w-[37%] flex flex-col p-4">
      <h1 className="text-[20px]">Overview</h1>
      <p className="my-4 text-gray-600">
        I&apos;m a software engineer with experience in full-stack development.
        Currently, I&apos;m pursuing a B.S. in Computer Science at the
        University of Florida.
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

      <div className="w-full border-b mt-8 border-gray-500"></div>

      <div className="my-4">
        <h1 className="text-[20px] mb-4">Profiles</h1>
        <div className="flex gap-8 justify-center">
          {contacts.map((contact, index) => (
            <button
              key={index}
              className="flex gap-2 cursor-pointer flex-col hover:bg-gray-100 p-3 rounded-lg transition-all duration-300 group"
            >
              <Link
                href={contact.url}
                target={contact.external ? "_blank" : "_self"}
                className="items-center justify-center flex"
              >
                <contact.icon
                  size={24}
                  className={`text-gray-600 ${contact.hoverColor} group-hover:scale-110 transition-all duration-300`}
                />
              </Link>

              <p className="text-gray-400 transition-all duration-300 group-hover:text-gray-800">
                {contact.name}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className="w-full border-b mt-8 border-gray-500"></div>
    </div>
  );
};

export default Overview;
