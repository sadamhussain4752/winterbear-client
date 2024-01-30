import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
const About = () => {
  const backgroundImageStyle = {
    background: 'url("assets/images/about-bg.png")',
    backgroundSize: 'cover',
  };
  document.title = "about";
  document.getElementsByTagName("META")[2].content = "about";
  return (
    <>
      <Header />
      <div
        className="breadcum mt-80"
        style={backgroundImageStyle}
      >
        <div className="about-breadcum-content d-md-block d-none " >
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
      </div>
      <section className="section ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="section-heading">
                <h3 className="theme-bg-text ">About us</h3>
              </div>
            </div>
            <div className="col-md-8 text-center">
              <span className="sub-heading">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
              </span>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="section-heading">
                <h3 className="theme-bg-text">Our Principles</h3>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-4 mb-4">
              <div className="image-container">
                <img
                  src="assets/images/about1-1.png"
                  class="img-fluid d-block mx-auto p-3"
                  alt="Your Image"
                />
                <div className="overlay">
                  <p className="fs-1 fw-bold">Excellence</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="image-container">
                <img
                  src="assets/images/about2-2.png"
                  class="img-fluid d-block mx-auto p-3"
                  alt="Your Image"
                />
                <div className="overlay">
                  <p className="fs-1 fw-bold">Innovation</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="image-container">
                <img
                  src="assets/images/about3.png"
                  class="img-fluid d-block mx-auto p-3"
                  alt="Your Image"
                />
                <div className="overlay">
                  <p className="fs-1 fw-bold">Integrity</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="image-container">
                <img
                  src="assets/images/about4.png"
                  class="img-fluid d-block mx-auto p-3"
                  alt="Your Image"
                />
                <div className="overlay">
                  <p className="fs-1 fw-bold">Collaboration</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="image-container">
                <img
                  src="assets/images/about5.png"
                  class="img-fluid d-block mx-auto p-3"
                  alt="Your Image"
                />
                <div className="overlay">
                  <p className="fs-1 fw-bold"> Customer value</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="image-container">
                <img
                  src="assets/images/about6.png"
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
