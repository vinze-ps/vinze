import React from "react";
import Marquee from "react-fast-marquee";
import NextJSIcon from "@/public/icons/nextjs.svg";
import ReactIcon from "@/public/icons/react.svg";
import JSIcon from "@/public/icons/js.svg";
import NodeJSIcon from "@/public/icons/nodejs.svg";
import WebIcon from "@/public/icons/web.svg";
import ReduxIcon from "@/public/icons/redux.svg";
import FigmaIcon from "@/public/icons/figma.svg";
import HTML5Icon from "@/public/icons/html5.svg";

const marqueeIcons = [
  {
    icon: <HTML5Icon className="[&>path]:fill-foreground" />,
    group: 1,
  },
  {
    icon: <FigmaIcon className="[&>path]:fill-foreground" />,
    group: 1,
  },
  {
    icon: <ReduxIcon className="[&>path]:fill-foreground" />,
    group: 1,
  },
  {
    icon: <WebIcon />,
    group: 1,
  },
  {
    icon: <NextJSIcon />,
    group: 2,
  },
  {
    icon: <ReactIcon className="[&>path]:fill-foreground" />,
    group: 2,
  },
  {
    icon: <JSIcon className="[&>path]:fill-foreground" />,
    group: 2,
  },
  {
    icon: <NodeJSIcon className="[&>path]:fill-foreground" />,
    group: 2,
  },
];

const MarqueesSection = () => {
  return (
    <>
      <Marquee className="mb-8 md:mb-16" autoFill gradient gradientColor="hsl(var(--vinze-background))">
        {marqueeIcons
          .filter((icon) => icon.group === 1)
          .map((icon, index) => (
            <div key={index} className="px-8 md:px-16">
              {icon.icon}
            </div>
          ))}
      </Marquee>
      <Marquee className="mb-16 md:mb-32" autoFill gradient gradientColor="hsl(var(--vinze-background))" direction="right">
        {marqueeIcons
          .filter((icon) => icon.group === 2)
          .map((icon, index) => (
            <div key={index} className="px-8 md:px-16">
              {icon.icon}
            </div>
          ))}
      </Marquee>
    </>
  );
};

export default MarqueesSection;
