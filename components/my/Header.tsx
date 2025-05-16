"use client";
import { motion } from "motion/react";
import Image from "next/image";
import UserBadge from "../UserBadge";

const Header = ({ setIsProfile }: any) => {
  return (
    <motion.div className='flex flex-row py-0 lg:py-2 px-2 gap-2 justify-between items-center'>
      <motion.div className='flex flex-row gap-1 items-end cursor-default'>
        <Image src='/fikaco-logo.svg' width={80} height={20} alt='logo' />
        <motion.div className='text-xs font-normal font-sans bg-black px-2 py-0.5 rounded-full text-white'>
          Alpha
        </motion.div>
      </motion.div>
      <motion.div className='flex flex-row gap-2 items-center'>
        <motion.div className='flex flex-row gap-2.5 items-center p-2'>
          <motion.div className='flex flex-col items-end'>
            <motion.span className='text-sm font-bold font-sans'>
              Fika
            </motion.span>
            <motion.span className='text-xs font-light font-sans'>
              Junior Fika Lv.1
            </motion.span>
          </motion.div>
          <UserBadge />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
