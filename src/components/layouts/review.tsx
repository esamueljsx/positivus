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

  const scrollToReview = (index: number) => {
    if (!scrollContainerRef.current) return;

    const reviewWidth = scrollContainerRef.current.children[0].clientWidth;
    const gap = 40;
    const scrollPosition = index * (reviewWidth + gap);

    scrollContainerRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? reviews.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToReview(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === reviews.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToReview(newIndex);
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
            className="hide-scroll flex snap-x snap-mandatory items-center gap-10 overflow-x-auto text-white select-none lg:gap-12.5 lg:pb-24"
          >
            {reviews.map((review) => (
              <div key={review.id} className="block snap-center space-y-10">
                <div className="border-primary relative flex min-w-[330px] flex-col items-start gap-5 rounded-[45px] border-[1.5px] p-7.5 text-white lg:min-w-[606px] lg:px-13 lg:py-12">
                  <p className="p lg:text-lg">{`"${review.quote}"`}</p>

                  <span className="border-primary bg-secondary absolute -bottom-[20px] left-12 h-10 w-10 rotate-45 border-r-[1.5px] border-b-[1.5px] lg:left-24" />
                </div>
                <div className="ml-16 flex flex-col lg:ml-28">
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
                    currentIndex === index &&
                      "text-primary rotate-180 transition-transform duration-300 ease-linear",
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
