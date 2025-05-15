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
    <nav className="w-full bg-white py-5 lg:py-6">
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
            <div
              className={cn(
                "bg-secondary fixed top-0 left-0 z-50 h-full w-full transform transition-transform duration-500 ease-in-out lg:hidden",
                isMenuOpen ? "translate-x-0" : "-translate-x-full",
              )}
            >
              <div className="content-wrapper relative flex h-full flex-col items-center justify-center p-5">
                <div
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "absolute top-5 right-5 flex text-white transition duration-300 ease-linear",
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
                <ul className="flex flex-col items-center space-y-5 text-xl font-medium text-white/80">
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
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
