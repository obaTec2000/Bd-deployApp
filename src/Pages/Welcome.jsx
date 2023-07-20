import React from "react";
import HomeImg from "../assests/welcomenewpage.png";

export default function Welcome() {
  
  return (
    <div className=" h-screen bg-no-repeat bg-cover w-full">
      <div className="relative">
        <img
          className="w-full h-screen object-cover bg-cover bg-no-repeat"
          src={HomeImg}
          alt="HomeImage"
        />
        <a
          href="login"
          class="absolute text-xl right-14 -translate-x-1/4 -translate-y-2/4 bottom-24 bg-white text-black active:bg-white mr-4 font-bold  text-sm px-6 py-1 rounded-full shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
        >
          Constellate
        </a>
        <h1 class="absolute text-[15px] text-white bottom-16 right-28  ">
          Bridging Communities,
        </h1>
        <a class="absolute text-[15px] text-white bottom-12 right-8 -translate-x-1/3 ">
          Sharing Cultures & Diversity
        </a>
      </div>
    </div>
  );
}
