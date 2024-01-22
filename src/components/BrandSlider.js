import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.theme.green.css";
import { useDispatch, useSelector } from "react-redux";
import constant from "../constant/constant";

const HomeSlider = () => {
  const { data, loading, error } = useSelector((state) => state.data);
  return (
    <section className="py-5">
      <div className="container-fluid px-3">
        <OwlCarousel
          className="owl-theme"
          loop
          autoplay
          dots={false}
          autoplayTimeout={800}
          responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 2,
            },
            1000: {
              items: 4,
            },
            1600: {
              items: 7,
            },
          }}
        >
          {data &&
            data.Brands &&
            data.Brands.map((brand, index) => (
              <div key={index} className="item">
                <img
                  src={constant.baseUrl+brand.imageUrl || "assets/images/placeholder.png"}
                  alt={brand.name || "Brand Name"}
                  className="w-auto d-block mx-auto"
                  width={"100px"}
                  height={"60px"}
                />
                <div className="text-center mt-2">
                  <h5 className="font-weight-bold">{brand.name || "Brand"}</h5>
                </div>
              </div>
            ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default HomeSlider;
