"use client";

import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Browse Events", href: "/events" },
  { name: "Create Events", href: "/help" },
  { name: "Help", href: "/help" },
  { name: "About Us", href: "/about" },
];

const NavbarPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 mx-0 bg-white transition-shadow ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <span className="cursor-pointer text-xl font-bold">
              <span className="text-[#0080ff]">Ronmes</span> Sphere
            </span>
          </Link>
        </div>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="search" placeholder="Search events" />
          <Button
            type="submit"
            onClick={() => {}}
            className="bg-[#0080ff] hover:bg-[#0066CC]"
          >
            <FaSearch />
          </Button>
        </div>
        <div className="flex space-x-6">
          {navigation.map((item) => (
            <Button
              key={item.name}
              variant="link"
              className="cursor-pointer text-gray-700 hover:text-gray-900"
            >
              <Link href={item.href}>
                <span>{item.name}</span>
              </Link>
            </Button>
          ))}
        </div>
        <div className="flex gap-4">
          <Button variant="ghost">
            <Link href={"#"}>Login</Link>
          </Button>
          <Button className="bg-[#0080ff] hover:bg-[#0066CC]">
            <Link href={"#"}>Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPage;
