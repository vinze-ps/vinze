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
import TD1 from "@/lib/assets/img/trener-diagnosta/trener-diagnosta-1.png";
import Image from "next/image";
import { MenuButton } from "./MobileMenuButton/MobileMenuButton";
import MobileMenu from "./MobileMenu/MobileMenu";

const Navbar = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = React.useState(false);

  return (
    <>
      <NavbarNEXT
        className="fixed top-0 left-0"
        classNames={{
          item: ["font-sm", "flex", "relative", "h-full", "items-center", "data-[active=true]:after:bg-primary"],
          wrapper: "px-4",
        }}
      >
        <NavbarBrand>
          <Link scroll={false} href="/">
            <p className="font-bold text-inherit">VINZE</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavigationMenu delayDuration={0}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link scroll={false} href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-[transparent]")}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-[transparent]">Projects</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          scroll={false}
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/projects"
                        >
                          <Image className="rounded-lg" src={TD1} alt={"Trener diagnosta"} width={158} height={88} />
                          <div className="mb-2 mt-4 text-lg font-medium">All projects</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            All projects that I have done so far.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/projects/kapla" title="P88-KaPla">
                      HR and payroll system for small and medium-sized companies.
                    </ListItem>
                    <ListItem href="/projects/dropui" title="Drop UI">
                      Drag & drop popups builder.
                    </ListItem>
                    <ListItem href="/projects/trener-diagnosta" title="Trener Diagnosta">
                      Personal trainer website.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-[transparent]">Blog</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          scroll={false}
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/blog"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">...</div>
                          <p className="text-sm leading-tight text-muted-foreground">...</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/" title="...">
                      ...
                    </ListItem>
                    <ListItem href="/" title="...">
                      ...
                    </ListItem>
                    <ListItem href="/" title="...">
                      ...
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button size="sm" radius="lg" disableAnimation as={Link} color="primary" href="#" variant="solid">
              About me
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
