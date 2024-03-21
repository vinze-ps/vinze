"use client";
import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Button } from "@nextui-org/react";
import { AppContext } from "@/store/app-context";

interface Props {
  onClick?: (isOpen: boolean) => void;
  className?: string;
}

const MobileMenuButton = ({ onClick = () => undefined, className }: Props) => {
  const { menuButton } = useContext(AppContext);
  const { scrollY } = useScroll();
  const [isOpen, setOpenIs] = React.useState(false);
  const { scrollY: scrollYWindow } = useScroll();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768) {
      menuButton.setHidden(window.scrollY < 60);
    }
  }, [menuButton]);

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

  useMotionValueEvent(scrollYWindow, "change", (latest) => {
    menuButton.setHidden(latest < 60);
  });

  return (
    <AnimatePresence mode="wait">
      {!menuButton.hidden && (
        <motion.div
          className={`translate-y-[-48px] ${className ?? ""}`}
          initial={{ y: -48 }}
          animate={{ y: 0 }}
          exit={{ y: -48 }}
          transition={{
            ease: [0.74, 0, 0.19, 1.02],
            duration: 0.25,
          }}
        >
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
