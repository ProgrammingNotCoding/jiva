"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ChevronRightIcon } from "lucide-react";
import React from "react";

const Hero: React.FC = () => {
  const [showH3, setShowH3] = React.useState(false);
  const [showButtonRow, setShowButtonRow] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowH3(true);
    }, 1000);

    const timer2 = setTimeout(() => {
      setShowButtonRow(true);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  const h1Text = `Jiva is a productivity and safety management app for coal mines.`;
  const h3Text = `Designed to streamline shift handovers and digitize safety management
    plans as per DGMS guidelines.`;

  return (
    <section className="w-full h-[85vh] flex flex-col gap-3 py-24 px-40 mt-5">
      <h1>
        <TextGenerateEffect
          duration={0.5}
          className="text-5xl font-medium w-4/5"
          words={h1Text}
        />
      </h1>
      <h3>
        {showH3 && (
          <TextGenerateEffect
            duration={0.5}
            className="text-2xl text-neutral-300/80 font-normal w-2/3"
            words={h3Text}
          />
        )}
      </h3>
      <div className="w-full flex items-center gap-5 mt-5">
        {showButtonRow && (
          <>
            <button className={`bg-white/80 hover:bg-white duration-150 font-medium text-black rounded-xl px-4 py-2 transform transition-all ease-in-out ${showButtonRow ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
              Get Started
            </button>
            <div className="bg-inherit hover:bg-neutral-800 py-1 duration-200 rounded-xl">
            <button className="flex flex-row items-center gap-5 text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-700 font-medium rounded-lg px-4 py-2 transform transition-all ease-in-out animate-fadeInUp">
              Learn More <ChevronRightIcon className="w-5 h-5 text-white" />
            </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
