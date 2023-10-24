import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/logo.png";
import { Menu, User2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/Sheet";

function Header() {
  return (
    <nav>
      <div className="mx-auto flex h-20 max-w-[1100px] items-center justify-between px-4 py-5">
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>

        <div className="hidden md:block">
          <ul className="flex items-center gap-3">
            <li>
              <Link
                href="/"
                className="block px-4 text-[#333] duration-500 hover:text-primary"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 text-[#333] duration-500 hover:text-primary"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 text-[#333] duration-500 hover:text-primary"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="flex cursor-pointer flex-nowrap items-center gap-2 rounded-xl border-none bg-light px-5 py-3 text-center text-[#333] duration-500 hover:opacity-80"
                href="#"
              >
                <User2 className="h-4 w-4" /> Log In
              </Link>
            </li>
          </ul>
        </div>
        <Sheet>
          <SheetTrigger className="z-50 flex h-12 w-12 items-center justify-center rounded-xl bg-light p-[10px] md:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent side={"right"} className="w-[300px]">
            <SheetHeader>
              <SheetDescription>
                <ul className="flex flex-col items-start gap-3">
                  <li>
                    <Link
                      href="/"
                      className="block text-[#333] duration-500 hover:text-primary"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block text-[#333] duration-500 hover:text-primary"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block text-[#333] duration-500 hover:text-primary"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex cursor-pointer flex-nowrap items-center gap-2 rounded-xl border-none bg-light px-5 py-3 text-center text-[#333] duration-500 hover:opacity-80"
                      href="#"
                    >
                      <User2 className="h-4 w-4" /> Log In
                    </Link>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Header;
