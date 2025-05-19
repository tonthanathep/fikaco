"use client";
import LevelToast from "@/components/LevelToast";
import StandupModal from "@/components/modal/StandupModal";
import ModalCard from "@/components/ModalCard";
import ClockInCard from "@/components/my/ClockInCard";
import Header from "@/components/my/Header";

import TaskListCard from "@/components/TaskListCard";
import UtilityCard from "@/components/UtilityCard";
import WelcomeCard from "@/components/WelcomeCard";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const MyPage = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const [isToast, setIsToast] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [activeModal, setActiveModal] = useState<"standup" | "onboarding" | "">(
    ""
  );

  const handleLock = () => {
    if (isLocked) {
      // Handle lock screen state
      setIsLocked(false);
      setIsActive(true);
    }
  };

  const handleModal = (modal?: "standup" | "onboarding") => {
    // Handle modal open and close in child's component

    if (modal) {
      setActiveModal(modal);
      setIsActive(false);
      setIsModal(true);
    } else {
      setActiveModal("");
      setIsActive(true);
      setIsModal(false);
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
          <UtilityCard />
          <motion.button onClick={() => handleModal("standup")}>
            Open Standup
          </motion.button>
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
            <ModalCard>
              {activeModal === "standup" ? (
                <StandupModal handleModal={handleModal} />
              ) : (
                <div></div>
              )}
            </ModalCard>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MyPage;
