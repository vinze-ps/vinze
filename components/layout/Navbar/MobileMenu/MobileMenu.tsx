import React, { useContext } from "react";
import { motion } from "framer-motion";
import styles from "./MobileMenu.module.scss";
import { MAIN_MENU } from "@/lib/dictionaries";
import Link from "next/link";
import { AppContext } from "@/store/app-context";

const MobileMenu = () => {
  const { menu } = useContext(AppContext);

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.2,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.6,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.2,
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
      animate={menu.isOpen ? "opened" : "closed"}
      variants={mobileMenuVariant}
      className={`z-[39] ${styles["mobile-menu"]} md:hidden`}
    >
      <motion.ul className="flex-1 flex flex-col items-center justify-center gap-8" variants={ulVariant}>
        {Object.keys(MAIN_MENU).map((navKey) => (
          <motion.li whileTap={{ scale: 0.95 }} key={navKey}>
            <motion.div className="text-4xl text-[white]" variants={liVariant}>
              <Link onClick={() => {}} href={(MAIN_MENU as any)[navKey].href}>
                {(MAIN_MENU as any)[navKey].title}
              </Link>
            </motion.div>
          </motion.li>
        ))}
      </motion.ul>
      <motion.div variants={fadeInVariant} className="text-center text-default-400 pb-4">
        <h5>+48 791 555 302</h5>
        <h5>patryk.surmacz12@gmail.com</h5>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
