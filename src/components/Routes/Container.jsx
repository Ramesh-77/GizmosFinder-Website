import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import EmailVerify from "../EmailVerify/EmailVerify";
import Home from "../Home/Home";
import Login from "../Login/Login";
import AddProduct from "../Product/AddProduct";
import AdminViewProduct from "../Product/AdminViewProduct";
import ProductCategory from "../Product/ProductCategory";
import ViewProductCategory from "../Product/ViewProductCategory";
import SignUp from "../SignUp/SignUp";
import { parseJwt } from "../Utils/Utils";
const Container = () => {
  const token = localStorage.getItem("token");
  const decodeUser = parseJwt(token);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/user/register/:id/verify/:token"
          element={<EmailVerify />}
        />

        {/* for admin purpose only */}
        {token && decodeUser?.role === "admin" && (
          <>
            <Route
              path="/admin-dashboard"
              element={<AdminDashboard adminData={decodeUser} />}
            ></Route>
            <Route
              path="/add-product-category"
              element={<ProductCategory adminData={decodeUser} />}
            ></Route>

            <Route
              path="/view-product-category"
              element={<ViewProductCategory adminData={decodeUser} />}
            ></Route>

            <Route
              path="/add-product"
              element={<AddProduct adminData={decodeUser} />}
            ></Route>
            <Route
              path="/view-admin-products"
              element={<AdminViewProduct adminData={decodeUser} />}
            ></Route>
          </>
        )}
      </Routes>
    </>
  );
};

export default Container;
