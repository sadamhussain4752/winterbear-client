import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import { useDispatch, useSelector } from "react-redux";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.theme.green.css";
import constant from "../constant/constant";
import { useHistory } from 'react-router-dom';

const HomeSlider = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);
  console.log(data);

  function shopAllpag() {
    const history = useHistory();
    return (
      history.push('./components/shopall.js')
    )
  }

  return (
    <div className="mt-80">
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
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        }}
      >
        {data && data?.banners &&  // Check if data is not null or undefined
          data?.banners.map((item, index) => (
            <div key={index} className="item" onClick={shopAllpag}>
              <picture>
                <source
                  media="(min-width:768px)"
                  src={`${item.imageUrl}`}
                  className="w-100 "
                />
                <source
                  media="(max-width:768px)"
                  className="w-100"
                  src={`${item.imageUrl}`}
                  height={486}
                  width={320}
                />
                <img
                  src={`${item.imageUrl}`}
                  className=" w-100"
                  alt=""
                  title=""
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
