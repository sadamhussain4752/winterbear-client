// Header.js

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Google from "../constant/images/google.svg";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import { ProfileUserData, CouponUserById } from "../reducer/thunks";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd/es";
import { IoIosLogIn } from "react-icons/io";
import NewsPaper from "./NewsPaper";
import {
  ShoppingCartOutlined,
  WalletOutlined
} from "@ant-design/icons";
import { Carousel, Select } from 'antd';
import Language from "../constant/Language";
import SearchList from "./SearchList";
const { Option } = Select;

const Header = () => {
  const contentStyle = {
    height: '30px',
    color: '#000',
    lineHeight: '30px',
    textAlign: 'center',
    background: '#FFE5E5',
    borderRadius: "60px 0px 60px 0px", // Corrected the typo from "borderradios" to "borderRadius"
    marginRight: "35%",
    marginLeft: "35%"

  };
  const dispatch = useDispatch();
  const latestOffers = [
    { id: 1, title: 'Offer 1: 20% off on all products', link: '/offer1' },
    { id: 2, title: 'Offer 2: Buy one, get one free', link: '/offer2' },
    { id: 3, title: 'Offer 3: Free shipping on orders over $50', link: '/offer3' }
  ];
  const IndianStates = [
    { key: "En", value: "en" },
    { key: "JP", value: 'jp' },
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
  const {
    CouponListsRes: getCouponResponse,
  } = useSelector((state) => state.CouponListsRes);
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
      dispatch(CouponUserById())
    }
    // if (NewsPaperId === null) {
    //   setNewsVisible(true)
    //   localStorage.setItem("NewsPaperID", true)
    // }
    localStorage.removeItem("NewsPaperID")

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

  const logoutFunction = () => {
    localStorage.removeItem('userId');
    window.location.reload();
    window.location.href = "/";


  };

  const handleStateChange = (value) => {
    setSelectedState(value);
    console.log(value);
    Language.setLanguage(value)
  };

  // Define the renderItem function
  const renderItem = (item) => {
    return (
      <p style={contentStyle}>{item.description}:{item.code} </p>
    );
  };
  return (
    <>
      <header>
        {/* Top Header */}
        <div className="top-header fixed-top shadow-sm bg-white">
          <div className="container-fluid">
            <Carousel autoplay className="col-md-10 d-block mx-auto" dots={true}>
              {getCouponResponse?.coupons?.map((item, index) => item.isShow_display && (
                <div className="col-md-4" key={index}>
                  {renderItem(item)}
                </div>
              ))}
            </Carousel>


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
                    <div className="col-md-10 d-md-block mt-2">
                      <Link
                        className="ps-1 fs-6 text-main text-decoration-none "
                        to="/shop"
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
                      <Link
                        className="ps-1 fs-6 text-main text-decoration-none "
                        to="/blogs"
                      >
                        {Language.blogs}

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
                          className={`nav-link fs-5 ${location.pathname === "/" ? "active" : ""
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
                          className={`nav-link pb-3 fs-5 ${location.pathname === "/" ? "active" : ""
                            }`}
                          href="/about"
                        >
                          ABOUT
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className={`nav-link pb-3 fs-5 ${location.pathname === "/" ? "active" : ""
                            }`}
                          href="/faqs"
                        >
                          FAQs
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link pb-3 fs-5 ${location.pathname === "/" ? "active" : ""
                            }`}
                          href="/events"
                        >
                          EVENT
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className={`nav-link pb-3 fs-5 ${location.pathname === "/" ? "active" : ""
                            }`}
                          href="/stores"
                        >
                          STORES
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link pb-3 fs-5 ${location.pathname === "/" ? "active" : ""
                            }`}
                          href="/Allbrand"
                        >
                          BRAND DIRECTORY
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
                          className={`nav-link pb-3 fs-6 fw-normal ${location.pathname === "/" ? "active" : ""
                            }`}
                          href="tel:9035576906"
                        >
                          <i className="fa-solid fa-phone-volume" />{" "}
                          +91-9035576906
                        </a>
                      </li>
                      <li className=" nav-item">
                        <a
                          className={`nav-link pb-3 fs-6 fw-normal ${location.pathname === "/" ? "active" : ""
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
              <div className="col-md-3">
                <a

                  href="/"
                >
                  <img
                    src="../assets/images/winterbear-logo.png"
                    className="d-block img-fluid w-75"
                    alt="Logo"
                    
                  />
                </a>

              </div>
              {/* Login/Register and Cart Icons */}
              <div className="col-md-4 d-md-block d-none  text-start mt-md-0">
                <div className="row d-flex justify-content-between">
                  <div className="col-md-7">
                  
                    <SearchList />
                  </div>
                  <div className="col-md-5 mt-1">
                    <div className="text-end">
                      <div>
                        {getUserResponse && getUserResponse.User ? (
                          <>

                            <a href="/loyalty" className="link-body-emphasis text-decoration-none"
                            >
                              {/* <WalletOutlined style={{ fontSize: '16px', color: '#9E2717', marginRight: '5px' }} /> */}
                              <i class="fa-solid fa-star" style={{ color: "#ffdc64" }}></i>
                              {getUserResponse.User.loyalty_point}

                            </a>



                            <a
                              href="/cart"
                              className="text-decoration-none mx-2"
                            > <img src="../assets/images/icon_cart.svg" />
                              <a
                                href="#"
                                className="link-body-emphasis text-decoration-none "
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >


                                <img
                                  // src={getUserResponse?.User?.profile_img}
                                  src="../assets/images/icon-pofile.svg"
                                  alt="mdo"
                                  width={25}
                                  height={20}
                                  className="mx-2"
                                />{" "}
                                {/* <strong className="px-1">
                                {getUserResponse.User.firstname}
                              </strong> */}

                              </a>
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
                                  <Link
                                    className={`dropdown-item`}
                                    to="/awards"
                                  >
                                    Awards
                                  </Link>
                                </li>

                                <li>
                                  <hr className="dropdown-divider" />
                                </li>
                                <li>
                                  <a className="dropdown-item" onClick={logoutFunction} href="#">
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
      <>
        <LoginModal visible={loginVisible} onClose={handleCloseLogin} />

        <RegisterModal visible={modalVisible} onClose={handleCloseModal} />
        <NewsPaper visible={newsVisible} onClose={handleCloseNews} />
      </>
    </>
  );
};

export default Header;
