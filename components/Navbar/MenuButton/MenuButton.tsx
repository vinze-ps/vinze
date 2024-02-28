import React from "react";
import { motion, Transition } from "framer-motion";
import { Button } from "@nextui-org/react";

{
  /* <MenuButton
  isOpen={isOpen}
  onClick={() => setOpen(!isOpen)}
  lineProps={{ strokeLinecap: "round" }}
/> */
}

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
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
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
  const height = !isOpen ? 24 : 32;
  const unitHeight = 4;
  const unitWidth = (unitHeight * (width as number)) / (height as number);

  return (
    <Button
      onClick={() => {
        onClick(!isOpen);
        setOpenIs((prev) => !prev);
      }}
      disableRipple
      className={`${className} flex rounded-none p-0 w-[32px] h-[24px] min-w-[32px] min-h-[24px] bg-[transparent] gap-0 overflow-visible`}
    >
      <motion.svg
        viewBox={`0 0 ${unitWidth} ${unitHeight}`}
        overflow="visible"
        preserveAspectRatio="none"
        width={width}
        height={height}
        {...props}
        className={`!max-w-[auto] !max-h-[auto]`}
      >
        <motion.line x1="0" x2={unitWidth} y1="0" y2="0" variants={top} {...lineProps} />
        <motion.line x1="0" x2={unitWidth} y1="2" y2="2" variants={center} {...lineProps} />
        <motion.line x1="0" x2={unitWidth} y1="4" y2="4" variants={bottom} {...lineProps} />
      </motion.svg>
    </Button>
  );
};

export { MenuButton };
