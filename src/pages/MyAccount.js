import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyAccount() {
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
                  className="nav-link accBtn active"
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
                  className="tab-pane fade show active "
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                  tabindex="0"
                >
                  <div className="form">
                    <div className="container-fluid px-1 mx-auto">
                      <div className="row d-flex justify-content-center">
                        <div className=" col-lg-12 col-11 text-center">
                          <div className="card">
                            <p className="fs-4 cmfont text-start py-3 mb-3">
                              Edit Your Profile
                            </p>
                            <form
                              className="form-card"
                              onsubmit="event.preventDefault()"
                            >
                              <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex">
                                  <label className="form-control-label">
                                    First name
                                  </label>
                                  <input
                                    type="text"
                                    id="fname"
                                    name="fname"
                                    placeholder=""
                                    onblur="validate(1)"
                                  />
                                </div>
                                <div className="form-group col-sm-6 flex-column d-flex">
                                  <label className="form-control-label">
                                    Last name
                                  </label>
                                  <input
                                    type="text"
                                    id="lname"
                                    name="lname"
                                    placeholder=""
                                    onblur="validate(2)"
                                  />
                                </div>
                              </div>
                              <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex">
                                  <label className="form-control-label">
                                    email
                                  </label>
                                  <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder=""
                                    onblur="validate(3)"
                                  />
                                </div>
                                <div className="form-group col-sm-6 flex-column d-flex">
                                  <label className="form-control-label">
                                    Phone no
                                  </label>
                                  <input
                                    type="text"
                                    id="mob"
                                    name="mob"
                                    placeholder=""
                                    onblur="validate(4)"
                                  />
                                </div>
                              </div>
                              <div className="row justify-content-between text-left">
                                <div className="form-group col-12 flex-column d-flex">
                                  <label className="form-control-label">
                                    Job title
                                  </label>
                                  <input
                                    type="text"
                                    id="job"
                                    name="job"
                                    placeholder=""
                                    onblur="validate(5)"
                                  />
                                </div>
                              </div>
                              <div className="row justify-content-between text-left">
                                <div className="form-group col-12 flex-column d-flex">
                                  <label className="form-control-label">
                                    Password Changes
                                  </label>
                                  <input
                                    type="text"
                                    id=""
                                    name="ans"
                                    placeholder="Current Passwod"
                                    onblur="validate(6)"
                                  />

                                  <input
                                    type="text"
                                    id=""
                                    name="ans"
                                    placeholder="New Passwod"
                                    onblur="validate(6)"
                                  />

                                  <input
                                    type="text"
                                    id=""
                                    name="ans"
                                    placeholder="Confirm New Passwod"
                                    onblur="validate(6)"
                                  />
                                </div>
                              </div>
                              <div className="row ">
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
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade bg-white"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
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
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                  tabindex="0"
                >
                 <div className="table-responsive py-3  mt-3">
                    <table className="table text-center">
                      <thead className="">
                        <tr className="py-3">
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Locaton</th>
                          <th scope="col">Start Date</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody className="table-group-divider">
                        <tr>
                          <th scope="row">1</th>
                          <td>Name</td>
                          <td>Delhi</td>
                          <td>12-11-2024</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-success btn-sm"
                            >
                              Complete
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Name</td>
                          <td>Delhi</td>
                          <td>12-11-2024</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-success btn-sm"
                            >
                              Complete
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Name</td>
                          <td>Delhi</td>
                          <td>12-11-2024</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-warning btn-sm"
                            >
                              Pending
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>Name</td>
                          <td>Delhi</td>
                          <td>12-11-2024</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-success btn-sm"
                            >
                              Complete
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td>Name</td>
                          <td>Delhi</td>
                          <td>12-11-2024</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-warning btn-sm"
                            >
                              Pending
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">6</th>
                          <td>Name</td>
                          <td>Delhi</td>
                          <td>12-11-2024</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-success btn-sm "
                            >
                              Complete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                          <a className="page-link  text-decoration-none text-dark">
                            {" "}
                            &lt;{" "}
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link text-decoration-none text-dark"
                            href="#"
                          >
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link text-decoration-none text-dark"
                            href="#"
                          >
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link text-decoration-none text-dark"
                            href="#"
                          >
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link  text-decoration-none text-dark"
                            href="#"
                          >
                            {" "}
                            &gt;{" "}
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
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

export default MyAccount;
