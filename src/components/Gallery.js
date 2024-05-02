import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.theme.green.css"; // Import any additional theme if needed

const GallerySection = () => {
  return (
    <section className="py-5">
      <div className="container-fluid">
        <div className="heading">Our Gallery</div>

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
              items: 5,
            },
          }}
        >
          <div className="item">
            <img
              src="assets/images/gallery.png"
              className="gal-img d-block mx-auto"
              alt="Gallery Item"
            />
          </div>
          <div className="item">
            <img
              src="assets/images/gallery1.png"
              className="gal-img d-block mx-auto"
              alt="Gallery Item"
            />
          </div>
          <div className="item">
            <img
              src="assets/images/gallery2.png"
              className="gal-img d-block mx-auto"
              alt="Gallery Item"
            />
          </div>
          <div className="item">
            <img
              src="assets/images/gallery3.png"
              className="gal-img d-block mx-auto"
              alt="Gallery Item"
            />
          </div>
          <div className="item">
            <img
              src="assets/images/gallery.png"
              className="gal-img d-block mx-auto"
              alt="Gallery Item"
            />
          </div>
          <div className="item">
            <img
              src="assets/images/gallery1.png"
              className="gal-img d-block mx-auto"
              alt="Gallery Item"
            />
          </div>
          <div className="item">
            <img
              src="assets/images/gallery2.png"
              className="gal-img d-block mx-auto"
              alt="Gallery Item"
            />
          </div>
          <div className="item">
            <img
              src="assets/images/gallery3.png"
              className="gal-img d-block mx-auto"
              alt="Gallery Item"
            />
          </div>
        </OwlCarousel>

        {/* Additional gallery items can be added here */}
      </div>
    </section>
  );
};

export default GallerySection;
