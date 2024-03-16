import React from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";

interface Props {
  onClick?: (isOpen: boolean) => void;
}

const MobileMenuButton = ({ onClick = () => undefined }: Props) => {
  const [isOpen, setOpenIs] = React.useState(false);

  const variant = isOpen ? "opened" : "closed";

  const top = {
    closed: {
      x1: "15%",
      x2: "100%",
      y1: "4",
      y2: "4",
      rotate: 0,
      translateY: 0,
    },
    opened: {
      x1: "0%",
      x2: "100%",
      y1: "4",
      y2: "4",
      rotate: -45,
      translateY: 8,
    },
  };

  const bottom = {
    closed: {
      x1: "30%",
      x2: "100%",
      y1: "12",
      y2: "12",
      rotate: 0,
      translateY: 0,
    },
    opened: {
      x1: "0%",
      x2: "100%",
      y1: "12",
      y2: "12",
      rotate: 45,
      translateY: 0,
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

  return (
    <Button
      onClick={() => {
        onClick(!isOpen);
        setOpenIs(!isOpen);
      }}
      disableRipple
      className={`flex rounded-none p-0 w-[32px] h-[24px] min-w-[32px] min-h-[24px] bg-[transparent] gap-0 overflow-visible md:hidden`}
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
            originY: "4px",
          }}
        />
        <motion.line
          variants={bottom}
          {...lineProps}
          style={{
            originX: "50%",
            originY: "12px",
          }}
        />
      </motion.svg>
    </Button>
  );
};

export { MobileMenuButton as MenuButton };
