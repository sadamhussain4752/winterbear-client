import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from "react-redux";
import constant from "../constant/constant";
import { useNavigate } from "react-router-dom";
import { fetchProductData } from "../reducer/thunks";
const ProductCategory = () => {
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
    document.title = "Winter Bear";
    document.getElementsByTagName("META")[2].content = "Winter Bear";
    return (
        <>
        <Header />
        <section className="section myaccount mt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="section-heading">
                <h3 className="theme-bg-text">Shop By Category</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="container faqs border border-secondry">
          <div className="row ">
            <div className="col-md-12 bg-white py-3 border-0">
              <div className="container-fluid ">
                <ul
                  className="nav nav-pills nav-fill py-1 mb-3  list-inline border-bottom"
                  id="faqs-tab"
                  role="tablist"
                >
                  <li
                    className="nav-item cart-item border-0 list-inline-item"
                    role="presentation"
                  >
                    <button
                      className="nav-link text-dark  fw-semibold  position-relative  rounded   active"
                      id="pills-koya-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-koya"
                      type="button"
                      role="tab"
                      aria-controls="pills-koya"
                      aria-selected="true"
                    >
                   Consumer Electronics
                    </button>
                  </li>
                  <li
                    className="nav-item cart-item border-0 list-inline-item"
                    role="presentation"
                  >
                    <button
                      className="nav-link text-dark  fw-semibold position-relative rounded "
                      id="pills-rj-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-rj"
                      type="button"
                      role="tab"
                      aria-controls="pills-rj"
                      aria-selected="false"
                    >
                      Fashion accessories
                    </button>
                  </li>
                  <li
                    className="nav-item cart-item border-0 list-inline-item"
                    role="presentation"
                  >
                    <button
                      className="nav-link text-dark text-light fw-semibold position-relative rounded "
                      id="pills-shooky-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-shooky"
                      type="button"
                      role="tab"
                      aria-controls="pills-shooky"
                      aria-selected="false"
                    >
                     Stationery
                    </button>
                  </li>

                  <li
                    className="nav-item cart-item border-0 list-inline-item"
                    role="presentation"
                  >
                    <button
                      className="nav-link text-dark text-light fw-semibold position-relative rounded "
                      id="pills-mang-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-mang"
                      type="button"
                      role="tab"
                      aria-controls="pills-mang"
                      aria-selected="false"
                    >
                      Home soft
                    </button>
                  </li>
                  <li
                    className="nav-item cart-item border-0 list-inline-item"
                    role="presentation"
                  >
                    <button
                      className="nav-link text-dark text-light fw-semibold position-relative rounded "
                      id="pills-chimmy-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-chimmy"
                      type="button"
                      role="tab"
                      aria-controls="pills-chimmy"
                      aria-selected="false"
                    >
                      Apparels
                    </button>
                    <button
                      className="nav-link text-dark text-light fw-semibold position-relative rounded "
                      id="pills-living-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-living"
                      type="button"
                      role="tab"
                      aria-controls="pills-living"
                      aria-selected="false"
                    >
                      Living accessories
                    </button>
                  </li>
                </ul>
                <div
                  className="tab-content text-white px-3"
                  id="pills-tabContent"
                >
                  <div
                    className="tab-pane fade  active show"
                    id="pills-koya"
                    role="tabpanel"
                    aria-labelledby="pills-koya-tab"
                  >
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
                  </div>

                  <div
                    className="tab-pane fade  text-white"
                    id="pills-rj"
                    role="tabpanel"
                    aria-labelledby="pills-rj-tab"
                  >
                    <p className="text-dark">Shipping</p>
                    <hr />
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-shooky"
                    role="tabpanel"
                    aria-labelledby="pills-shooky-tab"
                  >
                   
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-mang"
                    role="tabpanel"
                    aria-labelledby="pills-mang-tab"
                  >
                   
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-chimmy"
                    role="tabpanel"
                    aria-labelledby="pills-chimmy-tab"
                  >
                   

                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-living"
                    role="tabpanel"
                    aria-labelledby="pills-living-tab"
                  >
                   

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            <Footer />
    </>
    );
};

export default ProductCategory;
