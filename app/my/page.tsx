"use client";
import ClockInCard from "@/components/ClockInCard";
import Header from "@/components/Header";
import StandUpCard from "@/components/StandUpCard";
import TaskListCard from "@/components/TaskListCard";
import UtilityCard from "@/components/UtilityCard";
import { motion } from "motion/react";
import { useState } from "react";

const MyPage = () => {
  const [isStandup, setIsStandup] = useState(false);
  const [standup, setStandup] = useState({
    alreadyStandup: false,
    yesterday: "",
    today: "",
    barrier: "",
  });
  return (
    <motion.div className='flex min-h-screen flex-col w-full py-4 px-4 sm:px-6 lg:px-10 xl:px-44 2xl:px-80 gap-4 bg-[#fff8f5] relative'>
      <Header />
      <div className='flex flex-col lg:flex-row gap-4 w-full'>
        <div className='flex flex-col gap-4 w-full lg:w-[44%]'>
          <ClockInCard />
          <UtilityCard standup={standup} setIsStandup={setIsStandup} />
        </div>
        <div className='flex flex-col gap-4 w-full lg:w-[56%]'>
          <TaskListCard />
        </div>
      </div>
      {isStandup && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(10px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(0px)" }}
          className='fixed flex flex-col items-center justify-center w-screen h-screen top-0 left-0 right-0 bottom-0 bg-black/80 px-4 sm:px-6 lg:px-10 xl:px-100 2xl:px-120'
        >
          <StandUpCard
            standup={standup}
            setStandup={setStandup}
            setIsStandup={setIsStandup}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default MyPage;
