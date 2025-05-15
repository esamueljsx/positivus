import Link from "next/link";
import { CTAIcon } from "../ui/icons";
import { buttonVariants } from "../ui/button";

export default function CTA() {
  return (
    <section className="content-wrapper py-7" id="get-started">
      <div className="bg-muted flex items-center gap-40 rounded-[45px] px-15 py-15 lg:h-[347px] lg:px-15 lg:py-0">
        {/* Text and Button */}
        <div className="flex flex-col items-start gap-6.5 lg:w-[500px]">
          <h3>Let’s make things happen</h3>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Link
            href=""
            className={buttonVariants({
              variant: "secondary",
              className: "lg:w-fit",
            })}
          >
            Get your free proposal
          </Link>
        </div>
        {/* Image */}
        <div className="hidden h-[394.269px] w-[359px] lg:block">
          <CTAIcon />
        </div>
      </div>
    </section>
  );
}
