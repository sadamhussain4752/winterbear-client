import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Shoponline.css";

const Shoponline = () => {
  const backgroundImageStyle = {
    background: 'url("assets/images/loyality-home.png")',
    backgroundSize: "100% 100%",
    postion: "relative",
  };
  document.title = "shop-online";
  document.getElementsByTagName("META")[2].content = "shop-online";

  return (
    <>
      <Header />
      <section
        style={{
          backgroundColor: "#FCDB04",
          marginTop: "100px !important",
          padding: "30px 0",
        }}
      >
        <div
          className="main g-0 py-3 mt-80"
          style={{
            backgroundColor: "#FCDB04",
            backgroundImage:
              'url("assets/images/Winterbear-Background-Title.webp") ',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            height: "320px",
            backgroundPosition: "bottom center",
          }}
        >
          <h5 className="text-center   fs-1 fw-bold"> Shop </h5>
        </div>
      </section>
      <section>
        <div className="bg-white py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-3 px-3 py-3">
                <div className="brnad py-3 border-bottom ps-3 px-3 ">
                  <div>
                    <a href="">
                      <img
                        src="assets/images/client-logo.png"
                        className="  shop-online-brand mb-3"
                      />
                    </a>
                  </div>
                  <div>
                    <div className="row">
                      <div className="col-1 px-1 col-md-2">
                        <a href="">
                          <img
                            src="https://storage.googleapis.com/email-js-1a09b.appspot.com/winterbear/1713118368071-853479702"
                            className="  shop-online-brand mb-3 mt-3"
                          />
                        </a>
                      </div>
                      <div className="col-9 col-md-10 d-flex align-items-center">
                        <div>
                          <a
                            href=""
                            className="text-dark fw-bold text-decoration-none"
                          >
                            {" "}
                            Koya{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-1 px-1 col-md-2">
                        <a href="">
                          <img
                            src="https://storage.googleapis.com/email-js-1a09b.appspot.com/winterbear/1713118368071-853479702"
                            className="  shop-online-brand mb-3 mt-3"
                          />
                        </a>
                      </div>
                      <div className="col-9 col-md-10 d-flex align-items-center">
                        <div>
                          <a
                            href=""
                            className="text-dark fw-bold text-decoration-none"
                          >
                            {" "}
                            Koya{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-1 px-1 col-md-2">
                        <a href="">
                          <img
                            src="https://storage.googleapis.com/email-js-1a09b.appspot.com/winterbear/1713118368071-853479702"
                            className="  shop-online-brand mb-3 mt-3"
                          />
                        </a>
                      </div>
                      <div className="col-9 col-md-10 d-flex align-items-center">
                        <div>
                          <a
                            href=""
                            className="text-dark fw-bold text-decoration-none"
                          >
                            {" "}
                            Koya{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="brnad py-3 border-bottom ps-3 px-3" >
                  <div>
                    <a href="">
                      <img
                        src="assets/images/client-logo1.png"
                        className="  shop-online-brand mb-3"
                      />
                    </a>
                  </div>
                  <div>
                    <div className="row">
                      <div className="col-1 px-1 col-md-2">
                        <a href="">
                          <img
                            src="https://storage.googleapis.com/email-js-1a09b.appspot.com/winterbear/1713118368071-853479702"
                            className="  shop-online-brand mb-3 mt-3"
                          />
                        </a>
                      </div>
                      <div className="col-9 col-md-10 d-flex align-items-center">
                        <div>
                          <a
                            href=""
                            className="text-dark fw-bold text-decoration-none"
                          >
                            {" "}
                            Koya{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-1 px-1 col-md-2">
                        <a href="">
                          <img
                            src="https://storage.googleapis.com/email-js-1a09b.appspot.com/winterbear/1713118368071-853479702"
                            className="  shop-online-brand mb-3 mt-3"
                          />
                        </a>
                      </div>
                      <div className="col-9 col-md-10 d-flex align-items-center">
                        <div>
                          <a
                            href=""
                            className="text-dark fw-bold text-decoration-none"
                          >
                            {" "}
                            Koya{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-1 px-1 col-md-2">
                        <a href="">
                          <img
                            src="https://storage.googleapis.com/email-js-1a09b.appspot.com/winterbear/1713118368071-853479702"
                            className="  shop-online-brand mb-3 mt-3"
                          />
                        </a>
                      </div>
                      <div className="col-9 col-md-10 d-flex align-items-center">
                        <div>
                          <a
                            href=""
                            className="text-dark fw-bold text-decoration-none"
                          >
                            {" "}
                            Koya{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" d-block mx-auto col-md-9">
                <div className="product-details px-md-5 px-3 py-3">
                  <div className="row">
                  <div className="col-md-3 rounded-border mt-2 ">
                    <div className="product-card">
                      <div className="d-flex justify-content-between position-absolute top-0 start-0 w-100 z-3">
                        <p className="text-white text-center  text-decoration-line-through bg-theme w-25 mt-2 rounded-end"></p>
                      </div>
                      <div className="home-product-in">
                        <img
                          src="assets/images/Rectangle 22.png"
                          className=""
                          alt="Web Project 1"
                        />
                        <div className="text-center  border-secondary addtocart-btn px-1 py-1 mx-2">
                          <i className="fas fa-cart-plus me-2"></i> Add to Cart
                        </div>
                      </div>
                      <div className="text-left price-card py-2">
                        <p
                          className="font-z text-truncate text-left"
                          style={{ maxWidth: "200px" }}
                        >
                          BT21 @BT21© COLLER MININI STICON CHIMMY
                        </p>
                        <p className=" mb-0 pro-price">₹ 400</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 rounded-border mt-2 ">
                    <div className="product-card">
                      <div className="d-flex justify-content-between position-absolute top-0 start-0 w-100 z-3">
                        <p className="text-white text-center  text-decoration-line-through bg-theme w-25 mt-2 rounded-end"></p>
                      </div>
                      <div className="home-product-in">
                        <img
                          src="assets/images/Rectangle 22.png"
                          className=""
                          alt="Web Project 1"
                        />
                        <div className="text-center  border-secondary addtocart-btn px-1 py-1 mx-2">
                          <i className="fas fa-cart-plus me-2"></i> Add to Cart
                        </div>
                      </div>
                      <div className="text-left price-card py-2">
                        <p
                          className="font-z text-truncate text-left"
                          style={{ maxWidth: "200px" }}
                        >
                          BT21 @BT21© COLLER MININI STICON CHIMMY
                        </p>
                        <p className=" mb-0 pro-price">₹ 400</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 rounded-border mt-2 ">
                    <div className="product-card">
                      <div className="d-flex justify-content-between position-absolute top-0 start-0 w-100 z-3">
                        <p className="text-white text-center  text-decoration-line-through bg-theme w-25 mt-2 rounded-end"></p>
                      </div>
                      <div className="home-product-in">
                        <img
                          src="assets/images/Rectangle 22.png"
                          className=""
                          alt="Web Project 1"
                        />
                        <div className="text-center  border-secondary addtocart-btn px-1 py-1 mx-2">
                          <i className="fas fa-cart-plus me-2"></i> Add to Cart
                        </div>
                      </div>
                      <div className="text-left price-card py-2">
                        <p
                          className="font-z text-truncate text-left"
                          style={{ maxWidth: "200px" }}
                        >
                          BT21 @BT21© COLLER MININI STICON CHIMMY
                        </p>
                        <p className=" mb-0 pro-price">₹ 400</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 rounded-border mt-2 ">
                    <div className="product-card">
                      <div className="d-flex justify-content-between position-absolute top-0 start-0 w-100 z-3">
                        <p className="text-white text-center  text-decoration-line-through bg-theme w-25 mt-2 rounded-end"></p>
                      </div>
                      <div className="home-product-in">
                        <img
                          src="assets/images/Rectangle 22.png"
                          className=""
                          alt="Web Project 1"
                        />
                        <div className="text-center  border-secondary addtocart-btn px-1 py-1 mx-2">
                          <i className="fas fa-cart-plus me-2"></i> Add to Cart
                        </div>
                      </div>
                      <div className="text-left price-card py-2">
                        <p
                          className="font-z text-truncate text-left"
                          style={{ maxWidth: "200px" }}
                        >
                          BT21 @BT21© COLLER MININI STICON CHIMMY
                        </p>
                        <p className=" mb-0 pro-price">₹ 400</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 rounded-border mt-2 ">
                    <div className="product-card">
                      <div className="d-flex justify-content-between position-absolute top-0 start-0 w-100 z-3">
                        <p className="text-white text-center  text-decoration-line-through bg-theme w-25 mt-2 rounded-end"></p>
                      </div>
                      <div className="home-product-in">
                        <img
                          src="assets/images/Rectangle 22.png"
                          className=""
                          alt="Web Project 1"
                        />
                        <div className="text-center  border-secondary addtocart-btn px-1 py-1 mx-2">
                          <i className="fas fa-cart-plus me-2"></i> Add to Cart
                        </div>
                      </div>
                      <div className="text-left price-card py-2">
                        <p
                          className="font-z text-truncate text-left"
                          style={{ maxWidth: "200px" }}
                        >
                          BT21 @BT21© COLLER MININI STICON CHIMMY
                        </p>
                        <p className=" mb-0 pro-price">₹ 400</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 rounded-border mt-2 ">
                    <div className="product-card">
                      <div className="d-flex justify-content-between position-absolute top-0 start-0 w-100 z-3">
                        <p className="text-white text-center  text-decoration-line-through bg-theme w-25 mt-2 rounded-end"></p>
                      </div>
                      <div className="home-product-in">
                        <img
                          src="assets/images/Rectangle 22.png"
                          className=""
                          alt="Web Project 1"
                        />
                        <div className="text-center  border-secondary addtocart-btn px-1 py-1 mx-2">
                          <i className="fas fa-cart-plus me-2"></i> Add to Cart
                        </div>
                      </div>
                      <div className="text-left price-card py-2">
                        <p
                          className="font-z text-truncate text-left"
                          style={{ maxWidth: "200px" }}
                        >
                          BT21 @BT21© COLLER MININI STICON CHIMMY
                        </p>
                        <p className=" mb-0 pro-price">₹ 400</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 rounded-border mt-2 ">
                    <div className="product-card">
                      <div className="d-flex justify-content-between position-absolute top-0 start-0 w-100 z-3">
                        <p className="text-white text-center  text-decoration-line-through bg-theme w-25 mt-2 rounded-end"></p>
                      </div>
                      <div className="home-product-in">
                        <img
                          src="assets/images/Rectangle 22.png"
                          className=""
                          alt="Web Project 1"
                        />
                        <div className="text-center  border-secondary addtocart-btn px-1 py-1 mx-2">
                          <i className="fas fa-cart-plus me-2"></i> Add to Cart
                        </div>
                      </div>
                      <div className="text-left price-card py-2">
                        <p
                          className="font-z text-truncate text-left"
                          style={{ maxWidth: "200px" }}
                        >
                          BT21 @BT21© COLLER MININI STICON CHIMMY
                        </p>
                        <p className=" mb-0 pro-price">₹ 400</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 rounded-border mt-2 ">
                    <div className="product-card">
                      <div className="d-flex justify-content-between position-absolute top-0 start-0 w-100 z-3">
                        <p className="text-white text-center  text-decoration-line-through bg-theme w-25 mt-2 rounded-end"></p>
                      </div>
                      <div className="home-product-in">
                        <img
                          src="assets/images/Rectangle 22.png"
                          className=""
                          alt="Web Project 1"
                        />
                        <div className="text-center  border-secondary addtocart-btn px-1 py-1 mx-2">
                          <i className="fas fa-cart-plus me-2"></i> Add to Cart
                        </div>
                      </div>
                      <div className="text-left price-card py-2">
                        <p
                          className="font-z text-truncate text-left"
                          style={{ maxWidth: "200px" }}
                        >
                          BT21 @BT21© COLLER MININI STICON CHIMMY
                        </p>
                        <p className=" mb-0 pro-price">₹ 400</p>
                      </div>
                    </div>
                  </div>
                  </div>
                 

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Shoponline;
