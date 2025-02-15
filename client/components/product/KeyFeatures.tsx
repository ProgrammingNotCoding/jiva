import { KeyIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const KeyFeatures: React.FC = () => {
  return (
    <section className="w-full h-full flex flex-col gap-5 py-24 px-60 mt-5 bg-gradient-to-b from-neutral-950 to-black">
      <div className="w-full flex flex-row justify-between gap-3">
        <Image
          src={"/logo.png"}
          alt="Key Features"
          width={700}
          height={700}
          draggable={false}
        />
        <div className="flex flex-col gap-5">
          <h3 className="text-xl text-neutral-300/80 font-[550] flex flex-row items-center">
            <KeyIcon className="w-8 h-8 mr-3 text-green-400" />
            Key Features
          </h3>
          <h1 className="text-5xl font-[550] w-2/3">
            Digital Shift Handover Logs
          </h1>
          <p className="text-xl text-neutral-300/80 font-normal">
            Structured digital logs for smooth shift transitions, summaries &
            critical alerts.
          </p>
        </div>
      </div>
      <div className="border-t w-full border-neutral-700/50 flex flex-row justify-between gap-10 py-10">
        <div className="w-1/2 h-[50vh] flex flex-col gap-3 p-5">
          <h3 className="text-xl text-white font-[550] flex flex-row items-center">
            Automated Safety Management Plan (SMP)
          </h3>
          <p className="text-xl text-neutral-300/80 font-normal">
            Digitalized hazard identification & risk control. Auto-generated
            reports for compliance audits.
          </p>
          <Image src={"/logo.png"} alt="SMP" width={700} height={700} className="mt-auto" />
        </div>
        <div className="w-1/2 h-[50vh] flex flex-col gap-3 p-5">
          <h3 className="text-xl text-white font-[550] flex flex-row items-center">
            Workforce & Resource Optimization
          </h3>
          <p className="text-xl text-neutral-300/80 font-normal">
            Smart shift scheduling & workforce planning. ERP integration for
            payroll, compliance & resource tracking.
          </p>
          <Image
            src={"/logo.png"}
            alt="Incident Reporting"
            className="mt-auto"
            width={700}
            height={700}
          />
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
