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
                <h3 className="theme-bg-text">Shop by</h3>
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
            <ul className="nav nav-pills nav-fill border-bottom">
              <li className="nav-item">
                <a className="nav-link active fw-bold" aria-current="page" href="#">
                  #
                </a>
                <a className="nav-link active fw-bold" aria-current="page" href="#">
                  A
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold" href="#">
                  B
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold" href="#">
                  C
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold disabled">D</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fw-bold" aria-current="page" href="#">
                  E
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold" href="#">
                  F
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold" href="#">
                  G
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold disabled">D</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fw-bold" aria-current="page" href="#">
                  H
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold" href="#">
                  I
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold" href="#">
                  J
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold disabled">D</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fw-bold" aria-current="page" href="#">
                  K
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold" href="#">
                  L
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold" href="#">
                  M
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold disabled">D</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fw-bold" aria-current="page" href="#">
                  O
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold" href="#">
                  P
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold" href="#">
                  Q
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold disabled">D</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fw-bold" aria-current="page" href="#">
                  R
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold" href="#">
                  S
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold" href="#">
                  T
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold disabled">D</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fw-bold" aria-current="page" href="#">
                  U
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold" href="#">
                  V
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold" href="#">
                  W
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold" href="#">
                  X
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold" href="#">
                  Y
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold" href="#">
                  Z
                </a>
              </li>
            </ul>

            <div className="row py-3 border-bottom Name#">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">#</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        22 MININI HANDMIRROR YELLOW
                      </a>
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        8MM MATHEMATICS NOTE
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-3 border-bottom Name-A">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">A</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        AFTER SCHOOL MASKING TAPE 30MM
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-3 border-bottom Name-B">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">B</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        BASIC MASKING TAPE 30MM
                      </a>{" "}
                    </p>
                  </div>

                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        BRAWLSTARSX BIBI RJ 22 KEY RING
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        BRAWLSTARSX BULL MANG 22 KEY RING
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        BRAWLSTARSX EDGAR TATA 22 KEY RING
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        BRAWLSTARSX JACKY COOKY 22 KEY RING
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        BRAWLSTARSX RUFFS CHIMMY 22 KEY RING
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        BRAWLSTARSX SANDY KOYA 22 KEY RING
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        BROWN CLEAR POUCH SET
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">BRUSH SET</a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-3 border-bottom Name-C">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">C</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        CHIMMY 22 MININI 3 COLOR PEN
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        CHIMMY 22 PADDED HOBO BAG
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        CHIMMY 5TH ANNIVERSARY PACK
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        CHIMMY ACRYLIC STRAP KEYRING
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        CHIMMY BADGE STICKER
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        CHIMMY CLEAR DECO STICKER VER. 2
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        CHIMMY CLEAR STICKER SWEETIE
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">CHIMMY ECO BAG</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">CHIMMY GIFT BOX</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        CHIMMY JELLY SWEETIE STICKER
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        CHIMMY LAYERED LETTER SET
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        CHIMMY MASKING TAPE SET
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        CHIMMY MININI GEL INK BALL PEN
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        CHIMMY MININI MACARON KEYRING
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        CHIMMY MININI NAME TAG SET
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        CHIMMY MININI PHOTO S ALBUM
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        CHIMMY MININI STICKY GEL PAD
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        CHIMMY PHOTO HOLDER
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        CHIMMY PVC COVER DIARY
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        CHIMMY SHINE STICKER
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        CHIMMY SOFT NECK PILLOW
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">CHIMMY STICKY NOTE</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        CHIMMY TATTOO STICKER
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        CHIMMY THREE PIECE STAMP
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        CHIMMY THREE PIECE STAMP
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        COLOR WOODEN MECHANICAL PENCIL
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        COMIC POP MASKING TAPE 30MM
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">CONFETTI BALLOON A</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">CONFETTI BALLOON B</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        COOKIE HOLIDAY STICKER
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        COOKIE JELLY SWEETIE STICKER
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        COOKIE TATTOO STICKER
                      </a>{" "}
                    </p>
                  </div>

                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        COOKY 22 MININI 3 COLOR PEN
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        COOKY 22 PADDED HOBO BAG
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#"></a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        COOKY ACRYLIC STRAP KEYRING
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">COOKY CABLE WINDER</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        COOKY CLEAR CARD POCKET
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        COOKY CLEAR DECO STICKER VER. 2
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        COOKY CLEAR DECO STICKER VER. 3
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        COOKY CLIP BOARD+PADNOTE SET
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">COOKY ECO BAG</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">COOKY GIFT BOX</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        COOKY HOLOGRAM STICKER
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        COOKY LAYERED LETTER SET
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        COOKY MASKING TAPE SET
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        COOKY MININI NAME TAG SET
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        COOKY MININI PHOTO S ALBUM
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        COOKY MININI STICKY GEL PAD
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">COOKY MOUSE PAD</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">COOKY PHOTO HOLDER</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        COOKY PVC COVER DIARY
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        COOKY SHINE STICKER
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        COOKY SOFT NECK PILLOW
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">COOKY STICKY NOTE</a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-3 border-bottom Name-D">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">G</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        GROUP MASKING TAPE 30MM
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">GROUP PICNIC MAT</a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-3 border-bottom Name-E">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">K</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        KOYA 22 MININI 3 COLOR PEN
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        KOYA 22 MININI PHOTO ALBUM
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        KOYA ACRYL CLIP BALLPEN
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        KOYA ACRYLIC STRAP KEYRING
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">KOYA GIFT BOX</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        KOYA JELLY SWEETIE STICKER
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        KOYA LAYERED LETTER SET
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        KOYA MININI PHOTO S ALBUM
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">KOYA MOUSE PAD</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        KOYA MULTI DECO STICKER
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">KOYA SHINE STICKER</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">KOYA STICKY NOTE</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        KOYA TATTOO STICKER
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-3 border-bottom Name-F">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">L</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">L HOLDER</a>{" "}
                    </p>
                  </div>

                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        LINE FRIENDS 12 COLOR MARKER
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        LINE FRIENDS 20 PENCIL CRAYONS
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        LINE FRIENDS BROWN 22 MINIONS AIRPODS
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        {" "}
                        CASE LINE FRIENDS BROWN GREETING CARD
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        LINE FRIENDS BROWN STICK PENCILCASE VER .2
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        LINE FRIENDS CONY 3 COLOR BALLPOINT PEN
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        LINE FRIENDS CONY ACRYL KEYRING
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        LINE FRIENDS CONY GREETING CARD
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        LINE FRIENDS CONY LINE NOTE
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        LINE FRIENDS CONY MONTHLY PLANNER VER. 2
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        LINE FRIENDS CONY SPANGLE POUCH
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        LINE FRIENDS CONY STICK PENCILCASE VER .2
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        LINE FRIENDS MASKING TAPE KIT S
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        LINE FRIENDS MINI FRIENDS ACRYL PENHOLDER
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        LINE FRIENDS NON-WOVEN FABRIC BAG BLUE
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        LINE FRIENDS NON-WOVEN FABRIC BAG -XL
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        LINE FRIENDS PALLET
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        LINE FRIENDS PINK DOCUMENT FILE
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        LINE FRIENDS SALLY 22 MINIONS AIRPODS CASE
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        LINE FRIENDS SALLY ACRYL KEYRING
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        LINE FRIENDS SALLY GREETING CARD
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        LINE FRIENDS SALLY LINE NOTE
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        LINE FRIENDS SALLY STICK PENCILCASE VER .2
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        LINE FRIENDS TARPAULIN BAG BEIGE LARGE
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-3 border-bottom Name-G">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">M</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        MANG 22 CANDY KEYRING
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        MANG 22 MININI 3 COLOR PEN
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        MANG 22 MININI PHOTO ALBUM
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        MANG ACRYL CLIP BALLPEN
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        MANG ACRYLIC STRAP KEYRING
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">MANG BADGE STICKER</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">MANG BLACK ECO BAG</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">MANG CABLE WINDER</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        MANG CLEAR DECO STICKER VER. 3
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        MANG CLEAR STICKER SWEETIE
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">MANG GIFT BOX</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        MANG JELLY SWEETIE STICKER
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">MANG KNOCK PENCIL</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        MANG LAYERED LETTER SET
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        MANG MAGIC SHOP CLIPBOARD AND PAD
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        MANG MATHEMATICS NOTE
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">MANG MOUSE PAD</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        MANG RUBBER BALLOON
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">MANG SHINE STICKER</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">MANG SLIM BALLPEN</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">MANG STICKY NOTE</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        MANG TATTOO STICKER
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">MANG WRIST CUSHION</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">MATHEMATICS NOTE</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        MY LITTLE BUDDY ACRYL PENHOLDER
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-3 border-bottom Name-H">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">P</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">PARTY HAT FACE</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        PHOTO COLLECT BOOK PURPLE
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        PHOTO COLLECT BOOK YELLOW
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        PHOTO FRAME DECO SET
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">PINK HAND MIRROR</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">PINK HAND TOWEL</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        PURPLE ACRYLIC MAGNET
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        PURPLE CLEAR POUCH SET
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">PURPLE HAND TOWEL</a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-3 border-bottom Name-I">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">R</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">RED ACRYLIC MAGNET</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        RJ 22 MININI 3 COLOR PEN
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        RJ 22 SWEET THINGS PLUSH KEYRING
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        RJ 3 COLOR BALLPOINT PEN
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        RJ ACRYL CLIP BALLPEN
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        RJ ACRYLIC STRAP KEYRING
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">RJ BADGE STICKER</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        RJ BIG ZIPPER PENCIL CASE
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        RJ CLEAR CARD POCKET
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        RJ CLEAR DECO STICKER VER. 2
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        RJ CLEAR DECO STICKER VER. 3
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">RJ ECO BAG</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">RJ GIFT BOX</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">RJ HOLIDAY STICKER</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        RJ JELLY SWEETIE STICKER
                      </a>{" "}
                    </p>
                  </div>

                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        RJ LAYERED LETTER SET
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        RJ MASKING TAPE SET
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        RJ MININI NAME TAG SET
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        RJ MININI PHOTO S ALBUM
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        RJ MININI STICKY GEL PAD RJ MOBILE STICKER VER. 2
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">RJ MOUSE PAD</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">RJ PHOTO HOLDER</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">RJ RUBBER BALLOON</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">RJ SHINE STICKER</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        RJ SPANGLE STICK POUCH
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">RJ STICKY NOTE</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        RJ STREETMOOD STANDING DOLL
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">RJ TATTOO STICKER</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        ROOMIES MASKING TAPE 30MM
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-3 border-bottom Name-J">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">S</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        SHOOKY 22 MININI 3 COLOR PEN
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        SHOOKY BADGE STICKER
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        SHOOKY CABLE WINDER
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        SHOOKY CLEAR DECO STICKER VER. 2
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">SHOOKY GIFT BOX</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        SHOOKY LAYERED LETTER SET
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#"></a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        SHOOKY MAGIC SHOP CLIPBOARD AND PAD
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        SHOOKY MININI GEL INK BALL PEN
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        SHOOKY MININI PHOTO ALBUM
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">SHOOKY STICKY NOTE</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        SHOOKY WRIST CUSHION
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">STICKER FILE</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        SUMMER DOLCE MASKING TAPE 30MM
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-3 border-bottom Name-K">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">T</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        TATA 22 MININI 3 COLOR PEN
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#"></a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        TATA 22 PADDED HOBO BAG
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        TATA ACRYLIC STRAP KEYRING
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        TATA CLEAR CARD POCKET
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        TATA CLEAR DECO STICKER VER. 3
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        TATA CLEAR STICKER SWEETIE
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">TATA ECO BAG</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">TATA GIFT BOX</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        TATA HOLIDAY STICKER
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        TATA HOLOGRAM STICKER
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        TATA JELLY SWEETIE STICKER
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        TATA LAYERED LETTER SET
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        TATA MACARON KEYRING
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        TATA MASKING TAPE SET
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        TATA MININI GEL INK BALL PEN
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        TATA MININI PHOTO S ALBUM
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        TATA MININI STICKY GEL PAD
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">TATA MOUSE PAD</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        TATA PVC COVER DIARY
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">TATA SHINE STICKER</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        TATA SOFT NECK PILLOW
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">TATA STICKY NOTE</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        TATA TATTOO STICKER
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        TATA THREE PIECE STAMP
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a className="text-decoration-none text-dark small m-0" href="#">
                        TIME TO PARTY ACRYL PENHOLDER
                      </a>{" "}
                    </p>
                  </div>
                </div>
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
