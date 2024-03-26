"use client";
import React, { useContext, useEffect } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Button } from "@nextui-org/react";
import { AppContext } from "@/store/app-context";

const MobileMenuButton = () => {
  const { menu } = useContext(AppContext);
  const { scrollY } = useScroll();

  useEffect(() => {
    const hideButtonHandler = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth < 768) {
        menu.setButtonHidden(false);
      } else {
        menu.setButtonHidden(window.scrollY < 60);
      }
    };
    hideButtonHandler();
    window.addEventListener("resize", hideButtonHandler);
    return () => window.removeEventListener("resize", hideButtonHandler);
  }, [menu]);

  const variant = menu.isOpen ? "opened" : "closed";

  const top = {
    closed: {
      x1: "0%",
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
    stroke: menu.buttonTheme === "LIGHT" || menu.isOpen ? "#fff" : "#000",
    strokeWidth: 2,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    menu.isOpen ? menu.setButtonHidden(false) : window.innerWidth >= 768 && menu.setButtonHidden(latest < 60);
  });

  return (
    <AnimatePresence mode="wait">
      {!menu.buttonHidden && (
        <motion.div
          className={`translate-y-[-64px] fixed md:top-[2rem] top-[1rem] md:right-[2rem] right-[1rem] z-[50]`}
          initial={{ y: -64 }}
          animate={{ y: 0 }}
          exit={{ y: -64 }}
          transition={{
            ease: [0.74, 0, 0.19, 1.02],
            duration: 0.25,
          }}
        >
          <Button
            onClick={() => {
              menu.setIsOpen(!menu.isOpen);
              !menu.isOpen && menu.setButtonHidden(false);
            }}
            disableRipple
            className={`bg-[transparent] flex rounded-none p-0 w-[32px] h-[24px] min-w-[32px] min-h-[24px] gap-0 overflow-visible`}
          >
            <motion.svg
              viewBox="0 0 32 24"
              overflow="visible"
              preserveAspectRatio="none"
              width={32}
              height={24}
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
