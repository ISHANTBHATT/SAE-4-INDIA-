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
  // const handleClick = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

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
          {/* <button />
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
              <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path>
            </svg>
          </button> */}

          <div className="lg:flex max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <ul className="lg:flex lg:gap-x-8 max-lg:space-y-2">
              {/* <li className="mb-6 hidden max-lg:block">
                <a href="javascript:void(0)">
                  <img
                    src="https://readymadeui.com/readymadeui.svg"
                    alt="logo"
                    className="w-36"
                  />
                </a>
              </li> */}
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
              {/* <li className="text-[15px] max-lg:border-b max-lg:py-3">
                <a
                  href="javascript:void(0)"
                  className=" font-semibold  block text-[15px]"
                >
                  Blog
                </a>
              </li> */}
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
              {/* <li className="text-[15px] max-lg:border-b max-lg:py-3">
                <a
                  href="javascript:void(0)"
                  className=" font-semibold  block text-[15px]"
                >
                  Partner
                </a>
              </li> */}
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
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex flex-row-reverse">
            {/* <a href="../" className="-m-1.5 p-1.5">
              <img alt="" src="../SAE4INDIA_logo3.png" className="h-8 w-auto" />
            </a> */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md mx-9 pt-5 text-white"
            >
              <RxCross1 aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-12">
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
                {/* <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-zinc-900">
                    About
                  </DisclosureButton>
                </Disclosure> */}
                <a
                  href="../about-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-900"
                >
                  Sports
                </a>
                <a
                  href="../about-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-900"
                >
                  Services
                </a>
                <a
                  href="../about-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-900"
                >
                  Live Feed
                </a>
                {/* <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-zinc-900">
                    Services
                  </DisclosureButton>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-zinc-900">
                    Sports
                  </DisclosureButton>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-zinc-900">
                    Live Feed
                  </DisclosureButton>
                </Disclosure> */}
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
