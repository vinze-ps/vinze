"use client";

import React from "react";
import {
  Navbar as NavbarNEXT,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <NavbarNEXT
      className="border-b-1"
      classNames={{
        item: ["font-sm", "flex", "relative", "h-full", "items-center", "data-[active=true]:after:bg-primary"],
      }}
    >
      <NavbarBrand>
        <p className="font-bold text-inherit">VINZE</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname.length === 1}>
          <Link className="text-small" aria-current="page" color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname.startsWith("/posts")}>
          <Link isDisabled className="text-small" aria-current="page" color="foreground" href="#">
            Posts
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname.startsWith("/components")}>
          <Link className="text-small" aria-current="page" color="foreground" href="components">
            Components
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem isActive={pathname.startsWith("/projects")}>
            <DropdownTrigger>
              <Button
                isDisabled
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
        </Dropdown>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button size="sm" radius="sm" disableAnimation as={Link} color="default" href="admin" variant="bordered">
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button isDisabled size="sm" radius="sm" disableAnimation as={Link} color="primary" href="#" variant="solid">
            About
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NavbarNEXT>
  );
};

export default Navbar;
