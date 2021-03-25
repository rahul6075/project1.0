import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./css/layout.css";
const landing = () => {
  return (
    <Fragment>
      <div className="container-fluid mainContainer">
        <nav className="navbar navbar-expand-md navbar-dark">
          <Link className="navbar-brand" href="#CarMarket">
            <i className="fab fa-shopware"></i>Shop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="#Store">
                  <i className="fas fa-store"></i>Store
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  <i className="fas fa-user"></i>Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <i className="fas fa-user"></i>Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#Contact">
                  <i className="fas fa-address-book"></i>Contact
                </Link>
              </li>
              <li className="nav-item last">
                <Link className="nav-link" href="#Cart">
                  <i className="fas fa-angle-double-down"></i>About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="row legend">
          <div className="col legend__text">
            <header className="introText">
              <h1 className="introText__heading">
                Shop <span>slightly used </span>furniture <span>&</span> home
                decors and many more things.
              </h1>
              <p className="introText__link">
                <Link href="#Visit">
                  Check out our collection{" "}
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </p>
            </header>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p className="footer__text">
          Created by
          <Link
            href="https://www.linkedin.com/in/rahul-chaudhary-09638a1b5/"
            target="_blank"
            rel="noopener"
          >
            Rahul Chaudhary
          </Link>
          &copy;2021
        </p>
      </footer>
    </Fragment>
  );
};
export default landing;
