'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './navbar';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TransitionProviderProps {
  children: ReactNode;
}

const TransitionProvider = ({ children }: TransitionProviderProps) => {
  const pathName = usePathname();

  return (
    <>
      {/* Background Gradient */}
      <div
        key={pathName}
        className="fixed inset-0 w-full h-full bg-gradient-to-b from-[#E2F1E7] to-[#629584] -z-10"
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={`${pathName}-top`}
          className="h-screen w-screen fixed bg-[#243642] rounded-b-[100px] z-40"
          initial={{ height: '100vh' }}
          animate={{ height: '0vh' }}
          exit={{ height: '140vh' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <motion.div
          key={`${pathName}-text`}
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-5xl cursor-default z-50 w-fit h-fit same lg:text-8xl"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          key={`${pathName}-bottom`}
          className="h-screen w-screen fixed bg-[#243642] rounded-t-[100px] z-40"
          initial={{ height: '140vh' }}
          animate={{ height: '0vh' }}
          exit={{ height: '140vh' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
        />
      </AnimatePresence>
      <div className="w-screen min-h-screen flex flex-col">
        <div className="h-24">
          <Navbar />
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default TransitionProvider;
