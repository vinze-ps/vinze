import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { animatedSectionChildVariants } from "@/lib/transitions";

const StickySection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.25, 0.3], [0, 1, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.25], [0.95, 1]);
  const y1 = useTransform(scrollYProgress, [0, 0.25, 0.3], ["0%", "0%", "-75%"]);

  const opacity2 = useTransform(scrollYProgress, [0.25, 0.55, 0.6], [0, 1, 0]);
  const scale2 = useTransform(scrollYProgress, [0.25, 0.55], [0.95, 1]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.5, 0.6], ["0%", "0%", "-75%"]);

  const opacity3 = useTransform(scrollYProgress, [0.55, 0.85, 0.9], [0, 1, 0]);
  const scale3 = useTransform(scrollYProgress, [0.55, 0.85], [0.95, 1]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.8, 0.9], ["0%", "0%", "-75%"]);

  return (
    <div ref={containerRef} className="w-full h-[300vh] relative">
      <div className="w-full h-[100vh] overflow-hidden sticky top-0 left-0">
        <motion.div
          className="absolute top-[50%] left-[50%] z-[1]"
          style={{ opacity: opacity1, scale: scale1, y: y1, translateY: "-50%", translateX: "-50%" }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">May 2018</h1>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">start of my programming journey.</h1>
          <p>
            Embarked on my programming odyssey, dedicating myself to the craft of developing initial web interfaces and
            simplistic applications. This period marked my induction into the realm of web development, with a
            concentrated focus on mastering HTML, JavaScript, and CSS.
          </p>
        </motion.div>
        <motion.div
          className="absolute top-[50%] left-[50%] z-[1]"
          style={{ opacity: opacity2, scale: scale2, y: y2, translateY: "-50%", translateX: "-50%" }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">June 2021</h1>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">I got my first job as a developer.</h1>
          <p>
            Secured my inaugural position as a software developer with Personal88, based in Stargard. My tenure
            commenced with developing applications in C# within the WinForms environment. Over time, my role evolved to
            spearhead the development of a comprehensive payroll and HR application, leveraging the robust capabilities
            of React, Redux, C#, ASP.NET, and MS SQL. Concurrently, I conceptualized and deployed a React-based HR
            application aimed at enhancing employee engagement and efficiency. My contributions also extended to
            intermittent development efforts on a mobile application utilizing React Native, demonstrating a versatile
            skill set across multiple platforms.
          </p>
        </motion.div>
        <motion.div
          className="absolute top-[50%] left-[50%] z-[1]"
          style={{ opacity: opacity3, scale: scale3, y: y3, translateY: "-50%", translateX: "-50%" }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">September 2021</h1>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">I got my first job as a developer.</h1>
          <p>
            Accepted a challenging position at Jamna Software (renamed Software Logic), also located in Stargard,
            thereby expanding my professional portfolio. My responsibilities in this role encompassed employing HTML,
            JavaScript, CSS, with occasional engagements in Python projects. I am currently leading a pioneering project
            to develop an innovative React-based drag-and-drop interface for the intuitive creation of pop-up elements,
            showcasing my continuous pursuit of technological excellence and innovation in web development.
          </p>
        </motion.div>
        <video
          className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] min-h-full min-w-full max-w-[none]"
          muted
          autoPlay
          loop
          preload="auto"
        >
          <source src="/videos/Abstract_objects_light.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default StickySection;
