import React from "react";
import { Testimonial } from "../Testimonials";

function TestimonialCard({ author, company, text }: Testimonial) {
  return (
    <div className="w-full rounded-xl bg-white p-10">
      <p className="mb-12 text-xl italic">“ {text} ”</p>

      <p className="mb-1 text-lg font-medium">{author}</p>
      <p>{company}</p>
    </div>
  );
}

export default TestimonialCard;
