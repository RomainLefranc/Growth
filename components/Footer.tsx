import Link from "next/link";
import React from "react";
import Image from "next/image";
import logoWhite from "@/public/logo-white.png";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

const COMPANY_LINKS: { text: string; href: string }[] = [
  {
    text: "About Us",
    href: "/",
  },

  {
    text: "Our Process",
    href: "/",
  },

  {
    text: "Join Our Team",
    href: "/",
  },
];

const RESOURCE_LINKS: { text: string; href: string }[] = [
  {
    text: "News",
    href: "/",
  },

  {
    text: "Research",
    href: "/",
  },

  {
    text: "Recent Projects",
    href: "/",
  },
];

function Footer() {
  return (
    <footer className="bg-black text-[#ccc]">
      <div className="mx-auto flex max-w-[1100px] flex-col px-4 pb-10 pt-20">
        <Link href="/" className="mb-11">
          <Image src={logoWhite} alt="logo" />
        </Link>
        <div className="mb-10 grid grid-cols-2 justify-center gap-10 sm:grid-cols-footer">
          <div className=" col-span-2 rounded-xl bg-white p-5 text-black sm:col-span-1 sm:max-w-sm">
            <h4 className="mb-3">Subscribe to Newsletter</h4>
            <p className="mb-5 text-sm">Subscribe now to receive tips on how to take your business to the next level.</p>
            <form className=" flex gap-2 sm:block md:flex">
              <input type="email" id="email" placeholder="Enter your email" className="w-full rounded-md border border-solid border-[#ccc] p-3 sm:mb-2 md:mb-0 " />
              <button type="submit" className=" cursor-pointer rounded-xl border-none bg-primary px-5 py-3 text-center font-semibold text-white duration-500 hover:opacity-80 sm:w-full md:w-auto  ">
                Subscribe
              </button>
            </form>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Company</h4>
            <ul>
              {COMPANY_LINKS.map(({ href, text }, i) => (
                <li className="leading-loose" key={i}>
                  <Link href={href} className="text-[#ccc]">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Resources</h4>
            <ul>
              {RESOURCE_LINKS.map(({ href, text }, i) => (
                <li className="leading-loose" key={i}>
                  <Link href={href} className="text-[#ccc]">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Contact</h4>
            <ul>
              <li className="leading-loose">hello@growthapp.com</li>
            </ul>
          </div>
        </div>
        <div className="mb-4 flex gap-3 sm:mb-16">
          <Linkedin className="h-8 w-8 text-white" href="/" />
          <Twitter className="h-8 w-8 text-white" href="/" />
          <Facebook className="h-8 w-8 text-white" href="/" />
          <Youtube className="h-8 w-8 text-white" href="/" />
        </div>

        <p className="text-[#ccc]">© 2023 Growth. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
