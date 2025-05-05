"use client";

import { motion } from "motion/react";
import { PiSunHorizonDuotone } from "react-icons/pi";

const StandUpCard = ({ standup, setStandup, setIsStandup }: any) => {
  const handleStandup = (field: string, e: any) => {
    setStandup((prevState: any) => ({
      ...prevState,
      [field]: e.target.value,
    }));
  };

  const handleSave = () => {
    setIsStandup(false);
    setStandup((prevState: any) => ({
      ...prevState,
      alreadyStandup: true,
    }));
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 100, scale: 0.8, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.4 }}
      style={{
        backgroundColor: "#fcf8f5",
        borderRadius: "1.4rem",
        padding: "1.4rem",
        paddingTop: "2rem",
        paddingBottom: "2rem",
        width: "100%",
        boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.8)",
      }}
      className='flex flex-col gap-5'
    >
      <motion.div className='flex flex-col items-center justify-start '>
        <PiSunHorizonDuotone className='text-5xl' />
        <motion.h1 className='text-2xl font-bold font-serif'>
          Let's get started, Ton!
        </motion.h1>
        <motion.h2 className='text-md font-light font-serif'>
          What are you working on today?
        </motion.h2>
      </motion.div>
      <motion.div>
        <motion.label className='block text-sm font-medium text-gray-700 font-serif mb-2'>
          What have you get done yesterday?
        </motion.label>
        <motion.textarea
          value={standup.yesterday}
          onChange={(e) => handleStandup("yesterday", e)}
          className='block w-full rounded-xl p-2.5 bg-white text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 font-sans font-normal outline-0'
          placeholder='e.g. Finished chapter 2 of the book, refactored landing page code, etc.'
        />
      </motion.div>
      <motion.div>
        <motion.label className='block text-sm font-medium text-gray-700 font-serif mb-2'>
          What are you working on today?
        </motion.label>
        <motion.textarea
          value={standup.today}
          onChange={(e) => handleStandup("today", e)}
          className='block w-full rounded-xl p-2.5 bg-white text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 font-sans font-normal outline-0'
          placeholder='e.g. I am working on X, Y, Z'
        />
      </motion.div>
      <motion.div>
        <motion.label className='block text-sm font-medium text-gray-700 font-serif mb-2'>
          What problems are you facing?
        </motion.label>
        <motion.textarea
          value={standup.barrier}
          onChange={(e) => handleStandup("barrier", e)}
          className='block w-full rounded-xl p-2.5 bg-white text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 font-sans font-normal outline-0'
          placeholder='e.g. I am facing X, Y, Z'
        />
      </motion.div>
      <motion.button onClick={() => handleSave()}>
        <motion.h1 className='text-md font-semibold font-serif'>
          Submit my stand-up
        </motion.h1>
      </motion.button>
    </motion.div>
  );
};

export default StandUpCard;
