import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <footer class="bg-black relative text-white">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between md:gap-10 xl:gap-24">
          <div className="mb-6 md:mb-0 ">
            <a href="../" class="flex justify-center">
              {/* <img src="../testlogo.png" class="h-12 me-3 mt-10" alt="Logo" /> */}
              <img
                src="../SAE4INDIA_logo3.png"
                class="h-28 me-3 mt-10"
                alt="Logo"
              />
            </a>
            <p class="self-center text-sm mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>
          <div class="grid grid-cols-2  sm:grid-cols-4 md:px-20 xl:px-0">
            <div>
              <h2 class="mb-6 text-sm font-semibold  uppercase">Quick Links</h2>
              <ul class="text-gray-500 font-medium">
                <li class="mb-4 hover:text-primary ">
                  <a href="/" class="">
                    Home
                  </a>
                </li>
                <li className="mb-4 hover:text-primary ">
                  <a href="../about-us" class="">
                    About Us
                  </a>
                </li>
                <li className="mb-4 hover:text-primary ">
                  <a href="../our-services" class="">
                    Services
                  </a>
                </li>
                <li className="mb-4 hover:text-primary ">
                  <a href="../sports" class="">
                    Sports
                  </a>
                </li>
                <li className="mb-4 hover:text-primary ">
                  <a href="../live-feed" class="">
                    Live Feed
                  </a>
                </li>
                <li className="mb-4 hover:text-primary ">
                  <a href="../contact-us" class="">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold  uppercase">Follow us</h2>
              <ul class="text-gray-500 font-medium">
                <li class="mb-4 hover:text-primary">
                  <a href="" class="">
                    Twitter
                  </a>
                </li>
                <li class="mb-4 hover:text-primary">
                  <a href="" class="">
                    Instagram
                  </a>
                </li>
                <li>
                  {/* <a href="https://www.linkedin.com/company/fincham-india/" class="hover:underline">Linkedin</a> */}
                  {/* <a href="" class="hover:underline">
                    <img src="../LinkedIn_Logo.png" className="w-20" />
                  </a> */}
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold  uppercase">
                OUR SERVICES
              </h2>
              <ul class="text-gray-500 font-medium">
                <li class="mb-4 hover:text-primary">
                  <a href="../our-services" class="">
                    Sports education program
                  </a>
                </li>
                <li className="mb-4 hover:text-primary">
                  <a href="../our-services" class="">
                    Professional Coaching
                  </a>
                </li>
                <li className="mb-4 hover:text-primary">
                  <a href="../our-services" class="">
                    Fusion Spexun
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold  uppercase">
                Contact Info
              </h2>
              <ul class="text-gray-500 font-medium">
                <div className="flex gap-6 items-center mb-4">
                  <div className="sm:hidden xl:flex">
                    <FaPhoneAlt className="w-6" />
                  </div>
                  <li>
                    <p className="font-bold ">Call Us</p>
                    <a href="#" class="hover:text-primary text-sm">
                      0091-9319290418
                    </a>
                  </li>
                </div>
                <div className="flex gap-6 items-center mb-4">
                  <div className="sm:hidden xl:flex">
                    <FaMapMarkedAlt className="w-6" />
                  </div>

                  <li>
                    <p className="font-bold ">Vist Us</p>
                    <a
                      href="https://www.google.com/maps/place/Sports+%26+Education+for+India/@28.4492975,77.095773,16.23z/data=!4m14!1m7!3m6!1s0x390d18b507b16751:0x69a0412e6b5efa91!2sSports+%26+Education+for+India!8m2!3d28.4492211!4d77.0997688!16s%2Fg%2F11s8_49tls!3m5!1s0x390d18b507b16751:0x69a0412e6b5efa91!8m2!3d28.4492211!4d77.0997688!16s%2Fg%2F11s8_49tls?entry=ttu"
                      class="hover:text-primary text-sm "
                    >
                      Sports & Education for India 101, 1st Floor Centrum Plaza,
                      Golf Course Road, Gurgaon – 122003, Haryana
                    </a>
                  </li>
                </div>
                <div className="flex  gap-6 items-center mb-4">
                  <div className="sm:hidden xl:flex">
                    <IoMail className="w-6" />
                  </div>

                  <li className="flex-col mr-20">
                    <p className="font-bold ">Mail Us</p>
                    <div className="flex flex-col">
                      <a
                        href="mailto:Info@sporteducationindia.com"
                        class="hover:text-primary text-sm "
                      >
                        Info@sporteducationindia.com
                      </a>
                      <a
                        href="mailto:Director@sporteducationindia.com"
                        class="hover:text-primary text-sm "
                      >
                        Director@sporteducationindia.com
                      </a>
                      <a
                        href="mailto:Fusion@sporteducationindia.com"
                        class="hover:text-primary text-sm "
                      >
                        Fusion@sporteducationindia.com
                      </a>
                    </div>

                    {/* <a href="#" class="hover:underline text-sm ">
                      swati.grover@finchamindia.com
                    </a> */}
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between text-center">
          <span class="text-sm text-gray-500 sm:text-center">
            Copyright © 2024{" "}
            <a href="" class="hover:underline">
              Sports And Education For India |
            </a>
            All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
            {/* <a href="#" class="text-gray-500 hover:text-gray-900">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a> */}
            {/* <a href="#" class="text-gray-500 hover:text-gray-900 ms-5">
                 <FaSquareXTwitter />
                  <span class="sr-only">Twitter page</span>
              </a> */}
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 ms-5 sm:flex hidden"
            >
              <FaLinkedin />
              <span class="sr-only">Linkedin page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
