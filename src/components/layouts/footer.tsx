import Link from "next/link";
import React from "react";
import { LinkedinIcon, LogoIcon, TwitterIcon } from "../ui/icons";
import { Button, buttonVariants } from "../ui/button";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Badge } from "../ui/badge";

const navbarItems = [
  { name: "About us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Use Cases", href: "#use-cases" },
  { name: "Pricing", href: "#pricing" },
  { name: "Blog", href: "#blog" },
];

const Footer = () => {
  return (
    <footer className="container mx-auto lg:px-10 lg:pt-10">
      <div className="bg-secondary flex w-full flex-col gap-9 px-5 pt-12.5 pb-7.5 lg:gap-14 lg:rounded-t-[45px] lg:px-[60px] lg:py-[55px]">
        <div className="flex flex-col items-center justify-between gap-[37px] lg:flex-row lg:gap-15">
          <Link href="/">
            <LogoIcon className="h-7 text-white" />
          </Link>

          <ul className="flex flex-col gap-[15px] text-center text-base/6 text-white/80 decoration-1 underline-offset-2 *:hover:text-white lg:flex-row lg:gap-9 lg:text-lg lg:underline">
            {navbarItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-6 text-white lg:flex">
            <Link
              href="https://www.linkedin.com/"
              aria-label="Linkedin"
              className="flex size-8 items-center justify-center rounded-full bg-white"
            >
              <LinkedinIcon className="text-secondary size-3.5" />
            </Link>
            <Link
              href="https://www.linkedin.com/"
              aria-label="Linkedin"
              className="flex size-8 items-center justify-center rounded-full bg-white"
            >
              <Facebook fill="#191A23" strokeWidth={0} size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/"
              aria-label="Linkedin"
              className="flex size-8 items-center justify-center rounded-full bg-white"
            >
              <TwitterIcon className="text-secondary size-3.5" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center lg:text-left text-center gap-6 lg:flex-row lg:justify-between">
          <div className="block w-full space-y-[27px] lg:max-w-[332px]">
            <Badge size="sm">
              <h4 className="font-medium">Contact Us:</h4>
            </Badge>

            <div className="block space-y-[15px] lg:space-y-5 text-white">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>
                Address: 1234 Main St <br /> Moonstone City, Stardust State
                12345
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col justify-end gap-5 rounded-[14px] bg-[#292A32] p-7.5 lg:min-w-[634px] lg:flex-row lg:px-10 lg:py-14.5">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-[14px] border-[1.2px] border-white/10 bg-transparent px-7.5 py-4.5 text-white outline-none placeholder:text-white/50 focus:bg-transparent"
            />

            <Button>Subscribe to news</Button>
          </div>
        </div>

        <div className="flex items-center gap-6 text-white lg:hidden justify-center">
          <Link
            href="https://www.linkedin.com/"
            aria-label="Linkedin"
            className="flex size-8 items-center justify-center rounded-full bg-white"
          >
            <LinkedinIcon className="text-secondary size-3.5" />
          </Link>
          <Link
            href="https://www.linkedin.com/"
            aria-label="Linkedin"
            className="flex size-8 items-center justify-center rounded-full bg-white"
          >
            <Facebook fill="#191A23" strokeWidth={0} size={18} />
          </Link>
          <Link
            href="https://www.linkedin.com/"
            aria-label="Linkedin"
            className="flex size-8 items-center justify-center rounded-full bg-white"
          >
            <TwitterIcon className="text-secondary size-3.5" />
          </Link>
        </div>

        <div className="flex flex-col items-center gap-[15px] lg:gap-10 border-t border-white/50 pt-9 lg:pt-[50px] lg:flex-row">
          <p className="text-white/80">
            © {new Date().getFullYear()} Positivus. All Rights Reserved.
          </p>

          <Link
            href="#"
            className="text-white/80 underline decoration-1 underline-offset-2 hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
