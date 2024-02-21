"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import TD1 from "@/lib/assets/img/trener-diagnosta/trener-diagnosta-1.png";
import TD2 from "@/lib/assets/img/trener-diagnosta/trener-diagnosta-2.png";
import TD3 from "@/lib/assets/img/trener-diagnosta/trener-diagnosta-3.png";

const TrenerDiagnosta = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <>
      <div className="max-w-[1024px] mx-auto">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl mb-4">Trener diagnosta.</h1>
        <p className="text-md text-muted-foreground">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, pariatur.</p>
      </div>
      <div ref={ref} className="mt-8 w-full bg-default-100 py-8">
        <motion.div className="mx-auto w-max flex flex-col gap-8">
          <div className="flex gap-8">
            <Image className="rounded-lg mx-auto" src={TD1} alt="Trener Diagnosta 1" width={527} height={294} />
          </div>
          <div className="flex gap-8">
            <Image className="rounded-lg mx-auto" src={TD2} alt="Trener Diagnosta 2" width={527} height={294} />
            <Image className="rounded-lg mx-auto" src={TD3} alt="Trener Diagnosta 3" width={527} height={294} />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default TrenerDiagnosta;
