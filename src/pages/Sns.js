import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SnsSl from "../components/SnsSl";


import "./SNS.css";

const SNS = () => {
  const backgroundImageStyle = {
    background: 'url("assets/images/loyality-home.png")',
    backgroundSize: "100% 100%",
    postion: "relative",
  };
  document.title = "SNS";
  document.getElementsByTagName("META")[2].content = "SNS";

  return (
    <>
      <Header />
      <div
        className="main g-0 p-0 mt-80"
        style={{
          background: 'url("assets/images/loyaltiy-bg.png")',
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
        }}
      >
        <SnsSl />

      

        <section className="section  px-3  px-md-5 mb-4">
          <div className="container-fluid px-md-5 bg-purple rounded-5 py-4">
            <div className="row">
              <div className=" theme-bg-text text-white mb-2 fs-1  text-white y-5 text-center rewards">
                Shop Now
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 ">
                <div className=" ">
                  <img
                    src="assets/images/about2.png"
                    className="w-100 d-block mx-auto px-3"
                    alt="Gallery Item"
                  />
                  <p className="fw-6 fw-bold text-white text-uppercase py-3 text-center">
                  BT21© TATA BABY SILICONE COASTER
                  </p>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className=" ">
                  <img
                    src="assets/images/about2.png"
                    className="w-100 d-block mx-auto px-3"
                    alt="Gallery Item"
                  />
                  <p className="fw-6 fw-bold text-white text-uppercase py-3 text-center">
                  BT21© CHIMMY BABY SILICONE COASTER
                  </p>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className=" ">
                  <img
                    src="assets/images/about2.png"
                    className="w-100 d-block mx-auto px-3"
                    alt="Gallery Item"
                  />
                  <p className="fw-6 fw-bold text-white text-uppercase py-3 text-center">
                  BT21© COOKY BABY SILICONE COASTER
                  </p>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className=" ">
                  <img
                    src="assets/images/about2.png"
                    className="w-100 d-block mx-auto px-3"
                    alt="Gallery Item"
                  />
                  <p className="fw-6 fw-bold text-white text-uppercase py-3 text-center">
                  BT21© TATA SOFT NECK PILLOW
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-3">
          <div className="container px-md-5 ">
            <div className="row">
              <div className="text-uppercase theme-bg-text  mb-2 fs-1   y-5 text-center rewards">
                similar products
              </div>
            </div>

          </div>
        </section>
        <section className="section  px-3  px-md-5 mb-5">
          <div className="container-fluid px-md-5 bg-purple rounded-5 py-4">

            <div className="row">
              <div className="col-md-3 ">
                <div className=" ">
                  <img
                    src="assets/images/about2.png"
                    className="w-100 d-block mx-auto px-3"
                    alt="Gallery Item"
                  />
                  <p className="fw-6 fw-bold text-white text-uppercase py-3 text-center">
                  BT21© CHIMMY SOFT NECK PILLOW
                  </p>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className=" ">
                  <img
                    src="assets/images/about2.png"
                    className="w-100 d-block mx-auto px-3"
                    alt="Gallery Item"
                  />
                  <p className="fw-6 fw-bold text-white text-uppercase py-3 text-center">
                  BT21© COOKY SOFT NECK PILLOW
                  </p>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className=" ">
                  <img
                    src="assets/images/about2.png"
                    className="w-100 d-block mx-auto px-3"
                    alt="Gallery Item"
                  />
                  <p className="fw-6 fw-bold text-white text-uppercase py-3 text-center">
                  BT21© RJ SOFT NECK PILLOW
                  </p>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className=" ">
                  <img
                    src="assets/images/about2.png"
                    className="w-100 d-block mx-auto px-3"
                    alt="Gallery Item"
                  />
                  <p className="fw-6 fw-bold text-white text-uppercase py-3 text-center">
                  BT21© TATA SILICONE MAGNET
                  </p>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className=" ">
                  <img
                    src="assets/images/about2.png"
                    className="w-100 d-block mx-auto px-3"
                    alt="Gallery Item"
                  />
                  <p className="fw-6 fw-bold text-white text-uppercase py-3 text-center">
                  BT21© CHIMMY SILICONE MAGNET
                  </p>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className=" ">
                  <img
                    src="assets/images/about2.png"
                    className="w-100 d-block mx-auto px-3"
                    alt="Gallery Item"
                  />
                  <p className="fw-6 fw-bold text-white text-uppercase py-3 text-center">
                  BT21© COOKY SILICONE MAGNET
                  </p>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className=" ">
                  <img
                    src="assets/images/about2.png"
                    className="w-100 d-block mx-auto px-3"
                    alt="Gallery Item"
                  />
                  <p className="fw-6 fw-bold text-white text-uppercase py-3 text-center">
                  BT21© CHIMMY SILICONE KEYCHAIN
                  </p>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className=" ">
                  <img
                    src="assets/images/about2.png"
                    className="w-100 d-block mx-auto px-3"
                    alt="Gallery Item"
                  />
                  <p className="fw-6 fw-bold text-white text-uppercase py-3 text-center">
                  BT21© MININI CAR DOOR GUARD ZENDPLUS
                  </p>
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

export default SNS;
