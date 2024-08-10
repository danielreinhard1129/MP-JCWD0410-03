"use client";

import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";
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
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 bg-white transition-shadow ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="container mx-auto mb-[30px] flex flex-col items-center px-6 py-4 lg:flex lg:w-full lg:max-w-7xl lg:flex-row lg:justify-between lg:px-0 lg:py-6">
          {/* Top Row: Logo and Hamburger */}
          <div className="flex w-full justify-between lg:w-full">
            <Link href="/">
              <span className="cursor-pointer text-xl font-bold">
                <span className="text-[#0080ff]">Ronmes</span> Sphere
              </span>
            </Link>
            <button
              className="block text-2xl lg:hidden"
              onClick={handleMenuToggle}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Search Input */}
          <div className="mt-6 w-full lg:hidden">
            <Input
              type="search"
              placeholder="Search events"
              className="w-full"
            />
          </div>

          {/* Search Bar and Desktop Menu */}
          <div className="mt-4 flex w-full flex-col items-center md:mt-0 md:flex-row md:justify-between">
            <div className="flex items-center lg:flex lg:w-full lg:flex-row lg:justify-between lg:gap-10">
              <div className="lg:flex lg:flex-row lg:gap-2">
                <Input
                  type="search"
                  placeholder="Search events"
                  className="hidden flex-grow lg:block lg:w-[450px]"
                />
                <Button
                  type="submit"
                  className="hidden bg-[#0080ff] hover:bg-[#0066CC] lg:block"
                >
                  <FaSearch />
                </Button>
              </div>
              <div className="hidden lg:flex lg:gap-4">
                {navigation.map((item) => (
                  <Button
                    key={item.name}
                    variant="link"
                    className="cursor-pointer px-2 text-gray-700 hover:text-gray-900"
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
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-40 transform bg-white transition-transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
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
      </nav>
      <LoginModal isOpen={isLoginOpen} onClose={handleLoginClose} />
    </>
  );
};

export default NavbarPage;
