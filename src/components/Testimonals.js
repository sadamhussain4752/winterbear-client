import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.theme.green.css"; // Import any additional theme if needed

const Testimonals = () => {
  return (
    <section className="py-5 px-md-5 px-3">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-9 col-12 d-flex align-items-center">
            <div className=" text-dark theme-bg-text mb-2">Testimonals</div>
          </div>
          <div className="col-md-3 col-12 text-end py-5 d-flex align-items-center">
            <p> <strong>  </strong>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half"></i> 7009 Comments
            </p>
          </div>
        </div>

        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          autoplay
          dots={false}
          autoplayTimeout={1800}
          smartSpeed={3000}
          responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            1000: {
              items: 3,
            },
          }}
        >
          <div className="item px-3">
            <div className="row">
              <div className="col-2">
                <p className="fs-1 fw-bold"> <i class="fa-solid fa-quote-left"></i></p>

              </div>
              <div className="col-8 mt-3">
                <div>
                  <p className=" mb-1 ">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>{" "}
                    <i class="fa-solid fa-star-half"></i>
                    <small>03/19/24 </small>{" "}
                  </p>
                  <p className="fw-bold fs-6 mb-1 lh-0">Love these patches! Especially when </p>
                  <p>
                    Love these patches! Especially when I feel a pimple about to
                    start I place one of these on and it speeds up the process
                    to help he... Read More
                  </p>
                  <p className="fw-bold"> <small>Natalia D.</small> </p>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>


      </div>
    </section>
  );
};

export default Testimonals;
