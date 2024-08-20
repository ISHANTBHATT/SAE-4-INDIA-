"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeCard from "./HomeCard";

const carouseldata = [
  { id: "1", img: "/basketball.jpg", name: "BASKETBALL" },
  { id: "2", img: "/tennis6.jpg", name: "TENNIS" },
  { id: "3", img: "/taekwondo.jpg", name: "TAEKWONDO" },
];
const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="hidden absolute top-1/2 left-0 transform -translate-y-1/2 z-[1] focus:outline-none  items-center px-6 py-6 border  backdrop-blur-md bg-lightOverlay rounded-full font-semibold text-white hover:text-black hover:bg-white"
      onClick={onClick}
    >
      <span className="absolute inset-y-0 left-4 flex items-center">&lt;</span>
    </button>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <button
      className="hidden  absolute top-1/2 right-0 transform -translate-y-1/2 z-[1] focus:outline-none items-center px-6 py-6 border backdrop-blur-md bg-lightOverlay rounded-full font-semibold text-white hover:text-black hover:bg-white"
      onClick={onClick}
    >
      <span className="absolute inset-y-0 right-5 flex items-center ">
        &gt;
      </span>
    </button>
  );
};
const CustomDots = ({ dots, data }) => (
  <div className="custom-dots flex flex-col justify-center space-y-4 absolute right-4 bottom-20">
    {dots.map((dot, index) => (
      <a
        key={index}
        className={`flex space-x-4 justify-between group relative hover:text-white font-bold ${
          dot.props.className.includes("slick-active")
            ? "text-white"
            : "text-gray-600"
        }`}
        onClick={dot.props.children.props.onClick}
      >
        <p
          className={` ${
            dot.props.className.includes("slick-active")
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100"
          } transition-opacity duration-300`}
        >
          {data[index].name}
        </p>
        <p>0{index + 1}</p>
        <span
          className={`absolute -left-4 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-300 ${
            dot.props.className.includes("slick-active")
              ? "scale-x-100"
              : "scale-x-0 group-hover:scale-x-100"
          }`}
        ></span>
      </a>
    ))}
  </div>
);

function HomeCarousel() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 3,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 8000,
    appendDots: (dots) => <CustomDots dots={dots} data={carouseldata} />,
    // fade:true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="w-full h-full">
        {carouseldata.map((data) => (
          <HomeCard key={data.id} title={data.name} img={data.img} />
        ))}
        {/* <div>
          <img src="../badminton.jpg" />
        </div>
        <div>
          <img src="../basketball.jpg" />
        </div>
        <div>
          <img src="../tennis.jpg" />
        </div> */}
      </Slider>
    </div>
  );
}

export default HomeCarousel;
