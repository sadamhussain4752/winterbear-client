import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyOrder() {
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
                  className="nav-link accBtn"
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
                  className="nav-link accBtn active"
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
            <div className="col-lg-9 col-12 ">
              <div className="tab-content w-100" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active bg-white"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
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

export default MyOrder;
