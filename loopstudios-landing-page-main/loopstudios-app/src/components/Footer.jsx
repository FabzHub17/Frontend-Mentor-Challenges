import React from "react";
import NavMenu from "./NavMenu";

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="logo">
            <a href="#" className="nav-brand">
              {/* to access public folder*/}
              <img
                src={process.env.PUBLIC_URL + "/images/icons/logo.svg"}
                alt="Loopstudios"
              />
            </a>
          </div>
          <NavMenu />
          <div className="socials-wrapper">
            <img src={process.env.PUBLIC_URL + "/images/icons/icon-facebook.svg"} alt="facebook" className="social-item" />
            <img src={process.env.PUBLIC_URL + "/images/icons/icon-twitter.svg"} alt="twitter" className="social-item" />
            <img src={process.env.PUBLIC_URL + "/images/icons/icon-pinterest.svg"} alt="pinterest" className="social-item" />
            <img src={process.env.PUBLIC_URL + "/images/icons/icon-instagram.svg"} alt="instagram" className="social-item" />
          </div>

          <p className="footer-attribution">© 2021 Loopstudios. All rights reserved.</p>

        </div>
      </section>
    </>
  );
}

export default Footer;
