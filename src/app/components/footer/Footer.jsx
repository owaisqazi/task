/* eslint-disable @next/next/no-img-element */
import {
  ArrowRight,
  ChevronRight,
  Facebook,
  FacebookIcon,
  Linkedin,
  LinkedinIcon,
  Mail,
  PhoneCall,
  Send,
  Twitter,
  Youtube,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full font-sans bg-[#2F2D42]">
      <div className="max-w-360 mx-auto text-white pb-10 px-6 md:px-10">
        <div className="px-4 relative z-20">
          <div
            className="bg-[#FFA920] rounded-[2px_2px_20px_20px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl overflow-hidden relative"
            style={{
              backgroundImage: `repeating-linear-gradient(
        45deg,
        rgba(0,0,0,0.04) 0px,
        rgba(0,0,0,0.04) 1px,
        transparent 1px,
        transparent 12px
      )`,
            }}
          >
            <h2 className="text-white text-2xl md:text-[28px] font-bold mb-6 md:mb-0 max-w-md leading-tight relative z-10">
              Subscribe To Our News Letter
            </h2>

            <div className="relative w-full md:w-[500px] z-10 mx-4">
              <input
                type="text"
                placeholder="Enter Email Address"
                className="w-full py-4 px-8 rounded-full bg-white text-gray-700 focus:outline-none shadow-sm"
              />

              <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FFA920] p-2.5 rounded-full text-white hover:bg-orange-400 transition-all">
                <Send size={20} fill="currentColor" />
              </div>
            </div>

            <div className="flex gap-4 mt-6 md:mt-0 z-10">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <div
                  key={i}
                  className="bg-white w-11 h-11 flex items-center justify-center rounded-full text-[#FFA920] cursor-pointer hover:bg-gray-100 transition-all shadow-sm"
                >
                  <Icon size={18} fill={i === 0 ? "currentColor" : "none"} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid pt-10 grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-600/30 pb-16">
          <div className="flex flex-col items-start">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <img
                  src="/assets/logo.png"
                  className="h-16 mb-8"
                  alt="CEC Logo"
                />
              </Link>

              <p className="text-gray-300 text-[15px] mb-8 leading-relaxed max-w-[320px]">
                Subscribe to our Newsletter for Spotlight Products and Specials.
              </p>

              <button className="flex items-center gap-2 bg-[#FFA920] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#ff9f00] transition-colors">
                Contact Us
                <ArrowRight size={16} />
              </button>
              <div className="flex items-center gap-4 mt-8">
                {/* Line */}
                <span className="w-8 h-[1px] bg-gray-500"></span>

                {/* Text */}
                <span className="text-gray-300 text-sm">Follow on</span>

                {/* Icons */}
                <div className="flex items-center gap-3">
                  <FacebookIcon
                    size={16}
                    className="text-gray-300 hover:text-[#FFA920] cursor-pointer transition-colors"
                  />
                  {/* X (Twitter) */}
                  <span className="text-gray-300 hover:text-[#FFA920] cursor-pointer text-sm font-semibold">
                    X
                  </span>
                  <LinkedinIcon
                    size={16}
                    className="text-gray-300 hover:text-[#FFA920] cursor-pointer transition-colors"
                  />
                  <YoutubeIcon
                    size={16}
                    className="text-gray-300 hover:text-[#FFA920] cursor-pointer transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="relative inline-block mb-6 text-sm font-semibold text-heading uppercase">
              Quick Link
              <img
                src="/assets/line.png" // 👈 apni image ka path
                alt=""
                className="absolute left-0 -bottom-3"
              />
            </h2>

            <ul className="space-y-4 text-gray-300">
              {[
                "About Us",
                "Products",
                "Customized Solutions",
                "Contact Us",
              ].map((link) => (
                <li
                  key={link}
                  className="flex items-center gap-2 group cursor-pointer hover:text-[#FFA920] transition-colors text-[15px]"
                >
                  <ChevronRight
                    size={14}
                    className="text-[#FFA920] group-hover:translate-x-1 transition-transform"
                  />
                  <span>{link}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="relative inline-block mb-6 text-sm font-semibold text-heading uppercase">
              Our services
              <img
                src="/assets/line.png"
                alt=""
                className="absolute left-0 -bottom-3"
              />
            </h2>
            <ul className="space-y-4 text-gray-300">
              {[
                "Container Modifier",
                "Container Repair & Maintainence",
                "Dunnage Installation & Kitting",
                "Dunnage Washing",
                "Pallet Rack Repair",
              ].map((link) => (
                <li
                  className="flex items-center gap-2 group cursor-pointer hover:text-[#FFA920] transition-colors text-[15px]"
                  key={link}
                >
                  <ChevronRight
                    size={14}
                    className="text-[#FFA920] group-hover:translate-x-1 transition-transform"
                  />
                  <span>{link}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="relative inline-block mb-6 text-sm font-semibold text-heading uppercase">
              contact us
              <img
                src="/assets/line.png"
                alt=""
                className="absolute left-0 -bottom-3"
              />
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-2 group cursor-pointer hover:text-[#FFA920] transition-colors text-[15px]">
                <PhoneCall
                  size={14}
                  className="text-[#FFA920] group-hover:translate-x-1 transition-transform"
                />
                <span>(855)905-0875</span>
              </li>
              <li className="flex items-center gap-2 group cursor-pointer hover:text-[#FFA920] transition-colors text-[15px]">
                <Mail
                  size={14}
                  className="text-[#FFA920] group-hover:translate-x-1 transition-transform"
                />
                <span>Sales@cechms.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between mt-10">
          <span className="text-sm text-body sm:text-center">
            © All Copyright 2026 by cecmhs.co
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-body hover:text-heading">
              Designed And Developed by Esco Logics
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
