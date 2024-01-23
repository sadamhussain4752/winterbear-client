// Header.js

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Header = () => {
  const [navbarBg, setNavbarBg] = useState("bg-white");
  const location = useLocation();
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const changeColorPosition = 10; // Change color after scrolling down 100 pixels

    if (scrollPosition > changeColorPosition) {
      setNavbarBg("fixed-top");
    } else {
      setNavbarBg("bg-white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <header>
        {/* Top Header */}
        <div className="top-header fixed-top shadow-sm bg-white">
          <div className="container-fluid px-5">
            <div className="row align-items-center">
              {/* Language Selection */}
              <div className="col-md-4 col-6 ps-md-5 ps-1  text-left  border-0 shadow-none">
                <div class="container-fluid ">
                  <div className="row">
                    <div className="col-md-3 col-12">
                    <button
                        className="btn navbar  navbar-toggler border-0 "
                        data-bs-toggle="offcanvas"
                        href="#offcanvasExample"
                        role="button"
                        aria-controls="offcanvasExample"
                      >
                        <span class="navbar-toggler-icon"></span>
                      </button>
                    </div>
                    <div className="col-md-9 d-none d-md-block mt-2">
                    <Link className="ps-1 fs-6 fw-bold text-main text-decoration-none " to="/shop" >
                        SHOP ALL
                      </Link>
                    </div>
                  </div>
                  
                </div>

                <div
                  className="offcanvas offcanvas-start"
                  tabindex="-1"
                  id="offcanvasExample"
                  aria-labelledby="offcanvasExampleLabel"
                >
                  <div className="offcanvas-header">
                    <div
                      className="offcanvas-title text-center "
                      id="offcanvasExampleLabel"
                    >
                      <img
                        src="../assets/images/winterbear-logo.png"
                        className="d-block ps-md-5 img-fluid my-5 "
                        alt="Logo"
                      />
                    </div>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 ps-md-5 ps-3">
                      <li className="nav-item pb-3">
                        <Link
                          className={`nav-link fs-5 ${
                            location.pathname === "/" ? "active" : ""
                          }`}
                          to="/"
                        >
                          HOME
                        </Link>
                      </li>
                      {/*<li className="nav-item dropdown">
                        <a
                          className="nav-link pb-3 fs-5 dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          SHOP ALL
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item pb-3 fs-5" href="#">
                              ACTION
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item pb-3 fs-5" href="#">
                              ANOTHER ACTION
                            </a>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <a className="dropdown-item pb-3 fs-5" href="#">
                              SOMETHING ELSE HERE
                            </a>
                          </li>
                        </ul>
                      </li>
                        */}
                      
                      
                      <li className="nav-item">
                        <Link
                          className={`nav-link pb-3 fs-5 ${
                            location.pathname === "/" ? "active" : ""
                          }`}
                          to="/about"
                        >
                          ABOUT
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          className={`nav-link pb-3 fs-5 ${
                            location.pathname === "/" ? "active" : ""
                          }`}
                          to="/shop"
                        >
                          SHOP ALL
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          className={`nav-link pb-3 fs-5 ${
                            location.pathname === "/" ? "active" : ""
                          }`}
                          to="/faqs"
                        >
                          FAQs
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={`nav-link pb-3 fs-5 ${
                            location.pathname === "/" ? "active" : ""
                          }`}
                          to="/events"
                        >
                          EVENT
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          className={`nav-link pb-3 fs-5 ${
                            location.pathname === "/" ? "active" : ""
                          }`}
                          to="/stores"
                        >
                          STORES
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link pb-3 fs-5 dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          LANGUAGE
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a className="dropdown-item pb-3 fs-5" href="#">
                              ENGLISH
                            </a>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <a className="dropdown-item pb-3 fs-5" href="#">
                              JAPANESE
                            </a>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <a className="dropdown-item pb-3 fs-5" href="#">
                              AUSTRALIAN
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          className={`nav-link pb-3 fs-5 ${
                            location.pathname === "/accounts" ? "active" : ""
                          }`}
                          to="/accounts"
                        >
                          ACCOUNTS
                        </Link>
                      </li>

                      <li className="mt-md-5 nav-item">
                        <Link
                          className={`nav-link pb-3 fs-6 fw-normal ${
                            location.pathname === "/" ? "active" : ""
                          }`}
                          to="#"
                        >
                          <i className="fa-solid fa-phone-volume" />{" "}
                          +91-9035576906
                        </Link>
                      </li>
                      <li className=" nav-item">
                        <Link
                          className={`nav-link pb-3 fs-6 fw-normal ${
                            location.pathname === "/" ? "active" : ""
                          }`}
                          to="#"
                        >
                          <i className="fa-regular fa-envelope" />{" "}
                          hello@winterbear.in
                        </Link>
                      </li>
                      <li className="mt-2 nav-item d-block ">
                        <span className="mt-4 text-dark social">
                          <i className="fab px-1 fa-facebook" />
                          <i className="fab px-1 fa-twitter" />
                          <i className="fab px-1 fa-linkedin-in" />
                          <i className="fab px-1 fa-instagram" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Logo */}
              <div className="col-md-4 col-6 ">
                <img
                  src="../assets/images/winterbear-logo.png"
                  className="d-block mx-auto img-fluid"
                  alt="Logo"
                />
              </div>
              {/* Login/Register and Cart Icons */}
              <div className="col-md-4 d-md-block d-none  text-start mt-4 mt-md-0">
                <div className="row">
                  <div className="col-md-4 offset-md-2">
                    <form
                      className="row-cols-lg-auto  align-items-center form"
                      role="search"
                    >
                      <i className="fa fa-search"></i>
                      <input
                        type="text"
                        className="form-control form-input bg-white"
                        placeholder="Search anything..."
                      />
                    </form>
                  </div>
                  <div className="col-md-6">
                    <div className="text-end pe-1">
                      <div>
                        <div className="me-3 my-2">
                          <a href="#" className="text-decoration-none px-1">
                            Login
                          </a>{" "}
                          |{" "}
                          <a href="#" className="text-decoration-none  px-1">
                            Register
                          </a>
                          <a href="#" className="text-decoration-none ps-1">
                            <i className="fa-solid fa-bag-shopping" />
                          </a>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Header 
        <div className="main-header d-none" id="mainHeader">
          <nav className={`navbar navbar-expand-md bg-theme ${navbarBg} `}>
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src="..." alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/" ? "active" : ""
                      }`}
                      to="/"
                    >
                      HOME
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      SHOP ALL
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          ACTION
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          ANOTHER ACTION
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          SOMETHING ELSE HERE
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/" ? "active" : ""
                      }`}
                      to="/about"
                    >
                      ABOUT
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/" ? "active" : ""
                      }`}
                      to="/faqs"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/" ? "active" : ""
                      }`}
                      to="/events"
                    >
                      EVENT
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/" ? "active" : ""
                      }`}
                      to="/stores"
                    >
                      STORES
                    </Link>
                  </li>
                </ul>
                <div className="search-and-icons">
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                  <div className="user-icons d-flex">
                    <div className="account">
                      <i className="bi bi-person" />
                    </div>
                    <div className="wishlist">
                      <i className="bi bi-heart" />
                    </div>
                    <div className="cart">
                      <i className="bi bi-cart3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        */}
      </header>
    </>
  );
};

export default Header;
