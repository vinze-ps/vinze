import { useInView } from "framer-motion";
import React, { useRef } from "react";

const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <div ref={ref} className="w-full p-0 border-t h-[50vh] w-full z-[0] relative">
      <div
        className={`${inView ? "fixed" : "hidden"} bottom-0 bg-[black] text-[white] w-full h-[100vh] flex items-end`}
      >
        <div className="w-full p-6 h-[50vh] container">
          <h1 className="text-6xl font-extrabold tracking-tight lg:text-8xl mb-4">vinze</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
