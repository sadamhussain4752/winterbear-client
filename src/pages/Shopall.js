import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import BrandSlider from "../components/BrandSlider";
import { useDispatch, useSelector } from "react-redux";
import constant from "../constant/constant";
import { useNavigate } from "react-router-dom";
import { fetchProductData } from "../reducer/thunks";

const ShopAll = () => {
  const dispatch = useDispatch();

  const {
    productlist,
    loading: productListLoading,
    error: productListError,
  } = useSelector((state) => state.productlist);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProductData());
  }, []);

  const handleNavigation = (productId) => {
    // Navigate to the specified product id
    navigate(`/product/${productId}`);
  };
  return (
    <>
      <Header />

      <section className="mb-3 mt-150 d-none">
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

      <section className="section my-3  mt-150">
        <div className="container">
          <div className="row row-cols-5">
            <div className="col">
              <a href="">
                <img
                  src="assets/images/client-logo1.png"
                  className="img-fluid d-block mx-auto p-1"
                />
              </a>
            </div>
            <div className="col">
              <a href="">
                <img
                  src="assets/images/client-logo2.png"
                  className="img-fluid d-block mx-auto p-1"
                />
              </a>
            </div>
            <div className="col">
              <a href="">
                <img
                  src="assets/images/client-logo3.png"
                  className="img-fluid d-block mx-auto p-1"
                />
              </a>
            </div>
            <div className="col">
              <a href="">
                <img
                  src="assets/images/client-logo4.png"
                  className="img-fluid d-block mx-auto p-1"
                />
              </a>
            </div>
            <div className="col">
              <a href="">
                <img
                  src="assets/images/client-logo.png"
                  className="img-fluid d-block mx-auto p-1"
                />
              </a>
            </div>
          </div>



          <div className="row justify-content-center">
            {productlist &&
              productlist.productList &&
              productlist.productList.map((item, index) => {
                if (!item || !item.products || item.products.length === 0)
                  return null;
                return (
                  <div className="row">
                    <div
                      className="col-md-12 bg-theme tile-1"
                      id={`sticky1${index}`}
                    >
                      <div className="container-fluid ">
                        <ul
                          className="nav nav-pills mb-3  nav-fill"
                          id="pills-tab"
                          role="tablist"
                        >
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
                            className="tab-pane fade  "
                            id="pills-koya"
                            role="tabpanel"
                            aria-labelledby="pills-koya-tab"
                          >
                            <p className="text-white">
                              
                            </p>
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

                      <div className="row px-3">
                        {item &&
                          item.products &&
                          item.products.slice(0, 6).map((prod, ind) => (
                            <div className="item koya mb-3 col-md-3">
                              {" "}
                              {/* Add appropriate classes for filtering */}
                              <img
                                src={
                                  prod.images[0] !== null &&
                                  prod.images[0] !== "image_url1"
                                    ? `${constant.baseUrl}${prod.images[0]}`
                                    : "assets/images/Rectangle 22.png"
                                }
                                alt="Web Project 1"
                              />
                              <span className="text-white">
                                {prod.name} ₹{prod.amount}
                              </span>
                              <div
                                className="add-to-cart"
                                onClick={() => handleNavigation(prod._id)}
                              >
                                <i className="fas fa-cart-plus" /> Add to Cart
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                   
                  </div>
                );
              })}
            <div className="sticky-body container-fluid bg-white">
              <Gallery />
            </div>
          </div>
         
        </div>
      </section>
    

    
      <Footer />
    </>
  );
};

export default ShopAll;
