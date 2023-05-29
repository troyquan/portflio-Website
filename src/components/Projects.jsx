import React from "react";
import { projects } from "../Data";
const Projects = () => {
  return (
    <div className="section" id="projects">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold">My Projects</h2>
        <div className="w-14 h-[3px] rounded-sm bg-blue"></div>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2">
        {projects.map((project) => {
          return (
            <div className="shadow-md hover:shadow-none p-2" key={project.id}>
              <img src={project.image} alt="" />
              <div className="mt-3">
                <div className="text-xl font-bold">{project.title}</div>
                <p className="text-[0.9rem] mt-2 opacity-80">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                  cupiditate vero ipsum dolore nemo veritatis voluptatem quidem,
                  excepturi, ipsam impedit harum eligendi modi corporis. Ducimus
                  quidem fuga placeat esse sunt.
                </p>
                <a href="#" className="text-[0.9rem] mt-2 text-blue">
                  Source Code
                </a>
                <span>&nbsp; &nbsp; &nbsp; &nbsp;</span>
                <a href="#"  className="text-[0.9rem] mt-2 text-blue">
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
