"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      // Hide header when scrolling down
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(false);
        setIsMenuOpen(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/#solutions" },
    { name: "Technology", href: "/#technology" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${visible ? "translate-y-0" : "-translate-y-full"
        } ${scrolled
          ? "bg-[#070d14]/90 backdrop-blur-md border-b border-lime-400/20 py-4"
          : "bg-transparent py-6 border-b border-white/5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
          <Image
            src="/logos/Buildinreality white logo.png"
            alt="BuildInReality"
            width={180}
            height={50}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-gray-300 hover:text-lime-400 text-sm uppercase font-semibold">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScJ3xcv1kDrWptN6QtZ-B1ozUp5hQIo7p26HtYCreJ75cH2cg/viewform" className="text-sm font-semibold text-lime-400 border border-lime-400/40 px-5 py-2.5 rounded hover:bg-lime-400 hover:text-black transition-all">
            GET IN TOUCH
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          {isMenuOpen ? <RxCross2 size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-[#070d14]">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-4 border-b border-gray-800 text-white font-medium hover:bg-[#111827] hover:text-lime-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="p-6">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLScJ3xcv1kDrWptN6QtZ-B1ozUp5hQIo7p26HtYCreJ75cH2cg/viewform"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-lime-400 text-black font-semibold py-3 rounded-lg hover:bg-lime-300 transition"
              >
                GET IN TOUCH
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}