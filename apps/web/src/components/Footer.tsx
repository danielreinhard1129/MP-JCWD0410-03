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
    <div className="bg-[#0080ff]">
      <div className="container flex max-w-7xl flex-col px-0 py-4">
        <div className="flex flex-row justify-between py-8">
          <p className="text-3xl font-bold text-white">Ronmes Sphere</p>
          <div>
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
        <hr className="bg-white" />
        <div className="py-4 text-center">
          <p className="font-light text-white">
            © 2024 Ronmes Sphere™ All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
