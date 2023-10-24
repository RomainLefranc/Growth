import Link from "next/link";
import React from "react";
import heroMobile from "@/public/hero-bg-mobile.png";
import Image from "next/image";
import { Laptop } from "lucide-react";

function Hero() {
  return (
    <section className="mb-12">
      <div className="mx-auto max-w-[1100px] bg-no-repeat px-4 md:h-[450px] md:bg-hero md:bg-contain md:bg-center-bottom lg:h-[550px]">
        <div className="text-center lg:w-[70%] lg:text-left">
          <h1 className="text-6xlxl mb-5 mt-10 font-medium leading-[1.1] sm:text-4xl lg:text-5xl">
            A powerful solution to grow your startup. Fast!
          </h1>
          <p className="mb-10 text-center md:w-[70%] md:text-left">
            Organize, collaborate, and track progress seamlessly with our
            one-stop-shop startup growth tool.
          </p>
          <div className="mb-12 flex flex-col gap-3 md:flex-row">
            <Link
              href="#"
              className="rounded-xl bg-primary px-5 py-3 text-center font-semibold text-white duration-500 hover:opacity-80"
            >
              Get Started
            </Link>
            <Link
              href="#"
              className="flex flex-nowrap items-center justify-center gap-2 rounded-xl bg-light px-5 py-3 text-center font-semibold text-[#333] duration-500 hover:opacity-80"
            >
              <Laptop className="h-4 w-4" /> Book a Demo
            </Link>
          </div>
          <div className="flex justify-center md:hidden">
            <Image src={heroMobile} alt="preview" className=" max-w-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
