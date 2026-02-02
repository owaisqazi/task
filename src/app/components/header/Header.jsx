/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Dropdown from "../ui/Dropdown";
import Link from "next/link";
import { ChevronDown, Phone, Search } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [product, setProduct] = useState(false);

  return (
    <header className="bg-[#670000]">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center gap-14 justify-between py-6 px-2"
      >
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img src="/assets/logo.png" alt="" className="h-22.25 w-full" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
              className="w-6 h-6"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:gap-x-12 justify-center items-center">
          <Dropdown />
          <Link href="#" className="text-sm/6 font-semibold text-white">
            Contact Us
          </Link>
          <Link href="#" className="text-sm/6 font-semibold text-white">
            Products
          </Link>
          <Link href="#" className="text-sm/6 font-semibold text-white">
            Customized Solutions
          </Link>
          <Link href="#" className="text-sm/6 font-semibold text-white">
            Services
          </Link>
          <Link
            href="#"
            className="text-sm/6 font-semibold flex items-center gap-2 text-white"
          >
            <Phone size={14} />
            800-922-6120
          </Link>
          <Link
            href="#"
            className="text-sm/6 font-semibold bg-white p-3 rounded-full"
          >
            <Search size={20} className="text-black" />
          </Link>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-[#670000] lg:hidden">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#670000] p-6 overflow-y-auto">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img src="/assets/logo.png" alt="" className="h-8 w-auto" />
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-6 h-6"
                >
                  <path
                    d="M6 18 18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-6 space-y-2">
              <button
                onClick={() => setProduct(!product)}
                className="flex w-full justify-between items-center rounded-lg py-2 px-3 text-base font-semibold text-white"
              >
                About Us
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${product ? "rotate-180" : ""}`}
                />
              </button>
              {product && (
                <div className="ml-3 mt-2 space-y-2 border-l border-white/20 pl-4">
                  <a href="#" className="block font-semibold text-white">
                    Analytics
                  </a>
                  <p className="text-gray-300 text-sm">
                    Get a better understanding of your traffic
                  </p>
                </div>
              )}

              <Link
                href="#"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
              >
                Features
              </Link>
              <Link
                href="#"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
              >
                Marketplace
              </Link>
              <Link
                href="#"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
              >
                Company
              </Link>
              <Link
                href="#"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
