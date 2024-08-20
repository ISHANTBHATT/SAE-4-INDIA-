import React from "react";

function FeedCard({ className, video, title, desc, textColor }) {
  return (
    <div
      className={`max-w-sm m-14 bg-white border border-gray-200 rounded-lg shadow my-10 ${className}`}
    >
      <a href="#">
        <video className="rounded-t-lg" loop autoPlay muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </a>
      <div class="p-5">
        <a href="#">
          <h5
            class={`mb-2 text-2xl font-bold tracking-tight text-gray-900 ${textColor}`}
          >
            {title}
          </h5>
        </a>
        <p class={`mb-3 font-normal text-gray-700 ${className}`}>{desc}</p>
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 "
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
        </a>
      </div>
    </div>
  );
}

export default FeedCard;
