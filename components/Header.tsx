import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <nav>
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-4 py-5">
        <Link href="/" className="relative block h-16 w-28">
          <Image src="/logo.png" alt="logo" fill objectFit="contain" />
        </Link>

        <div className="hidden sm:block">
          <ul className="flex">
            <li>
              <Link
                href="/"
                className="block px-5 py-[10px] text-[#333] duration-500 hover:text-primary"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-5 py-[10px]  text-[#333] duration-500 hover:text-primary"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-5 py-[10px] text-[#333] duration-500 hover:text-primary"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className=" flex cursor-pointer rounded-xl border-none bg-light px-5 py-3 text-center text-[#333] duration-500 hover:opacity-80"
                href="#"
              >
                Log In
              </Link>
            </li>
          </ul>
        </div>
        <button className="z-50 p-[10px] sm:hidden">
          <div className="my-1 h-1 w-8 rounded bg-[#333]"></div>
          <div className="my-1 h-1 w-8 rounded bg-[#333]"></div>
          <div className="my-1 h-1 w-8 rounded bg-[#333]"></div>
        </button>
        <div className="fixed right-[-300px] top-0 z-30 h-full w-64 shadow transition-all duration-300 ease-in-out">
          <ul className="flex">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <a className="btn" href="#">
                Log In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
