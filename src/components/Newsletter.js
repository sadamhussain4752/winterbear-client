import React from "react";

const Newsletter = () => {
  return (
    <>
      <section className="py-5 news-latter-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-heading">
                <h3>Subscribe to Our Newsletter</h3>
              </div>
              <p className="text-white px-5">
              Be among the first to stay updated on our latest collections, exclusive offers, and other special perks by subscribing to our newsletter!
              </p>
              <form className="d-flex align-items-center justify-content-center">
                <input
                  type="text"
                  name="email"
                  className="form-control mr-2 w-50"
                  placeholder="Your email address"
                />
                <button type="submit" className="btn-subscribe">
                  Subscribe
                </button>
              </form>
              <div className="row mt-4 justify-content-center">
                <div className="col-md-4 text-white">
                  <i className="fa-solid fa-phone-volume" /> +91-9035576906
                </div>
                <div className="col-md-4 text-white">
                  <i className="fa-regular fa-envelope" /> hello@winterbear.in
                </div>
                <span className="mt-4 text-white social">
                  <i className="fab fa-facebook" />
                  <i className="fab fa-twitter" />
                  <i className="fab fa-linkedin-in" />
                  <i className="fab fa-instagram" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
