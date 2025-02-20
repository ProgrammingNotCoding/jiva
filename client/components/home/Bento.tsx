"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import Image from "next/image";

type BentoCardProps = {
  title: string;
  description: string;
  image: string;
};

const BentoCard: React.FC<BentoCardProps> = ({ title, description, image }) => {
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
      className="w-full h-full flex flex-col justify-between items-center gap-3 hover:bg-neutral-950 border border-neutral-700/50 hover:border-neutral-700 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 duration-200"
    >
      <div className="flex-grow w-full flex justify-center">
        <Image 
          src={image} 
          alt={title} 
          width={700} 
          height={700} 
          className="h-48 sm:h-56 md:h-64 lg:h-72 w-fit object-contain" 
        />
      </div>
      <div className="flex flex-col gap-3 justify-between flex-grow w-full">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium w-full sm:w-3/4 lg:w-2/3">{title}</h1>
        <p className="text-sm sm:text-md text-neutral-300/80 font-normal">{description}</p>
      </div>
    </motion.div>
  );
};

const Bento: React.FC = () => {
  const bentoCards = [
    {
      title: "Streamline shift handovers",
      description: "Ensure smooth transitions between shifts with a structured, real-time digital log system—minimizing data loss and miscommunication.",
      image: "/logo.png",
    },
    {
      title: "Centralized safety management",
      description: "Digitally implement your Safety Management Plan (SMP) as per DGMS guidelines, ensuring risk mitigation and regulatory compliance.",
      image: "/logo.png",
    },
    {
      title: "Automate reporting & insights",
      description: "Jiva automatically compiles shift logs into organized PDF reports, keeping all stakeholders informed and reducing administrative burden.",
      image: "/logo.png",
    },
    {
      title: "Seamless ERP integration",
      description: "Easily connect Jiva with your existing ERP software, ensuring secure and comprehensive mine management.",
      image: "/logo.png",
    },
  ];

  return (
    <section className="w-full h-full flex flex-col gap-3 py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {bentoCards.map((bento) => (
          <BentoCard
            key={bento.title}
            title={bento.title}
            description={bento.description}
            image={bento.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Bento;
