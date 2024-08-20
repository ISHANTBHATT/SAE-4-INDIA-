"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import feeddata from "../Components/Feeddata";
import FeedCard from "../Components/FeedCard";
export default function TitlePage() {
  const router = useRouter();
  // const truncateText = (text, maxLength) => {
  //   if (text.length <= maxLength) return text;
  //   return text.substring(0, maxLength) + "...";
  // };
  const handleClick = (title, id) => {
    const url = title.replace(/\s+/g, "-").toLowerCase();
    router.push(`../${url}/?id=${encodeURIComponent(id)}`);
  };

  const pathname = usePathname();
  const searchparams = useSearchParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const title = pathname.split("/")[1];
    const id = searchparams.get("id");
    const foundfeed = feeddata.find((e) => e.id === parseInt(id));
    if (foundfeed) {
      setItem(foundfeed);
    }
  }, [pathname, searchparams]);

  if (!item) {
    return <div>Loading....</div>;
  }
  const sortedfeed = feeddata.filter((e) => e.id != item.id).slice(0, 3);

  return (
    <div
      className="w-full py-40 px-4 md:px-20 flex flex-col gap-4 text-zinc-300 bg-black"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%2318181b'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
    >
      <div className="w-full  flex flex-col gap-4">
        <div className="w-full flex gap-20">
          <video
            key={item.video}
            className="rounded-lg w-[70%]"
            autoPlay
            controls
          >
            <source src={item.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="flex flex-col gap-4">
            <p className="text-xl">Playlist</p>
            {sortedfeed.map((e) => (
              <div className="flex gap-2 bg-zinc-900 p-4 hover:bg-zinc-950 rounded-xl">
                <video
                  key={e.video}
                  onClick={() => handleClick(e.title, e.id)}
                  className="rounded-lg w-[40%] cursor-pointer"
                  loop
                  autoPlay
                  muted
                >
                  <source src={e.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p
                  onClick={() => handleClick(e.title, e.id)}
                  className=" cursor-pointer text-lg"
                >
                  {e.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* <span className="flex gap-2 items-center">
          <CalendarDaysIcon className="w-6 text-gray-500" />
          <span>{item.date}</span>
        </span> */}
        <h1 className="text-2xl font-bold mb-4 font-serif text-white">
          {item.title}
        </h1>
        <p className="whitespace-pre-wrap text-justify">{item.desc}</p>
      </div>
      <div className="w-full">
        <p className="w-full text-3xl font-bold p-4 border-b-4 border-textcolor">
          You May Like
        </p>
        <div className="flex flex-wrap">
          {sortedfeed.map((e) => (
            <FeedCard
              key={e.id}
              id={e.id}
              video={e.video}
              title={e.title}
              desc={e.desc}
              className="bg-zinc-900 border-zinc-700 hover:bg-zinc-950 m-8"
              textColor="text-white"
              descColor="text-zinc-400"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
