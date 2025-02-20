import React from "react";
import Loader from "@/components/common/Loader";

const Loading: React.FC = () => {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center gap-8 pb-0 pt-16 md:pt-10 md:pb-32 px-4 sm:px-8 md:px-16 lg:px-60 bg-gradient-to-b from-neutral-950 to-black">
      <Loader />
    </main>
  );
};

export default Loading;
