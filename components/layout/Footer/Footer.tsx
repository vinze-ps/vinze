"use client";
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import VinzeLogo from "@/public/icons/vinze.svg";
import { MAIN_MENU } from "@/lib/dictionaries";
import GitHubIcon from "@/public/icons/github.svg";
import InstagramIcon from "@/public/icons/instagram.svg";
import LinkedInIcon from "@/public/icons/linkedin.svg";
import FacebookIcon from "@/public/icons/facebook.svg";

const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    margin: "30px",
  });

  return (
    <div ref={ref} className="w-full p-0 border-t h-[40vh] w-full z-[0] relative">
      <div className={`${inView ? "fixed" : "hidden"} bottom-0 bg-[black] text-[white] w-full h-[100vh] flex items-end`}>
        <div className="w-full md:py-12 p-6 h-[40vh] container">
          <div className="w-full h-full grid grid-cols-5">
            <div className="col-span-2">
              <div className="w-max">
                <VinzeLogo className="w-full max-w-[140px] [&>g]:fill-[white]" />
                {/* <div className="tracking-widest text-center text-default-400 text-sm mt-2">BY PATRYK SURMACZ</div> */}
              </div>
            </div>
            <div>
              Leading projects
              <ul className="mt-8 text-default-400">
                {Object.keys(MAIN_MENU.projects.items).map((key, index) => {
                  if (key === "allProjects") return null;
                  return (
                    <li className={index > 0 ? "mt-1" : ""} key={key}>
                      {(MAIN_MENU.projects.items as any)[key].title}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              Navigation
              <ul className="mt-8 text-default-400">
                {Object.keys(MAIN_MENU).map((key, index) => {
                  if (key === "allProjects") return null;
                  return (
                    <li className={index > 0 ? "mt-1" : ""} key={key}>
                      {(MAIN_MENU as any)[key].title}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              Follow
              <ul className="mt-8 text-default-400">
                <li>
                  <a className="flex items-center" href="https://github.com/vinze-ps">
                    <GitHubIcon className="[&>path]:fill-[white] me-2 scale-[0.8]" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a className="mt-1 flex items-center" href="https://www.instagram.com/_patryk_surmacz_/">
                    <InstagramIcon className="[&>path]:fill-[white] me-2 scale-[0.8]" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="mt-1 flex items-center" href="https://www.linkedin.com/in/patryk-surmacz-39a12019a/">
                    <LinkedInIcon className="[&>path]:fill-[white] me-2 scale-[0.8]" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a className="mt-1 flex items-center" href="https://www.facebook.com/patryk.surmacz.12/">
                    <FacebookIcon className="[&>path]:fill-[white] me-2 scale-[0.8]" />
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full text-center text-default-400 text-sm py-4">© {new Date().getFullYear()} Patryk Surmacz. All rights reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
