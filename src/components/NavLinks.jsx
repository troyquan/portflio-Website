import React from "react";
import { motion } from "framer-motion";

const NavLinks = ({ href, text, setToggle }) => {
  const handleClick = () => {
    setToggle(prev => !prev);
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div onClick={handleClick}>
        <a href={`#${href}`} className="text-[0.95rem] hover:text-blue hover:underline">
          {text}
        </a>
      </div>
    </motion.div>
  );
};

export default NavLinks;
