"use client";
import { motion } from "motion/react";
import { PiSealCheckFill } from "react-icons/pi";

const LevelToast = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, width: "0", filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, width: "30%", filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "999px",
        padding: "1rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
      className='flex flex-row gap-10 items-center justify-between'
    >
      <motion.div className='flex flex-row items-center gap-2'>
        <PiSealCheckFill className='text-xl' />
        <motion.h1 className='text-md font-medium font-sans'>
          Finished Stand-up
        </motion.h1>
      </motion.div>
      <motion.div className='px-2 py-1 bg-black text-white font-sans font-medium text-sm rounded-lg'>
        10 XP
      </motion.div>
    </motion.div>
  );
};

export default LevelToast;
