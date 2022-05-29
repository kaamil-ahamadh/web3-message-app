import React from "react";

import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ showModal, setShowModal, children }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          onClick={() => setShowModal(false)}
        >
          <motion.div
            className="modal"
            initial={{
              y: "-100vh",
              opacity: 0,
            }}
            animate={{
              y: "40vh",
              opacity: 1,
              transition: { delay: 0.2 },
            }}
            onClick={(e) => e.stopPropagation()}
            exit={{
              y: "100vh",
              opacity: 0,
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
