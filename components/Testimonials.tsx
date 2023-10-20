import React from "react";

function Testimonials() {
  return (
    <section className="bg-dark py-10 text-white">
      <div className="mx-auto max-w-[1100px] px-4">
        <h3 className=" mb-10 max-w-full text-center text-3xl leading-[1.4] sm:text-left sm:text-4xl md:w-[700px]">
          Don&apos;t just take our word for it, see the success stories from
          businesses just like yours.
        </h3>
        <div className="flex flex-col items-start gap-8 text-black sm:flex-row">
          <div className="w-full rounded-xl bg-white p-5">
            <p className="mb-7 italic">
              “Our business has seen a significant increase in productivity
              since we started using the Growth app.”
            </p>

            <p className="mb-1 font-semibold">Katherine Smith</p>
            <p>Capodopera</p>
          </div>
          <div className="w-full rounded-xl bg-white p-5">
            <p className="mb-7 italic">
              “As a small business owner, it&apos;s important to have a tool
              that can help me keep track of everything. The Growth app has been
              a lifesaver for me, allowing me to manage my contacts, schedule
              appointments, and track progress all in one place..”
            </p>

            <p className="mb-1 font-semibold">Johnathan Lee</p>
            <p>Red Bolt</p>
          </div>
          <div className="w-full rounded-xl bg-white p-5">
            <p className="mb-7 italic">
              “The dashboards and reporting feature has provided valuable
              insights into our performance and helped us make data-driven
              decisions. It&apos;s a game changer for us.”
            </p>

            <p className="mb-1 font-semibold">David Wilson</p>
            <p>Slide</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
