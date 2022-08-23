import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./sp.css";
import axios from "axios";
import bgImg from "../../Images/main.jpg";
import Navbar from "../Header/Navbar";

export const SuccessMsg = () => {
  return (
    <>
      <p className="fw-bold text-success fst-italic">
        You have added product to cart successfully!
      </p>
    </>
  );
};

export const WishlistMsg = () => {
  return (
    <>
      <p className="fw-bold text-success fst-italic">
        You have successfully added item to your wishlist
      </p>
    </>
  );
};

const SingleProductInfo = () => {
  const { pid } = useParams();
  const [singleproductdata, setSingleproductdata] = useState({});


  function parseJwt(token) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }
  // get user form the token
  const token_data = localStorage.getItem("token");
  const token = parseJwt(token_data);
  const user = token?._id;
  // console.log(token);
  const addCart = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/add-to-cart", {
        pid: pid,
        userId: user,
        productQuantity: singleproductdata.pqty,
      })
      .then((result) => {
        toast.success(<SuccessMsg />, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
        console.log(result);
      })
      .catch((e) => {
        console.log(e);
      });
  };
 
  useEffect(() => {
    axios
      .get("http://localhost:5000/single-product/" + pid)
      .then((result) => {
        // console.log(result.data);
        setSingleproductdata(result.data);
      })
      .catch((e) => {
        console.log("Something Went Wrong!!");
      });
  }, []);

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
        {/* {user ? <UserHeader /> : <Header />} */}
        <Navbar />

        <div className="bread-crumb-section">
          <h1 className="text-center  my-4 fw-bold">
            {singleproductdata.pname}
          </h1>
          <div className="row text-center">
            <Link className="text-success fw-bold text-decoration-none" to="/">
              Home &gt;&gt;{" "}
              <span className="text-success">{singleproductdata.pname}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center my-5">
          <div className="col-md-6">
            <div className=" mt-4">
              <img
                style={{ height: "500px", minWidth: "100%" }}
                src={"http://localhost:5000/" + singleproductdata.image}
                alt=""
                className="img-fluid rounded-4"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card my-4 shadow-lg">
              <div
                className="pname-favourite-icon"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <h4 className="my-3" style={{ textAlign: "start" }}>
                  Details of <span>{singleproductdata.pname}</span>
                </h4>
                <span
                    className="mx-3 mt-3"
                    style={{ cursor: "pointer" }}
                    id="wishlistIcon"
                  >
                    <i className="fas fa-heart fs-2"></i>
                  </span>
              </div>

              <div className="card-body">
                <h6 style={{ fontWeight: "bold" }}>
                  Product Name:{" "}
                  <span style={{ fontStyle: "italic", fontWeight: "normal" }}>
                    {singleproductdata.pname}
                  </span>
                </h6>

                <h6 style={{ fontWeight: "bold" }}>
                  Brand:{" "}
                  <span style={{ fontStyle: "italic", fontWeight: "normal" }}>
                    brand name
                  </span>
                </h6>

                <h6 className="fw-bold">
                  Rating: <i className="bi bi-star-fill text-warning mx-1"></i>
                  <i className="bi bi-star-fill text-warning" ></i>
                  <i
                    className="bi bi-star-fill text-warning mx-1"
                    // style={{ color: "#e5e5e5" }}
                  ></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i
                    className="bi bi-star-fill text-warning mx-1"
                    // style={{ color: "#e5e5e5" }}
                  ></i>
                </h6>

                <h6 style={{ fontWeight: "bold" }}>
                  Price:{" "}
                  <span style={{ fontWeight: "normal", fontStyle: "italic" }}>
                    Rs. {singleproductdata.pprice}
                  </span>
                </h6>

                <h6 style={{ fontWeight: "bold" }}>
                  Quantity:{" "}
                  <span style={{ fontWeight: "normal", fontStyle: "italic" }}>
                    {singleproductdata.pqty}
                  </span>
                </h6>

                <div>
                      <button
                        className="btn btn-outline-success m-"
                        style={{ width: "45%", fontWeight: "bold" }}
                        onClick={addCart}
                      >
                        Add To Cart
                      </button>
                      <Link
                        to={`/cart`}
                        className="btn  text-white m-2 "
                        style={{
                          width: "45%",
                          fontWeight: "bold",
                          backgroundColor: "#FF7518",
                        }}
                      >
                        Go To Cart
                      </Link>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <h2 className="text-success text-center">{msg}</h2> */}
    </>
  );
};
export default SingleProductInfo;
