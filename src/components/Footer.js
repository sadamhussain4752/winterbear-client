import React from 'react';
import Newsletter from './Newsletter';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  // Function to handle navigation to brand page
  const handleNavigationbrand = (productId) => {
    navigate(`/brand/${productId}`);
  };

  const {
    productOldlist,
    loading: productListLoading,
    error: productListError,
  } = useSelector((state) => state.productOldlist);
  return (
    <>
      <Newsletter />
      <footer className="footercard">
        <div className="container d-lg-block d-none">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-heading">
                <h4 className='mx-5'>Quick links</h4>
                <div className="row">
                  <div className="col-md-6 col-6">
                    <ul>
                      <li>
                        <a href="/"> Home</a>
                      </li>
                      <li>
                        <a href="/shop/0">shop</a>
                      </li>
                      <li>
                        <a href="/events">Events</a>
                      </li>
                      <li>
                        <a href="/about">About</a>
                      </li>
                      <li>
                        <a href="/faqs">faq</a>
                      </li>
                      <li>
                        <a href="/blogs">Blogs</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-6">
                    <ul>
                      <li>
                        <a href="/account">my account</a>
                      </li>
                      <li>
                        <a href="/wishlist">wishlist</a>
                      </li>
                      <li>
                        <a href="/stores">our stores</a>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-heading">
                <h4>Important links</h4>
                <ul className=''>
                  <li>
                    <a href="/privacy">privacy policy</a>
                  </li>
                  <li>
                    <a href="/faqs">shipping policy</a>
                  </li>
                  <li>
                    <a href="/term">terms &amp; conditions</a>
                  </li>
                  <li>
                    <a href="/faqs">returns &amp; refunds</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-heading">
                <h4>Shop by</h4>
                <div className="row">
                  <div className="col-md-12 col-6">
                    <ul>
                      {productOldlist?.productList?.slice(0, 8).map((item) => (
                        <li key={item.brand.id}>
                          <a href="" onClick={() => handleNavigationbrand(item.brand._id)}>{item.brand.name}</a>
                        </li>
                      ))}


                      {/* <li>
                      <a href="#">line friends</a>
                    </li>
                    <li>
                      <a href="#">the smurfs</a>
                    </li>
                    <li>
                      <a href="#">viz media</a>
                    </li>
                    <li>
                      <a href="#">naruto</a>
                    </li> */}
                    </ul>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-md-12 text-center text-white">
              <img src={require("../constant/images/footer-logo.png")} className="img-fluid" loading="lazy" />
              <p>Official BT21 &amp; LINE FRIENDS Merchandise in India</p>
            </div>
          </div>
        </div>

        <div class="accordion d-block d-lg-none" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button cm-bg-sty" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <h4>Quick links</h4>
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div class="accordion-body cm-bg-sty">
                <div className="row">
                  <div className="col-md-6 col-6">
                    <ul>
                      <li>
                        <a href="/"> Home</a>
                      </li>
                      <li>
                        <a href="/shop/0">shop</a>
                      </li>
                      <li>
                        <a href="/events">Events</a>
                      </li>
                      <li>
                        <a href="/about">About</a>
                      </li>
                      <li>
                        <a href="/faqs">faq</a>
                      </li>
                      <li>
                        <a href="/blogs">Blogs</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-6">
                    <ul>
                      <li>
                        <a href="/account">my account</a>
                      </li>
                      <li>
                        <a href="/wishlist">wishlist</a>
                      </li>
                      <li>
                        <a href="/stores">our stores</a>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button cm-bg-sty collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <h4>Important links</h4>
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body cm-bg-sty">

                <ul className=''>
                  <li>
                    <a href="/privacy">privacy policy</a>
                  </li>
                  <li>
                    <a href="/faqs">shipping policy</a>
                  </li>
                  <li>
                    <a href="/term">terms &amp; conditions</a>
                  </li>
                  <li>
                    <a href="/faqs">returns &amp; refunds</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button cm-bg-sty collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <h4> Shop By</h4>
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body cm-bg-sty">
                <ul>
                  {productOldlist?.productList?.slice(0, 8).map((item) => (
                    <li key={item.brand.id}>
                      <a href="" onClick={() => handleNavigationbrand(item.brand._id)}>{item.brand.name}</a>
                    </li>
                  ))}


                  {/* <li>
                      <a href="#">line friends</a>
                    </li>
                    <li>
                      <a href="#">the smurfs</a>
                    </li>
                    <li>
                      <a href="#">viz media</a>
                    </li>
                    <li>
                      <a href="#">naruto</a>
                    </li> */}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-12 text-center text-white mt-4">
            <img src={require("../constant/images/footer-logo.png")} className="img-fluid" loading="lazy" />
            <p>Official BT21 &amp; LINE FRIENDS Merchandise in India</p>
          </div>

        </div>




      </footer>
      <div className="copy-rights-img mt-5">
        <div className="container">
          <div className="text-center">
            <img src="assets/images/footer-img.png" className="" loading="lazy" />
          </div>
        </div>
      </div>
      <div className="copy-rights">
        <div className="container">
          <div className="text-center">
            <p className="mb-0">
              <b>© 2024 Digital Partners IM Solutions</b>
            </p>
          </div>
        </div>
      </div>
    </>

  );
};

export default Footer;
