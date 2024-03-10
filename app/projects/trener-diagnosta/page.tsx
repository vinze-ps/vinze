"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import HeroImg from "@/lib/assets/projects/trener-diagnosta/hero.png";
import TD_Laptop_1 from "@/lib/assets/projects/trener-diagnosta/trener-diagnosta-laptop-1.png";
import { childVariants } from "@/lib/transitions";
import AnimatedSectionContainer from "@/components/common/AnimatedSectionContainer/AnimatedSectionContainer";
import ParallaxItem from "@/components/common/ParallaxItem/ParallaxItem";
import Marquee from "react-fast-marquee";
import { Badge } from "@/components/ui/badge";

const TrenerDiagnosta = () => {
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
        className="mt-8 w-full bg-[rgb(210,237,237)] overflow-hidden md:h-[75vh] h-[40vh] min-h-[400px] max-h-[800px] relative"
      >
        <ParallaxItem variants={childVariants} offset={100} className="w-full h-full mx-auto">
          <Image
            className="w-[140%] max-w-[140%] min-w-[1047px] absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]"
            src={HeroImg}
            alt={"hero"}
            width={1920}
            height={748}
          />
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
      <AnimatedSectionContainer once className="py-8">
        <motion.div className="relative" variants={childVariants}>
          <Marquee className="!absolute top-[50%] translate-y-[-50%]" autoFill>
            <h1 className="px-1 text-4xl font-extrabold tracking-tight lg:text-6xl">TRENER DIAGNOSTA</h1>
          </Marquee>
          <div className="relative max-w-[1024px] mx-auto z-[1]">
            <Image className="rounded-lg" src={TD_Laptop_1} alt={"laptop"} width={1200} height={683} />
          </div>
        </motion.div>
      </AnimatedSectionContainer>
    </>
  );
};

export default TrenerDiagnosta;
