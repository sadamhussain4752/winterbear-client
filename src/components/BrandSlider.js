import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.theme.green.css";
import { useDispatch, useSelector } from "react-redux";
import constant from "../constant/constant";
import { useNavigate } from "react-router-dom";

const HomeSlider = () => {
  const { data, loading, error } = useSelector((state) => state.data);
  const navigate = useNavigate();

  const handleNavigation = (productId) => {
    // Navigate to the specified product id
    navigate(`/brand/${productId}`);
  };
  return (
    <section className="pt-md-5 pb-md-5 pt-5 pb-0">
      <div className="container-fluid px-3">
        <OwlCarousel
          className="owl-theme"
          loop
          autoplay
          dots={false}
          autoplayTimeout={1800}
          smartSpeed={3000}
          responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 2,
            },
            1000: {
              items: 5,
            },
            1600: {
              items: 7,
            },
          }}
        >
          {data &&
            data?.Brands &&
            data?.Brands.map((brand, index) => (
              <div key={index} className="item mx-4" onClick={()=>{
                handleNavigation(brand._id)
              }}>
                <img
                  src={brand.imageUrl || "assets/images/placeholder.png"}
                  alt={brand.name || "Brand Name"}
                  className="d-block  mx-auto "
                  width={"60px"}
                  height={"60px"}
                />
                {/* <div className="text-center mt-2">
                  <h5 className="font-weight-bold">{brand.name || "Brand"}</h5>
                </div> */}
              </div>
            ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default HomeSlider;
