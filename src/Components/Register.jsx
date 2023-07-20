import React, { useState } from "react";

export default function Register() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Your registration logic here
    // ...

    // Set isRegistered to true to display the success message
    setIsRegistered(true);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full font-outfit font-bold">
      <div className="hidden sm:block">
        <img
          className="w-full h-screen object-cover bg-cover bg-no-repeat"
          src="/assests/bgimage.png"
          alt="BdImage"
        />
      </div>

      <div className="bg-black flex flex-col">
        <h1 className="text-3xl font-semibold text-center text-white mt-10">
          BLACKDEFYNITION
        </h1>

        <form className="w-full mx-auto rounded-1g p-8 px-8" onSubmit={handleRegister}>
          <div className="mb-2">
            <label
              htmlFor="first_name"
              className="block text-sm font-semibold text-white"
            >
              Create your account
            </label>
            <input
              type="text"
              id="first_name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 px-8 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="First name"
              required
            />
          </div>
          <div className="mb-2">
           
            <input
              type="text"
              id="last_name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 px-8 text-gray-900 text-sm mt-5 rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Last name"
              required
            />
          </div>
          <div className="mb-2">
           
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="shadow appearance-none border px-8 rounded-full w-full py-2 mt-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-2">
          
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="block w-full px-8 py-2 mt-5 text-black bg-white border rounded-full focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
          </div>
          <div className="mb-2">
           
            <input
              type="password"
              id="confirm_password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm Password"
              className="block w-full px-8 py-2 mt-5 text-black bg-white border rounded-full focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
          </div>
          <h1 className="text-[#808080]">Gender</h1>

          <div className="flex">
            <div className="flex items-center accent-black mr-4 mt-1">
              <input
                id="inline-radio"
                type="radio"
                value=""
                name="inline-radio-group"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="inline-radio"
                className="ml-2 text-sm font-medium text-white dark:text-white"
              >
                Male
              </label>
            </div>
            <div className="flex items-center accent-black mr-6 mt-1">
              <input
                id="inline-2-radio"
                type="radio"
                value=""
                name="inline-radio-group"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="inline-2-radio"
                className="ml-2 text-sm font-medium text-white dark:text-white"
              >
                Female
              </label>
            </div>
          </div>
          <div className="flex items-start mb-6 mt-5">
            <div className="flex items-center accent-black h-6">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-3 text-sm  text-white dark:text-gray-300"
            >
              By creating your account, you agree with our{" "}
              <a
                href="https://transparency.fb.com/en-gb/policies/community-standards/privacy-violations//"
                className="text-[#808080] hover:underline dark:text-grey"
              >
                terms of use & privacy policy
              </a>
            </label>
          </div>
          <div className="text-center lg:text-">
            <button
              type="submit"
              className="rounded-full mt-2  px-6 pb-2 pt-2 text-xl  text-black  bg-white"
            >
              Sign in
            </button>
          </div>
        </form>

        {/* Display success message after registration */}
        {isRegistered && (
          <p className="text-center text-[#BE9524]">
            Registration Successful!
          </p>
        )}

        <p className="text-xs  text-center text-white ">
          Already have an account?{" "}
          <a
            href="login"
            className="font:medium  text-[#808080] hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
