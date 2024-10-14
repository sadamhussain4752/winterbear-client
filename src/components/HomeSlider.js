import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import { useDispatch, useSelector } from "react-redux";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.theme.green.css";
import constant from "../constant/constant";
import { useNavigate } from "react-router-dom";

const HomeSlider = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, loading, error } = useSelector((state) => state.data);
  console.log(data);

  function shopAllpag(brand) {
    navigate(`/brand/${brand.link_brand}`);
  }

  return (
    <div className="">
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        autoplayTimeout={7000}
        smartSpeed={3000}
        nav={false}
        dots={false}
        autoplay
        responsive={{
          0: {
            items: 1, // Show 3 items on mobile
          },
          600: {
            items: 1, // Adjust as needed for tablets
          },
          1000: {
            items: 1, // Adjust as needed for desktops
          },
        }}
      >
        {data &&
          data.banners && // Check if data is not null or undefined
          data.banners.map((item, index) => (
            <div key={index} className="item homebanner" onClick={() => shopAllpag(item)}>
              <picture>
                <source
                  media="(min-width: 769px)"
                  srcSet={`${item.imageUrl}`}
                  className="w-100"
                />
                <source
                  media="(max-width: 768px)"
                  srcSet={`${item.banner_img_mob}`}
                  className="w-100"
                  height={700}
                />
                <img
                  loading="lazy"
                  src={`${item.imageUrl}`}
                  className="w-100"
                  alt={item.altText || ""}
                  title={item.title || ""}
                />
              </picture>
            </div>
          ))}
      </OwlCarousel>

      {/* <div className="carousel-content d-md-block d-none width-dynimc">
      <h3>Step into the K-pop Style Realm</h3>
      <h5>Your Ultimate Destination for Trendsetting Fashion</h5>
      <a href="#" className="button">
        Shop now
      </a>
    </div> */}
    </div>
  );
};

export default HomeSlider;
