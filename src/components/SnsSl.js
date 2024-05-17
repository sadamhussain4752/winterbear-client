import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.theme.green.css";
const SnsSl = () => {
  return (
    <section className="py-3" >
      <div className="corosil-snn container" >
        <div id="carouselExample" className="carousel slide d-block mx-auto">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="../assets/images/slider4.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="../assets/images/slider2.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="../assets/images/slider3.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

          <img src='../assets/images/real-border.PNG' alt='' className="real-border  w-100" />

        </div>
      </div>
    </section>
  );
};

export default SnsSl;
