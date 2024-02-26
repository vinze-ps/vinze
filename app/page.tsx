"use client";
import { motion } from "framer-motion";
import { childVariants } from "@/utils/transitions";
import { Button } from "@nextui-org/react";
import GitHub from "@/public/images/github.svg";
import Instagram from "@/public/images/instagram.svg";
import LinkedIn from "@/public/images/linkedin.svg";
import Facebook from "@/public/images/facebook.svg";

export default function Home() {
  return (
    <>
      <video className="absolute top-0 left-0 w-full" muted autoPlay loop preload="auto">
        <source src="/videos/Wavy.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="max-w-[1024px] mx-auto flex gap-8 items-center z-[1] relative min-h-[100vh]">
        <div className="w-full flex flex-col max-w-[612px]">
          <motion.h1
            variants={childVariants}
            className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-8xl mb-4"
          >
            Hello.
          </motion.h1>
          <motion.p variants={childVariants} className="text-md text-muted-foreground">
            My name is Patryk. I am programmer since 2018. In 2021 I started working as a programmer at
            <motion.a variants={childVariants} href="https://www.p88.pl" target="_blank" className="text-blue-500">
              {" "}
              Personal&apos;88
            </motion.a>
            . At the same time I started working at{" "}
            <motion.a
              variants={childVariants}
              href="https://softwarelogic.co/"
              target="_blank"
              className="text-blue-500"
            >
              {" "}
              Softwarelogic
            </motion.a>
            . Basically I am a fullstack developer, but I am more focused on frontend. I am also a student of Computer
            Science at the Zachodniopomorski Uniwersytet Szczeciński.
          </motion.p>
          <motion.div variants={childVariants} className="mt-16">
            <Button size="lg" className="rounded-full bg-primary text-default">
              My work
            </Button>
          </motion.div>
          <motion.p className="mt-16">Find me at</motion.p>
          <div className="flex gap-4 mt-2">
            <motion.a href="https://github.com/vinze-ps">
              <GitHub />
            </motion.a>
            <motion.a href="https://www.instagram.com/_patryk_surmacz_/">
              <Instagram />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/patryk-surmacz-39a12019a/">
              <LinkedIn />
            </motion.a>
            <motion.a href="https://www.facebook.com/patryk.surmacz.12/">
              <Facebook />
            </motion.a>
          </div>
        </div>
      </div>
      <div className="mt-4 w-full max-w-[1024px] mx-auto flex gap-8 z-[1] relative">
        <div className="bg-[hsl(var(--purple))] w-full h-[400px] rounded-lg"></div>
        <div className="bg-default-50 w-full h-[400px] rounded-lg"></div>
      </div>
    </>
  );
}
