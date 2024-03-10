import useSectionAnimations from "@/hooks/use-section-animations";
import { containerVariants } from "@/lib/transitions";
import { HTMLMotionProps, motion } from "framer-motion";
import React, { useRef } from "react";

const AnimatedSectionContainer = ({
  children,
  once,
  ...props
}: HTMLMotionProps<"div"> & { children: React.ReactNode; once?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { controls } = useSectionAnimations({ ref, once });
  return (
    <motion.div {...props} ref={ref} variants={containerVariants} initial="hidden" animate={controls}>
      {children}
    </motion.div>
  );
};

export default AnimatedSectionContainer;
