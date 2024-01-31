import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Gallery from "../components/Gallery";
import HomeSlider from "../components/HomeSlider";
import BrandSlider from "../components/BrandSlider";
import { fetchBannerData, fetchProductData } from "../reducer/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


import constant from "../constant/constant";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Destructuring with different names to avoid conflict
  const {
    data,
    loading: bannerLoading,
    error: bannerError,
  } = useSelector((state) => state.data);
  

  const {
    productlist,
    loading: productListLoading,
    error: productListError,
  } = useSelector((state) => state.productlist);
  console.log(data && data.productList && data.productList, "product");

  document.title = "Winter Bear";
  document.getElementsByTagName("META")[2].content = "Winter Bear";



  const handleNavigation = (productId) => {
    // Navigate to the specified product id
    navigate(`/product/${productId}`);
  };
  useEffect(() => {
    dispatch(fetchBannerData());
    dispatch(fetchProductData());
  }, []);

  useEffect(() => {
    const handleSticky = () => {
      const stickyElements = document.querySelectorAll('.sticky-logo-1');

      stickyElements.forEach((element) => {
        const offset = element.offsetTop;

        if (window.pageYOffset > offset) {
          element.classList.add('sticky');
        } else {
          element.classList.remove('sticky');
        }
      });
    };

    window.addEventListener('scroll', handleSticky);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleSticky);
    };
  }, []);
  return (
    <>
      <Header />
      <>
        <HomeSlider />
        <BrandSlider />

        <section className="py-5">
          <div className="container">
            <div className="heading  "> Our Collection </div>
            <div className="row">
              {data &&
                data.Categorys &&
                data.Categorys.map((item) => (
                  <div className="col-md-3 mb-4">
                    <div className="collection-box">
                      <img src={`${constant.baseUrl}${item.imageUrl}`} />
                      <h4>{item.name}</h4>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
        <section className="py-5 shop">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h3 className="theme-bg-text ">Shop by</h3>
                </div>
              </div>
            </div>

            <div className="row justify-content-center ">
              {productlist &&
                productlist.productList &&
                productlist.productList.map((item, index) => {
                  if (!item || !item.products || item.products.length === 0)
                    return null;
                  return (
                    <div key={`stickyBody${index}`} className="sticky-body row">
                      <div
                        className="col-md-10 bg-theme tile-1"
                        id={`sticky1${index}`}
                      >
                      

                        <div className="portfolio">
                          {item &&
                            item.products &&
                            item.products.slice(0, 6).map((prod, ind) => (
                              <div className="item koya">
                                {" "}
                                {/* Add appropriate classes for filtering */}
                                <img
                                
                                  src={
                                    
                                    prod.images[0] !== null &&
                                    prod.images[0] !== "image_url1"
                                      ?`${constant.baseUrl}${prod.images[0]}`  
                                      : "assets/images/Rectangle 22.png"
                                  }
                                  alt="Web Project 1"
                                />
                                <span className="text-white">
                                  {prod.name} ₹{prod.amount}
                                </span>
                                <div className="add-to-cart" onClick={() => handleNavigation(prod._id)}>
                                  <i className="fas fa-cart-plus" /> Add to Cart
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                      <div className={`col-md-2 sticky-logo-flex-${index+1} g-0 bg-transparent sticky`}>
                        <div className="sticky-logo-1">
                          <img
                            src="assets/images/client-logo.png"
                            className="w-75 d-block mx-auto"
                          />
                          <p className="sticky-logo-text mt-3">
                            View the collection
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              <div className="sticky-body container-fluid bg-white">
                <Gallery />
              </div>
            </div>
          </div>
        </section>
      </>

      <Footer />
    </>
  );
};

export default Home;
