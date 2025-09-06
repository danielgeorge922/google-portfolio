import React from "react";

const skillsData = {
  "Programming Languages": [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
  ],
  Frontend: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "Flask", "MongoDB", "PostgreSQL"],
  "Tools & Technologies": ["Git", "Docker", "AWS", "Firebase", "TensorFlow"],
};

const SkillsSection = () => {
  return (
    <div className="flex pt-4 bg-blue-10 gap-4 flex-col px-4 max-w-7xl mx-auto">
      <p className="text-sm text-gray-600 pb-4">
        Technical skills and technologies
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div
            key={category}
            className="bg-white rounded-lg p-6 border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-[var(--uf-blue)] mb-4">
              {category}
            </h3>
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
