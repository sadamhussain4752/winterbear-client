// Header.js

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import { ProfileUserData, CouponUserById } from "../reducer/thunks";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd/es";
import { IoIosLogIn } from "react-icons/io";
import NewsPaper from "./NewsPaper";
import { ShoppingCartOutlined, WalletOutlined } from "@ant-design/icons";
import { Carousel, Select } from "antd";
import Language from "../constant/Language";
import SearchList from "./SearchList";
const { Option } = Select;

const Header = () => {
  //const [isHovered, setIsHovered] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuVisible(prevState => !prevState);
  };
  const contentStyle = {
    height: "30px",
    color: "#000",
    lineHeight: "30px",
    textAlign: "center",
    background: "#FFE5E5",
    borderRadius: "60px 0px 60px 0px", // Corrected the typo from "borderradios" to "borderRadius"
    marginRight: "35%",
    marginLeft: "35%",
  };
  const dispatch = useDispatch();
  const latestOffers = [
    { id: 1, title: "Offer 1: 20% off on all products", link: "/offer1" },
    { id: 2, title: "Offer 2: Buy one, get one free", link: "/offer2" },
    {
      id: 3,
      title: "Offer 3: Free shipping on orders over $50",
      link: "/offer3",
    },
  ];
  const IndianStates = [
    { key: "En", value: "en" },
    { key: "JP", value: "jp" },
    { key: "KR", value: "kr" },
    { key: "AR", value: "au" },
  ];

  let userId = localStorage.getItem("userId");
  let NewsPaperId = localStorage.getItem("NewsPaperID");

  const [navbarBg, setNavbarBg] = useState("bg-white");
  const [modalVisible, setModalVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [newsVisible, setNewsVisible] = useState(false);
  const [selectedState, setSelectedState] = useState(null);

  const {
    loading: getprofileUserLoading,
    loginerror: getprofileUserError,
    getprofile: getUserResponse,
  } = useSelector((state) => state.getprofile);
  const { CouponListsRes: getCouponResponse } = useSelector(
    (state) => state.CouponListsRes
  );
  const handleOpenLogin = () => {
    setLoginVisible(true);
  };

  const handleCloseLogin = () => {
    setLoginVisible(false);
  };
  const handleCloseNews = () => {
    setNewsVisible(false);
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
      // dispatch(CouponUserById())
    }
    if (NewsPaperId === null) {
      setNewsVisible(true);
      localStorage.setItem("NewsPaperID", true);
    }
    // localStorage.removeItem("NewsPaperID")

    // if (getUserResponse) {
    //   const { firstname, lastname } = getUserResponse.User;
    //   message.success(`Welcome ${firstname} ${lastname}`, 5);
    // }
  }, []);

  const location = useLocation();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const changeColorPosition = 100; // Change color after scrolling down 100 pixels

    if (scrollPosition > changeColorPosition) {
      setNavbarBg("d-none");
    } else {
      setNavbarBg("fixed-top");
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

  const logoutFunction = () => {
    localStorage.removeItem("userId");
    window.location.reload();
    window.location.href = "/";
  };

  const handleStateChange = (value) => {
    setSelectedState(value);
    console.log(value);
    Language.setLanguage(value);
  };

  // Define the renderItem function
  const renderItem = (item) => {
    return (
      <p style={contentStyle}>
        {item.description}:{item.code}{" "}
      </p>
    );
  };

  return (
    <div className="header-container">
      {" "}
      {/* Add a wrapper div */}
      <header>
        {/* Top Header */}
        <div
          className={`top-header shadow-sm bg-white fixed-top ${
            navbarBg === "d-none" && "bg-white top-headers"
          }`}
        >
          <div className="container-fluid">
            {/* <Carousel autoplay className={`col-md-10 d-block mx-auto ${navbarBg}`} dots={true}>
              {getCouponResponse && getCouponResponse?.coupons &&getCouponResponse?.coupons?.map((item, index) => item.isShow_display && (
                <div className="col-md-4" key={index}>
                  {renderItem(item)}
                </div>
              ))}
            </Carousel> */}

            <div className="row align-items-center justify-content-between ">
              {/* Language Selection */}
              <div className="col-md-5 col-6  ps-1 order-first text-left  border-0 shadow-none">
                <div class="container-fluid ">
                  <div className="row">
                    <div className="col-md-2">
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
                    <div className="col-md-10 d-md-block d-none mt-2">
                      <Link
                        className="ps-1 fs-6 text-main text-decoration-none "
                        to="/shop/0"
                        onClick={handleMenuToggle}
                      >
                        {Language.shop_all}
                      </Link>
                      <Link
                        className="ps-1 fs-6 text-main text-decoration-none "
                        to="/faqs"
                      >
                        {Language.faqs}
                      </Link>
                      <Link
                        className="ps-1 fs-6 text-main text-decoration-none "
                        to="/stores"
                      >
                        {Language.find}
                      </Link>
                      {/* <Link
                        className="ps-1 fs-6 text-main text-decoration-none "
                        to="/blogs"
                      >
                        {Language.blogs}

                      </Link> */}
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
                        className="d-block ps-md-2 img-fluid my-5 "
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
                    <ul className="navbar-nav justify-content-end flex-grow-1 ps-md-3 ps-3">
                      <li className="nav-item pb-3">
                        <a
                          className={`nav-link fs-5 ${
                            location.pathname === "/" ? "active" : ""
                          }`}
                          href="/"
                        >
                          HOME
                        </a>
                      </li>
                      {/* <li className="nav-item dropdown">
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
                        </li> */}
                      <li className="nav-item">
                        <a
                          className={`nav-link pb-3 fs-5 ${
                            location.pathname === "/" ? "active" : ""
                          }`}
                          href="/about"
                        >
                          ABOUT
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className={`nav-link pb-3 fs-5 show-shop-all ${
                            location.pathname === "/" ? "active" : ""
                          }`}
                          href="/shop/0"   onClick={handleMenuToggle}
                        >
                          SHOP ALL
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className={`nav-link pb-3 fs-5 ${
                            location.pathname === "/" ? "active" : ""
                          }`}
                          href="/faqs"
                        >
                          FAQs
                        </a>
                      </li>
                      {/* <li className="nav-item">
                        <a
                          className={`nav-link pb-3 fs-5 ${location.pathname === "/" ? "active" : ""
                            }`}
                          href="/events"
                        >
                          EVENT
                        </a>
                      </li> */}

                      <li className="nav-item">
                        <a
                          className={`nav-link pb-3 fs-5 ${
                            location.pathname === "/" ? "active" : ""
                          }`}
                          href="/stores"
                        >
                          STORES
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link pb-3 fs-5 ${
                            location.pathname === "/" ? "active" : ""
                          }`}
                          href="/Allbrand"
                        >
                          BRAND DIRECTORY
                        </a>
                      </li>

                      {/* <li className="nav-item">
                        <a
                          className={`nav-link pb-3 fs-5 ${location.pathname === "/" ? "active" : ""
                            }`}
                          href="/Sns"
                        >
                          SNS
                        </a>
                      </li> */}

                      {/* <li className="nav-item">
                        <a
                          className={`nav-link pb-3 fs-5 ${location.pathname === "/" ? "active" : ""
                            }`}
                          href="/loyalty"
                        >
                          LOYALTY
                        </a>
                      </li> */}

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
                        <a
                          className={`nav-link pb-3 fs-6 fw-normal ${
                            location.pathname === "/" ? "active" : ""
                          }`}
                          href="tel:9035576906"
                        >
                          <i className="fa-solid fa-phone-volume" />{" "}
                          +91-9035576906
                        </a>
                      </li>
                      <li className=" nav-item">
                        <a
                          className={`nav-link pb-3 fs-6 fw-normal ${
                            location.pathname === "/" ? "active" : ""
                          }`}
                          href="mailto:hello@winterbear.in"
                        >
                          <i className="fa-regular fa-envelope" />{" "}
                          hello@winterbear.in
                        </a>
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
              <div className="col-md-3  col-6">
                <a href="/">
                  <img
                    src="../assets/images/winterbear-logo.png"
                    className="d-block header-logo"
                    alt="Logo"
                  />
                </a>
              </div>
              {/* Login/Register and Cart Icons */}
              <div className="col-md-4 d-md-block d-none  text-start mt-md-0">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-md-6">
                    <SearchList />
                  </div>
                  <div className="col-md-6 mt-1">
                    <div className="text-end">
                      <div className="d-flex justify-content-between align-items-center">
                        {getUserResponse && getUserResponse.User ? (
                          <>
                            <a
                              href="/loyalty"
                              className="link-body-emphasis text-decoration-none"
                            >
                              {/* <WalletOutlined style={{ fontSize: '16px', color: '#9E2717', marginRight: '5px' }} /> */}
                              <i
                                class="fa-solid fa-star"
                                style={{ color: "#ffdc64" }}
                              ></i>
                              {getUserResponse.User.loyalty_point}
                            </a>
                            <a
                              href="/wishlist"
                              className="text-decoration-none "
                            >
                              {/* <img src="../assets/images/icon_cart.svg" /> */}
                              <i
                                class="fa-regular fa-bookmark"
                                style={{ fontSize: "20px" }}
                              ></i>
                            </a>

                            <a
                              href="#"
                              className="link-body-emphasis text-decoration-none "
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <img
                                src={getUserResponse?.User?.profile_img}
                                // src="../assets/images/icon-pofile.svg"
                                alt="mdo"
                                width={25}
                                height={25}
                                className=" person-icon-img"
                              />{" "}
                              {/* <strong className="px-1">
                                            {getUserResponse.User.firstname}
                                          </strong> */}
                            </a>

                            <a
                              href="/cart"
                              className="text-decoration-none mx-2"
                            >
                              <img src="../assets/images/icon_cart.svg" />

                              <ul className="mt-3 dropdown-menu text-small">
                                <li>
                                  <Link
                                    className={`dropdown-item`}
                                    to="/account"
                                  >
                                    Account
                                  </Link>
                                </li>
                                <li>
                                  <hr className="dropdown-divider" />
                                </li>

                                <li>
                                  <hr className="dropdown-divider" />
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    onClick={logoutFunction}
                                    href="#"
                                  >
                                    Sign out
                                  </a>
                                </li>
                              </ul>

                              {/* <i className="fa-solid fa-bag-shopping" /> */}
                            </a>
                            {/* <a>
                                <Select
                                  value={selectedState || IndianStates[0].value} // Set the default value to the value of the first item in the array
                                  onChange={handleStateChange}
                                  placeholder=""

                                >
                                  {IndianStates.map((state) => (
                                    <Option key={state.key} value={state.value}>
                                      {state.key}
                                    </Option>
                                  ))}
                                </Select>
                              </a> */}
                          </>
                        ) : (
                          <>
                            <a
                              style={{ cursor: "pointer" }}
                              onClick={handleOpenLogin}
                              className="text-decoration-none px-1"
                            >
                              Login
                            </a>{" "}
                            |{" "}
                            <a
                              style={{ cursor: "pointer" }}
                              onClick={handleOpenModal}
                              className="text-decoration-none px-1"
                            >
                              Register
                            </a>
                            <a
                              href="/cart"
                              className="text-decoration-none ps-3"
                            >
                              <img src="../assets/images/icon_cart.svg" />
                              {/* <i className="fa-solid fa-bag-shopping" /> */}
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
      </header>
      {isMenuVisible && (
      <div className="shopall-menu px-3 " style={{marginTop:'105px'}}>
        <div className="container-fluid bg-light mt-3 py-4">
          <div className="row">
            <div className="col-md-3  ps-5">
              <div className="menu-items px-3 py-3">
                <div className="ps-4">
                <a href="" className="btn text-decoration-none btn-outline-dark "> Shop All</a>
                </div>
                
                <p className="fw-bold ps-3 text-uppercase my-2">Shop by category</p>
                <div className="d-block text-start">
                <a href="#" className="btn text-decoration-none my-3 d-block fs-5 text-start"> Fashion Accessories</a>
                <a href="#" className="btn text-decoration-none my-3 d-block fs-5 text-start"> Fashion Accessories</a>
                <a href="#" className="btn text-decoration-none my-3 d-block fs-5 text-start"> Fashion Accessories</a>
                <a href="#" className="btn text-decoration-none my-3 d-block fs-5 text-start"> Fashion Accessories</a>
                <a href="#" className="btn text-decoration-none my-3 d-block fs-5 text-start"> Fashion Accessories</a>
                <a href="#" className="btn text-decoration-none my-3 d-block fs-5 text-start"> Fashion Accessories</a>
                <a href="#" className="btn text-decoration-none my-3 d-block fs-5 text-start"> Fashion Accessories</a>
                </div>
                
              </div>
            </div>
            <div className="col-md-3  ps-5">
              <div className="menu-items px-3 py-3">
              <a href="">
                      <img
                        src="/assets/images/client-logo.png"
                        className="shop-online-brand mb-3"
                      />
                    </a>
                    <div className="row">
                      <div className="col-1 px-1 col-md-3">
                        <a href="">
                          <img
                            src="https://storage.googleapis.com/email-js-1a09b.appspot.com/winterbear/1713118368071-853479702"
                            className="img-fluid   mb-3 mt-3"
                          />
                        </a>
                      </div>
                      <div className="col-9 col-md-9 d-flex align-items-center">
                        <div>
                          <a
                            href=""
                            className="text-dark fw-bold text-decoration-none"
                          >
                                              Koya
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3 px-1 col-md-3">
                        <a href="">
                          <img
                            src="https://storage.googleapis.com/email-js-1a09b.appspot.com/winterbear/1713118368071-853479702"
                            className="img-fluid   mb-3 mt-3"
                          />
                        </a>
                      </div>
                      <div className="col-9 col-md-9 d-flex align-items-center">
                        <div>
                          <a
                            href=""
                            className="text-dark fw-bold text-decoration-none"
                          >
                                              Koya
                          </a>
                        </div>
                      </div>
                    </div><div className="row">
                      <div className="col-3 px-1 col-md-3">
                        <a href="">
                          <img
                            src="https://storage.googleapis.com/email-js-1a09b.appspot.com/winterbear/1713118368071-853479702"
                            className="img-fluid   mb-3 mt-3"
                          />
                        </a>
                      </div>
                      <div className="col-9 col-md-9 d-flex align-items-center">
                        <div>
                          <a
                            href=""
                            className="text-dark fw-bold text-decoration-none"
                          >
                                              Koya
                          </a>
                        </div>
                      </div>
                    </div><div className="row">
                      <div className="col-3 px-1 col-md-3">
                        <a href="">
                          <img
                            src="https://storage.googleapis.com/email-js-1a09b.appspot.com/winterbear/1713118368071-853479702"
                            className="img-fluid   mb-3 mt-3"
                          />
                        </a>
                      </div>
                      <div className="col-9 col-md-9 d-flex align-items-center">
                        <div>
                          <a
                            href=""
                            className="text-dark fw-bold text-decoration-none"
                          >
                                              Koya
                          </a>
                        </div>
                      </div>
                    </div>
                   
              </div>
            </div>
            <div className="col-md-3  ps-5">
              <div className="menu-items px-3 py-3">
              <a href="">
                      <img
                        src="/assets/images/client-logo1.png"
                        className="  shop-online-brand mb-3"
                      />
                    </a>
                    <div className="row">
                      <div className="col-3 px-1 col-md-3">
                        <a href="">
                          <img
                            src="https://storage.googleapis.com/email-js-1a09b.appspot.com/winterbear/1713118368071-853479702"
                            className="img-fluid   mb-3 mt-3"
                          />
                        </a>
                      </div>
                      <div className="col-9 col-md-9 d-flex align-items-center">
                        <div>
                          <a
                            href=""
                            className="text-dark fw-bold text-decoration-none"
                          >
                                              Koya
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3 px-1 col-md-3">
                        <a href="">
                          <img
                            src="https://storage.googleapis.com/email-js-1a09b.appspot.com/winterbear/1713118368071-853479702"
                            className="img-fluid   mb-3 mt-3"
                          />
                        </a>
                      </div>
                      <div className="col-9 col-md-9 d-flex align-items-center">
                        <div>
                          <a
                            href=""
                            className="text-dark fw-bold text-decoration-none"
                          >
                                              Koya
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3 px-1 col-md-3">
                        <a href="">
                          <img
                            src="https://storage.googleapis.com/email-js-1a09b.appspot.com/winterbear/1713118368071-853479702"
                            className="img-fluid   mb-3 mt-3"
                          />
                        </a>
                      </div>
                      <div className="col-9 col-md-9 d-flex align-items-center">
                        <div>
                          <a
                            href=""
                            className="text-dark fw-bold text-decoration-none"
                          >
                                              Koya
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3 px-1 col-md-3">
                        <a href="">
                          <img
                            src="https://storage.googleapis.com/email-js-1a09b.appspot.com/winterbear/1713118368071-853479702"
                            className="img-fluid   mb-3 mt-3"
                          />
                        </a>
                      </div>
                      <div className="col-9 col-md-9 d-flex align-items-center">
                        <div>
                          <a
                            href=""
                            className="text-dark fw-bold text-decoration-none"
                          >
                                              Koya
                          </a>
                        </div>
                      </div>
                    </div>

              </div>
            </div>
            <div className="col-md-3  ps-5">
              <div className="menu-items px-3 py-3">
              <a href="">
                      <img
                        src="/assets/images/client-logo2.png"
                        className="  shop-online-brand mb-3"
                      />
                    </a>
                    <div className="row">
                      <div className="col-3 px-1 col-md-3">
                        <a href="">
                          <img
                            src="https://storage.googleapis.com/email-js-1a09b.appspot.com/winterbear/1713118368071-853479702"
                            className="img-fluid   mb-3 mt-3"
                          />
                        </a>
                      </div>
                      <div className="col-9 col-md-9 d-flex align-items-center">
                        <div>
                          <a
                            href=""
                            className="text-dark fw-bold text-decoration-none"
                          >
                                              Koya
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-3 px-1 col-md-3">
                        <a href="">
                          <img
                            src="https://storage.googleapis.com/email-js-1a09b.appspot.com/winterbear/1713118368071-853479702"
                            className="img-fluid   mb-3 mt-3"
                          />
                        </a>
                      </div>
                      <div className="col-9 col-md-9 d-flex align-items-center">
                        <div>
                          <a
                            href=""
                            className="text-dark fw-bold text-decoration-none"
                          >
                                              Koya
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3 px-1 col-md-3">
                        <a href="">
                          <img
                            src="https://storage.googleapis.com/email-js-1a09b.appspot.com/winterbear/1713118368071-853479702"
                            className="img-fluid   mb-3 mt-3"
                          />
                        </a>
                      </div>
                      <div className="col-9 col-md-9 d-flex align-items-center">
                        <div>
                          <a
                            href=""
                            className="text-dark fw-bold text-decoration-none"
                          >
                                              Koya
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3 px-1 col-md-3">
                        <a href="">
                          <img
                            src="https://storage.googleapis.com/email-js-1a09b.appspot.com/winterbear/1713118368071-853479702"
                            className="img-fluid   mb-3 mt-3"
                          />
                        </a>
                      </div>
                      <div className="col-9 col-md-9 d-flex align-items-center">
                        <div>
                          <a
                            href=""
                            className="text-dark fw-bold text-decoration-none"
                          >
                                              Koya
                          </a>
                        </div>
                      </div>
                    </div>

              </div>
            </div>
          </div>
        </div>
      </div>
       )
      }
      <>
        <LoginModal visible={loginVisible} onClose={handleCloseLogin} />

        <RegisterModal visible={modalVisible} onClose={handleCloseModal} />
        <NewsPaper visible={newsVisible} onClose={handleCloseNews} />
      </>
    </div>
  );
};

export default Header;
//   eslint-disable-next-line
