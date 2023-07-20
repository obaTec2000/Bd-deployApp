import React, { useState } from "react";
import bdImage from "../assests/bdImage.png";
import navImage from "../assests/navImage.png";
import profileActive from "../assests/BD_@Farati.png";
import {
  FaPlane,
  FaRegImages,
  FaMusic,
  FaLeanpub,
  FaDesktop,
  FaExchangeAlt,
  FaToolbox,
  FaBars,
} from "react-icons/fa";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

const LeftSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // let isOpen = false;
  return (
    <div className="w-[15rem] justify-between hidden sm:block mx-auto mt-8 text-white">
      <div className="hidden md:flex">
        <div className="h-full hidden xl:flex">
          <div         
            className="inline-flex items-center bg-zinc-800 justify-center p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-third"
          >
            <img src={navImage} alt="Profile" className="flex w-10" />
            <span className="mx-5 font-outfit font-bold text-xs dark:text-dark-txt">
              Gabriel Jones
              <h1>@gabrieljones</h1>
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-6">
        <div className="flex items-center font-bold">
          <FaBars className="w-6 h-6" />
        </div>

        <div className="flex items-center mt-4 ">
          <ul className="">
            <li className="">
              <div
              
                className="inline-flex items-center justify-between rounded-lg font-bold  dark:hover:bg-dark-third "
              >
                <img
                  src={profileActive}
                  alt="Pixel"
                  className="items-center w-9"
                />
                <span className="mx-5 font-outfit text-sm dark:text-dark-txt">
                  Face of BD
                </span>
              </div>
            </li>
          </ul>
        </div>
        {/* <div className="border-b my-2"></div> */}

        <div className="flex items-center mt-4 border-b  ">
          <FaPlane className="w-5 h-5" />
          <p className="ml-9 font-bold font-outfit text-sm">BD Travel</p>
        </div>

        <div className="flex items-center border-b my-6 ">
          <FaRegImages className="w-5 h-5" />
          <p className="ml-9 font-bold font-outfit text-sm">BD Art</p>
        </div>

        <div className="flex items-center border-b ">
          <FaMusic className="w-5 h-6" />
          <p className="ml-9 font-bold font-outfit text-sm">BD URIAL</p>
        </div>
        <div className={`dropdown ${isOpen ? "open" : ""}`}>
          {isOpen === false ? null : (
            <button
              onClick={toggleDropdown}
              className="dropdown-toggle flex items-center mt-4 bg-zinc-800 text-sm rounded-full"
            >
              See more
              <FaAngleDown className="w-5 h-5" />
            </button>
          )}
          {!isOpen && (
            <div className="dropdown-menu">
              <div className="flex border-b my-6">
                <FaLeanpub className="w-5 h-6" />
                <p className="ml-9 font-bold font-outfit text-sm">BD Learn</p>
              </div>
              <div className="flex border-b my-6">
                <FaDesktop className="w-5 " />
                <p className="ml-5 font-bold font-outfit text-sm">BD TV</p>
              </div>
              <div className="flex border-b my-6">
                <AiFillHeart className="w-5 h-6" />
                <p className="ml-5 font-bold font-outfit text-sm">BD DATE</p>
              </div>
              <div className="flex border-b my-6">
                <FaExchangeAlt className="w-5 h-6" />
                <p className="ml-5 font-bold font-outfit text-sm">
                  BD EXCHANGE
                </p>
              </div>
              <div className="flex border-b my-6">
                <FaToolbox className="w-5 h-6" />
                <p className="ml-5 font-bold font-outfit text-sm">
                  BD Job finder
                </p>
              </div>
            </div>
          )}
          {isOpen === false ? (
            <button
              onClick={toggleDropdown}
              className="dropdown-toggle flex items-center mt-4 bg-zinc-800 text-sm rounded-full"
            >
              {isOpen}
              See less
              <FaAngleUp className="w-5 h-5" />
            </button>
          ) : null}
        </div>
      </div>
      <div className=" flex flex-col mt-14">
        {/* Add your additional content here */}

        <div className=" mt-4 flex ">
          <img src={bdImage} alt="pick" className="w-80 h-32" />
        </div>

        <div className="items-center mt-4 text-[10px] font-outfit">
          <p className="font-bold">Name of Company advert</p>
          <p>Location of the name of the advert</p>
          <p>A catch phrase/short note from the advert company</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;