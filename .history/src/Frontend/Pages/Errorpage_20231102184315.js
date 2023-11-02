import React from "react";
import "./Errorpage.css";
import { motion } from "farmar-motion";

export default function Errorpage() {
  return (
    <>
      {/* <div className="errormsg"></div> */}
      <motion.div
        className="box"
        /**
         * Setting the initial keyframe to "null" will use
         * the current value to allow for interruptable keyframes.
         */
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
}
