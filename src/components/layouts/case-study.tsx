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

export default function CaseStudy() {
  return (
    <section className="content-wrapper py-14 lg:py-21" id="case-studies">
      <div className="block space-y-10 lg:space-y-20">
        <div className="flex flex-col items-center justify-center gap-7.5 lg:flex-row lg:justify-start lg:gap-10">
          <Badge>
            <h2>Case Studies</h2>
          </Badge>

          <p className="text-center lg:w-[580px] lg:text-left">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>

        <div className="bg-secondary flex flex-col items-start gap-10 divide-y divide-white rounded-[45px] px-12.5 py-10.5 text-white lg:h-[326px] lg:flex-row lg:gap-14 lg:divide-x lg:divide-y-0 lg:px-15 lg:py-17.5">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="block space-y-5 pb-6 last:pr-0 last:pb-0 lg:pr-14 lg:pb-0"
            >
              <p className="p lg:text-lg">{study.description}</p>

              <Button variant="link" className="has-[>svg]:p-0 lg:w-fit">
                Learn More
                <ArrowIcon />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
