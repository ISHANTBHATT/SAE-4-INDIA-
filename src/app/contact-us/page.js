// 2f2f2f
"use client";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { TiMail } from "react-icons/ti";
import {
  IoLocationOutline,
  IoCallOutline,
  IoChatbubblesOutline,
} from "react-icons/io5";
import { M_PLUS_1 } from "next/font/google";
const contactdata = [
  {
    id: 1,
    title: "Mail us",
    icon: TiMail,
    desc: "Speak to our friendly team.",
    contact: [
      {
        id: 1,
        detail: "Info@sporteducationindia.com",
        link: "mailto:Info@sporteducationindia.com",
      },
      {
        id: 2,
        detail: "Director@sporteducationindia.com",
        link: "mailto:Director@sporteducationindia.com",
      },
      {
        id: 3,
        detail: "Fusion@sporteducationindia.com",
        link: "mailto:Fusion@sporteducationindia.com",
      },
    ],
  },
  // {
  //   id: "2",
  //   title: "Chat to support",
  //   icon: IoChatbubblesOutline,
  //   desc: "We're here to help.",
  //   contact: [{id:1,detail:"Info@sporteducationindia.com"},
  //     {id:2,detail:"Director@sporteducationindia.com"},
  //     {id:3,detail:"Fusion@sporteducationindia.com"}],
  // },
  {
    id: 3,
    title: "Visit us",
    icon: IoLocationOutline,
    desc: "Sports & Education for India 101, 1st Floor Centrum Plaza, Golf Course Road, Gurgaon – 122003, Haryana",
    contact: [
      {
        id: 1,
        detail: "View on Google Maps",
        link: "https://www.google.com/maps/place/Sports+%26+Education+for+India/@28.4492975,77.095773,16.23z/data=!4m14!1m7!3m6!1s0x390d18b507b16751:0x69a0412e6b5efa91!2sSports+%26+Education+for+India!8m2!3d28.4492211!4d77.0997688!16s%2Fg%2F11s8_49tls!3m5!1s0x390d18b507b16751:0x69a0412e6b5efa91!8m2!3d28.4492211!4d77.0997688!16s%2Fg%2F11s8_49tls?entry=ttu",
      },
    ],
  },
  {
    id: 4,
    title: "Call us",
    icon: IoCallOutline,
    desc: "Mon-Fri from 8am to 5pm.",
    contact: [{ id: 1, detail: "0091-9319290418" }],
  },
];
const faqdata = [
  {
    id: "1",
    ques: "Is there a free trial available?",
    ans: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running. Book a call here.",
  },
  {
    id: "2",
    ques: "Can I change my plan later?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed acenim id lectus semper ultricies.",
  },
  {
    id: "3",
    ques: "What is your cancellation policy",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed acenim id lectus semper ultricies.",
  },
  {
    id: "4",
    ques: "Can other info be added to an invoice?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed acenim id lectus semper ultricies.",
  },
  {
    id: "5",
    ques: "How does billing work?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed acenim id lectus semper ultricies.",
  },
  {
    id: "6",
    ques: "How do I change my account email?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed acenim id lectus semper ultricies.",
  },
  {
    id: "7",
    ques: "How does support work?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed acenim id lectus semper ultricies.",
  },
  {
    id: "8",
    ques: "Do you provide tutorials?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed acenim id lectus semper ultricies.",
  },
];
function Page() {
  const [openFaq, setOpenFaq] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const toggleFaq = (id) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  const toggleMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      className="bg-[#0a0a0a] py-20 px-10  text-zinc-400"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%2318181b'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
    >
      <main className="container mx-auto py-16">
        <h1 className="text-4xl font-bold  mb-4  text-center text-white">
          Contact our friendly team
        </h1>
        <p className="text-lg mb-12  text-center">
          Let us know how we can help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactdata.map((d) => (
            <div
              key={d.id}
              className="flex flex-col p-8 rounded-md shadow-md text-left bg-zinc-900 border border-zinc-700 hover:bg-zinc-950"
            >
              <div className=" flex border-2 w-10 h-10 border-gray-100 rounded-lg justify-center items-center">
                {d.icon && <d.icon className="w-8 h-8" />}
              </div>

              <div className=" items-center mt-10 mb-4">
                <h3 className=" text-xl font-bold ">{d.title}</h3>
              </div>
              <p className="">{d.desc}</p>
              {/* <a href="#" className="underline hover:text-white">
                {d.contact}
              </a> */}
              {d.contact.map((d) => (
                <a href={`${d.link}`} className="underline hover:text-white">
                  {d.detail}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* <h2 className="text-3xl font-bold  mb-4 mt-16  text-center text-white">
          Frequently asked questions
        </h2>
        <div className="lg:px-40">
          {faqdata.map((e) => (
            <div
              key={e.id}
              className="bg-zinc-900 rounded-md p-6 mt-4  shadow-md border border-zinc-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <h3 className=" text-lg font-bold">{e.ques}</h3>
                </div>
                <button
                  onClick={() => toggleFaq(e.id)}
                  className="text-zinc-400 hover:text-zinc-500 font-medium"
                >
                  {openFaq === e.id ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {openFaq === e.id && (
                <p className="text-zinc-500 ml-4">{e.ans}</p>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center">
          <button
            onClick={toggleMore}
            className="bg-zinc-900 px-4 py-2 rounded-md font-medium hover:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-8 mx-auto"
          >
            Load more
          </button>
        </div> */}

        {/* <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-16">
          Ready to level up your business?
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Start your 30-day free trial. Cancel anytime.
        </p>
        <div className="flex space-x-4">
          <button className="bg-gray-200 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            View demo
          </button>
          <button className="bg-blue-500 px-4 py-2 rounded-md text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Get started
          </button>
        </div> */}
      </main>
    </div>
  );
}
export default Page;
