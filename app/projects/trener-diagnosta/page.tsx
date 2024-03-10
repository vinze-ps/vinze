"use client";
import { motion } from "framer-motion";
import React from "react";
import Image, { StaticImageData } from "next/image";
import TD1 from "@/lib/assets/projects/trener-diagnosta/trener-diagnosta-1.png";
import TD2 from "@/lib/assets/projects/trener-diagnosta/trener-diagnosta-2.png";
import TD3 from "@/lib/assets/projects/trener-diagnosta/trener-diagnosta-3.png";
import TD4 from "@/lib/assets/projects/trener-diagnosta/trener-diagnosta-4.png";
import TD5 from "@/lib/assets/projects/trener-diagnosta/trener-diagnosta-5.png";
import TD_Login_Laptop from "@/lib/assets/projects/trener-diagnosta/trener-diagnosta-login-laptop.png";
import { childVariants } from "@/lib/transitions";
import AnimatedSectionContainer from "@/components/common/AnimatedSectionContainer/AnimatedSectionContainer";
import ParallaxItem from "@/components/common/ParallaxItem/ParallaxItem";
import Marquee from "react-fast-marquee";
import { Badge } from "@/components/ui/badge";

const TrenerDiagnosta = () => {
  const getImage = (src: StaticImageData, alt: string, className: string) => {
    return (
      <motion.div
        className={`${className} bg-default-200 rounded-xl p-2 overflow-hidden min-w-[400px]`}
        variants={childVariants}
      >
        <Image className="rounded-lg" src={src} alt={alt} width={790} height={441} />
      </motion.div>
    );
  };

  return (
    <>
      <AnimatedSectionContainer className="max-w-[1024px] mx-auto pt-24 px-4">
        <motion.div variants={childVariants}>
          <Badge className="bg-[hsl(var(--light-green))] text-primary" variant={"default"}>
            Website
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl mt-2 mb-4">Trener diagnosta.</h1>
        </motion.div>
        <motion.p variants={childVariants} className="text-md text-muted-foreground">
          A sleek and efficient React/NextJS web application tailored for personal trainers and fitness enthusiasts.
          This platform is engineered to function as both an interactive digital business card and a robust client
          engagement tool, streamlining the process of scheduling and management for personal training services.
        </motion.p>
      </AnimatedSectionContainer>
      <AnimatedSectionContainer
        once
        className="mt-8 w-full bg-[rgb(210,237,237)] py-8 overflow-hidden md:h-[75vh] h-[50vh] min-h-[500px] max-h-[800px]"
      >
        <ParallaxItem offset={200} className="max-w-[2048px] mx-auto w-full flex flex-col gap-8">
          <div className="flex justify-center gap-8 mx-auto">
            {getImage(TD1, "Trener Diagnosta 1", "flex-[100%_0_1]")}
            {getImage(TD2, "Trener Diagnosta 2", "flex-[100%_0_1]")}
            {getImage(TD3, "Trener Diagnosta 3", "flex-[100%_0_1]")}
          </div>
          <div className="flex justify-center gap-8 mx-auto">
            {getImage(TD4, "Trener Diagnosta 4", "flex-[33%_0_1]")}
            {getImage(TD5, "Trener Diagnosta 5", "flex-[33%_0_1]")}
          </div>
        </ParallaxItem>
      </AnimatedSectionContainer>
      <AnimatedSectionContainer className="max-w-[1024px] mx-auto py-8 px-4">
        <motion.p variants={childVariants} className="text-md text-muted-foreground mb-4">
          Key Features: User Authentication: Secure login functionality ensures a personalized and secure experience for
          each user. Online Booking System: An intuitive interface allows clients to easily schedule appointments,
          enhancing convenience and efficiency. Contact Integration: Direct communication channels are embedded within
          the application, facilitating seamless interaction between trainers and clients. Developed with a focus on
          user experience, Trener Diagnosta leverages the latest web technologies to deliver a responsive, fast, and
          accessible platform. Ideal for personal trainers looking to expand their online presence and client
          interaction, this application is a testament to the power of modern web development in the fitness industry.
        </motion.p>
        <motion.p variants={childVariants} className="text-md text-muted-foreground mb-4">
          Technologies: React, NextJS, TypeScript, TailwindCSS, Firebase, Framer Motion, React Hook Form, Yup, and more.
        </motion.p>
        <motion.p variants={childVariants} className="text-md text-muted-foreground mb-8">
          Role: Frontend Developer
        </motion.p>
      </AnimatedSectionContainer>
      <AnimatedSectionContainer className="py-8">
        <motion.div className="relative" variants={childVariants}>
          <Marquee className="!absolute top-[50%] translate-y-[-50%]" autoFill>
            <h1 className="px-1 text-4xl font-extrabold tracking-tight lg:text-6xl">TRENER DIAGNOSTA</h1>
          </Marquee>
          <div className="relative max-w-[1024px] mx-auto z-[1]">
            <Image className="rounded-lg" src={TD_Login_Laptop} alt={"laptop"} width={1200} height={683} />
          </div>
        </motion.div>
      </AnimatedSectionContainer>
    </>
  );
};

export default TrenerDiagnosta;
