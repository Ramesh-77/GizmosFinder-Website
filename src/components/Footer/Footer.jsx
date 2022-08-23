import React from "react";
import { FooterLine } from "./FooterLine";
import { SocialMedia } from "./SocialMedia";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-light text-muted">
        <SocialMedia />
        <section
          className="text-white py-3"
          style={{ backgroundColor: "#A0A0A0" }}
        >
          <div className="container-fluid text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="fw-bold mb-4">
                  <i
                    className="fas fa-gem me-3 fs-3"
                    style={{ color: "#1a759f" }}
                  />
                  <span
                    className="text-uppercase fs-2"
                    style={{ color: "#1a759f" }}
                  >
                    G
                  </span>
                  izmos
                  <span
                    className="text-uppercase fs-2"
                    style={{ color: "#1a759f" }}
                  >
                    F
                  </span>
                  inder
                </h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quidem unde molestiae adipisci quaerat minus aperiam atque,
                  mollitia iste magnam illo!
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a
                    style={{ textDecoration: "none" }}
                    href="/"
                    className="text-reset"
                  >
                    Televisions
                  </a>
                </p>
                <p>
                  <a
                    style={{ textDecoration: "none" }}
                    href="/"
                    className="text-reset"
                  >
                    Earpods
                  </a>
                </p>
                <p>
                  <a
                    style={{ textDecoration: "none" }}
                    href="/"
                    className="text-reset"
                  >
                    Headphones
                  </a>
                </p>
                <p>
                  <a
                    style={{ textDecoration: "none" }}
                    href="/"
                    className="text-reset"
                  >
                    Laptops
                  </a>
                </p>
                <p>
                  <a
                    style={{ textDecoration: "none" }}
                    href="/"
                    className="text-reset"
                  >
                    Mobile Phones &amp; Tablets
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                <p>
                  <i className="fas fa-home me-2" /> Chabahil-07, KTM, Nepal
                </p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3" /> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3" /> + 01 234 567 89
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Support</h6>
                <p>
                  <a
                    style={{ textDecoration: "none" }}
                    href="#!"
                    className="text-reset"
                  >
                    Contact Us
                  </a>
                </p>
                <p>
                  <a
                    style={{ textDecoration: "none" }}
                    href="#!"
                    className="text-reset"
                  >
                    FAQs
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <FooterLine />
      </footer>
    </>
  );
};

export default Footer;
