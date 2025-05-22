"use client";
import React, { useRef } from "react";
import { Badge } from "../ui/badge";
import { ArrowIcon, StarIcon } from "../ui/icons";
import { cn } from "@/lib/utils";

const reviews = [
  {
    id: 1,
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    id: 2,
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    id: 3,
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    id: 4,
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    id: 5,
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    if (scrollContainerRef.current) {
      const reviewWidth = scrollContainerRef.current.children[0].clientWidth;
      const gap = 40; // 10 * 4 (gap-10 = 2.5rem = 40px)
      const scrollPosition =
        currentIndex === 0
          ? (reviews.length - 1) * (reviewWidth + gap)
          : (currentIndex - 1) * (reviewWidth + gap);
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    if (scrollContainerRef.current) {
      const reviewWidth = scrollContainerRef.current.children[0].clientWidth;
      const gap = 40; // 10 * 4 (gap-10 = 2.5rem = 40px)
      const scrollPosition =
        currentIndex === reviews.length - 1
          ? 0
          : (currentIndex + 1) * (reviewWidth + gap);
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="content-wrapper py-14 lg:py-20" id="reviews">
      <div className="block space-y-10 lg:space-y-20">
        <div className="flex flex-col items-center justify-center gap-7.5 lg:flex-row lg:justify-start lg:gap-10">
          <Badge>
            <h2>Testimonials</h2>
          </Badge>

          <p className="text-center lg:w-[472px] lg:text-left">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
            about Our Digital Marketing Services
          </p>
        </div>

        <div className="bg-secondary block space-y-15 rounded-[45px] px-7.5 pt-7.5 pb-15 lg:space-y-30 lg:px-0 lg:pt-[84px] lg:pb-[68px]">
          <div
            ref={scrollContainerRef}
            className="hide-scroll flex snap-x snap-mandatory items-center gap-10 overflow-x-auto lg:pb-24 text-white select-none lg:gap-12.5"
          >
            {reviews.map((review, index) => (
              <div key={review.id} className="block snap-center space-y-10">
                <div className="border-primary relative flex min-w-[330px] flex-col items-start gap-5 rounded-[45px] border-[1.5px] p-7.5 text-white lg:min-w-[606px] lg:px-13 lg:py-12">
                  <p className="p lg:text-lg">{`"${review.quote}"`}</p>

                  <span className="border-primary bg-secondary absolute -bottom-[20px] left-12 h-10 w-10 rotate-45 border-r-[1.5px] border-b-[1.5px] lg:left-24" />
                </div>
                <div className="ml-16 lg:ml-28 flex flex-col">
                  <p className="text-primary">John Smith</p>
                  <p className="text-white">Marketing Director at XYZ Corp</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto flex max-w-xl items-center justify-between gap-4 select-none">
            <ArrowIcon
              className="size-5 -rotate-150 cursor-pointer text-white outline-none"
              onClick={handlePrevious}
              role="button"
              tabIndex={0}
              aria-label="Previous review"
            />
            <div className="flex items-center gap-[19px]">
              {reviews.map((review, index) => (
                <StarIcon
                  key={review.id}
                  className={cn(
                    "size-3.5 cursor-pointer text-white outline-none",
                    currentIndex === index && "text-primary",
                  )}
                  onClick={() => setCurrentIndex(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
            <ArrowIcon
              className="size-5 rotate-30 cursor-pointer text-white outline-none"
              onClick={handleNext}
              role="button"
              tabIndex={0}
              aria-label="Next review"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
