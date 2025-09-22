"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import HorizontalScroll from "./HorizontalScroll";
import Image from "next/image";

export default function InfoContainer() {
  return (
    <div className="bg-white py-10">
      <TextParallaxContent
        imgUrl="/football_arena.jpg"
        subheading="Collaborate"
        heading="Our Journey."
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/various_sports.jpg"
        subheading="Quality"
        heading="Our Mission."
      >
        <ExampleContent2 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/tennis_ball.jpg"
        subheading="Modern"
        heading="Our Values."
      >
        <ExampleContent3 />
      </TextParallaxContent>
      <HorizontalScroll />
    </div>
  );
}

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      {/* <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p> */}
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <motion.h2
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="col-span-1 text-3xl font-bold md:col-span-4"
    >
      Our Journey
      <BouncingBall />
    </motion.h2>

    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="col-span-1 md:col-span-8"
    >
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl text-justify">
        In 2010, one of our core team members recognized the crucial need to
        promote physical education at the grassroots level. They understood that
        the health and wellness of future generations begin with today&apos;s
        students. This realization led to the founding of our organization, with
        the aim of assessing the current state of physical education and sports
        in India.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl text-justify">
        In 2011, we had the privilege of evaluating the physical education and
        sports system under the prestigious banner of the North Western
        Countries Physical Education Association (NWCPEA) and UNESCO — the
        United Nations Educational, Scientific, and Cultural Organization. This
        experience highlighted the urgent need for improvement in the existing
        physical education and sports systems within schools.
      </p>
    </motion.div>
  </div>
);
const ExampleContent2 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <motion.h2
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="col-span-1 text-3xl font-bold md:col-span-4"
    >
      Our Mission
      <BallRoll />
    </motion.h2>
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="col-span-1 md:col-span-8"
    >
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl text-justify">
        Our mission is to revolutionize physical education and sports in schools
        by providing innovative solutions and programs that inspire and empower
        students to lead healthier, more active lives. We believe that by
        instilling a strong foundation in physical fitness and sports at a young
        age, we can contribute to building a healthier, more vibrant nation.
      </p>
    </motion.div>
  </div>
);
const ExampleContent3 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <motion.h2
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="col-span-1 text-3xl font-bold md:col-span-4"
    >
      Our Values
      {/* <BouncingBall2 /> */}
    </motion.h2>
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="col-span-1 md:col-span-8"
    >
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl text-justify">
        Our team is the heartbeat of our brand. We are more than just a
        company—we are a community of like-minded individuals who are committed
        to making a difference. Here are the values that guide us:
      </p>
    </motion.div>
  </div>
);

const BouncingBall = () => {
  return (
    <div className="flex pl-14 items-center h-screen">
      <motion.div
        className=" rounded-full w-16 h-16"
        // style={{
        //   backgroundImage: 'url("football.png")',
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        // }}
        initial="hidden"
        whileInView={{
          y: ["-500%", "0%", "-300%"],
          scale: [2, 2, 2, 2, 2, 4],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.3, 0.1, 0, 0],
        }}
      >
        <Image
          src="/football.png"
          alt=""
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
      </motion.div>
    </div>
  );
};

const BallRoll = () => {
  return (
    <div className="flex justify-center items-center h-60">
      <motion.div
        className="w-16 h-16 rounded-full"
        whileInView={{
          x: [-450, -50],
          rotate: [0, 360 * 7],
          scale: [1, 2, 4],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          times: [0, 0.5, 1],
        }}
        // style={{ display: "inline-block" }}
      >
        <Image
          src="/basketball.png"
          alt=""
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
      </motion.div>
    </div>
  );
};

const BouncingBall2 = () => {
  return (
    <div className="flex justify-center items-center h-40 ">
      <motion.div
        className="w-16 h-16  rounded-full"
        whileInView={{
          x: [-100, 100, -100, -300, -100], // Moves the ball back and forth
          // y: [0, -150, 0, -150, 0], // Simulates the bouncing effect
          scale: [3, 3, 3], // Scales the ball up and down
        }}
        transition={{
          duration: 4, // Duration of the animation
          ease: "easeInOut", // Smooth easing
          times: [0, 0.2, 0.5, 0.7, 1], // Control points for keyframes
          // repeat: 2, // Repeat the animation
        }}
        // style={{ display: "inline-block" }}
      >
        <Image
          src="/tennisball.png"
          alt=""
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
      </motion.div>
    </div>
  );
};
