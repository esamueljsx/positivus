import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowIcon } from "../ui/icons";

const services = [
  {
    img: "/seo.png",
    title1: "Search Engine",
    title2: "Optimization",
    bgColor: "bg-muted",
    badge: "default",
    color: "text-primary",
  },
  {
    img: "/ppc.png",
    title1: "Pay-per-click",
    title2: "Advertising",
    bgColor: "bg-primary",
    badge: "white",
    color: "text-primary",
  },
  {
    img: "/smm.png",
    title1: "Social Media",
    title2: "Marketing",
    bgColor: "bg-secondary",
    badge: "white",
    color: "bg-white text-black",
    text: "text-white",
  },
  {
    img: "/email.png",
    title1: "Email",
    title2: "Marketing",
    bgColor: "bg-muted",
    badge: "default",
    color: "text-primary",
  },
  {
    img: "/cc.png",
    title1: "Content",
    title2: "Creation",
    bgColor: "bg-primary",
    badge: "white",
    color: "text-primary",
  },
  {
    img: "/aat.png",
    title1: "Analytics and",
    title2: "Tracking",
    bgColor: "bg-secondary",
    badge: "default",
    color: "bg-white text-black",
    text: "text-white",
  },
];

export default function Services() {
  return (
    <section className="content-wrapper py-14" id="services">
      <div className="block space-y-10 lg:space-y-20">
        <div className="flex flex-col items-center justify-center gap-7.5 lg:flex-row lg:justify-start lg:gap-10">
          <Badge>
            <h2>Services</h2>
          </Badge>

          <p className="text-center lg:w-[580px] lg:text-left">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>

        {/* Cards */}
        <div className="grid items-start gap-7.5 lg:grid-cols-2 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                service.bgColor,
                "thick-shadow flex h-[322px] w-full items-center justify-between gap-6 rounded-[45px] p-[50px] lg:h-[310px]",
              )}
            >
              <div className="flex min-h-full w-full flex-col justify-between gap-6 lg:w-56">
                {/* Title Badge */}
                <h3 className="text-left">
                  <Badge
                    variant={service.badge as "default" | "white" | undefined}
                    size="lg"
                  >
                    {service.title1}
                  </Badge>
                  <Badge
                    variant={service.badge as "default" | "white" | undefined}
                    size="lg"
                  >
                    {service.title2}
                  </Badge>
                </h3>

                {/* Button */}
                <div className="flex items-end justify-between gap-5">
                  <div className="flex items-center gap-[15px]">
                    <Button
                      variant="secondary"
                      size="icon"
                      className={`rounded-full ${service.color}`}
                    >
                      <ArrowIcon />
                    </Button>

                    <h4 className={`hidden lg:block ${service.text}`}>
                      Learn More
                    </h4>
                  </div>

                  <div className="flex h-[129px] w-[165px] justify-end lg:hidden">
                    <Image
                      src={service.img}
                      alt="SEO"
                      width={165}
                      height={129}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="hidden h-[170px] w-[210px] lg:block">
                <Image
                  src={service.img}
                  alt="SEO"
                  width={210}
                  height={166.05}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
