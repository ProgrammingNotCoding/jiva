"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

type ProductCardProps = {
  title: string;
  image: string;
};

const ProductContent: React.FC = () => {
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
      className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-10"
    >
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium w-full md:w-4/5 lg:w-3/5">
        Built for modern mining operations.
      </h1>
      <p className="text-lg md:text-md text-neutral-300/80 font-normal w-full md:w-4/5 lg:w-3/5">
        Jiva is crafted to enhance productivity and safety in coal mines by
        eliminating manual inefficiencies. It brings a structured, digital-first
        approach to shift handovers and safety compliance, ensuring seamless
        communication and regulatory adherence.
      </p>
    </motion.div>
  );
};

const ProductCard: React.FC<ProductCardProps> = ({ title, image }) => {
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
      className="w-full h-full flex flex-col justify-between gap-3 hover:bg-neutral-900 px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10 pb-4 lg:pb-5 rounded-xl duration-200"
    >
      <Image
        src={image}
        alt={title}
        width={700}
        height={700}
        className="h-full w-full object-contain"
      />
      <div className="flex flex-row justify-between items-end">
        <h1 className="text-xl sm:text-2xl font-medium w-2/3">{title}</h1>
        <button className="rounded-full mb-2 p-1 border border-neutral-500 hover:bg-neutral-500 text-neutral-500 hover:text-white duration-200">
          <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </motion.div>
  );
};

const Product: React.FC = () => {
  const productCards = [
    {
      title: "Shift Handover",
      image: "/logo.png",
    },
    {
      title: "Safety Compliance",
      image: "/logo.png",
    },
    {
      title: "Task Management",
      image: "/logo.png",
    },
  ];

  return (
    <section className="w-full min-h-[70vh] flex flex-col gap-6 sm:gap-10 py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 mt-5">
      <div className="w-full">
        <ProductContent />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {productCards.map((product) => (
          <ProductCard
            key={product.title}
            title={product.title}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Product;
