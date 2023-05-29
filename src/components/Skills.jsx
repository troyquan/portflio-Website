import React, { useEffect, useState } from "react";
import { btns } from "../Data";
import { skills } from "../Data";
import { motion, AnimatePresence } from "framer-motion";

const imgStyle = {
  height: "120px",
  width: "180px",
}


const Skills = () => {
  const [filterImages, setFilterImages] = useState(null);
  useEffect(() => {
    setFilterImages(skills);
  }, []);
  const handleClick = (e) => {
    let btnType = e.target.value;
    const newFilterImages = skills.filter(
      (skill) => skill.value === btnType
    );
    btnType !== "all"
      ? setFilterImages(newFilterImages)
      : setFilterImages(skills);
  };
  return (
    <div className="section" id="skills">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold">My skills</h2>
        <div className=" w-14 h-[3px] rounded-sm bg-blue"></div>
      </div>
      <div className="mt-4 flex flex-wrap gap-8  p-2">
        {btns.map((btn) => {
          return (
            <button key={btn.id} value={btn.value} onClick={handleClick}>
              {btn.name}
            </button>
          );
        })}
      </div>
      <AnimatePresence>
        <motion.div className="grid sm:grid-cols-2 md:grid-cols-5 mt-12 gap-2 ">
          {filterImages &&
            filterImages.map((filterImage) => {
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  key={filterImage.id}
                  className="transition duration-300 ease-in-out hover:scale-110 "
                >
                  <motion.img src={filterImage.image} style={imgStyle} alt="" />
                </motion.div>
              );
            })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Skills;
