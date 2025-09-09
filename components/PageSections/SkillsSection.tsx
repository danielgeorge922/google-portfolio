import React from "react";
import { FaCode, FaReact, FaServer, FaTools } from "react-icons/fa";

const skillsData = {
  "Programming Languages": {
    icon: <FaCode className="w-5 h-5" />,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
  },
  Frontend: {
    icon: <FaReact className="w-5 h-5" />,
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  Backend: {
    icon: <FaServer className="w-5 h-5" />,
    skills: ["Node.js", "Express", "Flask", "MongoDB", "PostgreSQL"],
  },
  "Tools & Technologies": {
    icon: <FaTools className="w-5 h-5" />,
    skills: ["Git", "Docker", "AWS", "Firebase", "TensorFlow"],
  },
};

const SkillsSection = () => {
  return (
    <div className="flex pt-4 bg-blue-10 gap-4 flex-col px-4 max-w-7xl mx-auto">
      <p className="text-sm text-gray-600 pb-4">
        Technical skills and technologies
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skillsData).map(([category, { icon, skills }]) => (
          <div
            key={category}
            className="bg-white rounded-lg p-6 border border-gray-200"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[var(--uf-blue)]">{icon}</span>
              <h3 className="text-lg font-semibold text-[var(--uf-blue)]">
                {category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-[var(--uf-blue)] hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
