import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

function Faq() {
  return (
    <section>
      <div className="mx-auto max-w-[1100px] border-t border-[#ccc]">
        <div className=" mx-auto max-w-[800px] px-4 py-20">
          <h3 className="text-center text-5xl font-medium leading-[1.2] tracking-[-3px]">
            Frequently Asked Questions
          </h3>
          <div className="mt-10 flex justify-center">
            <div className=" flex justify-center gap-2 rounded-2xl  bg-light p-2">
              <Link
                href="#"
                className="rounded-xl bg-primary px-6 py-3 text-center font-medium text-white duration-500 hover:opacity-80"
              >
                All
              </Link>
              <Link
                href="#"
                className="rounded-xl px-6 py-3 text-center font-medium text-black duration-500 hover:bg-primary hover:text-white hover:opacity-80"
              >
                Getting started
              </Link>
              <Link
                href="#"
                className="rounded-xl px-6 py-3 text-center font-medium text-black duration-500 hover:bg-primary hover:text-white hover:opacity-80"
              >
                Pricing
              </Link>
            </div>
          </div>

          <div className="mt-24 flex flex-col gap-6">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How does the contact management feature help me keep track of
                  clients and partners?
                </AccordionTrigger>
                <AccordionContent>
                  Keep track of your contacts, gain valuable insights, analyse
                  live data and performance metrics.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Can I customize the dashboards and reporting feature to
                  display the metrics that are most important to my business?
                </AccordionTrigger>
                <AccordionContent>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                  culpa enim blanditiis rem ipsum aliquam, unde iste fugit
                  praesentium eos?
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How does the task management feature help me delegate tasks to
                  my team and track progress?
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Incidunt, a! Quaerat, voluptatum. Animi molestias ex quasi
                  explicabo minima perferendis commodi.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Can I collaborate with my team in real-time using all tools?
                </AccordionTrigger>
                <AccordionContent>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati doloremque assumenda aut dolorem recusandae
                  quibusdam aliquid. Repellat animi quam vitae.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Is the app available on all devices?
                </AccordionTrigger>
                <AccordionContent>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati doloremque assumenda aut dolorem recusandae
                  quibusdam aliquid. Repellat animi quam vitae.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  How does the app help me stay compliant when working with
                  freelancers and contractors?
                </AccordionTrigger>
                <AccordionContent>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati doloremque assumenda aut dolorem recusandae
                  quibusdam aliquid. Repellat animi quam vitae.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
