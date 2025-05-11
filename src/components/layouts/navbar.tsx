"use client";

import React, { useState } from "react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import LogoIcon from "../ui/icons";
import { cn } from "@/lib/utils";
import { Menu, Paperclip, X } from "lucide-react";

const navbarItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Use cases", href: "#use-cases" },
  { name: "Pricing", href: "#pricing" },
  { name: "Blog", href: "#blog" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white p-5 lg:p-10">
      <div className="mx-auto max-w-screen-xl">
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
              "flex transition duration-300 ease-linear lg:hidden",
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {!isMenuOpen ? (
              <Menu className="size-7" />
            ) : (
              <X className="size-7" />
            )}
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="fixed top-0 left-0 z-50 h-full lg:hidden">
              <div className="flex h-full w-full bg-black p-5">
                <div className="relative flex h-full flex-col items-center justify-center">
                  <div
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "absolute top-5 right-5 flex transition duration-300 ease-linear",
                    )}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Menu"
                  >
                    {!isMenuOpen ? (
                      <Menu className="size-8" />
                    ) : (
                      <X className="size-8" />
                    )}
                  </div>
                  <ul className="flex flex-col items-center space-y-5 text-base text-white/80">
                    {navbarItems.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/quote"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "mt-10",
                    )}
                  >
                    Request a quote
                    <Paperclip />
                  </Link>
                </div>
              </div>
            </nav>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
