"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { PiSunHorizonDuotone } from "react-icons/pi";

const UtilityCard = () => {
  const [isClockIn, setIsClockIn] = useState(false);
  const [isStandup, setIsStandup] = useState(false);

  return (
    <motion.div
      layout
      transition={{ duration: 0.4 }}
      style={{
        backgroundColor: "#fefefd",
        borderRadius: "1.4rem",
        padding: "1.2rem",

        paddingLeft: "1.4rem",
      }}
      className='flex flex-row items-center justify-start gap-6 '
    >
      <AnimatePresence mode='popLayout'>
        {isStandup ? (
          <motion.div
            key={0}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
            transition={{ duration: 0.4 }}
            className='flex flex-row items-center justify-start gap-6 '
          >
            <PiSunHorizonDuotone className='text-3xl ml-2' />
            <motion.div>
              <motion.h1 className='text-lg font-bold font-serif'>
                Today's stand-up
              </motion.h1>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key={1}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
            transition={{ duration: 0.4 }}
            className='flex flex-row items-center justify-start gap-6 '
          >
            <PiSunHorizonDuotone className='text-5xl' />
            <motion.div>
              <motion.h1 className='text-lg font-bold font-serif'>
                Hey, it's time for today's stand-up!
              </motion.h1>
              <motion.h2 className='text-md font-light font-sans opacity-40'>
                What's done, what's next?
              </motion.h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default UtilityCard;
