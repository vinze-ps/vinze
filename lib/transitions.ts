import { Variants } from "framer-motion";

export const slidePageVariants: Variants = {
  exit: {
    opacity: 1,
    x: 0,
    y: "0vh",
    transitionDuration: "0s",
    transition: {
      duration: 1.2,
      ease: [0.74, 0, 0.19, 1.02],
    },
    transitionEnd: { opacity: 0, transitionDuration: "1s" },
  },
  enter: { x: 0, y: "100vh", transitionDuration: "0s", transitionEnd: { opacity: 1, transitionDuration: "0s" } },
};

export const opacityPageVariants: Variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 1,
      duration: 0,
    },
  },
};

export const perspectivePageVariants: Variants = {
  initial: {
    scale: 1,
    y: 0,
  },
  enter: {
    scale: 1,
    y: 0,
  },
  exit: {
    scale: 0.9,
    y: -150,
    opacity: 0.5,
    transition: {
      duration: 1.2,
      ease: [0.74, 0, 0.19, 1.02],
    },
  },
};

export const animatedSectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export const animatedSectionChildVariants: Variants = {
  hidden: { y: "15%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50 },
  },
};

export const animatedSectionChildOpacityVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { type: "spring", stiffness: 50 } },
};
