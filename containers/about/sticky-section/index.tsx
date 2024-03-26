"use client";
import React, { useContext, useEffect } from "react";
import { useRef } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { AppContext } from "@/store/app-context";

const StickySection = () => {
  const { menu } = useContext(AppContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const [topOffset, setTopOffset] = React.useState(0);

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   if (latest > 0) {
  //     menu.setButtonTheme("LIGHT");
  //   } else {
  //     menu.setButtonTheme("DARK");
  //   }
  // });

  useEffect(() => {
    const setHandler = () =>
      setTopOffset(
        ((containerRef.current?.clientWidth ?? 0) -
          (containerRef.current?.clientWidth ?? 0) * 0.9 -
          (window.innerHeight - window.innerHeight * 0.9)) /
          2
      );
    setHandler();
    window.addEventListener("resize", setHandler);
    return () => window.removeEventListener("resize", setHandler);
  }, []);

  const scaleBg = useTransform(scrollYProgress, [0, 0.15], [0.9, 1]);
  const yBg = useTransform(scrollYProgress, [0, 0.15], [topOffset, 0]);
  const roundedBg = useTransform(scrollYProgress, [0, 0.15], [32, 0]);

  const opacity1 = useTransform(scrollYProgress, [0.2, 0.35, 0.45, 0.5], [0, 1, 1, 0]);
  const scale1 = useTransform(scrollYProgress, [0.2, 0.35], [0.95, 1]);
  const y1 = useTransform(scrollYProgress, [0.45, 0.5], ["0%", "-75%"]);

  const opacity2 = useTransform(scrollYProgress, [0.45, 0.6, 0.7, 0.75], [0, 1, 1, 0]);
  const scale2 = useTransform(scrollYProgress, [0.45, 0.6], [0.95, 1]);
  const y2 = useTransform(scrollYProgress, [0.7, 0.75], ["0%", "-75%"]);

  const opacity3 = useTransform(scrollYProgress, [0.7, 0.85, 0.95, 1], [0, 1, 1, 0]);
  const scale3 = useTransform(scrollYProgress, [0.7, 0.85], [0.95, 1]);
  const y3 = useTransform(scrollYProgress, [0.95, 1], ["0%", "-75%"]);

  return (
    <div ref={containerRef} className="bg-default-50 w-full h-[300vh] relative">
      <motion.div
        style={{ scale: scaleBg, y: yBg, borderRadius: roundedBg }}
        className="w-full h-[100vh] overflow-hidden sticky top-0 left-0"
      >
        <motion.div
          className="absolute top-[50%] left-[50%] z-[1] text-[white] w-full max-w-[800px] px-4"
          style={{ opacity: opacity1, scale: scale1, y: y1, translateY: "-50%", translateX: "-50%" }}
        >
          <h2 className="text-2xl font-light tracking-tight lg:text-4xl">May 2018</h2>
          <h1 className="mt-2 text-4xl font-bold tracking-tight lg:text-8xl">
            Start of my
            <br />
            programming
            <br />
            journey.
          </h1>
          <p className="mt-8 text-xl">
            Embarked on my programming odyssey, dedicating myself to the craft of developing initial web interfaces and
            simplistic applications. This period marked my induction into the realm of web development, with a
            concentrated focus on mastering HTML, JavaScript, and CSS.
          </p>
        </motion.div>
        <motion.div
          className="absolute top-[50%] left-[50%] z-[1] text-[white] w-full max-w-[800px] px-4"
          style={{ opacity: opacity2, scale: scale2, y: y2, translateY: "-50%", translateX: "-50%" }}
        >
          <h1 className="text-2xl font-light tracking-tight lg:text-4xl">June 2021</h1>
          <h1 className="mt-2 text-4xl font-bold tracking-tight lg:text-8xl">
            I got my
            <br />
            first job
            <br />
            as a developer.
          </h1>
          <p className="mt-8 text-xl">
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
          className="absolute top-[50%] left-[50%] z-[1] text-[white] w-full max-w-[800px] px-4"
          style={{ opacity: opacity3, scale: scale3, y: y3, translateY: "-50%", translateX: "-50%" }}
        >
          <h1 className="text-2xl font-light tracking-tight lg:text-4xl">September 2021</h1>
          <h1 className="mt-2 text-4xl font-bold tracking-tight lg:text-8xl">
            I got my
            <br />
            second job
            <br />
            as a developer.
          </h1>
          <p className="mt-8 text-xl">
            Accepted a challenging position at Jamna Software (renamed Software Logic), also located in Stargard,
            thereby expanding my professional portfolio. My responsibilities in this role encompassed employing HTML,
            JavaScript, CSS, with occasional engagements in Python projects. I am currently leading a pioneering project
            to develop an innovative React-based drag-and-drop interface for the intuitive creation of pop-up elements,
            showcasing my continuous pursuit of technological excellence and innovation in web development.
          </p>
        </motion.div>
        <video
          onContextMenu={(e) => e.preventDefault()}
          controlsList="nodownload"
          className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] min-h-full min-w-full max-w-[none]"
          muted
          autoPlay
          loop
          preload="auto"
        >
          <source src="/api/get_video?name=Abstract_objects_dark" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  );
};

export default StickySection;
