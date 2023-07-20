import React from "react";
import navImage from "../assests/navImage.png";
import play from "../assests/icons/play.png";
import photos from "../assests/icons/photo.png";

const CreatePost = () => {
  return (
    <div className="w-screen sm:w-full text-white font-outfit ">
      <div className="max-w-[40rem] sm:max-w-[40rem] mx-auto  sm:px-2 bg-[#353530] rounded-[1rem] ">
        <div className=" mt-8 flex items-center w-full p-3 pt-4 ">
          <div className="w-12 h-12 shrink-0">
            <img src={navImage} alt="navImage" className="" />
          </div>
          <div className="flex items-center ml-5 w-full ">
            <input
              type="text"
              placeholder="what's on your mind John?"
              className="outline-0 bg-[#1C1B19] p-1 pl-3 rounded-full w-full font-outfit "
            />
          </div>
          <div
            className="flex items-center bg-[#BE9524] px-3 font-outfit text-xs rounded-full h-7  ml-4"
          >
            <button className="font-bold text-white">Post</button>
          </div>
        </div>
        <div className="border-b my-2"></div>
        <div className="flex justify-between px-3 sm:mx-3 pb-3">
          <div className="flex items-center">
            <div className="w-3 h-3">
              <img src={play} alt="play" className="" />
            </div>
            <p className="pl-2 whitespace-nowrap text-xs">Go live</p>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3">
              <img src={photos} alt="photos" className="" />
            </div>
            <p className="pl-2 whitespace-nowrap text-xs">Photo/Video</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
