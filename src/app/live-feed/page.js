import React from "react";
import feeddata from "../Components/Feeddata";
import FeedCard from "../Components/FeedCard";
function page() {
  return (
    <div
      className=" bg-[#0a0a0a] py-40"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%2318181b'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
    >
      <p className="text-5xl font-bold text-center text-white">LIVE FEED</p>
      <div className=" flex flex-wrap justify-center">
        {feeddata.map((e) => (
          <FeedCard
            key={e.id}
            id={e.id}
            video={e.video}
            title={e.title}
            desc={e.desc}
            className="bg-zinc-900 border-zinc-700 hover:bg-zinc-950 "
            textColor="text-white"
            descColor="text-zinc-400"
          />
        ))}
      </div>
    </div>
  );
}

export default page;
