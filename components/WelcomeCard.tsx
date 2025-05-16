"use client";

import lockscreen from "@/public/lockscreen.jpg";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

const WelcomeCard = ({ handleLock }: { handleLock: () => void }) => {
  return (
    <AnimatePresence>
      <motion.div
        layout
        style={{ boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.1)" }}
        className='flex flex-col w-full h-full bg-black rounded-2xl items-center justify-between overflow-hidden relative pt-13 pb-10'
      >
        <motion.div className='flex flex-col items-center justify-center text-white z-1'>
          <Image
            src='/fikaco-logo.svg'
            width={80}
            height={20}
            alt='logo'
            style={{ opacity: 0.8 }}
          />
        </motion.div>
        <motion.div className='flex flex-col items-center justify-center text-white z-1'>
          <motion.h1 className='text-3xl font-bold font-serif '>
            Good morning, Fika!
          </motion.h1>
          <motion.h1 className='text-md font-light font-sans mt-2'>
            Let's get started
          </motion.h1>
          <motion.button
            onClick={() => handleLock()}
            className='font-serif font-semibold text-md mt-4 flex flex-row gap-2 items-center justify-center w-[100%] px-4 py-3 bg-white rounded-full text-black'
          >
            Write today's stand-up
          </motion.button>
          <motion.button
            onClick={() => handleLock()}
            className='font-serif font-normal text-md mt-4 flex flex-row gap-2 items-center justify-center w-[100%]  rounded-full text-white'
          >
            Or just clock-in anyway
          </motion.button>
        </motion.div>

        <motion.div className='flex flex-col items-center justify-center text-white z-1'>
          <motion.h1 className='text-sm font-light font-sans'>
            Copyright © 2025 Fikaco. All rights reserved.
          </motion.h1>
        </motion.div>

        <motion.div className='absolute top-0 left-0 h-full w-full flex justify-center items-center'>
          <Image
            src={lockscreen}
            alt='lockscreen'
            fill
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WelcomeCard;
