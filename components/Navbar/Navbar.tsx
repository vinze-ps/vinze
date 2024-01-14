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

const Navbar = () => {
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
        <NavbarItem isActive>
          <Link className="text-small" aria-current="page" color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link isDisabled className="text-small" aria-current="page" color="foreground" href="#">
            Posts
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link isDisabled className="text-small" aria-current="page" color="foreground" href="#">
            Components
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
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
          <Button
            isDisabled
            size="sm"
            radius="sm"
            disableAnimation
            as={Link}
            color="default"
            href="admin"
            variant="bordered"
          >
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
