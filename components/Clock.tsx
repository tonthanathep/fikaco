"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const Clock = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 59) {
          setMinutes((prevMinutes) => prevMinutes + 0.5);
          return 0;
        } else {
          return prevSeconds + 1;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const clockVariants = {
    initial: { opacity: 0, y: 10, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -10, filter: "blur(6px)" },
  };

  return (
    <motion.div className='flex flex-row relative text-5xl font-bold font-serif items-center'>
      <AnimatePresence mode='popLayout'>
        <motion.div
          key={minutes + 0.5}
          variants={clockVariants}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={{ duration: 0.4 }}
        >
          {minutes.toString().padStart(2, "0")}
        </motion.div>
        <motion.div>:</motion.div>
        <motion.div
          key={seconds}
          variants={clockVariants}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={{ duration: 0.4 }}
        >
          {seconds.toString().padStart(2, "0")}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Clock;
