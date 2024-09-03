import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoyaltyList from "../components/LoyaltyList";
import Testimonals from "../components/Testimonals";
import "./Loyalty.css";
const Loyalty = () => {

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
        <div className="breadcum mt-80 background-image-style">
          <div className="award">
            <div className="row ">
              <div className="offset-md-2 my-md-5 awards">
                <div className="d-none">
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
                <img
                  src="assets/images/loyalty/dis-1.png"
                  className="w-75 d-block mx-auto"
                  alt="Gallery Item"
                />

              </div>
              <div className="col-md-4 text-center mb-3 myrib">
                <img
                  src="assets/images/loyalty/dis-2.png"
                  className="w-75 d-block mx-auto"
                  alt="Gallery Item"
                />
                {/* <p className="text-center fs-4  mb-0 point">100 Points</p> */}
              </div>
              <div className="col-md-4 text-center mb-3 myrib">
                {/* <h1 class="ribbon">
                  <strong class="ribbon-content">
                    <p className="text-center fs-4 fw-bold mb-0">
                      {" "}
                      ₹ 650.00 off
                    </p>
                  </strong>
                </h1> */}
                <img
                  src="assets/images/loyalty/dis-3.png"
                  className="w-75 d-block mx-auto"
                  alt="Gallery Item"
                />
                {/* <p className="text-center fs-4  mb-0 point">100 Points</p> */}
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

        <section className="section py-5" style={{ background: "#bae6f7" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 mb-3">
                <div className="section-heading">
                  <h3 className="theme-bg-text mb-2">How It Works</h3>
                </div>
              </div>
              <div className="col-md-4 text-center px-3 mb-4">
                  <img
                    src="assets/images/loyalty/star1.png"
                    className="w-50 d-block mx-auto star"
                  />
                <p className="fs-2 fw-bold mb-0 text-dark">Sign Up</p>
                <p className="lh-md fs-5 text-primary-emphasis">
                  Create an account
                </p>
              </div>
              <div className="col-md-4 text-center mb-4">
               
                  <img
                    src="assets/images/loyalty/star2.png"
                    className="w-50 d-block mx-auto star"
                  />
                <p className="fs-2 fw-bold mb-0 text-dark">Earn Points</p>
                <p className="lh-md fs-5 text-primary-emphasis">
                  Earn Points every time you shop
                </p>
              </div>
              <div className="col-md-4 text-center mb-4">
               
                  <img
                    src="assets/images/loyalty/star3.png"
                    className="w-50 d-block mx-auto star"
                  />
                <p className="fs-2 fw-bold mb-0 text-dark">Redeem Points</p>
                <p className="lh-md fs-5 text-primary-emphasis">
                  Redeem Points to avail freebies
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section py-5">
          <div className="container px-lg-5">
            <div className="row justify-content-center">
              <div className="col-md-12 mb-3">
                <div className="section-heading">
                  <h3 className="theme-bg-text mb-2">Ways to Earn</h3>
                </div>
              </div>
              <div className="col-md-3 text-center bg-white mb-3 ">
                <div className=" earn">
                  <img
                    src="assets/images/loyalty/ern1.png"
                    className="img-fluid star mb-3"
                  />{" "}

                </div>
              </div>
              <div className="col-md-3 text-center bg-white mb-3 ">
                <div className=" earn">
                  <img
                    src="assets/images/loyalty/ern2.png"
                    className="img-fluid star mb-3"
                  />{" "}

                </div>
              </div>
              <div className="col-md-3 text-center bg-white mb-3 ">
                <div className=" earn">
                  <img
                    src="assets/images/loyalty/ern3.png"
                    className="img-fluid star mb-3"
                  />{" "}

                </div>
              </div>
              <div className="col-md-3 text-center bg-white mb-3 ">
                <div className=" earn">
                  <img
                    src="assets/images/loyalty/ern4.png"
                    className="img-fluid star mb-3"
                  />

                </div>
              </div>

              <div className="col-md-3 text-center bg-white mb-3">
                <div className=" earn">
                  <img
                    src="assets/images/loyalty/ern5.png"
                    className="img-fluid star mb-3"
                  />{" "}

                </div>
              </div>
              <div className="col-md-3 text-center bg-white mb-3">
                <div className=" earn">
                  <img
                    src="assets/images/loyalty/ern6.png"
                    className="img-fluid star mb-3"
                  />{" "}

                </div>
              </div>
              <div className="col-md-3 text-center bg-white mb-3">
                <div className=" earn">
                  <img
                    src="assets/images/loyalty/ern7.png"
                    className="img-fluid star mb-3"
                  />{" "}

                </div>
              </div>
              <div className="col-md-3 text-center bg-white mb-3">
                <div className=" earn">

                  <img
                    src="assets/images/loyalty/ern8.png"
                    className="img-fluid star mb-3"
                  />{" "}


                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section py-5 px-md-5 px-3">
          <div
            className="container-fluid rounded-5 py-5"
            style={{
              background: "#bae6f7",
              borderRadius:"20px"
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
                  <div className="  py-3 mx-2 bg-white mb-3 cardd">
                    <img
                      src="assets/images/t1.png"
                      className="img-fluid star2 mb-3 px-3"
                    />
                    <p className="fs-3 fw-bold t-yello mb-0 text-center text-uppercase">
                      Snow Sprint
                    </p>

                    <ul className="lh mt-3 fs-5 text-dark ps-4 mx-3 ul-vip">
                      <li> <i class="fa-solid fa-star"></i> Basic Member Ship </li>
                      <li> <i class="fa-solid fa-star"></i> Seasonal Offer </li>
                      <li> <i class="fa-solid fa-star"></i> Gereral Coupon </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 px-3  ">
                  <div className="  py-3 mx-2 bg-white mb-3 cardd">
                    <img
                      src="assets/images/t2.png"
                      className="img-fluid star2 mb-3 px-3"
                    />
                    <p className="fs-3 fw-bold t-pink mb-0 text-center text-uppercase">
                      Snow Fairy
                    </p>

                    <ul className="lh mt-3 fs-5 text-dark ps-4 mx-3 ul-vip">
                      <li> <i class="fa-solid fa-star"></i> Basic Member Ship </li>
                      <li> <i class="fa-solid fa-star"></i> Seasonal Offer </li>
                      <li> <i class="fa-solid fa-star"></i> Gereral Coupon </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 px-3  ">
                  <div className="  py-3 mx-2 bg-white mb-3 cardd">
                    <img
                      src="assets/images/t3.png"
                      className="img-fluid star2 mb-3 px-3"
                    />
                    <p className="fs-3 fw-bold t-blue mb-0 text-center text-uppercase">
                      Snow Angal
                    </p>

                    <ul className="lh mt-3 fs-5 text-dark ps-4 mx-3 ul-vip">
                      <li> <i class="fa-solid fa-star"></i> Basic Member Ship </li>
                      <li> <i class="fa-solid fa-star"></i> Seasonal Offer </li>
                      <li> <i class="fa-solid fa-star"></i> Gereral Coupon </li>
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
