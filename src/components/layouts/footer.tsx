import Link from "next/link";
import React from "react";
import LogoIcon from "../ui/icons";
import { buttonVariants } from "../ui/button";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const navbarItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Use Cases", href: "#use-cases" },
  { name: "Pricing", href: "#pricing" },
  { name: "Blog", href: "#blog" },
];

const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-screen px-5 pt-5 lg:px-10 lg:pt-10">
      <div className="bg-secondary flex-col lg:flex-row flex w-full items-center justify-between rounded-t-[45px] px-[60px] py-[55px]">
        <Link href="/">
          <LogoIcon className="h-7 text-white" />
        </Link>

        <ul className="flex items-center space-x-9 text-base text-white/80 *:hover:text-white">
          {navbarItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6 text-white">
          <Linkedin size={16} />
          <Facebook size={16} />
          <Twitter size={16} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
