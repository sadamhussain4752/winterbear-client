import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AwardsList from "../components/AwardsList";
import Testimonals from "../components/Testimonals";
import "./Awards.css";
const Awards = () => {
  const backgroundImageStyle = {
    background: 'url("assets/images/bear.jpeg")',
    backgroundSize: "cover",
    postion: "relative",
  };
  document.title = "Awards";
  document.getElementsByTagName("META")[2].content = "Awards";
  return (
    <>
      <Header />
      <div className="breadcum mt-80" style={backgroundImageStyle}>
        <div className="award ">
          <div className="row ">
            <div className="offset-md-2 my-md-5 awards">
              <div>
                <h3 className="text-dark fs-1 fw-bold">Join Our Community </h3>
                <h5 className="text-dark mb-3 lh-sm">
                  Become a member and earn points & exclusive rewards every time
                  you shop.{" "}
                </h5>
                <p className="my-4">
                  <a href="#" className="button btn btn-dark">
                    Join Now
                  </a>
                  <a href="#" className="button btn btn-white mx-3">
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AwardsList />
      <section className="section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 mb-3">
              <div className="section-heading">
                <h3 className="theme-bg-text mb-2">Redeem For Discounts </h3>
                <p>Redeem your coupon and paste your code at checkout. </p>
              </div>
            </div>
            <div className="col-md-4 text-center mb-3">
              <p className="fs-1 fw-semibold mb-0">₹10 Off </p>
              <p className="text-danger">500 POINTS</p>
            </div>
            <div className="col-md-4 text-center mb-3">
              <p className="fs-1 fw-semibold mb-0">₹30 Off </p>
              <p className="text-danger">100 POINTS</p>
            </div>
            <div className="col-md-4 text-center mb-3">
              <p className="fs-1 fw-semibold mb-0">₹100 Off </p>
              <p className="text-danger">2500 POINTS</p>
            </div>
          </div>

          <p className="d-block mx-auto text-center my-3">
            <a href="#" className="button btn btn-dark text-uppercase px-5 my-4">
              Redeem
            </a>
          </p>
        </div>
      </section>

      <section className="section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 mb-3">
              <div className="section-heading">
                <h3 className="theme-bg-text mb-2">How It Works</h3>
              </div>
            </div>
            <div className="col-md-4 text-center px-3 mb-3">
              <p className="fs-1 fw-semibold mb-0">01 </p>
              <p className="fs-2 fw-bold mb-0">SIGN UP</p>
              <p className="lh-md fs-5 text-danger">
                Create an account and get 20 points.
              </p>
            </div>
            <div className="col-md-4 text-center mb-3">
              <p className="fs-1 fw-semibold mb-0">02 </p>
              <p className="fs-2 fw-bold mb-0">EARN POINTS</p>
              <p className="lh-md fs-5 text-danger">
                Earn points every time you shop.
              </p>
            </div>
            <div className="col-md-4 text-center mb-3">
              <p className="fs-1 fw-semibold mb-0">03 </p>
              <p className="fs-2 fw-bold mb-0">REDEEM POINTS</p>
              <p className="lh-md fs-5 text-danger">
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
                <p className="fs-1 fw-semibold mb-0">01 </p>
                <p className="fs-2  mb-0">₹1=1 POINTS</p>
                <p className="lh-md fs-5 text-danger">Make a Purhcase</p>
              </div>
            </div>
            <div className="col-md-3 text-center mb-3 ">
              <div className="border  px-3 py-5 earn">
                <p className="fs-1 fw-semibold mb-0">02 </p>
                <p className="fs-2  mb-0">20 POINTS</p>
                <p className="lh-md fs-5 text-danger">Create a Account</p>
              </div>
            </div>
            <div className="col-md-3 text-center mb-3 ">
              <div className="border  px-3 py-5 earn">
                <p className="fs-1 fw-semibold mb-0">03 </p>
                <p className="fs-2  mb-0">250 POINTS</p>
                <p className="lh-md fs-5 text-danger">Birthday Awards</p>
              </div>
            </div>
            <div className="col-md-3 text-center mb-3 ">
              <div className="border  px-3 py-5 earn">
                <p className="fs-1 fw-semibold mb-0">04 </p>
                <p className="fs-2  mb-0">10 POINTS</p>
                <p className="lh-md fs-5 text-danger">Leave a review</p>
              </div>
            </div>

            <div className="col-md-3 text-center mb-3">
              <div className="border  px-3 py-5 earn">
                <p className="fs-1 fw-semibold mb-0">05 </p>
                <p className="fs-2  mb-0">5 POINTS</p>
                <p className="lh-md fs-5 text-danger">Add a Photo in review</p>
              </div>
            </div>
            <div className="col-md-3 text-center mb-3">
              <div className="border  px-3 py-5 earn">
                <p className="fs-1 fw-semibold mb-0">06 </p>
                <p className="fs-2  mb-0">5 POINTS</p>
                <p className="lh-md fs-5 text-danger">Add a video in review</p>
              </div>
            </div>
            <div className="col-md-3 text-center mb-3">
              <div className="border  px-3 py-5 earn">
                <p className="fs-1 fw-semibold mb-0">07 </p>
                <p className="fs-2  mb-0">10 POINTS</p>
                <p className="lh-md fs-5 text-danger">Follow on us Tiktok</p>
              </div>
            </div>
            <div className="col-md-3 text-center mb-3">
              <div className="border  px-3 py-5 earn">
                <p className="fs-1 fw-semibold mb-0">08 </p>
                <p className="fs-2  mb-0">10 POINTS</p>
                <p className="lh-md fs-5 text-danger">Follow on us Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 mb-3">
              <div className="section-heading">
                <h3 className="theme-bg-text mb-2">VIP Program </h3>
              </div>
            </div>
            <div className="col-md-4   mb-3">
              <div className="border  px-3 py-3 ">
                <p className="fs-1 fw-bold text-danger mb-0 text-center">
                  PINK{" "}
                </p>
                <p className="fs-4 fw-bold text-center ">Free</p>
                <ul className="lh mt-3 fs-6 text-dark border-top py-3">
                  <li>Seasonal Savings </li>
                  <li>Seasonal Savings </li>
                  <li>Seasonal Savings </li>
                  <li>Seasonal Savings </li>
                  <li>Seasonal Savings </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4  mb-3 ">
              <div className="border  px-3 py-3 ">
                <p className="fs-1 fw-bold text-danger mb-0 text-center">
                  PINK{" "}
                </p>
                <p className="fs-4 fw-bold text-center ">Free</p>
                <ul className="lh fs-6 text-dark border-top py-3">
                  <li>Seasonal Savings </li>
                  <li>Seasonal Savings </li>
                  <li>Seasonal Savings </li>
                  <li>Seasonal Savings </li>
                  <li>Seasonal Savings </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="border  px-3 py-3 ">
                <p className="fs-1 fw-bold text-danger mb-0 text-center">
                  PINK{" "}
                </p>
                <p className="fs-4 fw-bold text-center ">Free</p>
                <ul className="lh fs-6 text-dark border-top py-3">
                  <li>Seasonal Savings </li>
                  <li>Seasonal Savings </li>
                  <li>Seasonal Savings </li>
                  <li>Seasonal Savings </li>
                  <li>Seasonal Savings </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" mb-3"
        style={{
          background: 'url("assets/images/bear.jpeg")',
          backgroundSize: "cover",
          height:"380px",
          padding:"60px 10px"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="d-block mx-auto col-md-7 bg-white py-4 px-4">
              <h5 className="text-dark text-center ">Refer a Friend </h5>
              <h5 className="text-dark text-center fs-3 fw-bold">Give ₹5, Get ₹5 </h5>
              <p className="text-dark text-center fs-6 fw-bold">Refer a friend and get ₹5 for you and a friend when they make a purchase. </p>
            <form method="" >
                  <input type="text" placeholder="Your Email Address*" className="px-3 mb-3 w-75 d-block mx-auto my-5" />
                      
              <button className="btn btn-out border-dark border rounded-2 mx-auto d-block">Submit</button>
                </form>
            </div>
          </div>
        </div>
      </section>

     
      <Testimonals />

      <Footer />
    </>
  );
};

export default Awards;
