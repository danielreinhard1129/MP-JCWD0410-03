"use client";

import { Button } from "@/components/ui/button";
import LoginModal from "@/features/login/components/LoginModal";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { logoutAction } from "@/redux/slices/userSlice";
import AsyncSelect from "react-select/dist/declarations/src/Async";
import Autocomplete from "./Autocomplete";

const navigation = [
  { name: "Browse Events", href: "/events" },
  { name: "Create Events", href: "#" },
  { name: "About Us", href: "/about" },
];

const NavbarPage = () => {
  const { id } = useAppSelector((state) => state.user);
  const router = useRouter();

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  const avatarTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLoginOpen = () => setIsLoginOpen(true);
  const handleLoginClose = () => setIsLoginOpen(false);
  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAvatarMouseEnter = () => {
    if (avatarTimeoutRef.current) {
      clearTimeout(avatarTimeoutRef.current);
    }
    setIsAvatarHovered(true);
  };

  const handleAvatarMouseLeave = () => {
    avatarTimeoutRef.current = setTimeout(() => {
      setIsAvatarHovered(false);
    }, 200);
  };

  const handleLogout = () => {
    dispatch(logoutAction());

    router.push("/");
  };

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

          {/* Search Bar and Desktop Menu */}
          <div className="mt-4 flex w-full flex-col items-center md:mt-0 md:flex-row md:justify-between">
            <div className="flex items-center lg:flex lg:w-full lg:flex-row lg:justify-between lg:gap-10">
              <div className="w-full lg:flex lg:flex-row lg:gap-2">
                <Autocomplete />
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
                  <div
                    className="relative"
                    onMouseEnter={handleAvatarMouseEnter}
                    onMouseLeave={handleAvatarMouseLeave}
                  >
                    <Link href="/profile">
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>RM</AvatarFallback>
                      </Avatar>
                    </Link>
                    {isAvatarHovered && (
                      <div className="absolute right-0 z-50 mt-2 w-40 rounded-lg bg-white p-2 shadow-lg">
                        <Link href="/profile">
                          <Button className="mb-2 w-full">Profile</Button>
                        </Link>
                        <Button
                          className="w-full bg-red-500 hover:bg-red-600"
                          onClick={handleLogout}
                        >
                          Log Out
                        </Button>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <Button
                      className="bg-[#0080ff] hover:bg-[#0066CC]"
                      onClick={handleLoginOpen}
                    >
                      Log in
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
                <Link key={item.name} href={item.href}>
                  <Button
                    key={item.name}
                    variant="link"
                    className="text-md text-gray-700 hover:text-gray-900 lg:text-xl"
                  >
                    <span>{item.name}</span>
                  </Button>
                </Link>
              ))}
              {id ? (
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>RM</AvatarFallback>
                  </Avatar>
                  <Link href="/profile">
                    <span className="text-lg">Profile</span>
                  </Link>
                </div>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    onClick={handleLoginOpen}
                    className="w-full bg-[#0080ff]"
                  >
                    Sign in
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
