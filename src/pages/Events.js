import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

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
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="section-heading">
                <h3 className="theme-bg-text">Events</h3>
              </div>
            </div>
          </div>

          <div className="row justify-content-center text-center ">
            <div className="col-12 bg-theme py-3">
              <ul
                className="nav nav-pills mb-3 py-3 nav-fill px-5"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link fs-5 fw-semibold  position-relative rounded-pill active "
                    id="pills-all-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-all"
                    type="button"
                    role="tab"
                    aria-controls="pills-all"
                    aria-selected="true"
                  >
                    Upcoming Sale
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link fs-5 fw-semibold  position-relative rounded-pill  "
                    id="pills-koya-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-koya"
                    type="button"
                    role="tab"
                    aria-controls="pills-koya"
                    aria-selected="true"
                  >
                    Upcoming Events
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link fs-5 text-light fw-semibold position-relative rounded-pill"
                    id="pills-rj-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-rj"
                    type="button"
                    role="tab"
                    aria-controls="pills-rj"
                    aria-selected="false"
                  >
                    New Launches
                  </button>
                </li>
              </ul>
              <div className="row">
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

export default EventsSection;
