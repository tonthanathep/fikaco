"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { PiFireSimpleDuotone } from "react-icons/pi";
import Clock from "../Clock";

const ClockInCard = () => {
  const [isClockIn, setIsClockIn] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        backgroundColor: isClockIn ? "#739878" : "#ffffff",
      }}
      transition={{ duration: 0.4 }}
      style={{
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
      className='px-3 py-3 gap-4 relative rounded-2xl'
    >
      {!isClockIn ? (
        <motion.div id='clockin' className='flex flex-col justify-center'>
          <motion.div className='flex flex-row w-fit  gap-2 items-center justify-start mb-[4rem] pt-2 pl-1 font-sans'>
            <PiFireSimpleDuotone /> 6 Days Streaks!
          </motion.div>
          <motion.div className='flex flex-col gap-2 '>
            <motion.div className='flex flex-col p-[0.4rem]'>
              <h1 className='text-lg font-light font-sans opacity-60'>
                Tuesday, May 6
              </h1>
              <h1 className='text-3xl font-bold font-serif mt-0.5'>
                Let's get started
              </h1>
            </motion.div>
            <motion.button
              layout
              className='block  rounded-xl px-3 py-3 text-center text-white w-full '
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
        <motion.div id='clockin' className='flex flex-col justify-center'>
          <motion.div className='flex flex-row gap-3 items-center justify-start mb-[1rem] px-[0.4rem] font-sans'>
            <Clock />
          </motion.div>
          <motion.div className='flex flex-col gap-2 '>
            <motion.div className='flex flex-col p-[0.4rem]'>
              <h1 className='text-lg font-light font-sans'>
                Good morning, Fika!
              </h1>
              <h1 className='text-3xl font-bold font-serif mt-0.5'>
                Let's get started
              </h1>
            </motion.div>
            <motion.button
              layout
              className='block  rounded-xl px-3 py-3 text-center text-black w-full '
              style={{ backgroundColor: "#ffffff" }}
              whileHover={{ backgroundColor: "#C59B2C" }}
              whileTap={{ backgroundColor: "#C59B2C", scale: 0.98 }}
              onClick={() => setIsClockIn(false)}
            >
              <motion.h1 className='font-serif font-semibold text-md'>
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
