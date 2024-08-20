"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import FeedCard from "./FeedCard";
import feeddata from "./Feeddata";

// const feeddata = [
//   {
//     id: "1",
//     video: "../footballclip.mp4",
//     title: "Lorem ipsum dolor sit amet",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: "2",
//     video: "../kabaddiclip.mp4",
//     title: "Lorem ipsum dolor sit amet",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: "3",
//     video: "../footballclip.mp4",
//     title: "Lorem ipsum dolor sit amet",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
// ];
const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="hidden sm:inline-flex absolute top-1/2 left-0 transform -translate-y-1/2 z-[1] focus:outline-none  items-center px-6  font-semibold text-black text-2xl hover:text-lg hover:text-primary"
      onClick={onClick}
    >
      <FaLessThan />
    </button>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <button
      className="hidden sm:inline-flex absolute top-1/2 right-0 transform -translate-y-1/2 z-[1] focus:outline-none items-center px-6 font-semibold text-black text-2xl hover:text-lg hover:text-primary "
      onClick={onClick}
    >
      <FaGreaterThan />
    </button>
  );
};
const FeedCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="w-full ">
      <div className="flex-col justify-center text-center py-10">
        <h1 className="text-5xl text-textcolor font-bold">LIVE FEED</h1>
        {/* <p className=''>Beyond genius really enough passed is up.</p> */}
      </div>
      {/* <div className="bg-[#f8f8f8]"> */}
      <Slider {...settings} className="">
        {feeddata.map((e) => (
          <FeedCard key={e.id} video={e.video} title={e.title} desc={e.desc} />
        ))}
      </Slider>
      {/* </div> */}
    </div>
  );
};

export default FeedCarousel;
