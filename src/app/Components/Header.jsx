// components/Header.js
import React, { useState, useEffect } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
} from "@headlessui/react";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`w-full  font-[sans-serif] tracking-wide fixed z-20  text-white`}
    >
      <div
        className={`flex flex-wrap items-center gap-4 px-10 relative  min-h-[70px] ${
          isScrolled ? "bg-black" : "bg-transparent"
        }`}
      >
        <a href="/" className="hidden max-lg:block">
          <img src="../SAE4INDIA_logo3.png" alt="logo" className=" w-24" />
          {/* <img src="../testlogo.png" alt="logo" className="w-36" /> */}
        </a>

        <div
          id="collapseMenu"
          className={`w-full max-lg:hidden lg:!block  max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
        >
          <div className="lg:flex max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <ul className="lg:flex lg:gap-x-8 max-lg:space-y-2">
              <li className="max-lg:border-b max-lg:py-3">
                <a href="/" className="group relative font-bold text-sm">
                  HOME
                  <Underline />
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <a
                  href="../about-us"
                  className="group relative font-bold text-sm"
                >
                  ABOUT
                  <Underline />
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <a
                  href="../our-services"
                  className="group relative font-bold text-sm"
                >
                  SERVICES
                  <Underline />
                </a>
              </li>
            </ul>

            <a
              href="/"
              className="m-auto absolute lg:left-2/4 lg:top-0 lg:-translate-x-1/2 max-lg:hidden"
            >
              <img src="../SAE4INDIA_logo3.png" alt="logo" className=" w-32" />
              {/* <img src="../testlogo.png" alt="logo" className="w-36" /> */}
            </a>

            <ul className="lg:flex lg:space-x-8 max-lg:space-y-2 max-lg:mt-2 ml-auto">
              <li className="max-lg:border-b max-lg:py-3">
                <a
                  href="../sports"
                  className="group relative font-bold text-sm"
                >
                  SPORTS
                  <Underline />
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <a
                  href="../live-feed"
                  className="group relative font-bold text-sm"
                >
                  LIVE FEED
                  <Underline />
                </a>
              </li>
              <li className="max-lg:py-3 relative">
                <a
                  href="../contact-us"
                  className="group relative font-bold text-sm"
                >
                  CONTACT US
                  <Underline />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {mobileMenuOpen === false && (
          <div className="flex ml-auto lg:hidden text-white ">
            <button id="toggleOpen" onClick={() => setMobileMenuOpen(true)}>
              <RxHamburgerMenu className="w-7 h-7" />
            </button>
          </div>
        )}
      </div>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-primary px-10 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <img alt="" src="../SAE4INDIA_logo3.png" className="w-24" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className=" rounded-md text-white flex items-center"
            >
              <RxCross1 aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-20 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 ">
                <a
                  href="../"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-900"
                >
                  Home
                </a>
                <a
                  href="../about-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-900"
                >
                  About
                </a>
                <a
                  href="../sports"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-900"
                >
                  Sports
                </a>
                <a
                  href="../our-services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-900"
                >
                  Services
                </a>
                <a
                  href="../live-feed"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-900"
                >
                  Live Feed
                </a>
                <a
                  href="../contact-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-900"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

const Underline = () => {
  return (
    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
  );
};
