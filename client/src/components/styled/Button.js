import React from "react";
import { motion } from "framer-motion";

const Button = ({ children, onClick, size }) => {
  return (
    <div>
      <motion.div
        className={`${size} btn`}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.85,
        }}
        onClick={onClick}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Button;
