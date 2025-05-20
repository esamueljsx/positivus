import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button, buttonVariants } from "../ui/button";
import { ArrowIcon } from "../ui/icons";

const caseStudies = [
  {
    description:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    description:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    description:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

export default function Reviews() {
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

        <div className="bg-secondary hide-scroll flex cursor-grab snap-x snap-mandatory gap-10 overflow-x-auto rounded-[36px] px-12.5 py-10.5 text-white select-none lg:gap-14 lg:rounded-[45px] lg:px-15 lg:py-17.5">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="border-primary relative flex max-w-[606px] min-w-[330px] snap-center flex-col items-start gap-5 rounded-[36px] border-[1.5px] p-7.5 text-white lg:rounded-[45px] lg:p-12"
            >
              <p className="p lg:text-lg">{study.description}</p>

              <span className="border-primary bg-secondary absolute -bottom-[20px] left-12 h-10 w-10 rotate-45 border-r-[1.5px] border-b-[1.5px] lg:left-24" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
