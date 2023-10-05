import React from "react";
import img from "../assets/hero1.jpg";
import { motion } from "framer-motion";
import pdf from '../assets/Troy_Quan_CV .pdf'

const Home = () => {
  return (
    <div className="section flex justify-center items-center" id="home">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden shadow-heroSadow border-[20px] border-solid border-ghostWhite">
          <img
            src={img}
            alt="portofolio-img"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-black opacity-80 sm:text-[1.25rem] mb-4">Full Stack Developer</div>
          <h2 className="text-[2rem] sm:text-[3rem] font-bold mb-4">
            Troy Quan
          </h2>
          <p className="opacity-80 text-[0.9rem]">
          Full Stack student seeking internship or job oppotunity starting September, 2023 . I excel in group work and have a strong passion for programming, looking forward to make meaningful contributions to larger-scale projects .
          </p>
          <div className="flex mt-4 gap-4">
            <a
              href={pdf}
              download="Troy_Quan_CV .pdf"
              className=" py-2 px-4 border-[2px] border-solid border-blue text-[0.9rem] rounded-[2.2rem] shadow-md hover:scale-110"
            >
              Download CV
            </a>
            <a
              href="mailto:yongze.quan@outlook.com"
              target="_blank"
              className="animate-bounce py-2 px-4 border-[2px] border-solid border-grey text-[0.9rem] rounded-[2.2rem] shadow-md hover:scale-110 hover:border-blue"
            >
              Contact
            </a>
            <a
              href="http://linkedin.com/in/yongze-quan-1b1473278"
              className="py-2 px-4 border-[2px] border-solid border-grey text-[0.9rem] rounded-[2.2rem] shadow-md hover:scale-110 hover:border-blue"
            >
              Linkedin
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
