import React from "react";
import Image from "next/image";
import Link from "next/link";
import videoPreview from "@/public/video-preview.png";
function Video() {
  return (
    <section className=" bg-black py-24 text-white">
      <div className="mx-auto max-w-[800px] px-4">
        <h2 className="mb-5 mt-10 text-center text-3xl font-medium leading-[1.4] sm:text-5xl">
          See how it works and get started in less than 2 minutes
        </h2>
        <div className=" mt-11 flex flex-col items-center">
          <Link href="/">
            <Image src={videoPreview} alt="video preview" />
          </Link>

          <Link
            href="#"
            className="mt-16 rounded-xl bg-primary px-5 py-3 text-center font-semibold text-white duration-500 hover:opacity-80"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Video;
