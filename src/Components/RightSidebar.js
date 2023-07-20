import React, { useState } from 'react';
import Reals from "../../src/assests/icons/reals.png";
import BD_Gabriel from "../../src/assests/BD_@Gabriel.png";
import BD_Farati from "../../src/assests/BD_@Farati.png";
import BD_Daniel from "../../src/assests/BD_@Daniel.png";
import BD_Samuel from "../../src/assests/BD_@Samuel.png";
import activeIcon from "../assests/icons/active.png";
import bdReals from "../assests/bdReals.png";

const RightSidebar = () => {
  const [buttonColor, setButtonColor] = useState('#353530');

  const handleClick = () => {
    setButtonColor('#BE9524');
  };
  
  const profiles = [
    { name: "BD_@Gabriel", photo: BD_Gabriel },
    { name: "BD_@Farati", photo: BD_Farati },
    { name: "BD_@Daniel", photo: BD_Daniel },
    { name: "BD_@Samuel", photo: BD_Samuel },
  ];

  return (
    <div className="w-[15rem] justify-between hidden sm:block mx-10 mt-2 text-white">
      {/* Sidebar header */}
      <div className="justify-between">
        <div className=" items-center sm:pt-4 ">
          <div className="flex justify-end  flex-grow">
            <img src={Reals} alt='reals' className="w-6" />
          </div>
        </div>
        <p className=" font-outfit mt-4 text-sm font-bold">
          Suggested Account
        </p>
        <div className="">
          <div className="space-y-4 items-center mt-4">
            {profiles.map((profile) => (
              <div className="flex items-center justify-between">
                <div className="relative w-12  flex" key={profile.name}>
                  <img
                    src={profile.photo}
                    className="object-cover rounded-full"
                   alt='profile'
                  />

                  <div className="flex">
                    <img
                      src={activeIcon}
                      className="absolute bottom-0 my-4 left-10"
                    alt='active'
                    />
                  </div>
                </div>
                <p className=" font-bold font-outfit text-sm">
                  {profile.name}
                </p>
                {/* <div className={`flex items-center bg-${isClicked ? '#000000' : '#353530'} px-2 py-1 font-outfit text-xs rounded-lg`}>
                  <button className="font-bold text-white" onClick={handleClick}>
                    Send invite
                  </button>
                </div> */}
                <div className="flex items-center">
                  <div
                    className="bg-[#353530] px-1 text-sm py-1 rounded-lg"
                    style={{ backgroundColor: buttonColor }}
                  >
                    <button className="font-bold text-white" onClick={handleClick}>
                      Send invite
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="border-b my-4"></div> */}
          <div className="items-center mt-20 ">
            <img src={bdReals} alt='bdReals'  className="w-80 h-32" />
            <div className="items-center mt-2 text-[10px] font-outfit">
              <p className="font-bold">Name of Company advert</p>
              <p>Location of the name of the advert</p>
              <p>A catch phrase/short note from the advert company</p>
            </div>
          </div>
        </div>
      </div>

      {/* List of suggested accounts */}
    </div>
  );
};

export default RightSidebar;
