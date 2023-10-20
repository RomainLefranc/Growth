import React from "react";
import Image from "next/image";
import Link from "next/link";

function Video() {
  return (
    <section className=" bg-black pb-10 pt-3 text-white">
      <div className="mx-auto max-w-[800px] px-4">
        <h2 className="mb-5 mt-10 text-center text-3xl leading-[1.4] sm:text-4xl">
          See how it works and get started in less than 2 minutes
        </h2>
        <div className=" flex flex-col items-center">
          <Link href="/" className="relative mb-5 block aspect-video  w-full">
            <Image
              src="/video-preview.png"
              alt="logo"
              fill
              objectFit="contain"
            />
          </Link>

          <Link
            href="#"
            className="rounded-xl bg-primary px-5 py-3 text-center font-semibold text-white duration-500 hover:opacity-80 "
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Video;
