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
      <div
        className="breadcum mt-80"
        style={backgroundImageStyle}
      >
        <div className="about-breadcum-content d-md-block d-none">
          <div className="row justify-content-center">
            {/* <div className="col-md-12">
              <h3>Step into the K-pop Style Realm</h3>
              <h5>Your Ultimate Destination for Trendsetting Fashion</h5>
              <a href="#" className="button">
                Shop now
              </a>
            </div> */}
          </div>
        </div>
      </div>
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="section-heading">
                <h3 className="theme-bg-text ">About us</h3>
              </div>
            </div>
            <div className="col-md-8 text-center">
              <span className="sub-heading">
              At WINTERBEAR, we’re not just a brand – we’re a lifestyle, committed to bringing the world’s finest character-inspired products to your doorstep. Our mission is simple: prioritize accessibility, quality, and uniqueness in everything we offer.

              </span>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <p>
              We’re thrilled to announce our exciting collaboration with LINE FRIENDS, giving rise to PLAY LINE FRIENDS pop-up stores across India. These stores feature an extensive collection of official BT21 and LINE FRIENDS products, along with exclusive collections like The Smurfs, Disney, Marvel, and Vizmedia merchandise. Our flagship store at VR Mall Chennai, Shop No. 65, Ground Floor, has been enchanting customers, and the excitement continues at PHOENIX MARKET CITY, LG-28 in Mumbai. Immerse yourself in the vibrancy of our space at PHOENIX MARKET CITY, GP-9/10, Lower Ground Floor, Viman Nagar, Pune. But that’s not all – our journey is far from over. We’re gearing up for the grand opening of our newest store in Bengaluru, located at Ground Floor, No. 1461/1784, Venlak Arcade, 19th Main Rd, Vanganahalli, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102. And this is just the beginning; more stores are set to blossom across India.
              </p>
              <p>
              For the latest updates from WINTERBEAR, follow us on our social media channels. Your adventure into the world of character-inspired lifestyle begins here and doesn’t stop – it only gets more exciting! WINTERBEAR – One-Stop Destination for All Merchandise


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
      <section className="py-5">
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
                  src={require("../constant/images/about-1.png")}
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
                  src={require("../constant/images/about-2.png")}
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
                  src={require("../constant/images/about-3.png")}
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
                  src={require("../constant/images/about-4.png")}
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
                  src={require("../constant/images/about-5.png")}
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
