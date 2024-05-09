import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.theme.green.css"; 
const SnsSl = () => {
  return (
    <section className="py-5">
      <div className="container">
      

        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          autoplay
          dots={false}
          autoplayTimeout={1800}
          smartSpeed={1500}
          responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            1000: {
              items: 4,
            },
          }}
        >
          <div className="item">
            <img
              src="assets/images/slider1.jpg"
              className="w-100 d-block mx-auto"
              alt="Gallery Item"
            />
           
          </div>
          <div className="item">
            <img
                    src="assets/images/slider2.jpg"
              className="w-100 d-block mx-auto"
              alt="Gallery Item"
            />
           
          </div>
          <div className="item">
            <img
                 src="assets/images/slider3.jpg"
              className="w-100 d-block mx-auto"
              alt="Gallery Item"
            />{" "}
           
          </div>
          <div className="item">
            <img
                  src="assets/images/slider4.jpg"
              className="w-100 d-block mx-auto"
              alt="Gallery Item"
            />{" "}
           
          </div>
          <div className="item">
            <img
                      src="assets/images/slider5.jpg"
              className="w-100 d-block mx-auto"
              alt="Gallery Item"
            />{" "}
           
          </div>
          <div className="item">
            <img
                 src="assets/images/slider1.jpg"
              className="w-100 d-block mx-auto"
              alt="Gallery Item"
            />{" "}
           
          </div>
          <div className="item">
            <img
                       src="assets/images/slider2.jpg"
              className="w-100 d-block mx-auto"
              alt="Gallery Item"
            />{" "}
           
          </div>
          <div className="item">
            <img
                     src="assets/images/slider1.jpg"
              className="w-100 d-block mx-auto"
              alt="Gallery Item"
            />{" "}
           
          </div>
        </OwlCarousel>

        <p className="d-block mx-auto text-center my-3">
          <a href="#" className="button btn btn-dark text-uppercase  px-5 my-4">
            Redeem
          </a>
        </p>
      </div>
    </section>
  );
};

export default SnsSl;
