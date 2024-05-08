import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Testimonals from "../components/Testimonals";
import "./Awards.css";

const AllBrand = () => {
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

      <section className="shop  mt-80 px-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h3 className="theme-bg-text">Shop All Brands</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12   text-dark">
              <div className="filter-buttons text-dark py-3 ">
                <button className="active text-dark" data-filter="*">
                  All
                </button>
                <button className="text-dark" data-filter=".koya">
                  KOYA
                </button>
                <button className="text-dark" data-filter=".rj">
                  RJ
                </button>
                <button className="text-dark" data-filter=".shooky">
                  SHOOKY
                </button>
                <button className="text-dark" data-filter=".mang">
                  MANG
                </button>
                <button className="text-dark" data-filter=".chimmy">
                  CHIMMY
                </button>
                <button className="text-dark" data-filter=".tata">
                  TATA
                </button>
                <button className="text-dark" data-filter=".cooky">
                  COOKY
                </button>
              </div>
              <div className="portfolio px-3  mt-3">
                <div className="row">
                  <div className="col-md-3 d-block mx-auto mb-3 koya ">
                    <img
                      src="assets/images/Rectangle 18.png"
                      alt="Web Project 1"
                      className="d-block mx-auto mb-2 w-100"
                    />
                    <span className="text-dark text-center">
                      BT21© COOKY POCKET MIRROR ₹699.00
                    </span>
                  </div>
                  <div className="col-md-3 d-block mx-auto mb-3 rj ">
                    <img
                      src="assets/images/Rectangle 18.png"
                      alt="Web Project 1"
                      className="d-block mx-auto mb-2 w-100"
                    />
                    <span className="text-dark text-center">
                      BT21© COOKY POCKET MIRROR ₹699.00
                    </span>
                  </div>
                  <div className="col-md-3 d-block mx-auto mb-3 shooky ">
                    <img
                      src="assets/images/Rectangle 18.png"
                      alt="Web Project 1"
                      className="d-block mx-auto mb-2 w-100"
                    />
                    <span className="text-dark text-center">
                      BT21© COOKY POCKET MIRROR ₹699.00
                    </span>
                  </div>
                  <div className="col-md-3 d-block mx-auto mb-3 mang ">
                    <img
                      src="assets/images/Rectangle 18.png"
                      alt="Web Project 1"
                      className="d-block mx-auto mb-2 w-100"
                    />
                    <span className="text-dark text-center">
                      BT21© COOKY POCKET MIRROR ₹699.00
                    </span>
                  </div>
                  <div className="col-md-3 d-block mx-auto mb-3 chimmy ">
                    <img
                      src="assets/images/Rectangle 18.png"
                      alt="Web Project 1"
                      className="d-block mx-auto mb-2 w-100"
                    />
                    <span className="text-dark text-center">
                      BT21© COOKY POCKET MIRROR ₹699.00
                    </span>
                  </div>
                  <div className="col-md-3 d-block mx-auto mb-3 tata ">
                    <img
                      src="assets/images/Rectangle 18.png"
                      alt="Web Project 1"
                      className="d-block mx-auto mb-2 w-100"
                    />
                    <span className="text-dark text-center">
                      BT21© COOKY POCKET MIRROR ₹699.00
                    </span>
                  </div>
                  <div className="col-md-3 d-block mx-auto mb-3 cooky ">
                    <img
                      src="assets/images/Rectangle 18.png"
                      alt="Web Project 1"
                      className="d-block mx-auto mb-2 w-100"
                    />
                    <span className="text-dark text-center">
                      BT21© COOKY POCKET MIRROR ₹699.00
                    </span>
                  </div>
                  <div className="col-md-3 d-block mx-auto mb-3 koya ">
                    <img
                      src="assets/images/Rectangle 18.png"
                      alt="Web Project 1"
                      className="d-block mx-auto mb-2 w-100"
                    />
                    <span className="text-dark text-center">
                      BT21© COOKY POCKET MIRROR ₹699.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row py-3 ">
            <h5 className="text-left fw-bold fs-3 mt-3">Brand Directory</h5>
            <ul class="nav nav-pills nav-fill border-bottom">
              <li class="nav-item">
                <a class="nav-link active fw-bold" aria-current="page" href="#">
                  A
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  fw-bold" href="#">
                  B
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  fw-bold" href="#">
                  C
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  fw-bold disabled">D</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active fw-bold" aria-current="page" href="#">
                  E
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  fw-bold" href="#">
                  F
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  fw-bold" href="#">
                  G
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  fw-bold disabled">D</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active fw-bold" aria-current="page" href="#">
                  H
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  fw-bold" href="#">
                  I
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  fw-bold" href="#">
                  J
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  fw-bold disabled">D</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active fw-bold" aria-current="page" href="#">
                  K
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  fw-bold" href="#">
                  L
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  fw-bold" href="#">
                  M
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  fw-bold disabled">D</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active fw-bold" aria-current="page" href="#">
                  O
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  fw-bold" href="#">
                  P
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  fw-bold" href="#">
                  Q
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  fw-bold disabled">D</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active fw-bold" aria-current="page" href="#">
                  R
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  fw-bold" href="#">
                  S
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  fw-bold" href="#">
                  T
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  fw-bold disabled">D</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active fw-bold" aria-current="page" href="#">
                  U
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  fw-bold" href="#">
                  V
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  fw-bold" href="#">
                  W
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  fw-bold" href="#">
                  X
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  fw-bold" href="#">
                  Y
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  fw-bold" href="#">
                  Z
                </a>
              </li>
            </ul>

            <div className="row py-3 border-bottom ">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">A</div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
            </div>
            <div className="row py-3 border-bottom ">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">E</div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
            </div>
            <div className="row py-3 border-bottom ">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">H</div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
            </div>
            <div className="row py-3 border-bottom ">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">K</div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
            </div>
            <div className="row py-3 border-bottom ">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">O</div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
            </div>
            <div className="row py-3 border-bottom ">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">R</div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
            </div>
            <div className="row py-3 border-bottom ">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">S</div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
            </div>
            <div className="row py-3 border-bottom ">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">U</div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
              <div className=" col-md-2">
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
                <p>Lorem Lipson</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonals />

      <Footer />
    </>
  );
};

export default AllBrand;
