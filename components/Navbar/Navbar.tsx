"use client";

import React from "react";
import { Navbar as NavbarNEXT, NavbarBrand, NavbarContent, NavbarItem, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
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

const Navbar = () => {
  const pathname = usePathname();

  return (
    <NavbarNEXT
      className="border-b-1"
      classNames={{
        item: ["font-sm", "flex", "relative", "h-full", "items-center", "data-[active=true]:after:bg-primary"],
        wrapper: "px-4",
      }}
    >
      <NavbarBrand>
        <Link href="/">
          <p className="font-bold text-inherit">VINZE</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavigationMenu delayDuration={0}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-[transparent]")}>Home</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-[transparent]">Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/projects"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">All projects</div>
                        <p className="text-sm leading-tight text-muted-foreground">All projects that I have done so far.</p>
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
        {/* <NavbarItem isActive={pathname.length === 1}>
          <Link className="text-small" aria-current="page" color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname.startsWith("/posts")}>
          <Link className="text-small" aria-current="page" color="foreground" href="#">
            Posts
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem isActive={pathname.startsWith("/projects")}>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={<ChevronDown size="1rem" />}
                radius="sm"
                variant="light"
              >
                Projects
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Projects"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem key="TEST" description="TEST">
              TEST
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button className="bg-[transparent]" size="sm" radius="sm" disableAnimation as={Link} href="admin">
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button size="sm" radius="lg" disableAnimation as={Link} color="primary" href="#" variant="solid">
            About
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NavbarNEXT>
  );
};

export default Navbar;
