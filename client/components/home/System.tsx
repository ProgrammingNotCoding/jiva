"use client";

import { motion, useAnimation } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";

const SystemContent: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-between gap-5"
    >
      <Link
        href={"/product"}
        className="text-sm sm:text-md w-fit font-medium gap-2 flex flex-row items-center p-2 group"
      >
        <div className="rounded-full px-[8px] py-[4px] bg-green-400"></div>
        <span className="hidden sm:inline">Shift Handover and Safety Compliance</span>
        <span className="sm:hidden">Shift Handover</span>
        <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-500 group-hover:translate-x-2 group-hover:text-white transition-transform duration-200" />
      </Link>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium w-full sm:w-4/5 md:w-3/5">
        Digitize critical mine operations with Jiva
      </h1>
      <p className="text-lg md:text-md text-neutral-300/80 font-normal w-full sm:w-4/5 md:w-3/5">
        Transition from paper-based logs to an automated, error-free digital
        system. Jiva ensures smooth shift transitions, safety compliance, and
        real-time monitoring—reducing risks and improving operational
        efficiency.
      </p>
    </motion.div>
  );
};

const System: React.FC = () => {
  return (
    <section
      className="w-full min-h-[75vh] bg-gradient-to-b from-neutral-900 to-black 
      flex flex-col gap-3 py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 mt-5 justify-between"
    >
      <SystemContent />
    </section>
  );
};

export default System;
