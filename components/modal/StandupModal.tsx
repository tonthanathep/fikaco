"use client";

import useStandupStore from "@/utils/store/StandupStore";
import useStore from "@/utils/useStore";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { PiSunHorizonDuotone } from "react-icons/pi";
import { Standup } from "../../utils/store/StandupStore";

const StandupModal = ({ handleModal }: { handleModal: () => void }) => {
  const { setStoreStandup } = useStandupStore();
  const storeStandup = useStore(useStandupStore, (state) => state.storeStandup);
  const hasHydrated = useStore(useStandupStore, (state) => state._hasHydrated);
  const hasStandup = useStore(useStandupStore, (state) => state.hasStandup);

  const [standup, setStandup] = useState<Standup>({
    yesterday: "",
    today: "",
    barrier: "",
    id: "",
  });

  useEffect(() => {
    //If already stand-up, load info from store
    if (hasStandup) {
      setStandup(storeStandup as Standup);
    }
  }, [hasHydrated]);

  const handleStandup = (field: string, e: any) => {
    // Handle change when input form
    setStandup((prevState: any) => ({
      ...prevState,
      [field]: e.target.value,
    }));
  };

  const handleSave = () => {
    // Handle save to store
    setStoreStandup({
      yesterday: standup.yesterday,
      today: standup.today,
      barrier: standup.barrier,
      id: standup.id,
    });
    handleModal();
  };

  return (
    <motion.div className='flex flex-col gap-5 px-3 pt-5 pb-3'>
      <motion.div className='flex flex-col items-center justify-start '>
        <PiSunHorizonDuotone className='text-5xl' />
        <motion.h1 className='text-2xl font-bold font-serif'>
          Let's get started, Ton!
        </motion.h1>
        <motion.h2 className='text-md font-light font-serif'>
          What are you working on today?
        </motion.h2>
      </motion.div>
      <motion.div className='mt-3'>
        <motion.label className='block text-sm font-medium text-gray-700 font-serif mb-2'>
          What have you get done yesterday?
        </motion.label>
        <motion.textarea
          value={standup.yesterday}
          onChange={(e) => handleStandup("yesterday", e)}
          style={{
            borderColor: "rgba(0, 0, 0, 0.3)",
            outlineColor: "rgba(0, 0, 0, 0.1)",
            borderWidth: "1px",
          }}
          whileFocus={{ outlineColor: "rgba(0, 0, 0, 0.4)" }}
          className='block w-full rounded-lg p-2.5 bg-white text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 font-sans font-normal'
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
          style={{
            borderColor: "rgba(0, 0, 0, 0.3)",
            outlineColor: "rgba(0, 0, 0, 0.1)",
            borderWidth: "1px",
          }}
          whileFocus={{ outlineColor: "rgba(0, 0, 0, 0.4)" }}
          className='block w-full rounded-xl p-2.5 bg-white text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 font-sans font-normal '
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
          style={{
            borderColor: "rgba(0, 0, 0, 0.3)",
            outlineColor: "rgba(0, 0, 0, 0.1)",
            borderWidth: "1px",
          }}
          whileFocus={{ outlineColor: "rgba(0, 0, 0, 0.4)" }}
          className='block w-full rounded-xl p-2.5 bg-white text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 font-sans font-normal '
          placeholder='e.g. I am facing X, Y, Z'
        />
      </motion.div>
      <motion.button
        onClick={() => handleSave()}
        style={{ backgroundColor: "#704214", color: "#ffffff" }}
        whileHover={{ backgroundColor: "#000000" }}
        whileTap={{ backgroundColor: "#704214", scale: 0.98 }}
        className='flex w-full justify-center rounded-xl py-3.5 mt-1'
      >
        <motion.h1 className='text-md font-semibold font-serif'>
          {hasStandup ? "Update" : "Submit"} my stand-up
        </motion.h1>
      </motion.button>
      <motion.button onClick={() => handleModal()}>
        <motion.h1 className='text-sm font-semibold font-serif'>
          {hasStandup ? "Leave" : "I'll write it later"}
        </motion.h1>
      </motion.button>
    </motion.div>
  );
};

export default StandupModal;
