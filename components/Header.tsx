"use client";
import { motion } from "motion/react";
import Image from "next/image";

const Header = () => {
  return (
    <motion.div className='flex flex-row py-3 px-2 gap-2 justify-between items-center'>
      <Image src='/fikaco-logo.svg' width={80} height={20} alt='logo' />
      <h1 className='text-md font-light font-sans'>Hello, User</h1>
    </motion.div>
  );
};

export default Header;
