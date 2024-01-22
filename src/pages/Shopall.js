import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

const ShopAll = () => {
  return (
    <>
      <Header />

      <section className="py-5 mt-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="section-heading">
                <h3 className="theme-bg-text">Shop</h3>
              </div>
            </div>
          </div>

          <div className="row justify-content-center text-center bg-theme py-5">
            <div className="container-fluid ">
              <ul
                className="nav nav-pills mb-3  nav-fill"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
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
                <li className="nav-item" role="presentation">
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
                <li className="nav-item" role="presentation">
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
                <li className="nav-item" role="presentation">
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

                <li className="nav-item" role="presentation">
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
                <li className="nav-item" role="presentation">
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
                <li className="nav-item" role="presentation">
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
                <li className="nav-item" role="presentation">
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
                  <div className="row">
                    <div className="col-md-3">
                      <div className="shop-container">
                        <img
                          src="assets/images/Rectangle 18.png"
                          class="w-100 d-block mx-auto "
                          alt="Your Image"
                        />
                        <div className="shop-overlay">
                        <button className="add-to-cart-btn btn bg-secondary-subtle text-main fw-bold border ">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </button>
                        </div>
                      </div>
                      
                      <p className="text-white text-start fs-5">
                        BT21© COOKY POCKET MIRROR ₹699.00
                      </p>
                    </div>
                    <div className="col-md-3">
                      <div className="shop-container">
                        <img
                          src="assets/images/Rectangle 18.png"
                          class="w-100 d-block mx-auto "
                          alt="Your Image"
                        />
                        <div className="shop-overlay">
                          <button className="add-to-cart-btn btn bg-secondary-subtle text-main fw-bold border ">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </button>
                        </div>
                      </div>
                      <p className="text-white text-start fs-5">
                        BT21© COOKY POCKET MIRROR ₹699.00
                      </p>
                    </div>
                    <div className="col-md-3">
                      <div className="shop-container">
                        <img
                          src="assets/images/Rectangle 18.png"
                          class="w-100 d-block mx-auto "
                          alt="Your Image"
                        />
                        <div className="shop-overlay">
                          <button className="add-to-cart-btn btn bg-secondary-subtle text-main fw-bold border ">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </button>
                        </div>
                      </div>
                      <p className="text-white text-start fs-5">
                        BT21© COOKY POCKET MIRROR ₹699.00
                      </p>
                    </div>
                    <div className="col-md-3">
                      <div className="shop-container">
                        <img
                          src="assets/images/Rectangle 18.png"
                          class="w-100 d-block mx-auto "
                          alt="Your Image"
                        />
                        <div className="shop-overlay">
                          <button className="add-to-cart-btn btn bg-secondary-subtle text-main fw-bold border ">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </button>
                        </div>
                      </div>
                      <p className="text-white text-start fs-5">
                        BT21© COOKY POCKET MIRROR ₹699.00
                      </p>
                    </div>
                    <div className="col-md-3">
                      <div className="shop-container">
                        <img
                          src="assets/images/Rectangle 18.png"
                          class="w-100 d-block mx-auto "
                          alt="Your Image"
                        />
                        <div className="shop-overlay">
                          <button className="add-to-cart-btn btn bg-secondary-subtle text-main fw-bold border ">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </button>
                        </div>
                      </div>
                      <p className="text-white text-start fs-5">
                        BT21© COOKY POCKET MIRROR ₹699.00
                      </p>
                    </div>
                    <div className="col-md-3">
                      <div className="shop-container">
                        <img
                          src="assets/images/Rectangle 18.png"
                          class="w-100 d-block mx-auto "
                          alt="Your Image"
                        />
                        <div className="shop-overlay">
                          <button className="add-to-cart-btn btn bg-secondary-subtle text-main fw-bold border ">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </button>
                        </div>
                      </div>
                      <p className="text-white text-start fs-5">
                        BT21© COOKY POCKET MIRROR ₹699.00
                      </p>
                    </div>
                    <div className="col-md-3">
                      <div className="shop-container">
                        <img
                          src="assets/images/Rectangle 18.png"
                          class="w-100 d-block mx-auto "
                          alt="Your Image"
                        />
                        <div className="shop-overlay">
                          <button className="add-to-cart-btn btn bg-secondary-subtle text-main fw-bold border ">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </button>
                        </div>
                      </div>
                      <p className="text-white text-start fs-5">
                        BT21© COOKY POCKET MIRROR ₹699.00
                      </p>
                    </div>
                    <div className="col-md-3">
                      <div className="shop-container">
                        <img
                          src="assets/images/Rectangle 18.png"
                          class="w-100 d-block mx-auto "
                          alt="Your Image"
                        />
                        <div className="shop-overlay">
                          <button className="add-to-cart-btn btn bg-secondary-subtle text-main fw-bold border ">
                            <i className="fas fa-cart-plus" /> Add to Cart
                          </button>
                        </div>
                      </div>
                      <p className="text-white text-start fs-5">
                        BT21© COOKY POCKET MIRROR ₹699.00
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade  "
                  id="pills-koya"
                  role="tabpanel"
                  aria-labelledby="pills-koya-tab"
                >
                  <p className="text-white">hello</p>
                </div>

                <div
                  className="tab-pane fade  text-white"
                  id="pills-rj"
                  role="tabpanel"
                  aria-labelledby="pills-rj-tab"
                >
                  RJ
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-shooky"
                  role="tabpanel"
                  aria-labelledby="pills-shooky-tab"
                >
                  shooky
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-mang"
                  role="tabpanel"
                  aria-labelledby="pills-mang-tab"
                >
                  mang
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-chimmy"
                  role="tabpanel"
                  aria-labelledby="pills-chimmy-tab"
                >
                  chimmy
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-tata"
                  role="tabpanel"
                  aria-labelledby="pills-tata-tab"
                >
                  tata
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-cooky"
                  role="tabpanel"
                  aria-labelledby="pills-cooky-tab"
                >
                  cooky
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
