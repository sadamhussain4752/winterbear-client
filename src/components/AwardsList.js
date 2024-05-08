import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.theme.green.css"; // Import any additional theme if needed

const AwardsList = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="heading">Awards</div>

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
              items: 4,
            },
          }}
        >
          <div className="item">
            <img
              src="assets/images/gallery.png"
              className="w-100 d-block mx-auto"
              alt="Gallery Item"
            />
            <p className="fw-bold fs-5 text-primary text-center lh-sm mb-0 mt-3">
              {" "}
              Heimish All Clean{" "}
            </p>
            <p className="fw-bold fs-4 text-danger text-center"> 150 points</p>
          </div>
          <div className="item">
            <img
              src="assets/images/gallery1.png"
              className="w-100 d-block mx-auto"
              alt="Gallery Item"
            />
            <p className="fw-bold fs-5 text-primary text-center lh-sm mb-0 mt-3">
              {" "}
              Heimish All Clean{" "}
            </p>
            <p className="fw-bold fs-4 text-danger text-center"> 150 points</p>
          </div>
          <div className="item">
            <img
              src="assets/images/gallery2.png"
              className="w-100 d-block mx-auto"
              alt="Gallery Item"
            />{" "}
            <p className="fw-bold fs-5 text-primary text-center lh-sm mb-0 mt-3">
              {" "}
              Heimish All Clean{" "}
            </p>
            <p className="fw-bold fs-4 text-danger text-center"> 150 points</p>
          </div>
          <div className="item">
            <img
              src="assets/images/gallery3.png"
              className="w-100 d-block mx-auto"
              alt="Gallery Item"
            />{" "}
            <p className="fw-bold fs-5 text-primary text-center lh-sm mb-0 mt-3">
              {" "}
              Heimish All Clean{" "}
            </p>
            <p className="fw-bold fs-4 text-danger text-center"> 150 points</p>
          </div>
          <div className="item">
            <img
              src="assets/images/gallery.png"
              className="w-100 d-block mx-auto"
              alt="Gallery Item"
            />{" "}
            <p className="fw-bold fs-5 text-primary text-center lh-sm mb-0 mt-3">
              {" "}
              Heimish All Clean{" "}
            </p>
            <p className="fw-bold fs-4 text-danger text-center"> 150 points</p>
          </div>
          <div className="item">
            <img
              src="assets/images/gallery1.png"
              className="w-100 d-block mx-auto"
              alt="Gallery Item"
            />{" "}
            <p className="fw-bold fs-5 text-primary text-center lh-sm mb-0 mt-3">
              {" "}
              Heimish All Clean{" "}
            </p>
            <p className="fw-bold fs-4 text-danger text-center"> 150 points</p>
          </div>
          <div className="item">
            <img
              src="assets/images/gallery2.png"
              className="w-100 d-block mx-auto"
              alt="Gallery Item"
            />{" "}
            <p className="fw-bold fs-5 text-primary text-center lh-sm mb-0 mt-3">
              {" "}
              Heimish All Clean{" "}
            </p>
            <p className="fw-bold fs-4 text-danger text-center"> 150 points</p>
          </div>
          <div className="item">
            <img
              src="assets/images/gallery3.png"
              className="w-100 d-block mx-auto"
              alt="Gallery Item"
            />{" "}
            <p className="fw-bold fs-5 text-primary text-center lh-sm mb-0 mt-3">
              {" "}
              Heimish All Clean{" "}
            </p>
            <p className="fw-bold fs-4 text-danger text-center"> 150 points</p>
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

export default AwardsList;
