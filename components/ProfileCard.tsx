"use client";

import { motion } from "motion/react";
import {
  PiNotePencilDuotone,
  PiSignOut,
  PiSpeakerSimpleHighDuotone,
  PiSunDuotone,
} from "react-icons/pi";
import UserBadge from "./UserBadge";

const ProfileCard = () => {
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
      className='flex flex-col gap-5 aspect-3/4'
    >
      <motion.div
        style={{ padding: "1rem", backgroundColor: "#fdfdfd" }}
        className='flex flex-col rounded-2xl'
      >
        <UserBadge />
        <motion.h1 className='text-2xl font-bold font-serif'>Ton</motion.h1>
        <motion.h2 className='text-md font-light font-serif'>
          Fikaco. Employee Since 2023.
        </motion.h2>
      </motion.div>
      <motion.div className='flex flex-row w-full items-center justify-between'>
        <motion.div className='flex flex-row gap-2 items-center'>
          <PiSunDuotone />
          <motion.h1 className='text-md font-light font-serif'>
            Light Mode
          </motion.h1>
        </motion.div>
      </motion.div>
      <motion.div className='flex flex-row w-full items-center justify-between'>
        <motion.div className='flex flex-row gap-2 items-center'>
          <PiSpeakerSimpleHighDuotone />
          <motion.h1 className='text-md font-light font-serif'>
            Sound Effects
          </motion.h1>
        </motion.div>
      </motion.div>
      <motion.div className='flex flex-row w-full items-center justify-between'>
        <motion.div className='flex flex-row gap-2 items-center'>
          <PiNotePencilDuotone />
          <motion.h1 className='text-md font-light font-serif'>
            Edit My Preferences
          </motion.h1>
        </motion.div>
      </motion.div>
      <motion.div className='flex flex-row w-full items-center justify-between'>
        <motion.div className='flex flex-row gap-2 items-center'>
          <PiSignOut />
          <motion.h1 className='text-md font-light font-serif'>
            Sign out
          </motion.h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProfileCard;
