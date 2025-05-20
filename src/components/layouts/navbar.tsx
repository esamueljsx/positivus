"use client";
import React, { useState } from "react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { LogoIcon } from "../ui/icons";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navbarItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Use cases", href: "#case-studies" },
  { name: "Pricing", href: "#pricing" },
  { name: "Blog", href: "#blog" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="relative w-full bg-white py-5 lg:py-6"
      data-state={isMenuOpen && "active"}
    >
      <div className="content-wrapper">
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="outline-0 select-none">
            <LogoIcon className="h-7 text-black lg:h-9" />
          </Link>

          <div className="hidden items-center justify-end gap-10 lg:flex">
            <ul className="flex items-center space-x-10 text-base text-black/80 *:hover:text-black">
              {navbarItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>

            <Link
              href="/quote"
              className={buttonVariants({ variant: "outline" })}
            >
              Request a quote
            </Link>
          </div>

          <div
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "relative flex cursor-pointer transition duration-300 ease-linear lg:hidden",
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen == true ? "Close Menu" : "Open Menu"}
          >
            <Menu className="m-auto size-6 duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0" />
            <X className="absolute inset-0 m-auto size-6 scale-0 -rotate-180 opacity-0 duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100" />
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="thick-shadow animate-in slide-in-from-bottom-1/2 fade-in-0 absolute top-full right-5 left-5 flex flex-col gap-5 rounded-[45px] border bg-white p-6 duration-300 lg:hidden">
              <ul className="flex flex-col items-center gap-5 text-lg font-medium">
                {navbarItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/quote"
                className={buttonVariants({ variant: "outline" })}
              >
                Request a quote
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
