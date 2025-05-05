"use client";
import ClockInCard from "@/components/my/ClockInCard";
import Header from "@/components/my/Header";
import TaskListCard from "@/components/TaskListCard";
import UtilityCard from "@/components/UtilityCard";
import WelcomeCard from "@/components/WelcomeCard";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const MyPage = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [standup, setStandup] = useState({
    yesterday: "I helped my mother",
    today: "I will help my mother",
    barrier: "My mother is a very good person",
    alreadyStandup: false,
  });
  const [isStandup, setIsStandup] = useState(false);

  return (
    <motion.div className='flex min-h-screen h-screen flex-col w-full py-4 px-4 sm:px-6 lg:px-10 xl:px-38 2xl:px-80 gap-4 bg-[#fff8f5] relative overflow-hidden'>
      <Header setIsProfile={() => {}} />

      {!isLocked && (
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", scale: 0.75 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className='flex flex-col lg:flex-row gap-4 lg:gap-11 w-full'
        >
          <div className='flex flex-col gap-4 w-full lg:w-[36%]'>
            <ClockInCard />
            <UtilityCard standup={standup} setIsStandup={setIsStandup} />
          </div>
          <div className='flex flex-col gap-4 w-full lg:w-[64%]'>
            <TaskListCard />
          </div>
        </motion.div>
      )}

      <AnimatePresence>
        {isLocked && (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              filter: "blur(20px)",
              scale: 1.1,
              transition: { duration: 1, ease: [0.25, 1, 0.5, 1] },
            }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className='absolute top-0 left-0 h-screen w-full flex p-3 lg:p-6 overflow-hidden'
          >
            <WelcomeCard setIsLocked={setIsLocked} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MyPage;
