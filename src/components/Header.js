// Header.js

import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import { ProfileUserData, CouponUserById, GetAddCardProductById, GetCardProductById } from "../reducer/thunks";
import { useDispatch, useSelector } from "react-redux";
import Logo from '../constant/images/Winterbear-Logo.webp';
import { IoIosLogIn } from "react-icons/io";
import NewsPaper from "./NewsPaper";
import { ShoppingCartOutlined, WalletOutlined } from "@ant-design/icons";
import { Carousel, Select, Badge, Tooltip } from "antd";
import Language from "../constant/Language";
import SearchList from "./SearchList";
const { Option } = Select;


function chunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, chunkSize + i));
  }
  return chunks;
}

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
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

  const navigate = useNavigate();

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
    data,
    loading: bannerLoading,
    error: bannerError,
  } = useSelector((state) => state.data);

  const {
    GetAddcardUserRes,
    addloading: addloadingLoading,
    error: productListError,
  } = useSelector((state) => state.GetAddcardUserRes);
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
    console.log(userId, "userId", userId !== undefined, userId !== null);
    if (userId !== undefined && userId !== null) {
      dispatch(ProfileUserData(userId));
      dispatch(GetAddCardProductById(userId));
      // dispatch(CouponUserById())
    } else {
      let getlistcarts = localStorage.getItem("cardstore");
      if (getlistcarts) {
        const productIds = { productIds: JSON.parse(getlistcarts) }
        console.log(productIds);
        dispatch(GetCardProductById(productIds));
      }
    }
    const lastShown = localStorage.getItem('NewsPaperLastShown');
    const today = new Date().toLocaleDateString();

    if (lastShown !== today) {
      setNewsVisible(true);
      // Update the last shown date in localStorage
      localStorage.setItem('NewsPaperLastShown', today);
    }

    // if (getUserResponse) {
    //   const { firstname, lastname } = getUserResponse.User;
    //   message.success(Welcome ${firstname} ${lastname}, 5);
    // }
  }, []);

  const location = useLocation();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const changeColorPosition = 100; // Change color after scrolling down 100 pixels

    if (scrollPosition > changeColorPosition) {
      setNavbarBg("fixed-top");
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

  // for dropdown
  const chunkedBrands = data ? chunkArray(data.Brands, 10) : [];

  return (
    <div className="header-container">
      {" "}
      {/* Add a wrapper div */}
      <header>
        {/* Top Header */}
        <div
          className={`top-header shadow-sm fixed-top ${navbarBg === "d-none" && "bg-white top-headers"
            }`}
        >
          <div className="container-fluid">
            {/* <Carousel autoplay className={col-md-10 d-block mx-auto ${navbarBg}} dots={true}>
              {getCouponResponse && getCouponResponse?.coupons &&getCouponResponse?.coupons?.map((item, index) => item.isShow_display && (
                <div className="col-md-4" key={index}>
                  {renderItem(item)}
                </div>
              ))}
            </Carousel> */}

            <div className="row align-items-center justify-content-between ">
              {/* Language Selection */}
              <div className="col-md-5 col-2  ps-1 order-first text-left  border-0 shadow-none pe-lg-5">
                <div class="container-fluid ">
                  <div className="row d-flex align-items-center">
                    <div className="col-md-1">
                      <button

                        className="btn navbar  navbar-toggler border-0 p-0"
                        data-bs-toggle="offcanvas"
                        href="#offcanvasExample"
                        role="button"
                        aria-controls="offcanvasExample"

                      >
                        <span class="navbar-toggler-icon"></span>
                      </button>
                    </div>
                    <div className="col-md-11 d-md-block d-none pe-0 ">
                      <div className="d-flex justify-content-end align-items-center">
                        <div
                          id="menu-products"
                          className=" fs-6 text-main text-decoration-none"
                          to="#"
                        >
                          {Language.shop_all}
                          <div id="dropdown-products">
                            <div
                              className="shopall-menu"
                              style={{ marginTop: "50px" }}
                            >
                              <div className="container-fluid bg-light">
                                <div className="row">
                                  <div className="col-md-3  ps-5">
                                    <div className="menu-items py-3">
                                      <div className="ps-2">
                                        <div
                                          onClick={() => {
                                            navigate("/shop/0");
                                            console.log("call");
                                          }}
                                          className="btn text-decoration-none btn-outline-dark pointer"
                                        >
                                          {" "}
                                          SHOP ALL
                                        </div>
                                      </div>

                                      <p className="fw-bold ps-3 text-uppercase my-2">
                                        Shop by category
                                      </p>
                                      <div className="d-block text-start">
                                        {data &&
                                          data.Categorys &&
                                          data.Categorys.map((item) => (
                                            <a
                                              href="#"
                                              onClick={() => {
                                                navigate(`/shop/${item._id}`);
                                                setIsHovered(false);
                                              }}
                                              className="btn text-decoration-none d-block fs-6 text-start"
                                            >
                                              {" "}
                                              {item.name}
                                            </a>
                                          ))}
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-lg-9 brand-list-nav mt-4 ">
                                    <div className="row">
                                      {data &&
                                        data.Brands.slice(0, 20).map((item) => (
                                          <div key={item._id} className="col-6 col-md-3 mb-4 d-flex align-items-center">
                                            <a href="" onClick={() => navigate(`/brand/${item._id}`)}>
                                              <img
                                                loading="lazy"
                                                src={item.imageUrl}
                                                alt={item.name}
                                                className="shop-online-brand d-block mx-auto"
                                              />
                                            </a>
                                          </div>
                                        ))}
                                    </div>
                                    <div
                                      className="header-all-cards mt-3 w-100 me-lg-5 "
                                      onClick={() => {
                                        navigate('Allbrand');
                                      }}
                                    >
                                      <span className="brand-namee me-5 view-mor-brand px-4 py-2 rounded">
                                        More Brands <i className="fa-solid fa-arrow-right"></i>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        {/* <Link
                        className="ps-1 fs-6 text-main text-decoration-none"
                        to="#"
                        onMouseEnter={() => setIsHovered(true)}
                      // onMouseLeave={() => setIsHovered(false)}
                      >
                        {Language.shop_all}
                      </Link> */}
                        <Link
                          className="fs-6 text-main text-decoration-none "
                          to="/faqs"
                        >
                          {Language.faqs}
                        </Link>
                        <Link
                          className="fs-6 text-main text-decoration-none "
                          to="/stores"
                        >
                          {Language.find}
                        </Link>

                        <Link
                          className="fs-6 text-main text-decoration-none "
                          to="/events"
                        >
                          EVENT
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
                        src={require("../constant/images/Winterbear-Logo.webp")}
                        className="d-block ps-md-2 img-fluid my-5 "
                        alt="Logo"
                        loading="lazy"
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
                          className={`nav-link pb-3 fs-5 show-shop-all ${location.pathname === "/" ? "active" : ""
                            }`}
                          href="/shop/0"
                        >
                          SHOP ALL
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
                          href="/blogs"
                        >
                          BLOGS
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

                      <li className="nav-item">
                        <a
                          className={`nav-link pb-3 fs-5 ${location.pathname === "/" ? "active" : ""
                            }`}
                          href="/Sns"
                        >
                          SNS
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link pb-3 fs-5 ${location.pathname === "/" ? "active" : ""
                            }`}
                          href="/upcoming/0"
                        >
                          UPCOMING
                        </a>
                      </li>



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
              <div className="col-md-2 col-4 px-0">
                <a href="/">
                  <img
                    // src="../assets/images/winterbear-logo.png"
                    src={require("../constant/images//Winterbear-Logo.webp")}
                    className="d-block header-logo"
                    alt="Logo"
                    loading="lazy"
                  />
                </a>
              </div>
              {/* Login/Register and Cart Icons */}
              <div className="col-md-5 col-6 text-start mt-md-0 ps-lg-5">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-md-6 d-md-block d-none">
                    <SearchList />
                  </div>
                  <div className="col-md-6">
                    <div className="text-end">
                      <div className="d-flex justify-content-between align-items-center">
                        {getUserResponse && getUserResponse.User ? (
                          <>

                            <p className="d-md-none d-block search-a mb-0">
                              <i class="fa-solid fa-magnifying-glass"></i>
                              <div className="mob-search ">
                                <SearchList />
                              </div>
                            </p>



                            <a
                              href="/loyalty"
                              className="link-body-emphasis text-decoration-none"
                            >
                              {/* <WalletOutlined style={{ fontSize: '16px', color: '#9E2717', marginRight: '5px' }} /> */}
                              <Tooltip title="Bear club" color={"#4e3c98"} >
                                <i
                                  class="fa-solid fa-star"
                                  style={{ color: "#ffdc64" }}
                                ></i>
                                {getUserResponse.User.loyalty_point}
                              </Tooltip>

                            </a>
                            <a
                              href="/wishlist"
                              className="text-decoration-none "
                            >

                              <Tooltip title="My WishList" color={"#4e3c98"} >
                                <div>
                                  <i
                                    class="fa-regular fa-bookmark"
                                    style={{ fontSize: "20px" }}
                                  ></i>
                                </div>


                              </Tooltip>

                            </a>

                            <a
                              href="#"
                              className="link-body-emphasis text-decoration-none "
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <Tooltip title="My Profile" color={"#4e3c98"} >
                                <img
                                  src={getUserResponse?.User?.profile_img}
                                  // src="../assets/images/icon-pofile.svg"
                                  alt="mdo"
                                  width={25}
                                  height={25}
                                  className=" person-icon-img"
                                />{" "}


                              </Tooltip>


                              {/* <strong className="px-1">
                                            {getUserResponse.User.firstname}
                                          </strong> */}
                            </a>

                            <a
                              href="/cart"
                              className="text-decoration-none mx-2"
                            >
                              <Tooltip title="My Cart" color={"#4e3c98"} >
                                <Badge count={GetAddcardUserRes?.AddCarts?.length || 0}>
                                  <img src="../assets/images/icon_cart.svg" loading="lazy" />

                                </Badge>


                              </Tooltip>


                              <ul className="mt-3 dropdown-menu text-small">
                                <li>
                                  <Link
                                    className={'dropdown-item'}
                                    to="/account"
                                  >
                                    <i class="fa-solid fa-user"></i>  Account
                                  </Link>
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
                                    <i class="fa-solid fa-arrow-right-from-bracket"></i> Sign out
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
                              <Badge count={GetAddcardUserRes?.AddCarts?.length || 0}>
                                <img src="../assets/images/icon_cart.svg" loading="lazy" />

                              </Badge>
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
    </div>
  );
};

export default Header;