import React, { useState, useEffect } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import { fadeIn } from "../../../variants";
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
      <motion.img
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        animate="show"
        exit="hidden"
        src={img}
        alt=""
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <motion.div
        key={title}
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="px-4 lg:px-4 py-20 flex-1 flex flex-col   z-[1] absolute left-0 bottom-10"
      >
        {/* <motion.p className="text-[50px] sm:text-[100px]  lg:text-[100px] font-extrabold text-white w-full ">
          Let's Play
        </motion.p>
        <motion.p
          key={title}
          variants={fadeIn("right", 0.8)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-[50px] sm:text-[100px]  lg:text-[150px] font-extrabold text-white w-full "
        >
          {title}
        </motion.p> */}

        {/* <motion.p
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-base text-textColor text-center md:text-left md:w-[80%]">
         He preference connection astonished on of ye. partiality on or continuing in particular principles as. Do believing oh disposing to supportd allowance we.
        </motion.p> */}

        {/* <motion.div
        key={btn}
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          animate="show"
          exit="hidden"
          // className='flex absolute bottom-24'
          >
            
        <button
          type="button"
          className="bg-transparent hover:bg-white border-white border-2 w-full text-white hover:text-black md:w-auto px-10 py-3 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
            {btn}
        </button>
        
        </motion.div> */}
      </motion.div>
      {/* <div className='justify-center items-center py-2 md:py-10 w-1/2 h-full hidden md:flex '>

      </div> */}
    </section>
  );
};

export default HomeCard;
