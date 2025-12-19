import Experiences from "@/consts/Experiences";
import React from "react";
import ExperienceCard from "../ExperienceCard";

const ExperienceSection = () => {
  const incomingExperiences = Experiences.filter(
    (exp) => exp.status === "incoming"
  );
  const currentExperiences = Experiences.filter(
    (exp) => exp.status === "current"
  );
  const previousExperiences = Experiences.filter(
    (exp) => exp.status === "previous"
  );

  // Helper function to chunk experiences into rows of 4
  const chunkExperiences = (experiences: typeof Experiences, size: number) => {
    const chunks = [];
    for (let i = 0; i < experiences.length; i += size) {
      chunks.push(experiences.slice(i, i + size));
    }
    return chunks;
  };

  return (
    <div className="flex pt-4 bg-blue-10 gap-8 flex-col px-4 max-w-7xl mx-auto">
      <p className="text-sm text-gray-600">
        About {Experiences.length} work experiences loaded (0.84 seconds)
      </p>

      <div className="gap-8 flex flex-col">
        {/* Incoming Experiences */}
        {incomingExperiences.length > 0 && (
          <>
            <h1 className="text-xl font-semibold">Incoming</h1>
            {chunkExperiences(incomingExperiences, 4).map((row, rowIndex) => (
              <div key={`incoming-${rowIndex}`} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {row.map((experience) => (
                  <ExperienceCard
                    key={experience.company}
                    experience={experience}
                  />
                ))}
              </div>
            ))}
          </>
        )}

        {/* Current Experiences */}
        {currentExperiences.length > 0 && (
          <>
            <h1 className="text-xl font-semibold">Current</h1>
            {chunkExperiences(currentExperiences, 4).map((row, rowIndex) => (
              <div key={`current-${rowIndex}`} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {row.map((experience) => (
                  <ExperienceCard
                    key={experience.company}
                    experience={experience}
                  />
                ))}
              </div>
            ))}
          </>
        )}

        {/* Previous Experiences */}
        {previousExperiences.length > 0 && (
          <>
            <h1 className="text-xl font-semibold">Previous</h1>
            {chunkExperiences(previousExperiences, 4).map((row, rowIndex) => (
              <div key={`previous-${rowIndex}`} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {row.map((experience) => (
                  <ExperienceCard
                    key={experience.company}
                    experience={experience}
                  />
                ))}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ExperienceSection;
