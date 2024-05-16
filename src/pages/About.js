import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
const About = () => {
  const backgroundImageStyle = {
    background: 'url("assets/images/about-bg.png")',
    backgroundSize: '100% 100%',

  };
  document.title = "about";
  document.getElementsByTagName("META")[2].content = "about";
  return (
    <>
      <Header />
      {/* <div
        className="breadcum mt-80"
        style={backgroundImageStyle}
      >
        <div className="about-breadcum-content d-md-block d-none">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <h3>Step into the K-pop Style Realm</h3>
              <h5>Your Ultimate Destination for Trendsetting Fashion</h5>
              <a href="#" className="button">
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <section className="py-5 mt-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="section-heading">
                <h3 className="theme-bg-text  ">About us</h3>
              </div>
            </div>
            <div className="col-md-8 text-center">
              <span className="sub-heading">
              Welcome to Winterbear, where we redefine shopping as our lifestyle.
Winterbear is India’s first character-based multi-category brand,
serving as the country’s largest hub for official licensed merchandise.
Since our launch with LINE FRIENDS and BT21 at VR Chennai,
we've expanded our offerings through robust partnerships,
showcasing a diverse portfolio of over 100+ international brands.
From iconic favourites like Mickey Mouse and The Smurfs to beloved
anime series such as Dragon Ball Z and Naruto, our collection
embodies a rich tapestry of timeless classics and contemporary favourites.


              </span>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <p>
              WINTERBEAR's extensive offerings extend beyond apparel to encompass
various categories, including stationery, home decor, fashion accessories,
plush toys, and consumer electronics. WINTERBEAR's commitment to
providing a varied and inclusive range of products ensures that our range
caters to a wide spectrum of interests and tastes, distinguishing us in
the realm of licensed merchandise and guaranteeing a perfect fit for
every customer.

              </p>
              
            </div>
            <div className="col-md-6 position-relative">
              <div className="about1 position-absolute">
                <img src="assets/images/about1.png" className="" />
              </div>
              <div className="about2 position-absolute">
                <img src="assets/images/about2.png" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="section-heading">
                <h3 className="theme-bg-text">Globally Curated</h3>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-4 mb-4">
              <div className="image-container">
                <img
                  src={require("../constant/images/about-1.png")}
                  class="img-fluid d-block mx-auto p-3"
                  alt="Your Image"
                />
                <div className="overlay">
                  <p className="fs-1 fw-bold">Uncompromising Quality</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="image-container">
                <img
                  src={require("../constant/images/about-2.png")}
                  class="img-fluid d-block mx-auto p-3"
                  alt="Your Image"
                />
                <div className="overlay">
                  <p className="fs-1 fw-bold">Seasonal Trendsetting</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="image-container">
                <img
                  src={require("../constant/images/about-3.png")}
                  class="img-fluid d-block mx-auto p-3"
                  alt="Your Image"
                />
                <div className="overlay">
                  <p className="fs-1 fw-bold">Authenticity Guaranteed
</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="image-container">
                <img
                  src={require("../constant/images/about-4.png")}
                  class="img-fluid d-block mx-auto p-3"
                  alt="Your Image"
                />
                <div className="overlay">
                  <p className="fs-1 fw-bold">Market Presence</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="image-container">
                <img
                  src={require("../constant/images/about-5.png")}
                  class="img-fluid d-block mx-auto p-3"
                  alt="Your Image"
                />
                <div className="overlay">
                  <p className="fs-1 fw-bold"> Brand Valor</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="image-container">
                <img
                  src={require("../constant/images/about-6.png")}
                  class="img-fluid d-block mx-auto p-3"
                  alt="Your Image"
                />
                <div className="overlay">
                  <p className="fs-1 fw-bold"> Care And Share</p>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </section>
      <Gallery />
      <Footer />
    </>
  );
};

export default About;
