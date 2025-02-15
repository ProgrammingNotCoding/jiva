import { Box } from "lucide-react";
import Image from "next/image";
import React from "react";

const WhyJiva: React.FC = () => {
  return (
    <section className="w-full self-center h-[50vh] px-60 flex flex-row items-center justify-between gap-5 mt-5">
      <div className="w-1/2 h-full flex flex-col gap-5">
        <h3 className="text-xl text-neutral-300/80 font-[550] flex flex-row items-center">
          <Box className="w-8 h-8 mr-3 text-green-400" />
          Why <span className="ml-2 text-white">Jiva</span>?
        </h3>
        <h1 className="text-5xl font-[550] text-white tracking-wide leading-tight">
          Transforming Mine Safety & Productivity
        </h1>
        <p className="text-xl text-neutral-300/80 font-normal">
          Jiva enhances efficiency with digital shift handovers, automated
          compliance. It also ensures
          predictive maintenance and real-time monitoring for seamless
          operations.
        </p>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center gap-5">
        <Image src={"/logo.png"} alt="Why Jiva" width={700} height={700} draggable={false} />
      </div>
    </section>
  );
};

export default WhyJiva;
