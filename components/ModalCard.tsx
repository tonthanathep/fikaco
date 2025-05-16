"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const Page1 = () => (
  <motion.div className='flex flex-col items-center justify-center'>
    <h2 className='text-lg font-bold'>Page 1</h2>
    <p>Welcome to Page 1 of the modal!</p>
  </motion.div>
);

const Page2 = () => (
  <motion.div className='flex flex-col items-center justify-center'>
    <h2 className='text-lg font-bold'>Page 2</h2>
    <p>This is Page 2, enjoy your stay!</p>
  </motion.div>
);

const Page3 = () => (
  <motion.div className='flex flex-col items-center justify-center'>
    <h2 className='text-lg font-bold'>Page 3</h2>
    <p>You've reached Page 3. Almost there!</p>
  </motion.div>
);

const ModalCard = ({ handleModal }: { handleModal: () => void }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const pages = [
    <Page1 key='page1' />,
    <Page2 key='page2' />,
    <Page3 key='page3' />,
  ];

  const handleNext = () => {
    setPageIndex((prevIndex) => (prevIndex + 1) % pages.length);
  };

  return (
    <motion.div className='flex flex-col w-full h-full items-center justify-center'>
      <motion.div
        initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
        exit={{ y: 20, opacity: 0, filter: "blur(10px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        className='flex flex-col w-[40vw] min-h-[50vh] rounded-2xl bg-white p-4 z-10'
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode='popLayout'>
          <motion.div
            key={pageIndex}
            initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -50, filter: "blur(10px)" }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          >
            {pages[pageIndex]}
          </motion.div>
        </AnimatePresence>
        <motion.button
          className='mt-4 p-2 bg-black text-white rounded-xl'
          onClick={handleNext}
        >
          Next
        </motion.button>
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
