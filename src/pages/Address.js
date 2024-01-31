import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Address() {
  return (
    <>
      <Header />

      <section className="section myaccount mt-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="section-heading">
                <h3 className="theme-bg-text">My Account</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="container bgg">
          <div className="row">
            <div className="col-lg-3 co3seg">
              <div
                className="nav flex-column nav-pills me-3 w-100 "
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link accBtn "
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  Manage My Account
                </button>

                <button
                  className="nav-link accBtn"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  Payment Options
                </button>
                <button
                  className="nav-link accBtn active"
                  id="v-pills-disabled-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-disabled"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-disabled"
                  aria-selected="false"
                  disabled
                >
                  Address
                </button>
                <button
                  className="nav-link accBtn "
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  Orders
                </button>
                <button
                  className="nav-link accBtn"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  Logout
                </button>
              </div>
            </div>
            <div className="col-lg-9 col-12">
              <div className="tab-content w-100" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active bg-white"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                  tabindex="0"
                >
                  <div className="row  px-md-5 px-3 py-3">
                    <div className="col-md-8 ">
                      <div className="row">
                        <div className="col-md-1">
                          <input
                            className="form-check-input mt-3 "
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-9">
                          <label
                            className="form-check-label  mt-2 fs-5 fw-normal"
                            for="flexRadioDefault1"
                          >
                            Lorem Ipsum dol
                          </label>
                          <button className="btn btn-sm btn-outline-success mx-3">
                            Home
                          </button>
                          <br />
                          <p className=" mb-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt u
                          </p>
                          <p className="">
                            <strong>Contact - </strong> 123456789
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <button className="btn btn-sm btn-outline-secondary border-0 fs-6">
                        Edit
                      </button>
                      <span className="px-3 text-secondary">| </span>
                      <button className="btn btn-sm btn-outline-danger border-0  fs-6">
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="row  px-md-5 px-3 py-3">
                    <div className="col-md-8 ">
                      <div className="row">
                        <div className="col-md-1">
                          <input
                            className="form-check-input mt-3 "
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-9">
                          <label
                            className="form-check-label  mt-2 fs-5 fw-normal"
                            for="flexRadioDefault1"
                          >
                          IM Solutions
                          </label>
                          <button className="btn btn-sm btn-outline-success mx-3">
                            Office
                          </button>
                          <br />
                          <p className=" mb-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt u
                          </p>
                          <p className="">
                            <strong>Contact - </strong> 123456789
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <button className="btn btn-sm btn-outline-secondary border-0 fs-6">
                        Edit
                      </button>
                      <span className="px-3 text-secondary">| </span>
                      <button className="btn btn-sm btn-outline-danger border-0  fs-6">
                        Remove
                      </button>
                    </div>
                  </div>
                  

                 
                    <div class="row  px-3 py-3 ">
                      <div class="col px-3 py-3 border-top mx-5">
                        <button className="btn btn-sm btn-outline-Success border-0  fs-6 text-success ">
                          <span className="px-3 py-3 mt-3"> +</span> Address
                        </button>
                      </div>
                    </div>
                 

                  <div class=" py-5 ">
                    <div className="row  px-3 py-3 ">
                      <div className="form-group col-sm-12 d-flex justify-content-end">
                        <button
                          type="submit"
                          className="btn-block btnn btn-primary"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="btn-block btnn1 btn-primary"
                        >
                          Save Chnages
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                  tabindex="0"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-disabled"
                  role="tabpanel"
                  aria-labelledby="v-pills-disabled-tab"
                  tabindex="0"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                  tabindex="0"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                  tabindex="0"
                >
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Address;
