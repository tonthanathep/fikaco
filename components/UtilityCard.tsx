"use client";

import { motion } from "motion/react";
import { PiSunHorizonDuotone } from "react-icons/pi";

const UtilityCard = ({ standup, setIsStandup }: any) => {
  // TODO: Make this card expandable when on mobile
  return (
    <motion.div
      layout
      transition={{ duration: 0.4 }}
      className='flex flex-col gap-6 bg-[#fdfdfd] rounded-xl py-[1.4rem] px-[1.2rem]'
    >
      <motion.div className='flex flex-row items-center justify-start gap-3 '>
        <PiSunHorizonDuotone className='text-3xl' />
        <motion.div>
          <motion.h1 className='text-lg font-bold font-serif'>
            Today's stand-up
          </motion.h1>
        </motion.div>
      </motion.div>
      <motion.div className='flex flex-col gap-2'>
        <motion.h1 className='text-sm font-light font-serif'>
          What have you done yesterday?
        </motion.h1>
        <motion.h1 className='text-md font-normal font-sans'>
          {standup.yesterday}
        </motion.h1>
      </motion.div>

      <motion.div className='flex flex-col gap-2'>
        <motion.h1 className='text-sm font-light font-serif'>
          What is barrier you have facing?
        </motion.h1>
        <motion.h1 className='text-md font-normal font-sans'>
          {standup.barrier}
        </motion.h1>
      </motion.div>
    </motion.div>
  );
};

export default UtilityCard;
