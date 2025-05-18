"use client";
import { AnimatePresence, motion } from "motion/react";
import { JSX, useState } from "react";

const ModalCard = ({
  handleModal,
  pages,
}: {
  handleModal: () => void;
  pages: JSX.Element[];
}) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [exitDirection, setExitDirection] = useState<"next" | "prev">("next");

  const handleNext = () => {
    setExitDirection("next");
    setPageIndex((prevIndex) => (prevIndex + 1) % pages.length);
  };

  const handlePrev = () => {
    setExitDirection("prev");
    setPageIndex((prevIndex) => (prevIndex - 1 + pages.length) % pages.length);
  };

  const variants = {
    next: {
      initial: { opacity: 0, x: 50, filter: "blur(10px)" },
      animate: { opacity: 1, x: 0, filter: "blur(0px)" },
      exit: { opacity: 0, x: -50, filter: "blur(10px)" },
    },
    prev: {
      initial: { opacity: 0, x: -50, filter: "blur(10px)" },
      animate: { opacity: 1, x: 0, filter: "blur(0px)" },
      exit: { opacity: 0, x: 50, filter: "blur(10px)" },
    },
  };

  return (
    <motion.div className='flex flex-col w-full h-full items-center justify-center'>
      <motion.div
        initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
        exit={{ y: 20, opacity: 0, filter: "blur(10px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        className='flex flex-col w-full md:max-w-[60vw] lg:max-w-[40vw] min-h-[50vh] rounded-2xl bg-white p-4 z-10 border-[0.5px] border-[#93786d]'
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode='popLayout'>
          <motion.div
            key={pageIndex}
            variants={variants[exitDirection]}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className='flex flex-col w-full h-full'
          >
            {pages[pageIndex]}
          </motion.div>
        </AnimatePresence>
        <div className='flex flex-row w-full items-center justify-between'>
          <motion.button
            className='mt-4 p-2 bg-black text-white rounded-xl'
            onClick={handlePrev}
          >
            Prev
          </motion.button>
          <motion.button
            className='mt-4 p-2 bg-black text-white rounded-xl'
            onClick={handleNext}
          >
            Next
          </motion.button>
        </div>
        <motion.h1
          className='text-md font-light font-sans cursor-pointer mt-2'
          onClick={handleModal}
        >
          Click to close
        </motion.h1>
      </motion.div>
    </motion.div>
  );
};

export default ModalCard;
