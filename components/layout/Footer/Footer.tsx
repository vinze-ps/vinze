"use client";
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import VinzeLogo from "@/public/icons/vinze.svg";

const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <div ref={ref} className="w-full p-0 border-t h-[50vh] w-full z-[0] relative">
      <div className={`${inView ? "fixed" : "hidden"} bottom-0 bg-[black] text-[white] w-full h-[100vh] flex items-end`}>
        <div className="w-full p-6 h-[50vh] container">
          <div className="w-max">
            <VinzeLogo className="w-full max-w-[160px] [&>g]:fill-[white]" />
            <div className="tracking-widest text-center text-default-400 text-sm mt-2">BY PATRYK SURMACZ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
