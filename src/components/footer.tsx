import { FaCube, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {/* <FaCube size={32} color="text-lime-400" /> */}
              <div className="flex items-center">
                <span className="text-xl font-bold">BUILD</span>
                <span className="text-xl font-bold text-lime-400">IN</span>
                <span className="text-xl font-bold">REALITY</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Neuroleap Innovations Private Limited
            </p>
            <p className="text-gray-600 text-sm">
              Transforming construction through innovative AR/VR technology
              solutions.
            </p>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors">
                  AR Visualization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors">
                  3D Modeling
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors">
                  Project Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors">
                  Team Collaboration
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
                <a href="#" className="hover:text-lime-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors">
                  Partners
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
                <span>jaypinjarkar89@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdPhone className="w-2 h-2" />
                <span>+91 8999529110</span>
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
              © 2024 Buildinreality. All rights reserved.
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
