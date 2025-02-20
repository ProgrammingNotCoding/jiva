
import { Box } from "lucide-react";
import Image from "next/image";
import React from "react";

const WhyJiva: React.FC = () => {
  return (
    <section className="w-full self-center min-h-[80vh] px-4 sm:px-8 md:px-16 lg:px-60 py-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-5 mt-5">
      <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-5">
        <h3 className="text-lg sm:text-xl text-neutral-300/80 font-[550] flex flex-row items-center">
          <Box className="w-6 h-6 md:w-8 md:h-8 mr-3 text-green-400" />
          Why <span className="ml-2 text-white">Jiva</span>?
        </h3>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[550] text-white tracking-wide leading-tight">
          Transforming Mine Safety & Productivity
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-neutral-300/80 font-normal">
          Jiva enhances efficiency with digital shift handovers, automated
          compliance. It also ensures
          predictive maintenance and real-time monitoring for seamless
          operations.
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <Image 
          src={"/logo.png"} 
          alt="Why Jiva" 
          width={700} 
          height={700} 
          className="w-full max-w-[700px] h-auto"
          draggable={false} 
        />
      </div>
    </section>
  );
};

export default WhyJiva;
