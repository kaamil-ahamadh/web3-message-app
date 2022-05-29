import React from "react";
import { motion } from "framer-motion";

const Wrapper = ({ children }) => {
  return (
    <motion.div
      className="screen-wrapper"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        ease: "easeInOut",
      }}
      exit={{
        x: "-100vw",
        transition: { duration: 0.5 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default Wrapper;
