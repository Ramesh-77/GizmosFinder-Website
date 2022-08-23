import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Navbar = () => {
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
                  aria-label="search"
                  aria-describedby="basic-addon1"
                />
                <button
                  // onClick={() => searching(query)}
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
                  to="/"
                  className="nav-link active mt-2"
                  aria-current="page"
                >
                  My Account <i className="fa-solid fa-caret-down"></i>
                </Link>
              </li>

              <li className="nav-item d-flex flex-row">
                <Link
                  to="/"
                  className="nav-link active position-relative"
                  aria-current="page"
                >
                  <i className="bi bi-cart3 text-dark fs-4"></i>
                  <span className="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-info px-2 py-1">
                    0
                  </span>
                </Link>
                <Link to="/" className="nav-link active mt-2">
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
