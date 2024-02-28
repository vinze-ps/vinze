"use client";
import { motion } from "framer-motion";
import { childVariants } from "@/utils/transitions";
import { Button } from "@nextui-org/react";
import GitHubIcon from "@/public/images/github.svg";
import InstagramIcon from "@/public/images/instagram.svg";
import LinkedInIcon from "@/public/images/linkedin.svg";
import FacebookIcon from "@/public/images/facebook.svg";
import NextJSIcon from "@/public/images/nextjs.svg";
import ReactIcon from "@/public/images/react.svg";
import JSIcon from "@/public/images/js.svg";
import NodeJSIcon from "@/public/images/nodejs.svg";
import WebIcon from "@/public/images/web.svg";
import ReduxIcon from "@/public/images/redux.svg";
import FigmaIcon from "@/public/images/figma.svg";
import HTML5Icon from "@/public/images/html5.svg";
import Lines1 from "@/public/images/lines1.svg";
import Marquee from "react-fast-marquee";
import AnimatedSectionContainer from "@/components/AnimatedSectionContainer/AnimatedSectionContainer";

export default function Home() {
  const marqueeIcons = [
    {
      icon: <HTML5Icon className="[&>path]:fill-[black]" />,
      group: 1,
    },
    {
      icon: <FigmaIcon className="[&>path]:fill-[black]" />,
      group: 1,
    },
    {
      icon: <ReduxIcon className="[&>path]:fill-[black]" />,
      group: 1,
    },
    {
      icon: <WebIcon />,
      group: 1,
    },
    {
      icon: <NextJSIcon className="[&>path]:fill-[black]" />,
      group: 2,
    },
    {
      icon: <ReactIcon className="[&>path]:fill-[black]" />,
      group: 2,
    },
    {
      icon: <JSIcon className="[&>path]:fill-[black]" />,
      group: 2,
    },
    {
      icon: <NodeJSIcon className="[&>path]:fill-[black]" />,
      group: 2,
    },
  ];

  return (
    <>
      <AnimatedSectionContainer className="w-full flex gap-8 md:items-center items-start justify-start relative h-[75vh] md:h-[100vh] pt-32 md:pt-0">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] min-h-full min-w-full max-w-[none]"
            muted
            autoPlay
            loop
            preload="auto"
          >
            <source src="/videos/Wavy_light.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="px-4 max-w-[1024px] mx-auto w-full flex flex-col z-[1]">
          <div className="w-full flex flex-col max-w-[512px]">
            <motion.h1 variants={childVariants} className="text-6xl font-extrabold tracking-tight lg:text-8xl mb-4">
              Hello.
            </motion.h1>
            <motion.p variants={childVariants} className="text-md text-muted-foreground">
              My name is Patryk, and I&apos;ve been a programmer since 2018. In 2021, I embarked on a professional journey as a programmer with{" "}
              <a href="https://www.p88.pl" target="_blank" className="text-[hsl(var(--light-blue))]">
                {" "}
                Personal&apos;88
              </a>
              , concurrently joining the team at{" "}
              <a href="https://softwarelogic.co/" target="_blank" className="text-[hsl(var(--light-blue))]">
                {" "}
                Softwarelogic
              </a>
              . Primarily, I am a full-stack developer with a stronger inclination towards frontend development. Additionally, I am pursuing a degree in
              Computer Science at the West Pomeranian University of Technology in Szczecin.
            </motion.p>
            <motion.div variants={childVariants} className="mt-16">
              <Button size="lg" className="rounded-full bg-[hsl(var(--light-blue))] text-[white]">
                My work
              </Button>
            </motion.div>
            <motion.p variants={childVariants} className="mt-16">
              Find me at
            </motion.p>
            <div className="flex gap-4 mt-2">
              <motion.a variants={childVariants} href="https://github.com/vinze-ps">
                <GitHubIcon className="[&>path]:fill-[black]" />
              </motion.a>
              <motion.a variants={childVariants} href="https://www.instagram.com/_patryk_surmacz_/">
                <InstagramIcon className="[&>path]:fill-[black]" />
              </motion.a>
              <motion.a variants={childVariants} href="https://www.linkedin.com/in/patryk-surmacz-39a12019a/">
                <LinkedInIcon className="[&>path]:fill-[black]" />
              </motion.a>
              <motion.a variants={childVariants} href="https://www.facebook.com/patryk.surmacz.12/">
                <FacebookIcon className="[&>path]:fill-[black]" />
              </motion.a>
            </div>
          </div>
        </div>
      </AnimatedSectionContainer>
      <AnimatedSectionContainer className="my-16 md:my-32 w-full max-w-[1024px] mx-auto flex gap-8 z-[1] relative flex-col md:flex-row px-4">
        <div className={`bg-[hsl(var(--light-purple))] w-full h-[600px] rounded-lg`}>
          <Lines1 className="w-full h-full rounded-lg" />
        </div>
        <div className="bg-default-50 w-full h-[600px] rounded-lg"></div>
      </AnimatedSectionContainer>
      <Marquee className="mb-8 md:mb-16" autoFill gradient gradientColor="#fff">
        {marqueeIcons
          .filter((icon) => icon.group === 1)
          .map((icon, index) => (
            <div key={index} className="px-8 md:px-16">
              {icon.icon}
            </div>
          ))}
      </Marquee>
      <Marquee className="mb-16 md:mb-32" autoFill gradient gradientColor="#fff" direction="right">
        {marqueeIcons
          .filter((icon) => icon.group === 2)
          .map((icon, index) => (
            <div key={index} className="px-8 md:px-16">
              {icon.icon}
            </div>
          ))}
      </Marquee>
    </>
  );
}
