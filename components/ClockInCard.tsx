"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Clock from "./Clock";

const ClockInCard = () => {
  const [isClockIn, setIsClockIn] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.4 }}
      style={{
        backgroundColor: "#fefefd",
        borderRadius: "1.4rem",
        padding: "1rem",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {!isClockIn ? (
        <motion.div
          style={{
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "space-between",
          }}
          id='clockin'
        >
          <motion.div
            layout='position'
            style={{ marginBottom: "4rem", padding: "0.4rem" }}
          >
            <h1 className='text-lg font-light font-sans'>Good morning, Ton!</h1>
            <h1 className='text-4xl font-bold font-serif mt-1'>
              {" "}
              Ready to clock-in?{" "}
            </h1>
          </motion.div>
          <motion.button
            className='block w-full rounded-xl  px-3 py-3 text-center text-sm font-semibold text-white '
            style={{ backgroundColor: "#DDAD4D" }}
            whileHover={{ backgroundColor: "#C59B2C" }}
            whileTap={{ backgroundColor: "#C59B2C", scale: 0.98 }}
            onClick={() => setIsClockIn(true)}
          >
            Clock In
          </motion.button>
        </motion.div>
      ) : (
        <motion.div id='clockout' className='flex flex-col'>
          <Clock />
          <motion.button
            className='block w-full rounded-xl  px-3 py-3 text-center text-sm font-semibold text-white '
            style={{ backgroundColor: "#DDAD4D" }}
            whileHover={{ backgroundColor: "#C59B2C" }}
            whileTap={{ backgroundColor: "#C59B2C", scale: 0.98 }}
            onClick={() => setIsClockIn(false)}
          >
            Clock Out
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ClockInCard;
