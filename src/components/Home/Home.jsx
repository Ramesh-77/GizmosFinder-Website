import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Provider/ProductContext";
import Card from "./Card";

const Home = () => {
  const [products, setProducts] = useContext(ProductContext);

  return (
    <>
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
