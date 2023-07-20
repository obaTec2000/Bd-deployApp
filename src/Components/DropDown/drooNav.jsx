import "./style.css";

const Dropnav = () => {
  return (
    <>
      <div className="b1">
        <div className="origin-top-right divide-y divide-gray-100 rounded-md bg-[#353530] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex">
            <div className="ml-8 h-24 w-22 text-white hidden xl:flex">
              <div className="absolute w-56 h-22 bg-black justify-center p-1 mt-3 rounded-lg dark:hover:bg-dark-third">
                <div className="flex mx-2 items-center">
                  <img
                    src="assests/navImage.png"
                    alt="Profile"
                    className="w-9"
                  />
                  <h1 className="mx-4">Gabriel Jones</h1>
                </div>
                <div className="border-b mt-2"></div>
                <h2 className="text-center text-sm mt-1">View Profile</h2>
              </div>
            </div>
            <div className="flex gap-10 mt-24 items-center mx-7">
              <button className="h-16 w-16">
                <img src="images/bt1.png" alt="Pro button" />
              </button>
              <button className="h-16 w-16">
                <img src="images/bt1.png" alt="Pro button" />
              </button>
            </div>
          </div>

          <div className="py-1 mt-2" role="none">
            <button
              className="text-white gap-6 flex px-3 py-3 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              <img src="images/A1.png" alt="A1" className="b2" />
              Upgrade to Pro
            </button>

            <button
              className="text-white gap-6 flex px-3 py-3 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              <img src="images/A2.png" alt="A2" className="b2" />
              Advertising
            </button>
          </div>
          <div className="py-1" role="none">
            <button
              className="text-white gap-6 flex px-3 py-3 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              <img src="images/A1.png" alt="A1" className="b2" />
              Settings & privacy
            </button>
            <button
              className="text-white gap-6 flex px-3 py-3 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              <img src="images/A4.png" alt="A4" className="b2" />
              Invite your friends
            </button>
          </div>

          <div className="mt-1" role="none">
            <button
              className="text-white gap-6 flex px-3 py-3 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              <img src="images/A5.png" alt="A5" className="b2" />
              Log out
            </button>
          </div>
          <h1 className="text-center py-7 text-white text-xs">
            2023 BlackDefynition <br />
            About Contact Us Privacy Policy
          </h1>
        </div>
      </div>
    </>
  );
};

export default Dropnav;
