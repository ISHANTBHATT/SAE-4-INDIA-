"use client";
import React from "react";
import { motion } from "framer-motion";
import Card from "../Components/Card";
// import HorizontalScroll, { Card } from "../Components/HorizontalScroll";

const cards = [
  {
    url: "../Honesty.jpeg",
    title: "Marketing & Sales Experts",
    id: 1,
  },
  {
    url: "../Learning.jpeg",
    title: "Physical Education Experts",
    id: 2,
  },
  {
    url: "../Relationships.jpeg",
    title: "Physical Fitness Experts",
    id: 3,
  },
  {
    url: "../Respect.jpeg",
    title: "Sports-Specific Fitness Training Experts",
    id: 4,
  },
  {
    url: "../Commitment.jpeg",
    title: "Sports-Specific Coaching Experts",
    id: 5,
  },
  {
    url: "../Commitment.jpeg",
    title: "Sports Psychologists",
    id: 6,
  },
  {
    url: "../Commitment.jpeg",
    title: "Physiotherapists",
    id: 7,
  },
  {
    url: "../Commitment.jpeg",
    title: "Doctors",
    id: 8,
  },
  {
    url: "../Commitment.jpeg",
    title: "Nutritionists",
    id: 9,
  },
  {
    url: "../Commitment.jpeg",
    title: "Travel Experts",
    id: 10,
  },
  {
    url: "../Commitment.jpeg",
    title: "IT Specialists",
    id: 11,
  },
  // {
  //   url: "../Commitment.jpeg",
  //   title: "Marketing & Sales Experts",
  //   id: 12,
  // },
];

const Page = () => {
  return (
    <section
      className="w-full px-4 py-40 text-zinc-400 bg-[#0a0a0a] text-center md:text-left"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%2318181b'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
    >
      <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row md:items-start md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl text-white">
          What We Do
        </h2>

        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-zinc-800 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-zinc-900"
        >
          Learn more
        </motion.button> */}
      </div>
      <div className="px-10 py-8">
        <p className="">
          We offer a range of services designed to promote physical fitness and
          sports in schools and communities. Our programs are tailored to meet
          the unique needs of each client, and we take a holistic approach to
          health and wellness. Our services include:
        </p>
      </div>

      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4 ">
          <CardTitle>Sports Training Camps</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-indigo-50">
              We organize international sports training camps that provide
              students with the opportunity to train with top coaches and
              athletes from around the world.
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Cultural Excursions</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-orange-50">
              Our programs include cultural excursions that allow students to
              explore new places, learn about different cultures, and gain a
              broader perspective on the world.
            </span>
          </div>
        </BounceCard>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>University Visits</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-emerald-50">
              We help students plan for their future by arranging visits to
              universities, where they can learn about academic programs, campus
              life, and more.
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Physical Education Assessments</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-red-50">
              We conduct comprehensive assessments of physical education
              programs in schools to identify areas for improvement and develop
              strategies for enhancing student wellness.
            </span>
          </div>
        </BounceCard>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12">
          <CardTitle>Customized Fitness Programs</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-red-50">
              We design personalized fitness programs that cater to the specific
              needs of individuals and groups, promoting overall health and
              well-being.
            </span>
          </div>
        </BounceCard>
      </div>
      {/* <div className="mt-20 flex flex-col items-center justify-between gap-4 md:flex-row md:items-start md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl text-white">
          Who We Are
        </h2>
      </div>
      <div className="px-10 py-8">
        <p className="">
          We are a dynamic team of passionate sports professionals, bringing
          together a wealth of expertise in various fields related to physical
          education, sports, and wellness. Our team comprises:
        </p>
      </div>
      <div className="flex flex-wrap gap-10 px-10 justify-center">
        {cards.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </div>
      <div className="px-10 py-8">
        <p className="">
          Together, we are dedicated to fostering a love for sports and physical
          fitness in individuals of all ages, with a particular focus on the
          youth of today—the future of tomorrow.
        </p>
      </div> */}
    </section>
  );
};

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-zinc-800 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};

export default Page;
