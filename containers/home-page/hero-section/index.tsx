"use client";
import AnimatedSectionContainer from "@/components/common/AnimatedSectionContainer/AnimatedSectionContainer";
import { animatedSectionChildVariants } from "@/lib/transitions";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "@nextui-org/react";
import GitHubIcon from "@/public/icons/github.svg";
import InstagramIcon from "@/public/icons/instagram.svg";
import LinkedInIcon from "@/public/icons/linkedin.svg";
import FacebookIcon from "@/public/icons/facebook.svg";

const HeroSection = () => {
  return (
    <AnimatedSectionContainer className="w-full flex gap-8 md:items-center items-start justify-start relative h-[75vh] md:h-[100vh] pt-8 md:pt-0">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          onContextMenu={(e) => e.preventDefault()}
          controlsList="nodownload"
          className="absolute lg:bottom-[50%] bottom-[30%] left-[60%] translate-y-[50%] translate-x-[-50%] max-h-full h-auto min-w-full max-w-[none]"
          muted
          autoPlay
          loop
          preload="auto"
        >
          <source src="/api/get_video?name=Wavy_dark" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="px-4 max-w-[1024px] mx-auto w-full flex flex-col z-[1]">
        <div className="w-full flex flex-col max-w-[512px]">
          <motion.h1 variants={animatedSectionChildVariants} className="text-[white] text-6xl font-extrabold tracking-tight lg:text-8xl mb-4">
            Hello.
          </motion.h1>
          <motion.p variants={animatedSectionChildVariants} className="text-md text-muted-foreground">
            My name is Patryk, and I&apos;ve been a programmer since 2018. In 2021, I embarked on a professional journey as a programmer with{" "}
            <a href="https://www.p88.pl" target="_blank" className="text-[hsl(var(--blue))]">
              {" "}
              Personal&apos;88
            </a>
            , concurrently joining the team at{" "}
            <a href="https://softwarelogic.co/" target="_blank" className="text-[hsl(var(--blue))]">
              {" "}
              Softwarelogic
            </a>
            . Primarily, I am a full-stack developer with a stronger inclination towards frontend development. Additionally, I am pursuing a degree in Computer
            Science at the West Pomeranian University of Technology in Szczecin.
          </motion.p>
          <motion.div variants={animatedSectionChildVariants} className="mt-16">
            <Button disableRipple size="lg" className="rounded-full bg-[hsl(var(--blue))] text-[white]">
              My work
            </Button>
          </motion.div>
          <motion.p variants={animatedSectionChildVariants} className="mt-16">
            Follow
          </motion.p>
          <div className="flex gap-4 mt-2">
            <motion.a variants={animatedSectionChildVariants} href="https://github.com/vinze-ps">
              <GitHubIcon className="[&>path]:fill-[black]" />
            </motion.a>
            <motion.a variants={animatedSectionChildVariants} href="https://www.instagram.com/_patryk_surmacz_/">
              <InstagramIcon className="[&>path]:fill-[black]" />
            </motion.a>
            <motion.a variants={animatedSectionChildVariants} href="https://www.linkedin.com/in/patryk-surmacz-39a12019a/">
              <LinkedInIcon className="[&>path]:fill-[black]" />
            </motion.a>
            <motion.a variants={animatedSectionChildVariants} href="https://www.facebook.com/patryk.surmacz.12/">
              <FacebookIcon className="[&>path]:fill-[black]" />
            </motion.a>
          </div>
        </div>
      </div>
    </AnimatedSectionContainer>
  );
};

export default HeroSection;
