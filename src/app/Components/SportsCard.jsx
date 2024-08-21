"use client";
import Image from "next/image";
import React, { useState } from "react";

function SportsCard({ key, name, img, onHover }) {
  return (
    <div className="w-full flex justify-center md:justify-end ">
      <div
        className="w-[80%]  rounded-s-2xl rounded-e-2xl md:rounded-e-none  py-12 pl-10 hover:w-[85%] transition-all duration-500 ease-in-out bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0 bg-black"
        onMouseEnter={() => onHover(name)}
        onMouseLeave={() => onHover(null)}
      >
        <Image
          src={img}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 rounded-s-2xl rounded-e-2xl md:rounded-e-none "
        />
        <p1 className="text-white font-bold text-2xl relative z-10">{name}</p1>
      </div>
    </div>
  );
}

export default SportsCard;
