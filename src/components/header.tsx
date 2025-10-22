"use client";

import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdCable } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            {/* <MdCable size={32} className="text-lime-400" /> */}
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">BUILD</span>
              <span className="text-xl font-bold text-lime-400">IN</span>
              <span className="text-xl font-bold text-gray-900">REALITY</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-lime-400 transition-classNames">
              Home
            </Link>
            <Link href="/services" className="text-gray-800 hover:text-lime-400 transition-classNames">
              Services
            </Link>
            <Link href="/#solutions" className="text-gray-800 hover:text-lime-400 transition-classNames">
              Solutions
            </Link>
            <Link href="/#technology" className="text-gray-800 hover:text-lime-400 transition-classNames">
              Technology
            </Link>
            {/* <Link href="/#about" className="text-gray-800 hover:text-lime-400 transition-classNames">
              About
            </Link> */}
            <Link href="/#contact" className="text-gray-800 hover:text-lime-400 transition-classNames">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              href="/get-started"
              className="px-4 py-2 rounded-md bg-lime-400 text-white font-medium hover:bg-blue-500 transition-classNames"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <RxCross2 size={24} className="text-black-700" /> // text-gray-900
            ) : (
              <FiMenu size={24} className="text-black-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-800 hover:text-lime-400 transition-classNames">
                Home
              </Link>
              <Link href="/services" className="text-gray-800 hover:text-lime-400 transition-classNames">
                Services
              </Link>
              <Link href="#solutions" className="text-gray-800 hover:text-lime-400 transition-classNames">
                Solutions
              </Link>
              <Link href="#technology" className="text-gray-800 hover:text-lime-400 transition-classNames">
                Technology
              </Link>
              {/* <Link href="#about" className="text-gray-800 hover:text-lime-400 transition-classNames">
                About
              </Link> */}
              <Link href="#contact" className="text-gray-800 hover:text-lime-400 transition-classNames">
                Contact
              </Link>
              <Link
                href="/get-started"
                className="w-full mt-4 px-4 py-2 rounded-md bg-lime-400 text-white font-medium hover:bg-blue-500 transition-classNames text-center"
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
