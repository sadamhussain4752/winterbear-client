import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Eventlist from "../components/Event-list";

const EventsSection = () => {
  const [activeTab, setActiveTab] = useState("div1");

  const showDiv = (divId) => {
    setActiveTab(divId);
  };

  const getImageSource = (divId) => {
    switch (divId) {
      case "div1":
        return "assets/images/Banner3.webp";
      case "div2":
        return "assets/images/Banner2.webp";
      case "div3":
        return "assets/images/Banner1.webp";
      default:
        return "";
    }
  };

  return (
    <>
      <Header />

      <section className="py-5 mt-80">
        <div className="">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="section-heading">
                <h3 className="theme-bg-text">Event Details</h3>
              </div>
            </div>
          </div>

          <div className="row justify-content-center text-center ">
            <div className="position-relative">
              <img
                src={require("../constant/images/event-back-ground.jpeg")}
                alt="Upcoming Sale"
                className="img-fluid"
              />
              <div className="col-md-12 row d-flex justify-content-center position-absolute top-0">
                <div className=" col-md-9 row d-flex justify-content-center event-tap">
                  <p className="col-md-3 event-text-color">
                    Upcoming Events
                  </p>
                  <p className="col-md-3 event-item">
                    40% di sconto dal 20 aprile al 5 maggio!
                  </p>
                  <p className="col-md-3 event-text-color">
                    India
                  </p>
                </div>

                <div className="about-breadcum-content d-md-block d-none mt-80">
                  <div className="row justify-content-center">
                    <div className="col-md-12">
                      <h3 className="text-main-color">Sound of Christmas 2024</h3>
                      {/* <h5>Your Ultimate Destination for Trendsetting Fashion</h5> */}
                      <a href="/event-details" className="button">
                        More Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="position-absolute bottom-0">
                <Eventlist />

              </div>
              {/* <div className="row">
              <div className="col-12">
              <div
                className="tab-content  text-white px-3"
                id="pills-tabContent"
              >
                <div
                  className="tab-pane fade active show"
                  id="pills-all"
                  role="tabpanel"
                  aria-labelledby="pills-all-tab"
                >
                  <img
                    src="assets/images/Banner3.webp"
                    alt="Upcoming Sale"
                    className="img-fluid"
                  />
                </div>

                <div
                  className="tab-pane fade  "
                  id="pills-koya"
                  role="tabpanel"
                  aria-labelledby="pills-koya-tab"
                >
                  <img
                    src="assets/images/Banner2.webp"
                    alt="Upcoming Events"
                    className="img-fluid"
                  />
                </div>

                <div
                  className="tab-pane fade  text-white"
                  id="pills-rj"
                  role="tabpanel"
                  aria-labelledby="pills-rj-tab"
                >
                  <img
                    src="assets/images/Banner1.webp"
                    alt="New Launches"
                    className="img-fluid"
                  />
                </div>
              </div>

              </div>

              </div> */}

            </div>
          </div>
        </div>
      </section>

      <Gallery />
      <Footer />
    </>
  );
};

export default EventsSection;
