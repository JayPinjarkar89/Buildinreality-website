import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Link href="/" >
                <Image
                  src="/logos/logo final.png" // Replace with your logo path
                  alt="BuildInReality"
                  width={180}
                  height={50}
                  priority
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            <p className="text-gray-600 text-sm">
              Neuroleap Innovations Private Limited
            </p>
            <p className="text-gray-600 text-sm">
              Transforming construction through innovative AI+AR/VR+BIM technology
              solutions.
            </p>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="/services/#sitelens" className="hover:text-lime-400 transition-colors">
                  SiteLens
                </a>
              </li>
              <li>
                <a href="/services/#fieldsync" className="hover:text-lime-400 transition-colors">
                  FieldSync
                </a>
              </li>
              <li>
                <a href="/services/#issue-management" className="hover:text-lime-400 transition-colors">
                  Issue Management
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#about" className="hover:text-lime-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSc7jSSKcG4JBoG8mxn-wj4s5jOtw9igfsSzJcjJATuv20IYEg/viewform?usp=dialog" className="hover:text-lime-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <MdEmail className="w-2 h-2" />
                <a href="mailto:connect@buildinreality.com" className="hover:text-lime-400 transition-colors">
                  connect@buildinreality.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MdPhone className="w-2 h-2" />
                <span>+91 9960529110</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdLocationOn className="w-2 h-2" />
                <span>Plot no. K 28, Sai Sahawas Borle
                  Nagar, Yavatmal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-sm text-gray-500">
              © 2026 Buildinreality. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-lime-400 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-lime-400 transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-lime-400 transition-colors"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
