import React from "react";
import { motion } from "framer-motion";
import styles from "./MobileMenu.module.scss";

const MOBILE_NAV_ITEMS = [
  {
    id: 0,
    navTitle: "Home",
  },
  {
    id: 1,
    navTitle: "Projects",
  },
  {
    id: 2,
    navTitle: "Blog",
  },
  {
    id: 3,
    navTitle: "About me",
  },
];

const MobileMenu = ({ isOpen }: { isOpen: boolean }) => {
  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "opened" : "closed"}
      variants={mobileMenuVariant}
      className={`z-[39] ${styles["mobile-menu"]} md:hidden`}
    >
      <motion.ul className="h-full flex flex-col items-center justify-center gap-8" variants={ulVariant}>
        {MOBILE_NAV_ITEMS.map((navItem) => (
          <motion.li whileTap={{ scale: 0.95 }} key={navItem.id}>
            <motion.div className="text-4xl" variants={liVariant}>
              {navItem.navTitle}
            </motion.div>
          </motion.li>
        ))}
      </motion.ul>
      <motion.div variants={fadeInVariant} className="text-center">
        <h5>+48 791 555 302</h5>
        <h5>patryk.surmacz12@gmail.com</h5>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
