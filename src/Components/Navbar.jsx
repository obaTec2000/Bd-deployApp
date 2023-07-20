import React, { useState } from "react";
import arrowDown from "../../src/assests/icons/arrowDown.png";
import navImage from "../assests/navImage.png";
import Probutton from '../assests/icons/Probutton.png'
import notificationIcon from '../assests/icons/Notification.png';
import Notification from "./DropDown/notificationDrop";
import Dropnav from "./DropDown/drooNav";
import Search from "./DropDown/Search"
import Friend from "./DropDown/friend";
import { Icon } from "@iconify/react";
import { SearchIcon } from "@heroicons/react/outline";


export default function Homepage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isNotification, setIsNotification] = useState(false);

  const toggleNotification = () => {
    setIsNotification(!isNotification);
  };

  const [isDown, setIsDown] = useState(false);

  const toggleDown = () => {
    setIsDown(!isDown);
  };

  const [isFriend, setIsFriend] = useState(false);

  const toggleFriend = () => {
    setIsFriend(!isFriend);
  };



  return (
    <div className="sticky top-0 z-50 w-auto flex bg-black h-12">
      {/* Left */}
      <div className="flex items-center p-4 ">
        <img className="w-10  h-10 " src="/assests/bdlogoimage.png" alt="" />
        <h1 className="uppercase font-sans-Bliar-ITC  text-white pl-2">
          Blackdefyition
        </h1>
        <div className="flex ml-2 items-center bg-zinc-800  rounded-full">
          <SearchIcon className="h-4 pl-4  text-white w-7 text-bold " />
          <input
            onClick={toggleDown}
            type="text"
            placeholder="Search"
            className="hidden md:inline-flex md:inline-white mx-5 ml-2 p-1 items-center bg-transparent outline-none text-white placeholder-white flex-shrink"
          />
          {isDown && (
            <div
              className="a3"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <Search />
            </div>
          )}
        </div>
      </div>

      {/* Center */}

      <div className="flex justify-end  flex-grow">
        <div>
          <Icon
            className="flex   items-center curso-pointer md:px10 text-[#BE9524] sm:h-7 w-7 mt-3 md:hover:bg-zinc-800 rounded-xl
         "
            icon="material-symbols:home"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex justify-end items-center flex-grow md:space-x-8 mx-6">
        <div>
          <img
            className="w-24"
            src={Probutton}
            alt="probutton"
          />
        </div>
        <div className="w-6">
          <img src="images/friend.png" alt="Find friend" onClick={toggleFriend} />


          {isFriend && (
              <div>
                <Friend />
              </div>
            )}
        </div>



        <div className="flex space-x-6 md:space-x-5">
          
          <div>
            <img
              className=" w-5 mt-3"
              src={notificationIcon}
              alt="notificationIcon"
              onClick={toggleNotification}
            />

            {isNotification && (
              <div>
                <Notification />
              </div>
            )}
          </div>


          <img
            className=" w-10 h-10 item-center justify-end flex mt-1"
            src={navImage}
            alt="nav"
          />
          <div className="relative font-outfit font-bold inline-block text-left">
            <img
              className="inline-flex w-full text-white justify-center gap-x-1.5 rounded-md px-3 py-2 h-6 mt-3 ring-inset  "
              src={arrowDown}
              alt="arrowDown"
              onClick={toggleMenu}
            />

            {isOpen && (

              <div>
                <Dropnav />
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
