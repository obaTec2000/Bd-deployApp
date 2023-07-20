import React, { useState } from "react";
import Chats from "./Chats";
import { BiFilter } from "react-icons/bi";


function LeftMenu() {

  const [isDown, setIsDown] = useState(false);

  const toggleDown = () => {
    setIsDown(!isDown);
  };


  const [filter, setFilter] = useState(false);

  return (
    // LeftMenu container
    <div className="flex flex-col border-r border-neutral-700 w-100 h-screen">
      {/* Profile nav */}

      <div className="flex justify-between p-2 text-white text-3xl mt-2">
      <h1>Chat</h1>
        <div onClick={toggleDown}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group 189">
              <path id="Ellipse 131" d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15Z" fill="#353530" />
              <path id="Vector" d="M12.7495 15.4593C12.7531 14.0467 13.8068 12.9065 15.1055 12.9098C16.4042 12.9131 17.4519 14.0587 17.4483 15.4713C17.4447 16.8839 16.391 18.0241 15.0924 18.0208C13.7937 18.0174 12.7459 16.8719 12.7495 15.4593ZM9.34939 18.006C10.6481 18.0094 11.7017 16.8692 11.7053 15.4566C11.709 14.044 10.6612 12.8984 9.36251 12.8951C8.06382 12.8917 7.01019 14.0319 7.00656 15.4445C7.00293 16.8571 8.0507 18.0027 9.34939 18.006ZM20.8353 18.0355C22.134 18.0388 23.1876 16.8987 23.1913 15.4861C23.1949 14.0735 22.1471 12.9279 20.8484 12.9246C19.5497 12.9212 18.4961 14.0614 18.4925 15.474C18.4889 16.8866 19.5366 18.0322 20.8353 18.0355Z" fill="#FFFCFC" />
            </g>
          </svg>
        </div>
        {/* {isOpen && (
          <div className="dp">
  <ul className="">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
          </div>
        
        )} */}
      </div>




  

      {/* Search and filter */}
      <div className="flex justify-between items-center h-[60px] p-2">
        {/* Search input */}
        <input
          type="text"
          placeholder="Search or start a new chat"
          className="rounded-full bg-[#353530] text-white text-sm font-light outline-none px-4 py-2 w-[400px] h-[35px] placeholder:text-[#8796a1] placeholder:text-sm placeholder:font-light"
        />

        {/* Filter button */}
        <button
          className={`text-2xl m-2 p-1 rounded-full ${filter
              ? "bg-emerald-500 text-white rounded-full hover:bg-black"
              : "text-white hover:bg-black"
            }`}
          onClick={() => setFilter(!filter)}
        >
          <BiFilter />
        </button>
      </div>

      {/* Chats */}
      <Chats filter={filter} />
    </div>
  );
}

export default LeftMenu;
