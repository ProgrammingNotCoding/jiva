import React from "react";
import Overview from "@/components/product/Overview";
import KeyFeatures from "@/components/product/KeyFeatures";
import WhyJiva from "@/components/product/WhyJiva";
const Page: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-black">
        <Overview />
        <WhyJiva />
        <KeyFeatures />
    </main>
  );
};

export default Page;
