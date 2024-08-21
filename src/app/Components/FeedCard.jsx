"use client";
import React from "react";
import { useRouter } from "next/navigation";
function FeedCard({
  key,
  id,
  className,
  video,
  title,
  desc,
  textColor,
  descColor,
}) {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };
  const router = useRouter();
  const handleClick = (title, id) => {
    const url = title.replace(/\s+/g, "-").toLowerCase();
    router.push(`../${url}/?id=${encodeURIComponent(id)}`);
  };
  // const sortedNews = news
  //   .slice()
  //   .sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <div
      className={`max-w-sm m-14 bg-white border border-gray-200 rounded-lg shadow my-10 ${className}`}
    >
      <a onClick={() => handleClick(title, id)}>
        <video className="rounded-t-lg cursor-pointer" loop autoPlay muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </a>
      <div class="p-5">
        <a onClick={() => handleClick(title, id)}>
          <h5
            class={`mb-2 text-2xl font-bold tracking-tight text-gray-900 cursor-pointer ${textColor}`}
          >
            {title}
          </h5>
        </a>
        <p class={`mb-3 font-normal text-gray-700 ${descColor}`}>
          {truncateText(desc, 120)}
        </p>
        {/* <a
          onClick={() => handleClick(title, id)}
          class="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 "
        >
          Read more
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a> */}
      </div>
    </div>
  );
}

export default FeedCard;
