import Image from "next/image";
import React from "react";

const Overview: React.FC = () => {
  return (
    <section className="w-full min-h-[60vh] px-4 sm:px-8 md:px-16 lg:px-60 py-12 md:py-24 mt-5 flex flex-col items-center gap-4 md:gap-6">
      <div className="flex flex-row items-center gap-2">
        <div className="px-2 py-1 rounded-full bg-green-400"></div>
        <h3 className="text-sm md:text-md font-medium text-neutral-300">Product</h3>
      </div>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[550] text-white tracking-wide leading-tight text-center w-full md:w-4/5 lg:w-3/5">
        The Safe Path to Higher Productivity
      </h1>
      <p className="text-base sm:text-lg lg:text-xl text-neutral-300/80 font-normal text-center w-full md:w-4/5 lg:w-3/5">
        Next-generation productivity and safety management system
        designed for coal mines. Streamlines shift handovers, automates
        safety compliance, and enhances operational efficiency by digitizing
        critical mining workflows.
      </p>
      <div className="w-full h-fit flex justify-center items-center px-4 sm:px-0">
        <Image 
          src={"/clock.png"} 
          alt="Clock" 
          width={700} 
          height={700} 
          className="w-full max-w-[700px] h-auto"
          draggable={false} 
        />
      </div>
    </section>
  );
};

export default Overview;
