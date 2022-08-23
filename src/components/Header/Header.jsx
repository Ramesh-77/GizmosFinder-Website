import React from "react";

const Header = () => {
  return (
    <>
      <div
        className="container-fluid py-2"
        style={{ backgroundColor: "#f6f7f8" }}
      >
        <div className="row justify-content-center align-items-center">
          <div className="col-md-10 d-flex flex-row justify-content-between">
            <div className="location-phone d-flex flex-row gap-3">
              <div className="location d-flex flex-row gap-2">
                <span>
                  <i
                    className="fa-solid fa-location-dot"
                    style={{ color: "#40916c" }}
                  ></i>
                </span>
                <p>Chabahil-07, Kathmandu</p>
              </div>
              <div className="phone d-flex flex-row gap-2">
                <span>
                  <i
                    className="fa-solid fa-phone"
                    style={{ color: "#ff9e00" }}
                  ></i>
                </span>

                <p>01-9876543</p>
              </div>
            </div>
            <div className="connect-social-medias d-flex flex-row gap-3">
              <p>Connect With Us</p>
              <div className="social-medias d-flex flex-row gap-2">
                <a href="https://www.facebook.com">
                  <span>
                    <i
                      className="fa-brands fa-facebook"
                      style={{ color: "#1982c4" }}
                    ></i>
                  </span>
                </a>
                <a href="https://www.instagram.com">
                  <span>
                    <i
                      className="fa-brands fa-instagram"
                      style={{ color: "#ff006e" }}
                    ></i>
                  </span>
                </a>

                <a href="https://twitter.com">
                  <span>
                    <i
                      className="fa-brands fa-twitter"
                      style={{ color: "#00b4d8" }}
                    ></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
