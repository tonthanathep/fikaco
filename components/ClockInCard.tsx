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
        backgroundColor: "#fcf8f5",
        borderRadius: "1.4rem",
        padding: "1.2rem",
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
          <motion.div className='flex flex-row gap-3 items-center justify-start mb-[6rem]'>
            <motion.div
              id='date'
              className='flex flex-col bg-black/5 rounded-xl px-4 py-1 items-center justify-center h-fit aspect-square'
            >
              <motion.h1 className='text-sm font-light font-sans'>
                Wed
              </motion.h1>
              <motion.h1 className='text-3xl font-black font-serif -mt-0.5'>
                {new Date().getDate()}
              </motion.h1>
            </motion.div>
            <motion.div className='flex flex-col' style={{ padding: "0.4rem" }}>
              <h1 className='text-lg font-light font-sans'>
                Good morning, Ton!
              </h1>
              <h1 className='text-3xl font-bold font-serif mt-0.5'>
                {" "}
                Ready to clock-in?{" "}
              </h1>
            </motion.div>
          </motion.div>
          <motion.div className='flex flex-row gap-2 '>
            <motion.button
              layout
              className='block  rounded-2xl px-3 py-3 text-center text-white w-full '
              style={{ backgroundColor: "#739878" }}
              whileHover={{ backgroundColor: "#C59B2C" }}
              whileTap={{ backgroundColor: "#C59B2C", scale: 0.98 }}
              onClick={() => setIsClockIn(true)}
            >
              <motion.h1 className='font-serif font-semibold text-md'>
                Clock In
              </motion.h1>
            </motion.button>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div id='clockout' className='flex flex-col'>
          <Clock />
          <motion.div className='flex flex-row gap-2 '>
            <motion.button
              layout
              className='block  rounded-2xl px-3 py-3 text-center text-black/30 w-[80%] '
              style={{ backgroundColor: "#DDAD4D" }}
              whileHover={{ backgroundColor: "#C59B2C" }}
              whileTap={{ backgroundColor: "#C59B2C", scale: 0.98 }}
              onClick={() => setIsClockIn(true)}
            >
              <motion.h1 className='font-serif font-semibold text-lg'>
                Take a break
              </motion.h1>
            </motion.button>
            <motion.button
              className='block  rounded-2xl px-3 py-3 text-center text-black/30 w-[20%] '
              style={{ backgroundColor: "#DDAD4D" }}
              whileHover={{ backgroundColor: "#C59B2C" }}
              whileTap={{ backgroundColor: "#C59B2C", scale: 0.98 }}
              onClick={() => setIsClockIn(false)}
            >
              <motion.h1 className='font-serif font-semibold text-lg'>
                Clock Out
              </motion.h1>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ClockInCard;
