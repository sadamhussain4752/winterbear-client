// Header.js

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Google from "../constant/images/google.svg";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import { ProfileUserData } from "../reducer/thunks";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd/es";
import { IoIosLogIn } from "react-icons/io";

const Header = () => {
  const dispatch = useDispatch();

  let userId = localStorage.getItem("userId");
  const [navbarBg, setNavbarBg] = useState("bg-white");
  const [modalVisible, setModalVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const {
    loading: getprofileUserLoading,
    loginerror: getprofileUserError,
    getprofile: getUserResponse,
  } = useSelector((state) => state.getprofile);
  const handleOpenLogin = () => {
    setLoginVisible(true);
  };

  const handleCloseLogin = () => {
    setLoginVisible(false);
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  useEffect(() => {
    console.log(userId, "userId");
    if (userId !== undefined || userId !== null) {
      dispatch(ProfileUserData(userId));
    }
    // if (getUserResponse) {
    //   const { firstname, lastname } = getUserResponse.User;
    //   message.success(`Welcome ${firstname} ${lastname}`, 5);
    // }
  }, []);

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
            <div className="row align-items-center p-2">
              {/* Language Selection */}
              <div className="col-md-4 col-6 ps-md-5 ps-1 order-first text-left  border-0 shadow-none">
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
                      <Link
                        className="ps-1 fs-6 fw-bold text-main text-decoration-none "
                        to="/shop"
                      >
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
                      <li className="nav-item dropdown">
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
                      {/* <li className="nav-item dropdown">
                        <a
                          className="nav-link pb-3 fs-5 dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Language
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a className="dropdown-item pb-3 fs-5" href="#">
                              English
                            </a>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <a className="dropdown-item pb-3 fs-5" href="#">
                              Japanese
                            </a>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <a className="dropdown-item pb-3 fs-5" href="#">
                              Australian
                            </a>
                          </li>
                        </ul>
                      </li> */}

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
              <div className="col-md-3">
                <img
                  src="../assets/images/winterbear-logo.png"
                  className="d-block mx-auto img-fluid"
                  alt="Logo"
                />
              </div>
              {/* Login/Register and Cart Icons */}
              <div className="col-md-5 d-md-block d-none  text-start mt-md-0">
                <div className="row d-flex justify-content-between">
                  <div className="col-md-4">
                    <form
                      className="row-cols-lg-auto  align-items-center form"
                      role="search"
                    >
                      <i className="fa fa-search"></i>
                      <input
                        type="text"
                        className="form-control form-input bg-white"
                        placeholder="Search"
                      />
                    </form>
                  </div>
                  <div className="col-md-8 mt-1">
                    <div className="text-end">
                      <div>
                        <div className=" my-2">
                          {getUserResponse && getUserResponse.User ? (
                            <>
                              <a>{getUserResponse.User.firstname}</a> <a></a>
                              <a
                                href="/cart"
                                className="text-decoration-none"
                              >
                                <i className="fa-solid fa-bag-shopping" />
                              </a>
                            </>
                          ) : (
                            <>
                              <a
                                style={{ cursor: "pointer" }}
                                onClick={handleOpenLogin}
                                className="text-decoration-none"
                              >
                                Login
                              </a>{" "}
                              |{" "}
                              <a
                                style={{ cursor: "pointer" }}
                                onClick={handleOpenModal}
                                className="text-decoration-none"
                              >
                                Register
                              </a>
                              <a
                                href="/cart"
                                className="text-decoration-none"
                              >
                                <i className="fa-solid fa-bag-shopping" />
                              </a>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <>
        <LoginModal visible={loginVisible} onClose={handleCloseLogin} />

        <RegisterModal visible={modalVisible} onClose={handleCloseModal} />
      </>
    </>
  );
};

export default Header;
