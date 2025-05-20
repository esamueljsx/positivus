import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { HeroIcon } from "../ui/icons";

export default function Hero() {
  return (
    <section className="content-wrapper py-6 lg:py-15">
      <div className="grid grid-cols-1 items-center justify-between gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-5 lg:gap-[35px]">
          <h1>Navigating the digital landscape for success</h1>
          <h4 className="hidden lg:block lg:w-[498px]">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </h4>
          <div className="block lg:hidden">
            <HeroIcon />
          </div>

          <p className="block lg:hidden">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <Link
            href=""
            className={buttonVariants({
              variant: "secondary",
              className: "lg:w-fit",
            })}
          >
            Book a consultation
          </Link>
        </div>

        <div className="hidden lg:block">
          <HeroIcon />
        </div>
      </div>
    </section>
  );
}
