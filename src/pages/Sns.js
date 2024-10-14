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
                    src="https://winterbear.in/wp-content/uploads/2023/01/coaster_tata_01.webp"
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
                    src="https://winterbear.in/wp-content/uploads/2023/01/coaster_chimmy_01.webp"
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
                    src="	https://winterbear.in/wp-content/uploads/2023/01/coaster_cooky_01.webp"
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
                    src="https://winterbear.in/wp-content/uploads/2023/01/magnet_tata_01.webp"
                    className="w-100 d-block mx-auto px-3"
                    alt="Gallery Item"
                  />
                  <p className="fw-6 fw-bold text-white text-uppercase py-3 text-center">
                    BT21© TATA SILICONE MAGNET
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
                    src="https://winterbear.in/wp-content/uploads/2023/01/baby_silicon_keyring_chimmy_01.webp"
                    className="w-100 d-block mx-auto px-3"
                    alt="Gallery Item"
                  />
                  <p className="fw-6 fw-bold text-white text-uppercase py-3 text-center">
                    BT21© CHIMMY SILICONE
                  </p>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className=" ">
                  <img
                    src="https://winterbear.in/wp-content/uploads/2023/01/bt21_minini_car_door_guard_01.webp"
                    className="w-100 d-block mx-auto px-3"
                    alt="Gallery Item"
                  />
                  <p className="fw-6 fw-bold text-white text-uppercase py-3 text-center">
                    BT21© MININI CAR DOOR
                  </p>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className=" ">
                  <img
                    src="https://winterbear.in/wp-content/uploads/2023/01/BT21_brawl_stars_keyring_tata_01.webp"
                    className="w-100 d-block mx-auto px-3"
                    alt="Gallery Item"
                  />
                  <p className="fw-6 fw-bold text-white text-uppercase py-3 text-center">

                    BRAWL STARS X BT21© EDGAR
                  </p>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className=" ">
                  <img
                    src="https://winterbear.in/wp-content/uploads/2023/01/magnet_tata_01.webp"
                    className="w-100 d-block mx-auto px-3"
                    alt="Gallery Item"
                  />
                  <p className="fw-6 fw-bold text-white text-uppercase py-3 text-center">
                    BT21© TATA SILICONE MAG
                  </p>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className=" ">
                  <img
                    src="https://winterbear.in/wp-content/uploads/2023/01/BT21_brawl_stars_keyring_cooky_01.webp"
                    className="w-100 d-block mx-auto px-3"
                    alt="Gallery Item"
                  />
                  <p className="fw-6 fw-bold text-white text-uppercase py-3 text-center">
                    BRAWL STARS X BT21
                  </p>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className=" ">
                  <img
                    src="https://winterbear.in/wp-content/uploads/2023/01/BT21_brawl_stars_keyring_chimmy_01.webp"
                    className="w-100 d-block mx-auto px-3"
                    alt="Gallery Item"
                  />
                  <p className="fw-6 fw-bold text-white text-uppercase py-3 text-center">
                    BRAWL STARS X BT21©
                  </p>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className=" ">
                  <img
                    src="	https://winterbear.in/wp-content/uploads/2023/01/BT21_brawl_stars_keyring_RJ_01.webp"
                    className="w-100 d-block mx-auto px-3"
                    alt="Gallery Item"
                  />
                  <p className="fw-6 fw-bold text-white text-uppercase py-3 text-center">
                    BRAWL STARS X BT21© BIBI 
                  </p>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className=" ">
                  <img
                    src="https://winterbear.in/wp-content/uploads/2023/01/BT21_brawl_stars_keyring_koya_01.webp"
                    className="w-100 d-block mx-auto px-3"
                    alt="Gallery Item"
                  />
                  <p className="fw-6 fw-bold text-white text-uppercase py-3 text-center">
                  BRAWL STARS X BT21©SANDY 
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
