import React from "react";

import loginImg from "../assests/bgimage.png";

export default function Forgot() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full font-outfit font-bold">
      <div className="hidden sm:block">
        <img className="w-full h-screen object-cover bg-cover bg-no-repeat" src={loginImg} alt="loginImg" />
      </div>
      <div className="bg-black flex flex-col">
        <div className="bg-black flex flex-col">
          <h1 className="text-3xl font-Outfit text-center text-white mt-10">
            FORGOT PASSWORD
          </h1>

          <form className="w-full mx-auto  rounded-1g p-8 px-8">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              ></label>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white"
                placeholder="Enter your e-mail for verification process! "
                required=""
              />
            </div>

            <h1 className="text-sm font-Outfit text-center text-white mt-10">
              We will send an OTP to your e-mail
            </h1>
          </form>

          <div class="text-center lg:text-">
            <a
              href="reset"
              type="button"
              class="rounded-full mt-40  px-6 pb-1 pt-2 text-xl   text-black bg-white"
            >
              Enter
            </a>
          </div>

          <p className="text-xs  text-center mt-40 bottom- text-white font-outfit ">
            {" "}
            Already have an account?{" "}
            <a
              href="register"
              className="font:medium text-white hover:underline"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
