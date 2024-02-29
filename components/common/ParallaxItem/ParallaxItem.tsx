import { useState, useRef, useLayoutEffect, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring, HTMLMotionProps } from "framer-motion";

interface ParallaxProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  offset?: number;
  reverse?: boolean;
}

const ParallaxItem = ({ children, reverse, offset = 100, ...props }: ParallaxProps): JSX.Element => {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;
  const yRange = useTransform(scrollY, [initial, final], [offset * (reverse ? -1 : 1), -offset * (reverse ? -1 : 1)]);
  const y = useSpring(yRange, { stiffness: 900, damping: 90 });

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    const onResize = () => {
      setElementTop(element.getBoundingClientRect().top + window.scrollY);
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  return (
    <motion.div {...props} ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

export default ParallaxItem;
