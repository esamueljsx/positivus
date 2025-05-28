"use client";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { MinusIcon, PlusIcon } from "../ui/icons";
import React from "react";

const processes = [
  {
    name: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    name: "Research and Strategy Development",
    description:
      "In this phase, we conduct thorough research on your industry, competitors, and target market. Based on the insights gained, we develop a customized strategy that aligns with your business goals and sets the foundation for successful implementation.",
  },
  {
    name: "Implementation",
    description:
      "With a solid strategy in place, we move on to the execution phase. Our team will implement the planned actions, which may include content creation, campaign setup, website enhancements, and other tactics designed to achieve your objectives effectively and efficiently.",
  },
  {
    name: "Monitoring and Optimization",
    description:
      "Once the strategies are in motion, we continuously monitor the performance of each initiative. By analyzing key metrics and data, we identify areas for improvement and make necessary adjustments to optimize results and ensure maximum return on investment.",
  },
  {
    name: "Reporting and Communication",
    description:
      "Transparent and regular communication is crucial to our process. We provide detailed reports on the progress and performance of our efforts, keeping you informed about the impact of our strategies. This allows us to stay aligned with your goals and address any concerns promptly.",
  },
  {
    name: "Continual Improvement",
    description:
      "Our commitment to excellence means we never stop striving for better results. We continually assess and refine our strategies, incorporating feedback and new trends to enhance performance and drive ongoing success for your business.",
  },
];

export default function Process() {
  const [expanded, setExpanded] = React.useState<number | null>(null);

  return (
    <section className="content-wrapper py-14" id="process">
      <div className="block space-y-10 lg:space-y-20">
        <div className="flex flex-col items-center justify-center gap-7.5 lg:flex-row lg:justify-start lg:gap-10">
          <h2 className="hidden lg:block">
            <Badge>Our Working process</Badge>
          </h2>

          <h2 className="flex flex-col items-center lg:hidden">
            <Badge>Our Working</Badge>
            <Badge>Process</Badge>
          </h2>

          <p className="text-center lg:max-w-[290px] lg:text-left">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col items-start gap-5 lg:gap-7.5">
          {processes.map((service, index) => (
            <div
              key={index}
              data-state={expanded === index && "active"}
              className={cn(
                "bg-muted thick-shadow flex w-full flex-col space-y-5 rounded-[45px] px-7.5 py-7.5 transition-all duration-500 lg:space-y-7.5 lg:px-15 lg:py-10",
                expanded === index && "bg-primary",
              )}
              onClick={() => setExpanded(expanded === index ? null : index)}
            >
              <div className="flex w-full items-center justify-between gap-6">
                {/* Name and Index */}
                <div className="flex items-center gap-8 lg:gap-6">
                  <span className="text-3xl font-medium lg:text-6xl">
                    {index + 1}
                  </span>
                  <span className="text-lg font-medium lg:text-3xl">
                    {service.name}
                  </span>
                </div>

                {/* Expand/Collapse Button */}
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-muted relative size-7.5 cursor-pointer rounded-full border border-black hover:bg-transparent lg:size-14.5"
                  aria-label={expanded === index ? "Close Menu" : "Open Menu"}
                  onClick={() => setExpanded(expanded === index ? null : index)}
                >
                  <PlusIcon className="m-auto size-3.5 duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0 lg:size-7.5" />
                  <MinusIcon className="absolute inset-0 m-auto size-3.5 scale-0 -rotate-180 opacity-0 duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100 lg:size-7.5" />
                </Button>
              </div>

              {/* Show Description */}
              {expanded === index && (
                <p className="border-t-[1.5px] border-black pt-5 lg:pt-7.5">
                  {service.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
