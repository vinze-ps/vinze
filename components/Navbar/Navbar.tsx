import React from "react";
import { Navbar as NavbarNEXT, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

const Navbar = () => {
  return (
    <NavbarNEXT
      classNames={{
        item: ["font-sm", "flex", "relative", "h-full", "items-center", "data-[active=true]:after:bg-primary"],
      }}
    >
      <NavbarBrand>
        <p className="font-bold text-inherit">VINZE</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link aria-current="page" color="foreground" href="#">
            Components
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="page" color="foreground" href="#">
            Posts
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button radius="sm" disableAnimation as={Link} color="default" href="#" variant="bordered">
            Admin
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NavbarNEXT>
  );
};

export default Navbar;
