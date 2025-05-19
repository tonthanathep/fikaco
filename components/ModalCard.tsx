"use client";
import { motion } from "motion/react";
import { JSX } from "react";

const ModalCard = ({
  handleModal,
  children,
}: {
  handleModal: () => void;
  children: JSX.Element;
}) => {
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
        {children}
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
