"use client";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import React, { useState } from "react";
import { RingIcon } from "../ui/icons";

export default function Contact() {
  const [selectedOption, setSelectedOption] = useState("Say Hi");
  return (
    <section className="content-wrapper py-14" id="process">
      <div className="block space-y-10 lg:space-y-20">
        <div className="flex flex-col items-center justify-center gap-7.5 lg:flex-row lg:justify-start lg:gap-10">
          <Badge>
            <h2>Contact Us</h2>
          </Badge>

          <p className="text-center lg:max-w-[323px] lg:text-left">
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </p>
        </div>

        {/* Cards */}
        <div className="bg-muted relative grid overflow-hidden rounded-[45px] px-7.5 py-10 lg:grid-cols-3 lg:pt-[60px] lg:pb-20 lg:pl-[100px] items-center">
          <form className="grid max-w-[556px] gap-9 lg:col-span-2 lg:gap-10">
            <div className="flex w-full flex-wrap items-center gap-[35px]">
              {["Say Hi", "Get Quote"].map((option) => (
                <label
                  key={option}
                  htmlFor={option}
                  className="p flex cursor-pointer items-center gap-3.5 font-medium"
                >
                  <input
                    type="radio"
                    name="requestType"
                    id={option}
                    value={option}
                    onChange={() => setSelectedOption(option)}
                    className="size-7 accent-lime-400"
                  />
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </label>
              ))}
            </div>

            <div className="block space-y-5 lg:space-y-[25px]">
              <div className="flex flex-col gap-[5px]">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="border-secondary rounded-[14px] border-[1.2px] bg-white px-7.5 py-4.5 placeholder:text-[#898989] focus:outline-0"
                />
              </div>
              <div className="flex flex-col gap-[5px]">
                <label htmlFor="email">Email*</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  className="border-secondary rounded-[14px] border-[1.2px] bg-white px-7.5 py-4.5 placeholder:text-[#898989] focus:outline-0"
                />
              </div>
              <div className="flex flex-col gap-[5px]">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Message"
                  rows={3}
                  className="border-secondary resize-none rounded-[14px] border-[1.2px] bg-white px-7.5 py-4.5 placeholder:text-[#898989] focus:outline-0"
                ></textarea>
              </div>
            </div>

            <Button
              type="submit"
              variant="secondary"
              className="hidden lg:inline-flex"
            >
              Send Message
            </Button>
          </form>

          <div className="absolute -right-1/4 col-span-1 hidden lg:block">
            <RingIcon className="h-[648px]" />
          </div>
        </div>

        <Button
          type="submit"
          variant="secondary"
          className="-mt-2.5 w-full lg:hidden"
        >
          Send Message
        </Button>
      </div>
    </section>
  );
}
