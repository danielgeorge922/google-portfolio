import Projects from "@/consts/Projects";
import React from "react";
import ProjectCard from "../ProjectCard";

const ProjectSection = () => {
  return (
    <div className="flex pt-4 bg-blue-10 gap-4 flex-col px-4 max-w-7xl mx-auto">
      <p className="text-sm text-gray-600 pb-4">
        About {Projects.length} projects loaded (0.84 seconds)
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
