"use client";
import React, { useState } from "react";
import SportsCard from "./SportsCard";

const sportsdata = [
  {
    id: "1",
    name: "Tennis",
    img: "../tennis5.jpg",
    icon: "../tennisicon.jpg",
    desc: "Tennis is a popular sport in India, and professional coaching emphasizes technique, endurance, and strategy. The coaching programs are designed to cater to all levels, from beginners to advanced players. Coaches focus on improving stroke mechanics, footwork, mental toughness, and match play, ensuring athletes are well-prepared for competitive tennis.",
  },
  {
    id: "2",
    name: "Badminton",
    img: "../badminton.jpg",
    icon: "../badmintonicon.png",
    desc: "Badminton is one of India’s most successful sports, with world-class athletes like P.V. Sindhu and Saina Nehwal bringing home international accolades. Professional badminton coaching focuses on agility, reflexes, strategic play, and shuttle control. Training sessions include on-court drills, strength conditioning, and match simulations to help athletes excel.",
  },
  {
    id: "3",
    name: "Football",
    img: "../football4.webp",
    icon: "../footballicon.jpg",
    desc: "Football in India is growing rapidly, and coaching programs are designed to nurture talent from grassroots to professional levels. The focus is on developing technical skills, tactical understanding, physical conditioning, and teamwork. The professional team ensures that athletes are exposed to modern training methodologies and competitive match experience.",
  },
  {
    id: "4",
    name: "Basketball",
    img: "../basketball4.webp",
    icon: "../basketballicon.jpg",
    desc: "Basketball coaching in India aims to build the next generation of athletes capable of competing at both national and international levels. The training programs focus on improving ball-handling skills, shooting accuracy, defensive strategies, and physical fitness. Coaches emphasize teamwork, quick decision-making, and game intelligence.",
  },
  {
    id: "5",
    name: "Kayaking and Canoeing",
    img: "../Kayakingandcanoeing.jpg",
    icon: "../Kayakingandcanoeingicon.jpg",
    desc: "Water sports like kayaking and canoeing require specialized training to master. The coaching includes learning various paddling techniques, improving endurance, and understanding water dynamics. The programs also cover safety measures and race strategies to prepare athletes for national and international competitions.",
  },
  {
    id: "6",
    name: "Dragon Boat Racing",
    img: "../dragonboatracing.webp",
    icon: "",
    desc: "Dragon boat racing is a team sport that demands synchronization, strength, and endurance. Coaching focuses on perfecting paddling techniques, building team coordination, and enhancing overall fitness. The sport’s cultural significance is also highlighted, fostering a deep connection between the athletes and the tradition of dragon boating.",
  },
  {
    id: "7",
    name: "Judo",
    img: "../judo4.jpg",
    icon: "",
    desc: "Judo is a martial art that combines physical prowess with mental discipline. Coaching in judo involves learning various throws, holds, and submission techniques. The training also emphasizes physical conditioning, flexibility, and understanding the philosophical aspects of judo, such as respect and humility.",
  },
  {
    id: "8",
    name: "Taekwondo",
    img: "../taekwondo.jpg",
    icon: "",
    desc: "Taekwondo, a Korean martial art, focuses on high, fast kicks and quick footwork. Coaching programs are designed to enhance agility, flexibility, and strength. Training includes learning forms (poomsae), sparring techniques, and self-defense. The discipline and mental focus required in Taekwondo are integral parts of the coaching.",
  },
  {
    id: "9",
    name: "Kabaddi",
    img: "../kabaddi.jpg",
    icon: "",
    desc: "Kabaddi, a traditional Indian sport, is known for its combination of speed, strength, and strategy. Coaching in kabaddi focuses on enhancing reflexes, strength training, and understanding the rules and strategies of the game. The professional team ensures athletes are well-prepared for national-level competitions by integrating modern training techniques with traditional practices.",
  },
  {
    id: "10",
    name: "Squash",
    img: "../squash2.jpg",
    icon: "../squashicon.jpg",
    desc: "Squash is a fast-paced racket sport that requires excellent reflexes and strategic play. Coaching programs focus on improving footwork, shot accuracy, and game tactics. Conditioning drills and match play are integral parts of the training, aimed at preparing athletes for competitive squash.",
  },
  {
    id: "11",
    name: "Chess",
    img: "../chess.webp",
    icon: "../chessicon.png",
    desc: "Chess coaching is designed to develop strategic thinking, problem-solving skills, and mental endurance. Training includes learning various opening strategies, mid-game tactics, and endgame techniques. Coaches work on improving concentration, memory, and decision-making under pressure.",
  },
  {
    id: "12",
    name: "Swimming",
    img: "../swimming.jpg",
    icon: "../swimmingicon.jpg",
    desc: "Swimming coaching involves perfecting techniques in different strokes (freestyle, backstroke, breaststroke, and butterfly) and improving endurance. The programs also cover aspects like breathing techniques, starts, and turns. Swimmers are trained to compete at various levels, from school competitions to national championships.",
  },
];

function Sports() {
  const [hoveredSport, setHoveredSport] = useState(null);

  const currentSport = sportsdata.find((sport) => sport.name === hoveredSport);
  return (
    <div className="w-full h-full flex bg-white py-10">
      <div className="hidden md:flex flex-col flex-1 justify-center items-center">
        {/* <div className=""> */}
        <p className="text-7xl font-extrabold">Sports</p>
        <div className="w-full ">
          {currentSport ? (
            <div className="pt-10 flex ">
              <img
                src={currentSport.icon}
                alt={`${currentSport.name} icon`}
                className="w-96 h-96"
              />
              <p className=" text-neutral-600 flex items-center ">
                {currentSport.desc}
              </p>
            </div>
          ) : (
            // <img src="../defaulticon.jpg" alt="Default icon" />
            <div>
              <p className="pt-10 m-auto text-neutral-600 w-[500px] ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p className="py-10 m-auto text-neutral-600 w-[500px] ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          )}
        </div>
        {/* </div> */}
      </div>
      <div className=" flex flex-1 flex-col gap-2 h-screen overflow-y-auto scroll-smooth custom-scrollbar">
        {sportsdata.map((sport) => (
          <SportsCard
            key={sport.id}
            name={sport.name}
            img={sport.img}
            onHover={setHoveredSport}
          />
        ))}
      </div>
    </div>
  );
}

export default Sports;
