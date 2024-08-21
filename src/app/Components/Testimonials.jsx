"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
const partnersdata = [
  { id: "1", logo: "../Streetracket_Logo2.png", name: "Streetracket" },
  { id: "2", logo: "../Tipsarevic_logo.png", name: "Tipsarevic" },
  { id: "3", logo: "../Top_tennis_academy.png", name: "Top tennis academy" },
  { id: "4", logo: "../tenalis_sports.png", name: "Tenalis sports" },
  { id: "5", logo: "../speedball.png", name: "Speedball" },
  { id: "6", logo: "../yellowfields_logo.png", name: "Yellow Fields" },
];

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax parallax overflow-hidden tracking-[-2px] leading-[0.8] m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div
        className="scroller scroller font-semibold uppercase text-[64px] flex whitespace-nowrap flex-nowrap font-plaster text-primary"
        style={{
          x,
          fontStyle: "normal",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <span className="block mr-24">{children} </span>
        <span className="block mr-24">{children} </span>
        <span className="block mr-24">{children} </span>
        <span className="block mr-24">{children} </span>
      </motion.div>
    </div>
  );
}

export default function App() {
  return (
    <section>
      <div className="flex-col justify-center text-center py-10">
        <h1 className="text-5xl text-textcolor font-bold">OUR PARTNERS</h1>
      </div>
      <ParallaxText baseVelocity={-2}>
        <div className="flex gap-14">
          {partnersdata.map((partner) => (
            <div key={partner.id} className="w-40 h-44 flex items-center">
              <img src={partner.logo} className="" />
            </div>
          ))}
        </div>
      </ParallaxText>
    </section>
  );
}
