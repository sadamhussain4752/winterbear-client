import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoyaltyList from "../components/LoyaltyList";
import Testimonals from "../components/Testimonals";
import "./Loyalty.css";
const Loyalty = () => {
  const backgroundImageStyle = {
    background: '#9B91C4',
    backgroundSize: "100% 100%",
    postion: "relative",
  };
  document.title = "Awards";
  document.getElementsByTagName("META")[2].content = "Awards";
  return (
    <>
      <Header />
      <div
        className="loyalty-main g-0 p-0"
        style={{
          background: 'url("assets/images/loyaltiy-bg.png")',
        
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
          height: "100%",
        }}
      >
        <div className="breadcum mt-80" style={backgroundImageStyle}>
          <div className="award">
            <div className="row ">
              <div className="offset-md-2 my-md-5 awards">
                <div>
                  <h3 className="text-white fs-1 fw-bold">
                    Join Our Community{" "}
                  </h3>
                  <h5 className="text-dark mb-3 lh-sm">
                    Become a member and earn points & exclusive rewards every
                    time you shop.{" "}
                  </h5>
                  <p className="my-4">
                    <a href="#" className=" btn btn-light">
                      Join Now
                    </a>
                    <a href="#" className=" btn btn-dark mx-3">
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LoyaltyList />
        <section className="section ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 mb-3">
                <div className="section-heading">
                  <h3 className="theme-bg-text mb-2">Redeem For Discounts </h3>
                  <p>Redeem your coupon and paste your code at checkout. </p>
                </div>
              </div>
              <div className="col-md-4 text-center mb-3 myrib">
                <h1 class="ribbon">
                  <strong class="ribbon-content">
                    <p className="text-center fs-4 fw-bold mb-0">
                      {" "}
                      ₹ 650.00 off
                    </p>
                  </strong>
                </h1>
                <p className="text-center fs-4  mb-0 point">100 Points</p>
              </div>
              <div className="col-md-4 text-center mb-3 myrib">
                <h1 class="ribbon">
                  <strong class="ribbon-content">
                    <p className="text-center fs-4 fw-bold mb-0">
                      {" "}
                      ₹ 650.00 off
                    </p>
                  </strong>
                </h1>
                <p className="text-center fs-4  mb-0 point">100 Points</p>
              </div>
              <div className="col-md-4 text-center mb-3 myrib">
                <h1 class="ribbon">
                  <strong class="ribbon-content">
                    <p className="text-center fs-4 fw-bold mb-0">
                      {" "}
                      ₹ 650.00 off
                    </p>
                  </strong>
                </h1>
                <p className="text-center fs-4  mb-0 point">100 Points</p>
              </div>
            </div>

            <p className="d-block mx-auto text-center my-3">
              <a
                href="#"
                className="button btn btn-dark text-uppercase px-5 my-4 fs-4 text-white rounded-5"
              >
                Redeem
              </a>
            </p>
          </div>
        </section>

        <section className="section py-5" style={{ background: "#d1c7f0" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 mb-3">
                <div className="section-heading">
                  <h3 className="theme-bg-text mb-2">How It Works</h3>
                </div>
              </div>
              <div className="col-md-4 text-center px-3 mb-4">
                <p className="fs-1 fw-semibold mb-0">
                  <img
                    src="assets/images/star1.png"
                    className="img-fluid star"
                  />{" "}
                </p>
                <p className="fs-2 fw-bold mb-0 text-dark">SIGN UP</p>
                <p className="lh-md fs-5 text-primary-emphasis">
                  Create an account and get 20 points.
                </p>
              </div>
              <div className="col-md-4 text-center mb-4">
                <p className="fs-1 fw-semibold mb-0">
                  {" "}
                  <img
                    src="assets/images/star2.png"
                    className="img-fluid star"
                  />{" "}
                </p>
                <p className="fs-2 fw-bold mb-0 text-dark">EARN POINTS</p>
                <p className="lh-md fs-5 text-primary-emphasis">
                  Earn points every time you shop.
                </p>
              </div>
              <div className="col-md-4 text-center mb-4">
                <p className="fs-1 fw-semibold mb-0">
                  {" "}
                  <img
                    src="assets/images/star3.png"
                    className="img-fluid star"
                  />{" "}
                </p>
                <p className="fs-2 fw-bold mb-0 text-dark">REDEEM POINTS</p>
                <p className="lh-md fs-5 text-primary-emphasis">
                  Redeem points for exclusive discounts.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 mb-3">
                <div className="section-heading">
                  <h3 className="theme-bg-text mb-2">Ways to Earn</h3>
                </div>
              </div>
              <div className="col-md-3 text-center mb-3 ">
                <div className="border  px-3 py-5 earn">
                  <p className="fs-1 fw-semibold mb-0">
                    <img
                      src="assets/images/w1.png"
                      className="img-fluid star mb-3"
                    />{" "}
                  </p>
                  <p className="fs-2 mb-0 fw-bold">$1=1 POINTS</p>
                  <p className="lh-md fs-5 text-dark">Make a Purhcase</p>
                </div>
              </div>
              <div className="col-md-3 text-center mb-3 ">
                <div className="border  px-3 py-5 earn">
                  <p className="fs-1 fw-semibold mb-0">
                    <img
                      src="assets/images/w2.png"
                      className="img-fluid star mb-3"
                    />{" "}
                  </p>
                  <p className="fs-2 mb-0 fw-bold">20 POINTS</p>
                  <p className="lh-md fs-5 text-dark">Create a Account</p>
                </div>
              </div>
              <div className="col-md-3 text-center mb-3 ">
                <div className="border  px-3 py-5 earn">
                  <p className="fs-1 fw-semibold mb-0">
                    <img
                      src="assets/images/w3.png"
                      className="img-fluid star mb-3"
                    />{" "}
                  </p>
                  <p className="fs-2 mb-0 fw-bold">250 POINTS</p>
                  <p className="lh-md fs-5 text-dark">Birthday Awards</p>
                </div>
              </div>
              <div className="col-md-3 text-center mb-3 ">
                <div className="border  px-3 py-5 earn">
                  <p className="fs-1 fw-semibold mb-0">
                    <img
                      src="assets/images/w4.png"
                      className="img-fluid star mb-3"
                    />
                  </p>
                  <p className="fs-2 mb-0 fw-bold">10 POINTS</p>
                  <p className="lh-md fs-5 text-dark">Leave a review</p>
                </div>
              </div>

              <div className="col-md-3 text-center mb-3">
                <div className="border  px-3 py-5 earn">
                  <p className="fs-1 fw-semibold mb-0">
                    <img
                      src="assets/images/w5.png"
                      className="img-fluid star mb-3"
                    />{" "}
                  </p>
                  <p className="fs-2 mb-0 fw-bold">5 POINTS</p>
                  <p className="lh-md fs-5 text-dark">Add a Photo in review</p>
                </div>
              </div>
              <div className="col-md-3 text-center mb-3">
                <div className="border  px-3 py-5 earn">
                  <p className="fs-1 fw-semibold mb-0">
                    <img
                      src="assets/images/w6.png"
                      className="img-fluid star mb-3"
                    />{" "}
                  </p>
                  <p className="fs-2 mb-0 fw-bold">5 POINTS</p>
                  <p className="lh-md fs-5 text-dark">Add a video in review</p>
                </div>
              </div>
              <div className="col-md-3 text-center mb-3">
                <div className="border  px-3 py-5 earn">
                  <p className="fs-1 fw-semibold mb-0">
                    <img
                      src="assets/images/w7.png"
                      className="img-fluid star mb-3"
                    />{" "}
                  </p>
                  <p className="fs-2 mb-0 fw-bold">10 POINTS</p>
                  <p className="lh-md fs-5 text-dark">Follow on us Tiktok</p>
                </div>
              </div>
              <div className="col-md-3 text-center mb-3">
                <div className="border  px-3 py-5 earn">
                  <p className="fs-1 fw-semibold mb-0">
                    <img
                      src="assets/images/w8.png"
                      className="img-fluid star mb-3"
                    />{" "}
                  </p>
                  <p className="fs-2 mb-0 fw-bold">10 POINTS</p>
                  <p className="lh-md fs-5 text-dark">Follow on us Instagram</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section py-5 px-md-5 px-3">
          <div
            className="container-fluid rounded-5 py-5"
            style={{
              background: "#4f3c97",
            }}
          >
            <div className="row justify-content-center py-5">
              <div className="col-md-12 mb-3">
                <div className="section-heading">
                  <h3 className="theme-bg-text text-white mb-2">VIP Program </h3>
                </div>
              </div>
              <div className="row px-md-5 ">
                <div className="col-md-4 px-3  ">
                  <div className="  py-3 mx-2 bg-white mb-3">
                    <img
                      src="assets/images/t1.png"
                      className="img-fluid star2 mb-3 px-3"
                    />
                    <p className="fs-1 fw-bold t-yello mb-0 text-center text-uppercase">
                      Snow Sprint
                    </p>

                    <ul className="lh mt-3 fs-5 text-dark ps-5 mx-3 ">
                      <li>Basic Member Ship </li>
                      <li>Seasonal Offer </li>
                      <li>Gereral Coupon </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 px-3  ">
                  <div className="  py-3 mx-2 bg-white mb-3">
                    <img
                      src="assets/images/t2.png"
                      className="img-fluid star2 mb-3 px-3"
                    />
                    <p className="fs-1 fw-bold t-pink mb-0 text-center text-uppercase">
                      Snow Fairy
                    </p>

                    <ul className="lh mt-3 fs-5 text-dark ps-5 mx-3 ">
                      <li>Basic Member Ship </li>
                      <li>Seasonal Offer </li>
                      <li>Gereral Coupon </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 px-3  ">
                  <div className="  py-3 mx-2 bg-white mb-3">
                    <img
                      src="assets/images/t3.png"
                      className="img-fluid star2 mb-3 px-3"
                    />
                    <p className="fs-1 fw-bold t-blue mb-0 text-center text-uppercase">
                      Snow Angal
                    </p>

                    <ul className="lh mt-3 fs-5 text-dark ps-5 mx-3 ">
                      <li>Basic Member Ship </li>
                      <li>Seasonal Offer </li>
                      <li>Gereral Coupon </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="row">
            <div className="section-heading mb-0">
                  <h3 className="theme-bg-text mb-2">Follow us on </h3>
                </div>
            
            </div>
            <div className="row text-center mt-3 mb-5">
              <div className="">
                <div class="d-inline p-2 t-purple fs-1 mx-3">
                  <i className="fab px-1 fa-facebook" />
                </div>
                <div class="d-inline p-2 t-purple fs-1 mx-3">
                <i className="fab px-1 fa-linkedin-in" />
                </div>
                <div class="d-inline p-2 t-purple fs-1 mx-3">
                <i className="fab px-1 fa-twitter" />
                </div>
                <div class="d-inline p-2 t-purple fs-1 mx-3">
                <i className="fab px-1 fa-instagram" />
                </div>
                

               
               
              
               
               
              </div>
            </div>
          </div>
        </section>
      </div>
  

      <Footer />
    </>
  );
};

export default Loyalty;
