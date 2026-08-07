// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FiMenu } from "react-icons/fi";
// import { RxCross2 } from "react-icons/rx";

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isMenuOpen]);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "Services", href: "/services" },
//     { name: "Solutions", href: "/#solutions" },
//     { name: "Technology", href: "/#technology" },
//     { name: "Contact", href: "/#contact" },
//   ];

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-sm">
//       <div className="max-w-7xl mx-auto px-5 lg:px-8">
//         <div className="flex h-20 items-center justify-between">
//           {/* Logo */}
//           <Link href="/" onClick={() => setIsMenuOpen(false)}>
//             <Image
//               src="/logos/logo final.png" // Replace with your logo path
//               alt="BuildInReality"
//               width={180}
//               height={50}
//               priority
//               className="h-10 w-auto"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="text-gray-800 hover:text-lime-400 transition-colors duration-300 font-medium"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Desktop CTA */}
//           <div className="hidden md:block">
//             <Link
//               href="https://docs.google.com/forms/d/e/1FAIpQLScJ3xcv1kDrWptN6QtZ-B1ozUp5hQIo7p26HtYCreJ75cH2cg/viewform?usp=sharing&ouid=109386348153102760754"
//               target="_blank"
//               className="rounded-lg bg-lime-400 px-5 py-2.5 text-white font-medium hover:bg-lime-500 transition-colors duration-300"
//             >
//               Contact Us
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden rounded-md p-2"
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? (
//               <RxCross2 size={28} />
//             ) : (
//               <FiMenu size={28} />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden border-t border-gray-200 bg-white shadow-lg">
//           <nav className="flex flex-col px-6 py-6 space-y-5">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsMenuOpen(false)}
//                 className="text-gray-800 hover:text-lime-400 transition-colors duration-300 text-lg font-medium"
//               >
//                 {link.name}
//               </Link>
//             ))}

//             <Link
//               href="https://docs.google.com/forms/d/e/1FAIpQLScJ3xcv1kDrWptN6QtZ-B1ozUp5hQIo7p26HtYCreJ75cH2cg/viewform?usp=sharing&ouid=109386348153102760754"
//               target="_blank"
//               onClick={() => setIsMenuOpen(false)}
//               className="mt-4 rounded-lg bg-lime-400 py-3 text-center text-white font-semibold hover:bg-lime-500 transition-colors duration-300"
//             >
//               Contact Us
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/90 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="/logos/logo final.png"
              alt="BuildInReality"
              width={180}
              height={50}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors duration-200 font-medium ${isScrolled
                    ? "text-gray-700 hover:text-lime-500"
                    : "text-gray-200 hover:text-lime-400"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScJ3xcv1kDrWptN6QtZ-B1ozUp5hQIo7p26HtYCreJ75cH2cg/viewform"
              target="_blank"
              className="rounded-full bg-lime-400 px-6 py-2.5 text-white font-semibold hover:bg-lime-500 transition-all duration-300 shadow-lg hover:shadow-lime-500/30"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors ${isScrolled ? "text-gray-800" : "text-white"
              }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <RxCross2 size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white shadow-lg absolute top-full left-0 w-full">
          <nav className="flex flex-col px-6 py-6 space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800 hover:text-lime-500 transition-colors duration-300 text-lg font-medium"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScJ3xcv1kDrWptN6QtZ-B1ozUp5hQIo7p26HtYCreJ75cH2cg/viewform"
              target="_blank"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 rounded-lg bg-lime-400 py-3 text-center text-white font-semibold hover:bg-lime-500 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}