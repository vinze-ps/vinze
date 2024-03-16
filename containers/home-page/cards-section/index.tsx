import AnimatedSectionContainer from "@/components/common/AnimatedSectionContainer/AnimatedSectionContainer";
import { animatedSectionChildVariants } from "@/lib/transitions";
import { motion } from "framer-motion";
import React from "react";
import Lines1 from "@/public/icons/lines1.svg";
import GemImg from "@/lib/assets/images/gem.png";
import Image from "next/image";

const CardSection = () => {
  return (
    <AnimatedSectionContainer className="my-16 md:my-32 w-full max-w-[1024px] mx-auto flex gap-8 z-[1] relative flex-col md:flex-row px-4">
      {/* <div className={`bg-[hsl(var(--purple))] w-full h-[600px] rounded-lg relative p-8 shadow-xl`}> */}
      <div className="bg-default-50 w-full h-[600px] rounded-lg p-8 shadow-xl overflow-hidden relative">
        {/* <Lines1 className="w-full h-full rounded-lg absolute left-0 top-0 z-[0]" /> */}
        {/* <motion.h1 variants={animatedSectionChildVariants} className="text-4xl font-extrabold tracking-tight lg:text-6xl mb-4 text-[hsl(var(--background))]"> */}
        <motion.h1
          variants={animatedSectionChildVariants}
          className="text-4xl font-extrabold tracking-tight lg:text-6xl mb-4 text-primary"
        >
          Design.
        </motion.h1>
        {/* <motion.p variants={animatedSectionChildVariants} className="text-md text-default-200"> */}
        <motion.p variants={animatedSectionChildVariants} className="text-md text-muted-foreground">
          I am passionate about creating beautiful and functional user interfaces. My design process is centered around
          the user experience, ensuring that the final product is both visually appealing and easy to use.
        </motion.p>
      </div>
      <div className="bg-default-50 w-full h-[600px] rounded-lg p-8 shadow-xl overflow-hidden relative">
        <motion.h1
          variants={animatedSectionChildVariants}
          className="text-4xl font-extrabold tracking-tight lg:text-6xl mb-4 text-primary"
        >
          Development.
        </motion.h1>
        <motion.p variants={animatedSectionChildVariants} className="text-md text-muted-foreground">
          I am a full-stack developer with a strong inclination towards frontend development. I specialize in building
          web applications using modern technologies such as React, NextJS, and TailwindCSS.
        </motion.p>
        {/* <Image className="rounded-lg absolute bottom-[0%] left-[50%] translate-x-[-50%]" src={GemImg} alt={"gem"} width={400} height={400} /> */}
      </div>
    </AnimatedSectionContainer>
  );
};

export default CardSection;
