import React, { useEffect, useState } from "react";
import { fetchProductData } from "../../src/reducer/thunks";
import { useDispatch, useSelector } from "react-redux";
import constant from "../constant/constant";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Relatedproducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    productlist,
    loading: productListLoading,
    error: productListError,
  } = useSelector((state) => state.productlist);

  console.log(productlist);

  const handleNavigation = (newProductId) => {
    // Update the productId state when navigation occurs
    // Navigate to the specified product id
    navigate(`/product/${newProductId}`);
  };
  useEffect(() => {
    dispatch(fetchProductData());
  }, []);

  const renderRelatedProducts = () => {
    return (
      <OwlCarousel
        className="owl-theme"
        margin={10}
        autoplay
        dots={false}
        responsive={{
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 5,
          },
        }}
      >
        {productlist?.productList[0].products?.slice(0, 6).map((prod, ind) => (
          <div className="portfolio mx-3 ml-3 row ">
            {prod &&
              prod.products &&
              prod.products.slice(0, 8).map((prod, ind) => (
                <div className="item col-lg-3 position-relative mb-3 home-product px-0">
                  <div className="home-product-in">
                    <img
                      src={
                        prod.images[0] !== null &&
                          prod.images[0] !== "image_url1"
                          ? `${prod.images[0]}`
                          : "assets/images/Rectangle 22.png"
                      }
                      className="product-shopby img-fluid"
                      alt="Web Project 1"
                    />
                     <div
                    className="text-center  border-secondary addtocart-btn px-1 py-1 "
                    onClick={() => handleNavigation(prod._id)}
                  >
                    <i className="fas fa-cart-plus me-2" /> Add to
                    Cart
                  </div>
                  </div>

                  <div className="col-md-12 d-flex justify-content-between align-items-end mb-2">
                    <div className="d-flex justify-content-between position-absolute top-0 start-0 w-100">
                      {prod.brand._id ===
                        "65aa405f6bfadce6d5a0ef3c" && (
                          <p className="text-white text-center  text-decoration-line-through w-25 mt-2 rounded-end bg-theme-dis">
                            40%
                          </p>
                        )}

                      <div></div>

                      <button className="heart-btn" id="hertbtn">
                        <i class="fa-regular fa-heart"></i>
                        {/* <Rate
                       character={<HeartOutlined />  }
                       count={1}
                     /> */}
                      </button>
                    </div>

                    <div className=" mt-4 col-md-12 price-prodname">
                      <p className="text-start prize-size mb-0 ">
                        {" "}
                        {prod.brand.name} @{prod.name}
                      </p>
                      <p className="prod-pric mb-0 ">
                        ₹{prod.amount}
                      </p>
                    </div>
                  </div>
                  <div
                    className="text-center d-none border-secondary addtocart-btn px-1 py-1 "
                    onClick={() => handleNavigation(prod._id)}
                  >
                    <i className="fas fa-cart-plus me-2" /> Add to
                    Cart
                  </div>
                </div>
              ))}
          </div>
        ))}
      </OwlCarousel>
    );
  };

  return (
    <div className="cart-totals mt-5">
      <div className="section-heading mt-5">
        <h3 className="theme-bg-text">Related Products</h3>
      </div>

      {renderRelatedProducts()}
    </div>
  );
};

export default Relatedproducts;
