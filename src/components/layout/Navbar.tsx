"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useI18n } from "@/src/locales/client";
import { LanguageSwitcher } from "./LanguageSwitcher";

const NavBar = () => {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    if (pathname) {
      const pathWithoutLocale = pathname.split("/").slice(2).join("/");
      setCurrentPage(`/${pathWithoutLocale}`);
    }
  }, [pathname]);

  const t = useI18n();

  const mainPages = ["/usecases", "/about", "/productsandlicenses", "/features", "/blog"];
  const darkPages = mainPages; // same for dark mode
  const isDarkPage = darkPages.includes(currentPage);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    // { name: t("NavBarComponent.names.ProductsAndLicenses"), path: "/productsandlicenses" },
    // { name: t("NavBarComponent.names.UseCases"), path: "/usecases" },
    { name: t("NavBarComponent.names.Services"), path: "/services" },
    // { name: t("NavBarComponent.names.Features"), path: "/features" },
    // { name: t("NavBarComponent.names.Blog"), path: "/blog" },
    { name: t("NavBarComponent.names.AboutUs"), path: "/about" },
    { name: t("NavBarComponent.names.Contact"), path: "/contact" },
    { name: "Login", path: "/login" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`${
          isDarkPage ? "bg-black text-white" : "bg-white text-black"
        } sticky top-0 z-10 bg-opacity-30 backdrop-filter backdrop-blur-lg m-0`}
      >
        <div className="hidden justify-between items-center w-full h-16 py-4 md:flex md:px-12 lg:px-32 gap-4">
          <Link href="/" className="h-16 w-32 relative">
            <Image
              src={isDarkPage ? "/images/bassni-logo-light.png" : "/images/bassni-logo-light.png"}
              alt="homepagelogo"
              fill
              className="object-contain py-1"
            />
          </Link>
          <div className="flex space-x-2 lg:space-x-6 justify-center">
            {navItems.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                className={`relative group transition-all duration-200 text-center hover:scale-105 ${
                  pathname === item.path ? "text-blue-600" : "hover:text-blue-400"
                }`}
              >
                <span>{item.name}</span>
                <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-blue-400 group-hover:w-1/2 group-hover:transition-all group-hover:duration-200"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 h-px bg-blue-400 group-hover:w-1/2 group-hover:transition-all group-hover:duration-200"></span>
              </Link>
            ))}
          </div>
          <div>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden flex flex-col w-full h-fit py-2 px-4 sm:px-8 sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-40">
        <div className="flex justify-between w-full">
          <Link href="/" className="relative w-32 h-16">
            <Image
              src="/images/logo-color-newky.png"
              alt="homepagelogo"
              fill
              className="object-contain"
            />
          </Link>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg
              className="w-10 h-10 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                animate={{
                  d: isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12" // X Icon
                    : "M4 6h16M4 12h16M4 18h16", // Hamburger Icon
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </button>
        </div>

        {/* Mobile collapsible menu */}
        <motion.div
          className="md:hidden w-full flex justify-end"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col items-end space-y-1 p-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative group transition-all duration-200 hover:scale-110 ${
                  pathname === item.path
                    ? "text-blue-600"
                    : "text-black hover:text-blue-400"
                }`}
              >
                <span className="font-semibold">{item.name}</span>
                <span className="absolute bottom-0 left-1/2 w-0 h-px bg-blue-400 group-hover:w-1/2 group-hover:transition-all"></span>
                <span className="absolute bottom-0 right-1/2 w-0 h-px bg-blue-400 group-hover:w-1/2 group-hover:transition-all"></span>
              </Link>
            ))}
            <LanguageSwitcher />
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default NavBar;
