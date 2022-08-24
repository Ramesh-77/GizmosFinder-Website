import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import ProductCart from "../Cart/Cart";
import DeleteCart from "../Cart/CartDelete";
import SingleProductInfo from "../Cart/SingleProductPage";
import EmailVerify from "../EmailVerify/EmailVerify";
import Home from "../Home/Home";
import Login from "../Login/Login";
import AddProduct from "../Product/AddProduct";
import AdminViewProduct from "../Product/AdminViewProduct";
import ProductCategory from "../Product/ProductCategory";
import ViewProductCategory from "../Product/ViewProductCategory";
import ProductSearch from "../Search/SearchProduct";
import SignUp from "../SignUp/SignUp";
import UserDashboard from "../UserDashboard/UserDashboard";
import { parseJwt } from "../Utils/Utils";
const Container = () => {
  const token = localStorage.getItem("token");
  const decodeUser = parseJwt(token);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/user/register/:id/verify/:token"
          element={<EmailVerify />}
        />
        <Route
          path="/single-product/:pid"
          element={<SingleProductInfo />}
        ></Route>
        <Route
          path="/search-product/:query"
          element={<ProductSearch />}
        ></Route>

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

        {token && decodeUser?.role === "user" && (
          <>
            <Route
              path="/user-dashboard"
              element={<UserDashboard userData={decodeUser} />}
            ></Route>
            <Route path="/cart" element={<ProductCart />}></Route>
          </>
        )}

        <Route path="/delete-cart-product" element={<DeleteCart />}></Route>
      </Routes>
    </>
  );
};

export default Container;
