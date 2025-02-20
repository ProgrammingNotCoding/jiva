import Image from "next/image";
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="">
      <Image
        src="/loader.svg"
        alt="Loader"
        width={200}
        height={200}
        className="mb-20"
      />
    </div>
  );
};

export default Loader;
