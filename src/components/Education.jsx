import React from "react";
import { educations, serviceFinishes } from "../Data";

const imgStyle = {
  height: "180px",
  width: "220px",
}

const Educations = () => {
  return (
    <div className="section" id="educations">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold ">My Educations</h2>
        <div className="w-14 h-[3px] bg-blue rounded-sm"></div>
      </div>
      <div className="flex-row">
        {educations.map((education) => {
          return (
            <div
              key={education.id}
              className="flex gap-4 p-4 hover:bg-slate-300 rounded-lg"
            >
      
              <img src={education.image} alt="educationIMG" style={imgStyle}/>
              <div>
                <h3 className="text-xl font-bold">{education.title}</h3>
                <p className="opacity-100 mt-6 text-[0.9rem]">
                  {education.time}
                </p>
                <p className="opacity-80 mt-4 text-[0.9rem]">
                  {education.description1}
                </p>
                <p className="opacity-80 mt-4 text-[0.9rem]">
                  {education.description2}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 mt-12 gap-4">
        {serviceFinishes.map((serviceFinish) => {
          return (
            <div
              className="text-center border border-solid border-grey p-8 rounded-md"
              key={serviceFinish.id}
            >
              <div className="flex justify-center text-blue mb-4 text-[1.5rem]">
                {serviceFinish.icon}
              </div>
              <div className="mb-4 text-[0.9rem] font-bold">
                {serviceFinish.text}
              </div>
              <div className="text-5xl text-grey">{serviceFinish.amount}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Educations;
