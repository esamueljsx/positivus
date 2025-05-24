import { Badge } from "../ui/badge";
import { LinkedinIcon } from "../ui/icons";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "../ui/button";

const processes = [
  {
    img: "/teams/john-smith.png",
    name: "John Smith",
    role: "CEO and Founder",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    img: "/teams/jane-doe.png",
    name: "Jane Doe",
    role: "Director of Operations",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    img: "/teams/michael-brown.png",
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    img: "/teams/emily-johnson.png",
    name: "Emily Johnson",
    role: "PPC Manager",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    img: "/teams/brian-williams.png",
    name: "Brian Williams",
    role: "Social Media Specialist",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    img: "/teams/sarah-kim.png",
    name: "Sarah Kim",
    role: "Content Creator",
    description:
      "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
  },
];

export default function Teams() {
  return (
    <section className="content-wrapper py-14" id="teams">
      <div className="block space-y-10 lg:space-y-20">
        <div className="flex flex-col items-center justify-center gap-7.5 lg:flex-row lg:justify-start lg:gap-10">
          <Badge>
            <h2>Teams</h2>
          </Badge>

          <p className="text-center lg:max-w-[472px] lg:text-left">
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </p>
        </div>

        {/* Cards */}
        <div className="grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {processes.map((service, index) => (
            <div
              key={index}
              className="thick-shadow flex h-full w-full flex-col space-y-5 rounded-[45px] bg-white px-7.5 py-7.5 lg:space-y-7.5"
            >
              <div className="relative flex items-end justify-start gap-5">
                <Image
                  src={service.img}
                  alt={service.name}
                  width={100}
                  height={100}
                />
                <div className="block">
                  <h4 className="!font-medium">{service.name}</h4>
                  <p>{service.role}</p>
                </div>
                <Link
                  href="https://www.linkedin.com/"
                  className="bg-secondary absolute top-0 right-0 flex size-8 items-center justify-center rounded-full"
                >
                  <LinkedinIcon className="fill-primary size-3.5" />
                </Link>
              </div>

              {/* Show Description */}
              <p className="border-t-[1.5px] border-black pt-5 lg:pt-7.5">
                {service.description}
              </p>
            </div>
          ))}

          <Link
            href="#teams"
            className={buttonVariants({
              variant: "secondary",
              className: "col-span-full lg:ml-auto lg:w-fit",
            })}
          >
            See all team
          </Link>
        </div>
      </div>
    </section>
  );
}
