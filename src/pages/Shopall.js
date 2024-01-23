import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import BrandSlider from "../components/BrandSlider";
const ShopAll = () => {
  return (
    <>
     <Header />

      <section className="section mt-120 pb-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="section-heading">
                <h3 className="theme-bg-text heading">Shop</h3>
              </div>
            </div>
          </div>
        </div>
        </section>
        <BrandSlider customClass="" containerClass="container  py-1 mb-0" />
          <section className="section  pb-4">
          
        <div className="container">
          <div className="row ">
            <div className="col-md-12 bg-theme tile-1 border-0">
              <div className="container-fluid ">
                <ul
                  className="nav nav-pills nav-fill py-1 mb-3  list-inline border-bottom"
                  id="pills-tab"
                  role="tablist"
                >
                  <li
                    className="nav-item cart-item list-inline-item"
                    role="presentation"
                  >
                    <button
                      className="nav-link  fw-semibold  position-relative rounded-pill active "
                      id="pills-all-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-all"
                      type="button"
                      role="tab"
                      aria-controls="pills-all"
                      aria-selected="true"
                    >
                      All
                    </button>
                  </li>
                  <li
                    className="nav-item cart-item list-inline-item"
                    role="presentation"
                  >
                    <button
                      className="nav-link  fw-semibold  position-relative rounded-pill  "
                      id="pills-koya-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-koya"
                      type="button"
                      role="tab"
                      aria-controls="pills-koya"
                      aria-selected="true"
                    >
                      KOYA
                    </button>
                  </li>
                  <li
                    className="nav-item cart-item list-inline-item"
                    role="presentation"
                  >
                    <button
                      className="nav-link text-light fw-semibold position-relative rounded-pill"
                      id="pills-rj-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-rj"
                      type="button"
                      role="tab"
                      aria-controls="pills-rj"
                      aria-selected="false"
                    >
                      RJ
                    </button>
                  </li>
                  <li
                    className="nav-item cart-item list-inline-item"
                    role="presentation"
                  >
                    <button
                      className="nav-link text-light fw-semibold position-relative rounded-pill"
                      id="pills-shooky-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-shooky"
                      type="button"
                      role="tab"
                      aria-controls="pills-shooky"
                      aria-selected="false"
                    >
                      SHOOKY
                    </button>
                  </li>

                  <li
                    className="nav-item cart-item list-inline-item"
                    role="presentation"
                  >
                    <button
                      className="nav-link text-light fw-semibold position-relative rounded-pill"
                      id="pills-mang-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-mang"
                      type="button"
                      role="tab"
                      aria-controls="pills-mang"
                      aria-selected="false"
                    >
                      MANG
                    </button>
                  </li>
                  <li
                    className="nav-item cart-item list-inline-item"
                    role="presentation"
                  >
                    <button
                      className="nav-link text-light fw-semibold position-relative rounded-pill"
                      id="pills-chimmy-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-chimmy"
                      type="button"
                      role="tab"
                      aria-controls="pills-chimmy"
                      aria-selected="false"
                    >
                      CHIMMY
                    </button>
                  </li>
                  <li
                    className="nav-item cart-item list-inline-item"
                    role="presentation"
                  >
                    <button
                      className="nav-link text-light fw-semibold position-relative rounded-pill"
                      id="pills-tata-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-tata"
                      type="button"
                      role="tab"
                      aria-controls="pills-tata"
                      aria-selected="false"
                    >
                      TATA
                    </button>
                  </li>
                  <li
                    className="nav-item cart-item list-inline-item"
                    role="presentation"
                  >
                    <button
                      className="nav-link text-light fw-semibold position-relative rounded-pill"
                      id="pills-cooky-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-cooky"
                      type="button"
                      role="tab"
                      aria-controls="pills-cooky"
                      aria-selected="false"
                    >
                      COOKY
                    </button>
                  </li>
                </ul>
                <div
                  className="tab-content text-white px-3"
                  id="pills-tabContent"
                >
                  <div
                    className="tab-pane fade active show"
                    id="pills-all"
                    role="tabpanel"
                    aria-labelledby="pills-all-tab"
                  >
                    <div className="row product">
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 18.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 19.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 20.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 21.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 22.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 23.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 24.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 25.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade  "
                    id="pills-koya"
                    role="tabpanel"
                    aria-labelledby="pills-koya-tab"
                  >
                    <div className="row product">
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 18.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 19.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 20.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 21.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 22.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 23.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 24.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 25.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade  text-white"
                    id="pills-rj"
                    role="tabpanel"
                    aria-labelledby="pills-rj-tab"
                  >
                    <div className="row product">
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 18.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 19.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 20.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 21.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 22.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 23.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 24.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 25.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-shooky"
                    role="tabpanel"
                    aria-labelledby="pills-shooky-tab"
                  >
                    <div className="row product">
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 18.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 19.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 20.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 21.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 22.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 23.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 24.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 25.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-mang"
                    role="tabpanel"
                    aria-labelledby="pills-mang-tab"
                  >
                  <div className="row product">
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 18.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 19.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 20.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 21.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 22.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 23.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 24.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 25.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-chimmy"
                    role="tabpanel"
                    aria-labelledby="pills-chimmy-tab"
                  >
                   <div className="row product">
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 18.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 19.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 20.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 21.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 22.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 23.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 24.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 25.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-tata"
                    role="tabpanel"
                    aria-labelledby="pills-tata-tab"
                  >
                   <div className="row product">
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 18.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 19.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 20.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 21.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 22.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 23.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 24.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 25.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-cooky"
                    role="tabpanel"
                    aria-labelledby="pills-cooky-tab"
                  >
                    <div className="row product">
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 18.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 19.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 20.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            className="img-fluid"
                            src="assets/images/Rectangle 21.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 22.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 23.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 24.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="item cart-item rj">
                          <img
                            src="assets/images/Rectangle 25.png"
                            alt="Graphic Project 1"
                          />
                          <span className="text-white">
                            BT21© COOKY POCKET MIRROR ₹699.00
                          </span>
                          <div className="add-to-cart">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
          </div>
        </div>
      </section>

      <Gallery />
      <Footer />
    </>
  );
};

export default ShopAll;
