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
      className="flex flex-row justify-between items-end"
    >
      <h1 className="text-5xl font-medium w-3/5">
        Built for modern mining operations.
      </h1>
      <p className="text-md text-neutral-300/80 font-normal w-3/5">
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
      className="w-full h-full flex flex-col justify-between gap-3 hover:bg-neutral-900 px-8 pt-10 pb-5 rounded-xl duration-200"
    >
      <Image
        src={image}
        alt={title}
        width={700}
        height={700}
        className="h-full"
      />
      <div className="flex flex-row justify-between items-end">
        <h1 className="text-2xl font-medium w-2/3">{title}</h1>
        <button className="rounded-full mb-2 p-1 border border-neutral-500 hover:bg-neutral-500 text-neutral-500 hover:text-white duration-200">
          <Plus className="w-6 h-6" />
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
    <section className="w-full h-[70vh] flex flex-col gap-3 py-24 px-40 mt-5 justify-between">
      <div className="w-full">
        <ProductContent />
      </div>
      <div className="flex flex-row gap-10">
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
