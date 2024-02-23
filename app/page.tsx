"use client";
import Image from "next/image";
import MainHero from "@/lib/assets/img/main-hero.png";
import { motion } from "framer-motion";
import { childVariants } from "@/utils/transitions";

export default function Home() {
  return (
    <div className="max-w-[1024px] mx-auto flex gap-8">
      <div className="w-full">
        <motion.h1 variants={childVariants} className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl mb-4">
          Hello.
        </motion.h1>
        <motion.p variants={childVariants} className="text-md text-muted-foreground">
          My name is Patryk. I am programmer since 2018. In 2021 I started working as a programmer at
          <motion.a variants={childVariants} href="https://www.p88.pl" target="_blank" className="text-blue-500">
            {" "}
            Personal&apos;88
          </motion.a>
          . At the same time I started working at{" "}
          <motion.a variants={childVariants} href="https://softwarelogic.co/" target="_blank" className="text-blue-500">
            {" "}
            Softwarelogic
          </motion.a>
          . Basically I am a fullstack developer, but I am more focused on frontend. I am also a student of Computer Science at the Zachodniopomorski
          Uniwersytet Szczeciński.
        </motion.p>
      </div>
      <motion.div variants={childVariants}>
        <Image src={MainHero} alt="Main Hero" width={280} height={258} />
      </motion.div>
    </div>
  );
}
