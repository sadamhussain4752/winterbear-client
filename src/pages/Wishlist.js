import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Wishlist = () => {
  document.title = "Wishlist";
  document.getElementsByTagName("META")[2].content = "Wishlist";
  return (
    <>
      <Header />
      <section className=" pb-1   mt-150 mb-3">
        <div className="ps-md-5 container  position-relative">
          <div className="row  px-3">
            <div className="col-md-12">
              <p className="position-absolute translate-middle  top-50 d-none d-md-block">
                <a href="#" className="text-decoration-none text-secondary">Home</a> / Wishlist
              </p>
            </div>
            <div className="col-md-12 mt-3">
              <div className="section-heading">
                <h3 className="theme-bg-text">My Wishlist</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-3 pb-3 mb-5 ">
        <div className="container faqs bg-body-secondary  px-3 px-md-5 py-3">
          <div className="row   border-bottom border-secondry">
            <div className="col-md-5  py-3 border-0">Product</div>
            <div className="col-md-2  py-3 border-0 text-center">Price</div>
            <div className="col-md-2  py-3 border-0 text-center">
              Stock Status
            </div>
            <div className="col-md-2  py-3 border-0 text-center">Action</div>
            <div className="col-md-1  py-3 border-0 ">&nbsp;</div>
          </div>
          <div className="row my-3">
            <div className="col-md-5  py-3 border-0">
              <div className="row">
                <div className="col-3">
                  <a href="#">
                    <img src="assets/images/p-1.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-9 position-relative">
                  <p className="position-absolute top-0 ">
                    BT21© CLIP BOARD+PADNOTE SET/ COOKY
                  </p>
                  <p className="position-absolute bottom-0 mb-0">
                    <a href="#" className="text-decoration-none text-secondary">
                      {" "}
                      Remove
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2  py-3 border-0 text-center">
              <p>
                <i class="fa-solid fa-indian-rupee-sign px-1"></i> 1146.00
              </p>
            </div>
            <div className="col-md-2  py-3 border-0 text-center">
              <p className="text-success">In Stock</p>
            </div>

            <div className="col-md-2  py-3 border-0 text-center">
              <btn className="btn btn-sm bg-warning-subtle">Add to cart</btn>
            </div>
            <div className="col-md-1  py-3 border-0 ">
              <p className="">
                {" "}
                <i class="fa-solid fa-xmark border border-2 rounded-circle px-2 py-1 text-dark border-secondary"></i>
              </p>
            </div>
          </div>

          <div className="row my-3">
            <div className="col-md-5  py-3 border-0">
              <div className="row">
                <div className="col-3">
                  <a href="#">
                    <img src="assets/images/p-2.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-9 position-relative">
                  <p className="position-absolute top-0 ">
                    BT21© CLIP BOARD+PADNOTE SET/ COOKY
                  </p>
                  <p className="position-absolute bottom-0 mb-0">
                    <a href="#" className="text-decoration-none text-secondary">
                      {" "}
                      Remove
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2  py-3 border-0 text-center">
              <p>
                <i class="fa-solid fa-indian-rupee-sign px-1"></i> 1146.00
              </p>
            </div>
            <div className="col-md-2  py-3 border-0 text-center">
              <p className="text-danger">Out of Stock</p>
            </div>

            <div className="col-md-2  py-3 border-0 text-center">
              <btn className="btn btn-sm bg-warning-subtle disabled text-dark boder-0">
                Add to cart
              </btn>
            </div>
            <div className="col-md-1  py-3 border-0 ">
              <p className="">
                {" "}
                <i class="fa-solid fa-xmark border border-2 rounded-circle px-2 py-1 text-dark border-secondary"></i>
              </p>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-md-5  py-3 border-0">
              <div className="row">
                <div className="col-3">
                  <a href="#">
                    <img src="assets/images/p-3.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-9 position-relative">
                  <p className="position-absolute top-0 ">
                    BT21© CLIP BOARD+PADNOTE SET/ COOKY
                  </p>
                  <p className="position-absolute bottom-0 mb-0">
                    <a href="#" className="text-decoration-none text-secondary">
                      {" "}
                      Remove
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2  py-3 border-0 text-center">
              <p>
                <i class="fa-solid fa-indian-rupee-sign px-1"></i> 1146.00
              </p>
            </div>
            <div className="col-md-2  py-3 border-0 text-center">
              <p className="text-success">In Stock</p>
            </div>

            <div className="col-md-2  py-3 border-0 text-center">
              <btn className="btn btn-sm bg-warning-subtle">Add to cart</btn>
            </div>
            <div className="col-md-1  py-3 border-0 ">
              <p className="">
                {" "}
                <i class="fa-solid fa-xmark border border-2 rounded-circle px-2 py-1 text-dark border-secondary"></i>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Wishlist;
