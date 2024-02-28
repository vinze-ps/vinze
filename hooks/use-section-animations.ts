import { useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";

const useSectionAnimations = ({ ref }: { ref: any }) => {
  const controls = useAnimation();
  const inView = useInView(ref, {
    margin: "30px",
    once: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return { controls };
};

export default useSectionAnimations;
