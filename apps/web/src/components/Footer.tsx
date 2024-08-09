import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const FooterMenu = [
  { name: "About Us", href: "/about" },
  { name: "Help", href: "/help" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0080ff] text-white">
      <div className="container max-w-7xl px-4 py-6 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start py-6">
          <p className="text-2xl lg:text-3xl font-bold">Ronmes Sphere</p>
          <div className="mt-4 lg:mt-0 flex flex-col lg:flex-row gap-4 lg:gap-8">
            {FooterMenu.map((item) => (
              <Button
                key={item.name}
                variant="link"
                className="cursor-pointer text-white"
              >
                <Link href={item.href}>
                  <span>{item.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <hr className="bg-white my-4" />
        <div className="text-center">
          <p className="font-light text-sm lg:text-base">
            © 2024 Ronmes Sphere™ All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
