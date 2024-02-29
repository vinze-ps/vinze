import useSectionAnimations from "@/hooks/use-section-animations";
import { containerVariants } from "@/utils/transitions";
import { HTMLMotionProps, motion } from "framer-motion";
import React, { useRef } from "react";

const AnimatedSectionContainer = ({ children, ...props }: HTMLMotionProps<"div"> & { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { controls } = useSectionAnimations({ ref });
  return (
    <motion.div {...props} ref={ref} variants={containerVariants} initial="hidden" animate={controls}>
      {children}
    </motion.div>
  );
};

export default AnimatedSectionContainer;
