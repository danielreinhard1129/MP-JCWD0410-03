"use client";

import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Avatar } from "@radix-ui/react-avatar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import LoginModal from "@/features/login/components/LoginModal";

const navigation = [
  { name: "Browse Events", href: "/events" },
  { name: "Create Events", href: "/help" },
  { name: "Help", href: "/help" },
  { name: "About Us", href: "/about" },
];

const NavbarPage = () => {
  const { id } = useAppSelector((state) => state.user);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLoginOpen = () => setIsLoginOpen(true);
  const handleLoginClose = () => setIsLoginOpen(false);
  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

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
    <>
      <nav
        className={`sticky top-0 z-50 mx-0 bg-white transition-shadow ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="lg:py-6 container mx-auto flex flex-col items-center px-6 py-1 md:flex-row lg:container lg:max-w-7xl lg:px-0">
          {/* Top Row: Logo and Hamburger */}
          <div className="flex w-full items-center justify-between md:justify-start">
            <Link href="/">
              <span className="cursor-pointer text-xl font-bold">
                <span className="text-[#0080ff]">Ronmes</span> Sphere
              </span>
            </Link>
            <button
              className="block text-2xl md:hidden"
              onClick={handleMenuToggle}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Search Input */}
          <div className="mt-6 w-full md:hidden">
            <Input
              type="search"
              placeholder="Search events"
              className="w-full"
            />
          </div>

          {/* Search Bar and Desktop Menu */}
          <div className="mt-4 flex w-full flex-col items-center md:mt-0 md:flex-row">
            <div className="flex flex-grow items-center justify-between md:justify-start lg:gap-3">
              <Input
                type="search"
                placeholder="Search events"
                className="hidden flex-grow md:block lg:w-[300px]"
              />
              <Button
                type="submit"
                onClick={() => {}}
                className="hidden bg-[#0080ff] hover:bg-[#0066CC] md:block"
              >
                <FaSearch />
              </Button>
            </div>
            <div className="hidden md:ml-4 md:flex md:gap-4">
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
              {id ? (
                <Link href="/profile">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>RM</AvatarFallback>
                  </Avatar>
                </Link>
              ) : (
                <>
                  <Button variant="ghost" onClick={handleLoginOpen}>
                    <Link href={"#"}>Login</Link>
                  </Button>
                  <Button className="bg-[#0080ff] hover:bg-[#0066CC]">
                    <Link href={"#"}>Get Started</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-40 transform bg-white transition-transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex flex-col p-6">
            <button
              className="self-end text-2xl"
              onClick={handleMenuToggle}
              aria-label="Close Menu"
            >
              <FaTimes />
            </button>

            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  variant="link"
                  className="text-md text-gray-700 hover:text-gray-900 lg:text-xl"
                >
                  <Link href={item.href}>
                    <span>{item.name}</span>
                  </Link>
                </Button>
              ))}
              {id ? (
                <Link href="/profile">
                  <div className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>RM</AvatarFallback>
                    </Avatar>
                    <span className="text-lg">Profile</span>
                  </div>
                </Link>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    onClick={handleLoginOpen}
                    className="w-full"
                  >
                    <Link href={"#"} className="text-center">
                      Login
                    </Link>
                  </Button>
                  <Button className="w-full bg-[#0080ff] hover:bg-[#0066CC]">
                    <Link href={"#"} className="text-center">
                      Get Started
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
        {/* End mobile menu */}
      </nav>
      <LoginModal isOpen={isLoginOpen} onClose={handleLoginClose} />
    </>
  );
};

export default NavbarPage;
