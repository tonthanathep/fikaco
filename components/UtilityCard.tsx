"use client";

import useStandupStore from "@/utils/store/StandupStore";
import useStore from "@/utils/useStore";
import { motion } from "motion/react";
import { useState } from "react";
import { PiCaretUpBold, PiSunHorizonDuotone } from "react-icons/pi";

const UtilityCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const storeStandup = useStore(useStandupStore, (state) => state.storeStandup);
  const hasHydrated = useStore(useStandupStore, (state) => state._hasHydrated);

  if (hasHydrated) {
    return (
      <motion.div
        layout
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "0.75rem",
          flexDirection: "column",
          display: "flex",
          padding: "1.2rem",
          paddingTop: "1.2rem",
          paddingBottom: "1.2rem",
        }}
        transition={{ duration: 0.4 }}
      >
        <motion.div className='flex flex-row items-center justify-between'>
          <motion.div className='flex flex-row gap-3'>
            <PiSunHorizonDuotone className='text-3xl' />
            <motion.h1 className='text-lg font-bold font-serif'>
              Today's stand-up
            </motion.h1>
          </motion.div>
          <motion.div
            animate={{ rotate: isExpanded ? 0 : 180 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className='flex flex-row gap-2 items-center mr-2'
          >
            <PiCaretUpBold className='text-2xl' />
          </motion.div>
        </motion.div>
        <motion.div
          layout
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
            filter: isExpanded ? "blur(0px)" : "blur(2px)",
          }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className='flex flex-col gap-4 overflow-hidden'
        >
          <motion.div className='flex flex-col gap-2 mt-4'>
            <motion.h1 className='text-sm font-light font-serif'>
              What have you done yesterday?
            </motion.h1>
            <motion.h1 className='text-md font-normal font-sans whitespace-pre-line'>
              {storeStandup!.yesterday}
            </motion.h1>
          </motion.div>

          <motion.div className='flex flex-col gap-2'>
            <motion.h1 className='text-sm font-light font-serif'>
              What are you working on today?
            </motion.h1>
            <motion.h1 className='text-md font-normal font-sans whitespace-pre-line'>
              {storeStandup!.today}
            </motion.h1>
          </motion.div>

          <motion.div className='flex flex-col gap-2'>
            <motion.h1 className='text-sm font-light font-serif'>
              What is barrier you have facing?
            </motion.h1>
            <motion.h1 className='text-md font-normal font-sans whitespace-pre-line'>
              {storeStandup!.barrier}
            </motion.h1>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  } else {
    return <div></div>;
  }
};

export default UtilityCard;
