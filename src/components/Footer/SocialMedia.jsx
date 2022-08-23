import React from "react";
import "./Footer.css";

export const SocialMedia = () => {
  return (
    <>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}
        {/* Right */}
        <div>
          <a href="https://www.facebook.com" className="me-4 text-reset">
            <i className="fab fa-facebook-f f-facebook" />
          </a>
          <a href="https://twitter.com" className="me-4 text-reset">
            <i className="fab fa-twitter f-twitter" />
          </a>
          <a href="https://www.google.com" className="me-4 text-reset">
            <i className="fab fa-google f-google" />
          </a>
          <a href="https://www.instagram.com" className="me-4 text-reset">
            <i className="fab fa-instagram f-instagram" />
          </a>
          <a href="https://www.linkedin.com" className="me-4 text-reset">
            <i className="fab fa-linkedin f-linkedin" />
          </a>
          <a href="https://github.com" className="me-4 text-reset">
            <i className="fab fa-github" />
          </a>
        </div>
        {/* Right */}
      </section>
    </>
  );
};
