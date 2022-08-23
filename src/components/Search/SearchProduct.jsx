import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import bgImg from "../../Images/main.jpg";
import Navbar from "../Header/Navbar";

const ProductSearch = (props) => {
  const query = useParams().query;

  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/search-product/" + query)
      .then(function (res) {
        console.log(res.data);
        setResult(res.data);
      });
  }, []);

  return (
    <>
      <div
        className="container-fluid homeImg"
        style={{
          paddingTop: 0,
          backgroundColor: "#ebebeb",
          background: `url(${bgImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "40vh",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <Navbar />

        <div className="bread-crumb-section">
          <h1 className="text-center my-4 fw-bold">Products</h1>
          <div className="row text-center">
            <Link className="text-success fw-bold text-decoration-none" to="/">
              Home &gt;&gt; <span className="text-success">All Products</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container-fluid py-3 text-center">
        <h3 className="text-success">
          Showing search result for  '{query}'{/* <br /> */}
          {/* <span className="fs-5">
            Believing on{" "}
            <span className="fw-normal fs-6">
              "Don't find Customers for your products instead find products for
              your customers".
            </span>
          </span>{" "} */}
        </h3>
      </div>


      {/* for product display */}
      <div className="container p-4">
        <div className="row justify-content-start">
          {result
            .map((product, _id) => {
              let { pname, image, pprice } = product;
              return (
                <div className="col-md-3 py-4" key={product._id}>
                  <div className="card shadow-lg" style={{ maxHeight: "44vh" }}>
                    <div className="product-img">
                      <img
                        src={"http://localhost:5000/" + image}
                        alt=""
                        className="img-fluid p-2"
                        style={{
                          display: "block",
                          marginLeft: "auto",
                          marginRight: "auto",
                          width: "50%",
                        }}
                      />
                    </div>
                    <div className="card-body text-center">
                      <p>{pname}</p>
                      <span className="text-success fw-bold">Rs. {pprice}</span>
                    </div>
                    <div
                      className="d-flex flex-row justify-content-between gap-2 p-3 bg-white shadow-lg"
                      style={{ borderRadius: "10px" }}
                    >
                      <Link
                        to={"/single-product/" + product._id}
                        className="btn btn-primary w-75"
                        style={{ backgroundColor: "#3a0ca3" }}
                      >
                        View Details
                      </Link>
                      <span>
                        {/* <i className="fa-solid fa-heart fa-2x" style={{cursor: "pointer"}}></i> */}
                        <i
                          className="bi bi-heart fa-2x"
                          style={{ cursor: "pointer" }}
                        ></i>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="text-center">
              <span>
                <strong>Keep updated &amp; Get Unlimited Offers</strong>
              </span>
              <br />
              <small>
                Sign up for our newsletter to receive updates &amp; exclusive
                offers
              </small>
            </p>
            <form>
              <div className="email-input-subscribe d-flex flex-row justify-content-center">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="w-50 p-2"
                  style={{
                    border: "1px solid #d3d3d3",
                    borderRadius: "5px",
                    borderRight: "none",
                  }}
                />
                <Link
                  to="/"
                  className="btn text-white"
                  style={{ backgroundColor: "#3b0086", border: "none" }}
                >
                  Subscribe
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSearch;
