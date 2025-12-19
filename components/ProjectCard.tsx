"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  project: {
    name: string;
    subheading: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleImageClick = () => {
    window.open(project.link, "_blank");
  };

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-gray-100 rounded-lg hover:shadow-md transition-shadow duration-200 flex flex-col">
      <div
        className="aspect-video relative overflow-hidden rounded-t-lg cursor-pointer"
        onClick={handleImageClick}
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 cursor-pointer" onClick={handleExpandClick}>
        <div className="flex items-center justify-between">
          <div className="">
            <h3 className="text-lg font-semibold text-gray-900">
              {project.name}
            </h3>
            <p className="text-sm text-gray-600">{project.subheading}</p>
          </div>

          {isExpanded ? (
            <IoChevronUp className="w-4 h-4 text-gray-400" />
          ) : (
            <IoChevronDown className="w-4 h-4 text-gray-400" />
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="px-4 pb-4">
          <div className="flex gap-1 flex-wrap mb-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            {project.description}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[var(--uf-blue)] hover:underline"
          >
            <FaGithub className="w-4 h-4" />
            View on GitHub
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
