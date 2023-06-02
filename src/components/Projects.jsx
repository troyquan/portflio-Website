import React from "react";
import { projects } from "../Data";
const Projects = () => {
  return (
    <div className="section" id="projects">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold">My Projects</h2>
        <div className="w-14 h-[3px] rounded-sm bg-blue"></div>
      </div>
      <div className="flex-row gap-8 sm:grid-cols-2 md:grid-cols-2 ">
        {projects.map((project) => {
          return (
            <div className="shadow-lg hover:bg-slate-200 bg-ghostWhite hover:scale-105 p-3 mb-6" key={project.id}>
              <img src={project.image} alt="" />
              <div className="mt-3 mb-4">
                <div className="text-xl font-bold ">{project.title}</div>
                <p className="text-[0.9rem] mt-2 opacity-80">
                  {project.description1}
                </p>
                <p className="text-[0.9rem] mt-2  opacity-80">
                  {project.description2}
                </p>
                <p className="text-[0.9rem] mt-2 mb-6 opacity-80">
                  {project.description3}
                </p>
                <a href={project.sourceCode} className="py-2 px-4 border-[2px] border-solid border-grey text-[0.9rem] rounded-[2.2rem] shadow-md hover:bg-blue">
                  Source Code
                </a>
                <span>&nbsp; &nbsp; &nbsp; &nbsp;</span>
                <a href={project.liveDemo} className="py-2 px-4 border-[2px] border-solid border-grey text-[0.9rem] rounded-[2.2rem] shadow-md hover:bg-blue">
                  Live Demo
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
