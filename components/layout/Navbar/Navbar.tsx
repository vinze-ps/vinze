"use client";

import React from "react";
import { Navbar as NavbarNEXT, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ListItem } from "./ListItem/ListItem";
import { cn } from "@/lib/utils";
import TD1 from "@/lib/assets/projects/trener-diagnosta/trener-diagnosta-1.png";
import Image from "next/image";
import { MenuButton } from "./MobileMenuButton/MobileMenuButton";
import MobileMenu from "./MobileMenu/MobileMenu";
import { MAIN_MENU } from "@/lib/dictionaries";
import VinzeLogo from "@/public/icons/vinze.svg";

const Navbar = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = React.useState(false);

  return (
    <>
      <NavbarNEXT
        className={`h-14 relative top-0 border-b-1 left-0 bg-[hsla(var(--background))] backdrop-blur-none ${
          mobileMenuIsOpen ? "duration-[3s] transition-all" : ""
        }`}
        // className={`h-14 fixed top-0 border-b-1 left-0 bg-[hsla(var(--background-transparent))] ${
        //   mobileMenuIsOpen ? "bg-[white] duration-[3s] transition-all backdrop-blur-none" : ""
        // }`}
        classNames={{
          item: ["font-sm", "flex", "relative", "h-full", "items-center", "data-[active=true]:after:bg-primary"],
          wrapper: "px-4",
        }}
      >
        <NavbarBrand>
          <Link className="w-[60px]" scroll={false} href="/">
            <VinzeLogo className="w-full" />
            {/* <p className="font-bold text-inherit">
            VINZE
            </p> */}
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavigationMenu delayDuration={0}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link scroll={false} href={MAIN_MENU.home.href} legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-[transparent]")}>
                    {MAIN_MENU.home.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-[transparent]">{MAIN_MENU.projects.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          scroll={false}
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href={MAIN_MENU.projects.items.allProjects.href}
                        >
                          <Image className="rounded-lg" src={TD1} alt={"Trener diagnosta"} width={158} height={88} />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            {MAIN_MENU.projects.items.allProjects.title}
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            {MAIN_MENU.projects.items.allProjects.desc}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href={MAIN_MENU.projects.items.kapla.href} title={MAIN_MENU.projects.items.kapla.title}>
                      {MAIN_MENU.projects.items.kapla.desc}
                    </ListItem>
                    <ListItem href={MAIN_MENU.projects.items.dropui.href} title={MAIN_MENU.projects.items.dropui.title}>
                      {MAIN_MENU.projects.items.dropui.desc}
                    </ListItem>
                    <ListItem
                      href={MAIN_MENU.projects.items.trenerDiagnosta.href}
                      title={MAIN_MENU.projects.items.trenerDiagnosta.title}
                    >
                      {MAIN_MENU.projects.items.trenerDiagnosta.desc}
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-[transparent]">{MAIN_MENU.blog.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          scroll={false}
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href={MAIN_MENU.blog.items.allPosts.href}
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">{MAIN_MENU.blog.items.allPosts.title}</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            {MAIN_MENU.blog.items.allPosts.desc}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href={MAIN_MENU.blog.items.post1.href} title={MAIN_MENU.blog.items.post1.title}>
                      {MAIN_MENU.blog.items.post1.desc}
                    </ListItem>
                    <ListItem href={MAIN_MENU.blog.items.post2.href} title={MAIN_MENU.blog.items.post2.title}>
                      {MAIN_MENU.blog.items.post2.desc}
                    </ListItem>
                    <ListItem href={MAIN_MENU.blog.items.post3.href} title={MAIN_MENU.blog.items.post3.title}>
                      {MAIN_MENU.blog.items.post3.desc}
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              size="sm"
              radius="lg"
              disableAnimation
              as={Link}
              color="primary"
              href={MAIN_MENU.about.href}
              variant="solid"
            >
              {MAIN_MENU.about.title}
            </Button>
          </NavbarItem>
          <NavbarItem>
            <MenuButton onClick={setMobileMenuIsOpen} />
          </NavbarItem>
        </NavbarContent>
      </NavbarNEXT>
      <MobileMenu isOpen={mobileMenuIsOpen} />
    </>
  );
};

export default Navbar;
