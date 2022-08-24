import React from "react";

import bgImg from "../../Images/main.jpg";
import { Link } from "react-router-dom";

import Navbar from "../UserDashboard/UserNavbar";
// use reducer
const DeleteCart = () => {
  return (
    <>
      <div
        className="container-fluid homeImg py-3"
        style={{
          paddingTop: 70,
          backgroundColor: "#ebebeb",
          background: `url(${bgImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "50vh",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <Navbar />

        <div className="bread-crumb-section">
          <h1 className="text-center my-4 fw-bold">Cart</h1>
          <div className="row text-center">
            <Link
              className="text-success fw-bold text-decoration-none"
              to="/user-dashboard"
            >
              Dashboard &gt;&gt; <span className="text-success">Cart</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="check_cart container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-12 my-5">
            <h3 className="m-5 text-danger text-center">
              There is no any products in your cart !!!
            </h3>
            <Link
              to="/display-all-products"
              className="btn btn-info me-auto ms-auto d-block w-50 text-white text-uppercase fw-bold"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default DeleteCart;
