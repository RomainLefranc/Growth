import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer className="bg-black text-[#ccc]">
      <div className="mx-auto max-w-[1100px] px-4 pb-10 pt-20">
        <Link href="/" className="relative mb-11 block h-16 w-28">
          <Image src="/logo-white.png" alt="logo" fill objectFit="contain" />
        </Link>
        <div className="mb-10 grid grid-cols-2 justify-center gap-10 sm:grid-cols-footer">
          <div className=" col-span-2 rounded-xl bg-white p-5 text-black sm:col-span-1 sm:max-w-sm">
            <h4 className="mb-3">Subscribe to Newsletter</h4>
            <p className="text-sm">
              Subscribe now to receive tips on how to take your business to the
              next level.
            </p>
            <form className="mt-5 flex gap-2 sm:block md:flex">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-solid border-[#ccc] p-3 sm:mb-2 md:mb-0 "
              />
              <button
                type="submit"
                className=" cursor-pointer rounded-xl border-none bg-primary px-5 py-3 text-center font-semibold text-[#333] duration-500 hover:opacity-80 sm:w-full md:w-auto  "
              >
                Subscribe
              </button>
            </form>
          </div>
          <div>
            <h4 className="mb-3">Company</h4>
            <ul>
              <li className="leading-loose">
                <Link href="#" className="text-[#ccc]">
                  About Us
                </Link>
              </li>
              <li className="leading-loose">
                <Link href="#" className="text-[#ccc]">
                  Our Process
                </Link>
              </li>
              <li className="leading-loose">
                <Link href="#" className="text-[#ccc]">
                  Join Our Team
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3">Resources</h4>
            <ul>
              <li className="leading-loose">
                <Link href="#" className="text-[#ccc]">
                  News
                </Link>
              </li>
              <li className="leading-loose">
                <Link href="#" className="text-[#ccc]">
                  Research
                </Link>
              </li>
              <li className="leading-loose">
                <Link href="#" className="text-[#ccc]">
                  Recent Projects
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3">Contact</h4>
            <ul>
              <li className="leading-loose">
                <Link href="#" className="text-[#ccc]">
                  hello@growthapp.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-4 flex sm:mb-16">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="mr-3 h-8 w-8 text-2xl"
          />
          <FontAwesomeIcon icon={faTwitter} className="h-8 w-8" />
        </div>

        <p className="text-[#ccc]">© 2023 Growth. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
