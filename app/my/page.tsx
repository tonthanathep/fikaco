"use client";
import LevelToast from "@/components/LevelToast";
import ModalCard from "@/components/ModalCard";
import ClockInCard from "@/components/my/ClockInCard";
import Header from "@/components/my/Header";
import { onboardingPages } from "@/components/onboarding/Onboarding";
import TaskListCard from "@/components/TaskListCard";
import UtilityCard from "@/components/UtilityCard";
import WelcomeCard from "@/components/WelcomeCard";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const MyPage = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [standup, setStandup] = useState({
    yesterday: "I helped my mother",
    today: "I will help my mother",
    barrier: "My mother is a very good person",
    alreadyStandup: false,
  });
  const [isStandup, setIsStandup] = useState(false);
  const [isToast, setIsToast] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const handleLock = () => {
    if (isLocked) {
      setIsLocked(false);
      setIsActive(true);
    }
  };

  const handleModal = () => {
    if (isModal) {
      setIsActive(true);
      setIsModal(false);
    } else {
      setIsModal(true);
      setIsActive(false);
    }
  };

  const dashboardVariants = {
    initial: { opacity: 0, filter: "blur(10px)", scale: 0.5 },
    active: { opacity: 1, filter: "blur(0px)", scale: 1 },
    inactive: { opacity: 0.8, filter: "blur(6px)", scale: 0.92 },
  };

  return (
    <motion.div
      style={{
        //backgroundImage:"linear-gradient(180deg,rgba(199, 163, 115, 1) 0%, rgba(221, 197, 165, 1) 13%, rgba(237, 223, 204, 1) 27%, rgba(245, 235, 222, 1) 37%, rgba(255, 251, 245, 1) 100%)",
        backgroundColor: "#fbfaf8",
      }}
      className='flex min-h-screen h-screen flex-col w-full py-4 px-4 sm:px-6 lg:px-10 xl:px-38 2xl:px-80 gap-4  relative overflow-hidden'
    >
      <Header setIsProfile={() => {}} />

      <motion.div
        variants={dashboardVariants}
        initial='initial'
        animate={isActive ? "active" : "inactive"}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        className='flex flex-col lg:flex-row gap-4 lg:gap-11 w-full'
      >
        <div className='flex flex-col gap-4 w-full lg:w-[36%]'>
          <ClockInCard />
          <UtilityCard standup={standup} setIsStandup={setIsStandup} />
          <motion.button onClick={() => handleModal()}>On Toast</motion.button>
          <motion.button onClick={() => handleModal()}>Off Toast</motion.button>
        </div>
        <div className='flex flex-col gap-4 w-full lg:w-[64%]'>
          <TaskListCard />
        </div>
      </motion.div>

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
            <WelcomeCard handleLock={handleLock} />
          </motion.div>
        )}
        {isToast && (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              filter: "blur(20px)",
              scale: 1.1,
              transition: { duration: 1, ease: [0.25, 1, 0.5, 1] },
            }}
            className='absolute items-start justify-center top-0 left-0 h-screen w-full flex p-3 lg:p-6 overflow-hidden pointer-events-none'
          >
            <LevelToast />
          </motion.div>
        )}
        {isModal && (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              scale: 1,

              backgroundColor: "rgba(0, 0, 0, 0.1)",
            }}
            exit={{
              opacity: 0,
              filter: "blur(20px)",
              scale: 1.1,
              transition: { duration: 1, ease: [0.25, 1, 0.5, 1] },
            }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className='absolute top-0 left-0 h-screen w-full flex p-3 lg:p-6 overflow-hidden'
          >
            <ModalCard handleModal={handleModal} pages={onboardingPages} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MyPage;
