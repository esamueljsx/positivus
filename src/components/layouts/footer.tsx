import Link from "next/link";
import React from "react";
import LogoIcon from "../ui/icons";
import { buttonVariants } from "../ui/button";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const navbarItems = [
  { name: "About us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Use Cases", href: "#use-cases" },
  { name: "Pricing", href: "#pricing" },
  { name: "Blog", href: "#blog" },
];

const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-screen px-5 pt-5 lg:px-10 lg:pt-10">
      <div className="bg-secondary flex w-full flex-col gap-14 rounded-t-[45px] px-[60px] py-[55px]">
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
            <Linkedin size={16} />
            <Facebook size={16} />
            <Twitter size={16} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
