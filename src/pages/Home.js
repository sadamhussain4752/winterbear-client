import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Gallery from "../components/Gallery";
import HomeSlider from "../components/HomeSlider";
import BrandSlider from "../components/BrandSlider";
import { fetchBannerData, fetchProductDataOld } from "../reducer/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import './innerstyle.css';


// new style



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
    productOldlist,
    loading: productListLoading,
    error: productListError,
  } = useSelector((state) => state.productOldlist);
  console.log(productOldlist, "product");

  document.title = "Winter Bear";
  document.getElementsByTagName("META")[2].content = "Winter Bear";



  const handleNavigation = (productId) => {
    // Navigate to the specified product id
    navigate(`/product/${productId}`);
  };
  useEffect(() => {
    dispatch(fetchBannerData());
    dispatch(fetchProductDataOld());
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
        {data && data?.banners && <HomeSlider />}
        {data && data?.Brands && <BrandSlider />}


        <section className="py-5">
          <div className="container">
            <div className="heading fs-1 fw-bold"> Category </div>
            <div className="row">
              {data &&
                data.Categorys &&
                data.Categorys.map((item) => (
                  <div className="col-md-3 mb-4 mt-2">
                    <div className="collection-box" onClick={() => navigate(`/shop`)}>
                      <div className="image-container">
                        <img src={`${item.imageUrl}`} />
                        <h4>{item.name}</h4>
                      </div>
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
                  <h3 className="theme-bg-text ">Shop All</h3>
                </div>
              </div>
            </div>

            <div className="row justify-content-center ">
              {productOldlist &&
                productOldlist.productList &&
                productOldlist.productList?.slice(0, 7).map((item, index) => {
                  if (!item || !item.products || item.products.length === 0)
                    return null;
                  return (
                    <div key={`stickyBody${index}`} className="sticky-body row">

                      <div className={`col-md-2 sticky-logo-flex-${index + 1} g-0 bg-transparent sticky`}>
                        <div className="sticky-logo-1">
                          <img
                            src={`${item.brand.imageUrl}`}
                            className="w-75 d-block mx-auto"
                          />
                       
                        </div>
                      </div>

                      <div
                        className="col-md-10 shop-by tile-1"
                        id={`sticky1${index}`}
                      >
                        <div className="container-fluid ">
                          <ul
                            className="nav nav-pills  nav-fill shop-by-tab"
                            id="pills-tab"
                            role="tablist"
                          >
                            {item?.subbrand.map((itemname) => (
                              <li className="nav-item py-1" role="presentation">
                                <img src={`${itemname.imageUrl}`} className="w-25" />
                                <button
                                  className="nav-link  fw-semibold  position-relative rounded-pill"
                                  id="pills-koya-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-koya"
                                  type="button"
                                  role="tab"
                                  aria-controls="pills-koya"
                                  aria-selected="true"
                                >
                                  {itemname.name}
                                </button>
                              </li>
                            ))}

                          </ul>

                        </div>

                        <div className="portfolio row">
                          {item &&
                            item.products &&
                            item.products.slice(0, 8).map((prod, ind) => (
                              <div className="item col-md-3 px-3 pl-3 pt-3 border border-secondary rounded position-relative">

                                <img

                                  src={

                                    prod.images[0] !== null &&
                                      prod.images[0] !== "image_url1"
                                      ? `${prod.images[0]}`
                                      : "assets/images/Rectangle 22.png"
                                  }
                                  className=""
                                  alt="Web Project 1"
                                />
                                <div className="col-md-12 d-flex justify-content-between align-items-center mb-4">
                                  <p className="text-white text-center position-absolute top-0 start-0 text-decoration-line-through bg-theme w-25 mt-2 rounded-end">
                                    {parseFloat(prod.offeramount / 100).toFixed(0)}%
                                  </p>
                                  <div className="d-flex justify-content-between align-items-center mt-5 col-md-12">
                                    <p className="text-start prize-size col-md-8"> {item.brand.name} @{prod.name}
                                    </p>
                                    <p className="text-end fw-bold col-md-4">₹{prod.amount}</p>


                                  </div>

                                </div>



                                <div className="text-center text-black bg-transparent border border-secondary rounded-pill position-absolute bottom-0 mb-2 px-1 "
                                  onClick={() => handleNavigation(prod._id)}>
                                  <i className="fas fa-cart-plus " /> Add to Cart
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>

                    </div>
                  );
                })}
              {/* <div className="sticky-body container-fluid bg-white">
                <Gallery />
              </div> */}
            </div>
          </div>
        </section>
      </>

      <Footer />
    </>
  );
};

export default Home;
