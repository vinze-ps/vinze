import React from "react";
import { motion, Transition } from "framer-motion";
import { Button } from "@nextui-org/react";

interface Props {
  className?: string;
  onClick?: (isOpen: boolean) => void;
  color?: string;
  strokeWidth?: string | number;
  transition?: Transition;
  lineProps?: any;
}

const MenuButton = ({
  className = "",
  onClick = () => undefined,
  strokeWidth = 3,
  color = "#000",
  transition = { type: "spring", stiffness: 260, damping: 20 },
  lineProps = null,
  ...props
}: Props) => {
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

  const center = {
    closed: {
      opacity: 1,
      x1: "0",
      x2: "100%",
      y1: "12", // środek SVG
      y2: "12",
    },
    opened: {
      opacity: 0,
    },
  };

  const bottom = {
    closed: {
      x1: "30%",
      x2: "100%",
      y1: "20",
      y2: "20",
      rotate: 0,
      translateY: 0,
    },
    opened: {
      x1: "0%",
      x2: "100%",
      y1: "20",
      y2: "20",
      rotate: 45,
      translateY: -8,
    },
  };

  lineProps = {
    stroke: color,
    strokeWidth: strokeWidth as number,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition,
    ...lineProps,
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
      className={`${className} flex rounded-none p-0 w-[32px] h-[24px] min-w-[32px] min-h-[24px] bg-[transparent] gap-0 overflow-visible`}
    >
      <motion.svg
        viewBox="0 0 32 24"
        overflow="visible"
        preserveAspectRatio="none"
        width={width}
        height={height}
        {...props}
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
        <motion.line variants={center} {...lineProps} />
        <motion.line
          variants={bottom}
          {...lineProps}
          style={{
            originX: "50%",
            originY: "20px",
          }}
        />
      </motion.svg>
    </Button>
  );
};

export { MenuButton };
