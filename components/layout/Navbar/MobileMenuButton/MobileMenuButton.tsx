import React, { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Button } from "@nextui-org/react";

interface Props {
  onClick?: (isOpen: boolean) => void;
  className?: string;
}

const MobileMenuButton = ({ onClick = () => undefined, className }: Props) => {
  const { scrollY } = useScroll();
  const [isOpen, setOpenIs] = React.useState(false);

  const variant = isOpen ? "opened" : "closed";

  const top = {
    closed: {
      x1: "15%",
      x2: "100%",
      y1: "8",
      y2: "8",
      rotate: 0,
      translateY: 0,
    },
    opened: {
      x1: "0%",
      x2: "100%",
      y1: "8",
      y2: "8",
      rotate: -45,
      translateY: 4,
    },
  };

  const bottom = {
    closed: {
      x1: "30%",
      x2: "100%",
      y1: "16",
      y2: "16",
      rotate: 0,
      translateY: 0,
    },
    opened: {
      x1: "0%",
      x2: "100%",
      y1: "16",
      y2: "16",
      rotate: 45,
      translateY: -4,
    },
  };

  const lineProps = {
    stroke: "#000",
    strokeWidth: 2,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  };

  const width = 32;
  const height = 24;

  const { scrollY: scrollYWindow } = useScroll();
  const [hideButton, setHideButton] = useState<boolean>(window.scrollY < 60 && window.innerWidth < 768);

  useMotionValueEvent(scrollYWindow, "change", (latest) => {
    setHideButton(latest < 60);
  });

  return (
    <AnimatePresence mode="wait">
      {!hideButton && (
        <motion.div className={`${className ?? ""}`} animate={{ y: 16 }} exit={{ y: -16 }} transition={{ ease: "easeOut", duration: 0.3 }}>
          <Button
            onClick={() => {
              onClick(!isOpen);
              setOpenIs(!isOpen);
              document.querySelector("html")?.classList.toggle("overflow-hidden");
            }}
            disableRipple
            className={`flex rounded-none p-0 w-[32px] h-[24px] min-w-[32px] min-h-[24px] bg-[transparent] gap-0 overflow-visible`}
          >
            <motion.svg
              viewBox="0 0 32 24"
              overflow="visible"
              preserveAspectRatio="none"
              width={width}
              height={height}
              className={`!max-w-[auto] !max-h-[auto]`}
            >
              <motion.line
                variants={top}
                {...lineProps}
                style={{
                  originX: "50%",
                  originY: "8px",
                }}
              />
              <motion.line
                variants={bottom}
                {...lineProps}
                style={{
                  originX: "50%",
                  originY: "16px",
                }}
              />
            </motion.svg>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { MobileMenuButton as MenuButton };
