import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Header/Navbar";
import { ProductContext } from "../Provider/ProductContext";
import Card from "./Card";
import bgImg from "../../Images/main.jpg";

const Home = () => {
  const { phoneValue, headphoneValue, laptopValue } =
    useContext(ProductContext);
  const [phone, setPhone] = phoneValue;
  const [laptop, setLaptop] = laptopValue;
  const [headphone, setHeadphone] = headphoneValue;

  return (
    <>
      <div>
        <div
          className="container-fluid homeImg"
          style={{
            paddingTop: 0,
            backgroundColor: "#ebebeb",
            background: `url(${bgImg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "55vh",
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <Navbar />
          <div className="container col-md-10 mt-md-5 pt-md-5">
            <p
              className="text h1 text-center fst-italic"
              // style={{ fontSize: "4rem"}}
            >
              Lets find the electronic products
              <br />
              By Using Gizmos <br />
              Finder
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <h1 className="text-center pb-3 pt-5  fw-bold">
            Headphones &amp; Earphones
          </h1>
        </div>
      </div>
      {/* for headphone card */}
      <div className="container p-4">
        <div className="row justify-content-start">
          {headphone.map((product, _id) => {
            return (
              <div className="col-md-3" key={product._id}>
                <Card {...product} />
              </div>
            );
          })}
        </div>
      </div>

      <hr />
      <div className="container">
        <div className="row">
          <h1 className="text-center pb-3 pt-5  fw-bold">
            Phones &amp; Tablets
          </h1>
        </div>
      </div>

      {/* for phone card */}
      <div className="container p-4">
        <div className="row justify-content-start">
          {phone.map((product, _id) => {
            let { pname, image, pprice } = product;
            return (
              <div className="col-md-3" key={product._id}>
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
                    <Link to={"/single-product/"+product._id}
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

      <hr />
      <div className="container">
        <div className="row">
          <h1 className="text-center pb-3 pt-5  fw-bold">Laptops</h1>
        </div>
      </div>

      {/* for laptop card */}
      <div className="container p-4">
        <div className="row justify-content-start">
          {laptop.map((product, _id) => {
            let { pname, image, pprice } = product;
            return (
              <div className="col-md-3" key={product._id}>
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

export default Home;
