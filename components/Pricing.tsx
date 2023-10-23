import { faArrowDown, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function Pricing() {
  return (
    <section className="my-20">
      <div className="mx-auto max-w-[800px] px-4">
        <h3 className="mb-6 mt-10 text-center text-5xl leading-[1.2]">
          Pricing
        </h3>
        <p className="mb-16 mt-6 text-center text-lg leading-[1.4] md:text-xl">
          Start free and scale while you grow. No hidden fees. Unlimited users
          for free.
        </p>
        <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-light p-14">
            <div>
              <h4 className="mb-4 text-3xl sm:text-4xl">Simple</h4>
              <p className="mb-8">
                Keep track of your contacts, gain valuable insights, analyse
                live data and performance metrics.
              </p>
              <p className="mb-8 border-b border-[#ccc] pb-6">
                <span className="text-3xl sm:text-4xl">Free</span>
                *No credit card needed
              </p>
            </div>
            <div>
              <ul className="flex flex-col gap-3">
                <li className="flex gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="h-6 w-6 flex-shrink-0"
                  />
                  Real-Time Monitoring
                </li>
                <li className="flex gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="h-6 w-6 flex-shrink-0"
                  />
                  Track key performance indicators
                </li>
                <li className="flex gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="h-6 w-6 flex-shrink-0"
                  />
                  Schedule appointments
                </li>
                <li className="flex gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="h-6 w-6 flex-shrink-0"
                  />
                  Organize, delegate and keep track of tasks
                </li>
              </ul>
              <Link
                href="#"
                className="mt-8 block w-full rounded-2xl bg-primary py-4 text-center font-medium text-white duration-500 hover:opacity-80"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="rounded-2xl bg-black p-14 text-white">
            <div>
              <h4 className="mb-4 text-3xl sm:text-4xl">Premium</h4>
              <p className="mb-8">
                Keep track of your contacts, gain valuable insights, analyze
                live data and performance metrics.
              </p>
              <p className="border-[#ccc mb-8 border-b pb-6">
                <span className="text-3xl sm:text-4xl">$49</span> /month
              </p>
            </div>
            <div>
              <p className="mb-3">Everything from the free plan plus:</p>
              <ul className="flex flex-col gap-3">
                <li className="flex gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="h-6 w-6 flex-shrink-0"
                  />
                  Data-driven decisions
                </li>
                <li className="flex gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="h-6 w-6 flex-shrink-0"
                  />
                  Data visualization
                </li>
                <li className="flex gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="h-6 w-6 flex-shrink-0"
                  />
                  Schedule appointments
                </li>
                <li className="flex gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="h-6 w-6 flex-shrink-0"
                  />
                  Store and organise contact information
                </li>

                <li className="flex gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="h-6 w-6 flex-shrink-0"
                  />
                  Teal-time communication tools for messaging and video
                  conferencing
                </li>
              </ul>
              <Link
                href="#"
                className="mt-8 block w-full rounded-2xl bg-primary py-4 text-center font-medium text-white duration-500 hover:opacity-80"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 ">
          <p>
            All prices are in USD and charged per month with applicable taxes
            added at checkout.
          </p>
          <Link href="/" className="flex items-center gap-2 font-semibold">
            View features
            <FontAwesomeIcon
              icon={faArrowDown}
              className="h-4 w-4 flex-shrink-0"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
