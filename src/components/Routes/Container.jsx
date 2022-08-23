import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../components/Dashboard";
import Home from "../Home/Home";
const Container = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route
            path="/"
            element={user ? <Navigate to="/user-dashboard" /> : <Home />}
          /> */}
        <Route path="/user-dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default Container;
