import React from "react";
import TestimonialCard from "./ui/TestimonialCard";

export type Testimonial = {
  text: string;
  author: string;
  company: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    author: "Katherine Smith",
    company: "Capodopera",
    text: "Our business has seen a significant increase in productivity since we started using the Growth app.",
  },
  {
    author: "Johnathan Lee",
    company: "Red Bolt",
    text: "As a small business owner, it's important to have a tool that can help me keep track of everything. The Growth app has been a lifesaver for me, allowing me to manage my contacts, schedule appointments, and track progress all in one place..",
  },
  {
    author: "David Wilson",
    company: "Slide",
    text: "The dashboards and reporting feature has provided valuable insights into our performance and helped u s make data-driven decisions. It's a game changer for us.",
  },
];

function Testimonials() {
  return (
    <section className="bg-dark py-24 text-white">
      <div className="mx-auto max-w-[1100px] px-4">
        <h3 className=" mb-16 max-w-full text-center text-3xl leading-[1.4] sm:text-left sm:text-5xl md:w-[700px]">
          Don&apos;t just take our word for it, see the success stories from
          businesses just like yours.
        </h3>
        <div className="flex flex-col items-start gap-8 text-black md:flex-row">
          {TESTIMONIALS.map((testimonial, i) => (
            <TestimonialCard {...testimonial} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
