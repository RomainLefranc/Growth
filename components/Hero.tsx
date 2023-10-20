import { faLaptop } from "@fortawesome/free-solid-svg-icons/faLaptop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className="mb-12">
      <div className="mx-auto h-[720px] max-w-[1100px] bg-hero-mobile bg-size-hero-mobile bg-bottom bg-no-repeat px-4 md:h-[450px] md:bg-hero md:bg-contain md:bg-center-bottom lg:h-[550px]">
        <div className="text-center lg:w-[70%] lg:text-left">
          <h1 className=" mb-5 mt-10 text-3xl font-semibold leading-[1.2] sm:text-4xl lg:text-5xl ">
            A powerful solution to grow your startup. Fast!
          </h1>
          <p className=" mb-5 text-center md:w-[70%] md:text-left">
            Organize, collaborate, and track progress seamlessly with our
            one-stop-shop startup growth tool.
          </p>
          <div className="flex flex-col gap-3 md:flex-row">
            <Link
              href="#"
              className="rounded-xl bg-primary px-5 py-3 text-center font-semibold text-white duration-500 hover:opacity-80 "
            >
              Get Started
            </Link>
            <Link
              href="#"
              className=" flex flex-nowrap items-center justify-center gap-2 rounded-xl bg-light px-5 py-3 text-center font-semibold text-[#333] duration-500 hover:opacity-80 "
            >
              <FontAwesomeIcon icon={faLaptop} className="h-4 w-4" /> Book a
              Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
