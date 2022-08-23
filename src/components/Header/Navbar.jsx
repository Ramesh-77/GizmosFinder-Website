import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import {parseJwt} from "../Utils/Utils"
import Header from "./Header";

const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();
  const [cart, setCart] = useState([]);
  const [productQtyCart, setProductQtyCart] = useState([]);


  const searching = (query) => {
    if (query === undefined) {
      return;
    } else {
      navigate("/search-product/" + query);
    }
  };

  const token_data = localStorage.getItem("token");
  const token = parseJwt(token_data);
  const user = token?._id;
  useEffect(()=>{
    axios
    .get("http://localhost:5000/get-products-cart/" + user)
    .then((response) => {
      // console.log(response.data)
      setCart(response.data);
    })
    .catch(() => {
      console.log("error occur");
    });
  }, [])

  useEffect(() => {
    calculation();
  });

  // calculating total products number in cart
  const calculation = () => {
    setProductQtyCart(
      cart.map((x) => x.productQuantity).reduce((x, y) => x + y, 0)
    );
  };

  return (
    <>
      <Header />
      <nav
        className="navbar navbar-expand-lg"
        style={{
          borderStyle: "solid",
          borderColor: "grey",
          borderWidth: "1px",
          borderLeft: "none",
          borderRight: "none",
          borderBottom: "none",
          backgroundColor: "#f6f7f8",
        }}
      >
      
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <span className="fs-4 text-info fw-bold">G</span>izmos{" "}
            <span className="fs-4 text-info fw-bold">F</span>inder
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex justify-content-start align-items-center w-75">
              <div className="input-group my-3 d-flex flex-row justify-content-center">
                <input
                  // onChange={(e) => setQuery(e.target.value)}
                
                  type="text"
                  className="form-control"
                  placeholder="What are you looking for?"
                  // onChange={(event)=> setSearchTerm(event.target.value)}
                  onChange={(e)=>setQuery(e.target.value)}
                />
                <button
                  onClick={() => searching(query)}
                  className="btn btn-secondary"
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex flex-row">
                <Link to="/" className="nav-link active" aria-current="page">
                  <i className="bi bi-person text-dark fs-4"></i>
                </Link>
                <Link
                  to="/login"
                  className="nav-link active mt-2"
                  aria-current="page"
                >
                  My Account <i className="fa-solid fa-caret-down"></i>
                </Link>
              </li>

              <li className="nav-item d-flex flex-row">
                <Link
                  to="/cart"
                  className="nav-link active position-relative"
                  aria-current="page"
                >
                  <i className="bi bi-cart3 text-dark fs-4"></i>
                  <span className="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-info px-2 py-1">
                  {productQtyCart}
                  </span>
                </Link>
                <Link to="/cart" className="nav-link active mt-2">
                  <span>
                    My Cart <i className="fa-solid fa-caret-down"></i>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
