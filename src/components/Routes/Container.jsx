import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../components/Dashboard";
import EmailVerify from "../EmailVerify/EmailVerify";
import Home from "../Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
// import { parseJwt } from "../Utils/Utils";
const Container = () => {
  // const token = localStorage.getItem("token");
  // const decodeUser = parseJwt(token);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route
            path="/"
            element={user ? <Navigate to="/user-dashboard" /> : <Home />}
          /> */}
        <Route path="/user-dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/user/register/:id/verify/:token"
          element={<EmailVerify />}
        />

      </Routes>
    </>
  );
};

export default Container;
