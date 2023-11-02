import React from "react";
import "./Errorpage.css";
import { AnimatePresence, motion } from "framer-motion";

export default function Errorpage() {
  return (
    <>
    <div></div>
      {/* <div className="errormsg"></div> */}
      <div style={{ textAlign: "center" }}>
        <div>Error 404</div>
        <div>Page Not Found</div>
      </div>
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
