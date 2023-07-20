import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Welcome from "./Pages/Welcome";
import Forgot from "./Components/Forgot";
import Reset from "./Components/Reset";
import Homepage from "./Pages/Homepage";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
