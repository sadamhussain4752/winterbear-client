import React from 'react';
import Newsletter from './Newsletter'; 
const Footer = () => {
  return (
    <>
    <Newsletter />
    <footer className="footercard">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-heading">
              <h4>Quick links</h4>
              <div className="row">
                <div className="col-md-6 col-6">
                  <ul>
                    <li>
                      <a href="#"> Home</a>
                    </li>
                    <li>
                      <a href="#">shop</a>
                    </li>
                    <li>
                      <a href="#">bearclub</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">faq</a>
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
                      <a href="#">wishlist</a>
                    </li>
                    <li>
                      <a href="#">our stores</a>
                    </li>
                    <li>
                      <a href="#">events</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-heading">
              <h4>Important links</h4>
              <ul>
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">shipping policy</a>
                </li>
                <li>
                  <a href="#">terms &amp; conditions</a>
                </li>
                <li>
                  <a href="#">returns &amp; refunds</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-heading">
              <h4>Shop by</h4>
              <div className="row">
                <div className="col-md-6 col-6">
                  <ul>
                    <li>
                      <a href="#">BT21</a>
                    </li>
                    <li>
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
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-6">
                  <ul>
                    <li>
                      <a href="#">banpresto</a>
                    </li>
                    <li>
                      <a href="#">Disney &amp; marvel</a>
                    </li>
                    <li>
                      <a href="#">k-pop albums</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 text-center text-white">
            <img src="assets/images/footer-logo.png" className="img-fluid" />
            <p>Official BT21 &amp; LINE FRIENDS Merchandise in India</p>
          </div>
        </div>
      </div>
    </footer>
    <div className="copy-rights-img mt-5">
      <div className="container">
        <div className="text-center">
          <img src="assets/images/footer-img.png" className="" />
        </div>
      </div>
    </div>
    <div className="copy-rights">
      <div className="container">
        <div className="text-center">
          <p className="mb-0">
            <b>© 2023 Digital Partners IM Solutions</b>
          </p>
        </div>
      </div>
    </div>
  </>
  
  );
};

export default Footer;
