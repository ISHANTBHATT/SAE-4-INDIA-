import React, { useState, useEffect } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import { fadeIn } from "../../../variants";
import Img from "next/image";
const HomeCard = ({ key, title, img }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imgElement = new Image();
    imgElement.src = img;
    imgElement.onload = () => setIsLoading(false);
  }, [img]);
  return (
    <section
      className="h-[60vh] lg:h-screen relative flex md:justify-center"
      id="home"
    >
      {isLoading && (
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-14 w-14"></div>
        </div>
      )}
      <motion.div
        key={img}
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="w-full h-full absolute top-0 left-0"
      >
        <Img
          src={img}
          alt=""
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </motion.div>
      <div className="px-4 lg:px-4  py-0 lg:py-20 flex-1 flex flex-col z-[1] absolute left-0 bottom-10">
        <motion.p
          key={title}
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-[50px]  lg:text-[100px] font-extrabold text-white w-full font-harlow"
        >
          Let&apos;s Play
        </motion.p>
        <motion.p
          key={title}
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-[50px]  lg:text-[100px] font-extrabold text-white w-full font-harlow"
        >
          {title}
        </motion.p>

        <motion.p
          key={key}
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-sm md:text-lg text-textColor text-left text-white w-[50%] md:w-[40%]"
        >
          Together, we are dedicated to fostering a love for sports and physical
          fitness in individuals of all ages, with a particular focus on the
          youth of today—the future of tomorrow.
        </motion.p>
      </div>
    </section>
  );
};

export default HomeCard;
