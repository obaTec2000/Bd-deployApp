import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import linkedin from "../assests/linkedin.png";
import facebook from "../assests/facebook.png";
import goggle from "../assests/goggle.png";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation and authentication logic here
    if (username === "admin" && password === "password") {
      // Successful login
      console.log("Login successful");
      navigate("/homepage"); // Redirect to homepage
        } else {
      // Invalid credentials
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full font-outfit font-bold">
    <div className="hidden sm:block">
      <img className="w-full h-screen object-cover bg-cover bg-no-repeat" src="/assests/bgimage.png" />
    </div>

      <div className="bg-black flex flex-col">
        <h1 className="text-3xl font-semibold text-center text-white mt-20">
          BLACKDEFYNITION
        </h1>

        <form className="w-full mx-auto rounded-1g p-8 px-8" onSubmit={handleSubmit}>
          <div class="mb-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email"></label>
            <input
              class="shadow appearance-none border rounded-full w-full py-2 mt-5 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>

          <div className="mb-2">
            <input
              type="password"
              placeholder="Password"
              className="block w-full px-8 py-2 mt-5 text-black bg-white border rounded-full focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          {errorMessage && <p className="text-[#BE9524] text-sm">{errorMessage}</p>}

          <div className="flex justify-between text-white h-10 accent-black py-2 my-2">
            <p className="flex items-center mt-10">
              <input className="mr-4" type="checkbox" /> Remember Me
            </p>
            <a href="forgot" className="font:medium text-[#808080] hover:underline">
              Forgot password
            </a>
          </div>

          <div class="text-center lg:text-">
            <button
              type="submit"
              class="rounded-full mt-16 px-6 pb-2 pt-2 text-xl text-black bg-white"
            >
              Log in
            </button>
          </div>

          <div className="mt-2">
            <h2 className="text-medium font-semibold text-center text-white mt-5">OR</h2>
          </div>

          <div className="mt-5">
            <h3 className="text-medium font-semibold text-center text-white">SIGNUP WITH</h3>
          </div>
          <div className="flex justify-center mt-5 space-x-4">
            <img className="w-8 h-8" src={facebook} alt="facebook" />
            <img className="w-8 h-8" src={linkedin} alt="linkedin" />
            <img className="w-8 h-8" src={goggle} alt="goggle"/>
          </div>
        </form>

        <p className="text-xs text-center text-white">
          Don't have an account?{" "}
          <a href="register" className="font:medium text-[#808080] hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
