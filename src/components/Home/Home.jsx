import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Header/Navbar";
import { ProductContext } from "../Provider/ProductContext";
import Card from "./Card";
import bgImg from "../../Images/main.jpg"

const Home = () => {
  const [products, setProducts] = useContext(ProductContext);

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
          <h1 className="text-center pb-3 pt-5  fw-bold">You can find the wide ranges of electronic products here</h1>
        </div>
      </div>
      {/* for product card */}
      <div className="container p-4">
        <div className="row justify-content-center">
          {products.map((product) => {
            let { id, name, price, category, ratings } = product;
            return (
              <div className="col-md-3" key={product.id}>
                <Card
                  name={name}
                  price={price}
                  category={category}
                  ratings={ratings}
                />
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
