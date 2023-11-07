"use client";

import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

type Question = {
  question: string;
  answer: string;
  tag: Tag;
  id: number;
};

enum Tag {
  "all" = 0,
  "gettingStarted" = 1,
  "pricing" = 2,
}

const QUESTIONS: Question[] = [
  {
    question: "How does the contact management feature help me keep track of clients and partners?",
    answer: "Keep track of your contacts, gain valuable insights, analyse live data and performance metrics.",
    tag: Tag.gettingStarted,
    id: 1,
  },
  {
    question: "Can I customize the dashboards and reporting feature to display the metrics that are most important to my business?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad culpa enim blanditiis rem ipsum aliquam, unde iste fugit praesentium eos?",
    tag: Tag.pricing,
    id: 2,
  },
  {
    question: "How does the task management feature help me delegate tasks to my team and track progress?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Incidunt, a! Quaerat, voluptatum. Animi molestias ex quasiexplicabo minima perferendis commodi.",
    tag: Tag.gettingStarted,
    id: 3,
  },
  {
    question: "Can I collaborate with my team in real-time using all tools?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloremque assumenda aut dolorem recusandae quibusdam aliquid. Repellat animi quam vitae.",
    tag: Tag.pricing,
    id: 4,
  },
  {
    question: "Is the app available on all devices?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloremque assumenda aut dolorem recusandae quibusdam aliquid. Repellat animi quam vitae.",
    tag: Tag.gettingStarted,
    id: 5,
  },
  {
    question: "How does the app help me stay compliant when working with freelancers and contractors?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloremque assumenda aut dolorem recusandae quibusdam aliquid. Repellat animi quam vitae.",
    tag: Tag.pricing,
    id: 6,
  },
];

function Faq() {
  const [selectedTag, setSelectedTag] = useState<Tag>(Tag.all);

  const filteredQuestions = selectedTag === Tag.all ? QUESTIONS : QUESTIONS.filter((question) => question.tag == selectedTag);
  console.log(selectedTag);
  return (
    <section>
      <div className="mx-auto max-w-[1100px]">
        <div className="mx-4 border-t border-[#ccc] py-20">
          <div className=" mx-auto max-w-[800px]">
            <h3 className="text-center text-5xl font-medium leading-[1.2] tracking-[-3px]">Frequently Asked Questions</h3>
            <div className="mt-10 flex justify-center">
              <div className="flex justify-center gap-2 rounded-2xl bg-light p-2">
                <button
                  onClick={() => {
                    setSelectedTag(Tag.all);
                  }}
                  className={cn("flex items-center rounded-xl px-6 py-3 text-center font-medium text-black duration-500 hover:bg-primary hover:text-white hover:opacity-80", {
                    "bg-primary text-white": selectedTag == Tag.all,
                  })}>
                  All
                </button>
                <button
                  onClick={() => {
                    setSelectedTag(Tag.gettingStarted);
                  }}
                  className={cn("flex items-center rounded-xl px-6 py-3 text-center font-medium text-black duration-500 hover:bg-primary hover:text-white hover:opacity-80", {
                    "bg-primary text-white": selectedTag == Tag.gettingStarted,
                  })}>
                  Getting started
                </button>
                <button
                  onClick={() => {
                    setSelectedTag(Tag.pricing);
                  }}
                  className={cn("flex items-center rounded-xl px-6 py-3 text-center font-medium text-black duration-500 hover:bg-primary hover:text-white hover:opacity-80", {
                    "bg-primary text-white": selectedTag == Tag.pricing,
                  })}>
                  Pricing
                </button>
              </div>
            </div>

            <Accordion type="single" collapsible className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div key={selectedTag} className="mt-24 flex flex-col gap-6">
                  {filteredQuestions.map((question, i) => (
                    <motion.div
                      key={question.id}
                      initial={{
                        opacity: 0,
                        y: "50%",
                      }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{
                        opacity: 0,
                        y: "50%",
                      }}
                      transition={{
                        delay: i * 0.1,
                        type: "tween",
                      }}>
                      <AccordionItem value={`item-${question.id}`}>
                        <AccordionTrigger>{question.question}</AccordionTrigger>
                        <AccordionContent>{question.answer}</AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
