import React from "react";
import { useSelector } from "react-redux";
import "./footer.scss";

function Footer() {
  const { status } = useSelector((state) => state.auth);
  const token = JSON.parse(localStorage.getItem("logged"));
  return (
    <>
      {token && (
        <footer className="footer">
          <div className="footer__addr">
            <h1 className="footer__logo">Go Gym</h1>

            <h2>Contact</h2>

            <address>
              5534 Somewhere In. The World 22193-10212
              <br />
              <a className="footer__btn" href="mailto:gogym@gmail.com">
                Email Us
              </a>
            </address>
          </div>

          <ul className="footer__nav">
            <li className="nav__item">
              <h2 className="nav__title">About us</h2>

              <ul className="nav__ul">
                <li>
                  <a href="#">Home</a>
                </li>

                <li>
                  <a href="#">Exercises</a>
                </li>
              </ul>
            </li>
            <li className="nav__item">
              <h2 className="nav__title">Media</h2>

              <ul className="nav__ul">
                <li>
                  <a href="#">Instagram</a>
                </li>

                <li>
                  <a href="#">Facebook</a>
                </li>

                <li>
                  <a href="#">Twitter</a>
                </li>
              </ul>
            </li>

            <li className="nav__item">
              <h2 className="nav__title">Legal</h2>

              <ul className="nav__ul">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>

                <li>
                  <a href="#">Terms of Use</a>
                </li>

                <li>
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="legal">
            <p>&copy; 2022 Something. All rights reserved.</p>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;
