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
          <div key={prod.categoryId} className="portfolio border border-1">
            <div key={ind} className="item">
              <img
                src={
                  prod.images[0] !== null && prod.images[0] !== "image_url1"
                    ? `${constant.baseUrl}${prod.images[0]}`
                    : "assets/images/Rectangle 22.png"
                }
                alt={`Web Project ${ind + 1}`}
              />
              <span className="text-black">
                {prod.name} ₹{prod.amount}
              </span>
              <div
                className="add-to-cart"
                onClick={() => handleNavigation(prod._id)}
              >
                <i className="fas fa-cart-plus" /> Add to Cart
              </div>
            </div>
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
