import React from "react";

function Testimonials() {
  return (
    <section className="bg-dark py-24 text-white">
      <div className="mx-auto max-w-[1100px] px-4">
        <h3 className=" mb-16 max-w-full text-center text-3xl leading-[1.4] sm:text-left sm:text-5xl md:w-[700px]">
          Don&apos;t just take our word for it, see the success stories from
          businesses just like yours.
        </h3>
        <div className="flex flex-col items-start gap-8 text-black md:flex-row">
          <div className="w-full rounded-xl bg-white p-10">
            <p className="mb-12 text-xl italic">
              “Our business has seen a significant increase in productivity
              since we started using the Growth app.”
            </p>

            <p className="mb-1 text-lg font-medium">Katherine Smith</p>
            <p>Capodopera</p>
          </div>
          <div className="w-full rounded-xl bg-white p-10">
            <p className="mb-12 text-xl italic">
              “As a small business owner, it&apos;s important to have a tool
              that can help me keep track of everything. The Growth app has been
              a lifesaver for me, allowing me to manage my contacts, schedule
              appointments, and track progress all in one place..”
            </p>

            <p className="mb-1 text-lg font-medium">Johnathan Lee</p>
            <p>Red Bolt</p>
          </div>
          <div className="w-full rounded-xl bg-white p-10">
            <p className="mb-12 text-xl italic ">
              “The dashboards and reporting feature has provided valuable
              insights into our performance and helped u s make data-driven
              decisions. It&apos;s a game changer for us.”
            </p>

            <p className="mb-1 text-lg font-medium">David Wilson</p>
            <p className="">Slide</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
