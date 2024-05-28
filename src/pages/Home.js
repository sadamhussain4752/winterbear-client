import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeSlider from "../components/HomeSlider";
import BrandSlider from "../components/BrandSlider";
import {
  fetchBannerData,
  fetchProductDataOld,
  AddWishlistFetch,
  fetchWishlistData,
  AddCardProductById,
} from "../reducer/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HeartButton from "../components/heartbutton";
import "./innerstyle.css";
import {message} from "antd"
const Home2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visibleProducts, setVisibleProducts] = useState({}); // Initial number of products to display for each brand
  const userId = localStorage.getItem("userId");

  const {
    data,
    loading: bannerLoading,
    error: bannerError,
  } = useSelector((state) => state.data);
  const {
    wishlist,
    addloading: addloadingLoading,
    error: productListErrors,
  } = useSelector((state) => state.wishlist);
  const {
    productOldlist,
    loading: productListLoading,
    error: productListError,
  } = useSelector((state) => state.productOldlist);

  document.title = "Winter Bear";
  document.getElementsByTagName("META")[2].content = "Winter Bear";

  useEffect(() => {
    dispatch(fetchBannerData());
    dispatch(fetchProductDataOld());
    if (userId !== undefined && userId !== null) {
      dispatch(fetchWishlistData(userId));
    }
  }, [dispatch, userId]);

  const handleNavigation = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleWishlists = async (prod_id) => {
    const userIds = localStorage.getItem("userId");
    const passbody = { userId: userIds, productId: prod_id };
    await dispatch(AddWishlistFetch(passbody));
  };

  useEffect(() => {
    const handleSticky = () => {
      const stickyElements = document.querySelectorAll(".sticky-logo-2");

      stickyElements.forEach((element) => {
        const offset = element.offsetTop;

        if (window.pageYOffset > offset) {
          element.classList.add("sticky");
        } else {
          element.classList.remove("sticky");
        }
      });
    };

    window.addEventListener("scroll", handleSticky);

    return () => {
      window.removeEventListener("scroll", handleSticky);
    };
  }, []);

  const loadMoreOrLessProducts = (brandId) => {
    setVisibleProducts((prevState) => {
      const currentCount = prevState[brandId] || 8;
      let newState = { ...prevState };
      
      if (currentCount + 4 <= 12) {
        newState[brandId] = currentCount + 4;
      } else {
        const { [brandId]: _, ...rest } = prevState;
        newState = rest;
      }
  
      return newState;
    });
  };
  
  const addcard = async (id) => {
    let addcarditem = {
      userId: userId,
      productId: id._id,
      quantity: "1",
    };
   await dispatch(AddCardProductById(addcarditem))
   message.success(`Succesfully Add the Cart ${id.name}`)
  };

  const loadAllProducts = (brandId) => {
    navigate(`/brand/${brandId}`);
  };

  return (
    <>
      <Header />
      {data && data.banners && <HomeSlider />}
      <div className="pt-md-5">{data && data.Brands && <BrandSlider />}</div>
      <section className="py-5">
        <div className="container">
          <div className="heading">Shop By Category</div>
          <div className="row">
            {data &&
              data.Categorys &&
              data.Categorys.map((item) => (
                <div className="col-lg-3 col-6 mt-2" key={item._id}>
                  <div
                    className="collection-box-1 d-block mx-auto"
                    onClick={() => navigate(`/shop/${item._id}`)}
                  >
                    <div className="image-container-1">
                      <img
                        src={`${item.imageUrl}`}
                        className="mb-0"
                        alt={item.name}
                      />
                      <h4>{item.name}</h4>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section className="py-5 shop">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h3 className="theme-bg-text">SHOP By BRAND</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {productOldlist &&
              productOldlist.productList &&
              productOldlist.productList.slice(0, 8).map((item, index) => {
                if (!item || !item.products || item.products.length === 0)
                  return null;
                return (
                  <div key={`stickyBody${index}`} className="row">
                    <div className="col-md-2 g-0 bg-transparent sticky d-none">
                      <div className="sticky-logo-2">
                        <img
                          src={`${item.brand.imageUrl}`}
                          className="w-75 d-block mx-auto"
                          alt={item.brand.name}
                        />
                      </div>
                    </div>
                    <div className="mb-3" id="sticky2">
                      <div
                        className="sticky-logo-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate(`/brand/${item.brand._id}`)}
                      >
                        <img
                          src={`${item.brand.imageUrl}`}
                          className="d-block mx-auto sticky-log2"
                          alt={item.brand.name}
                        />
                      </div>
                    </div>
                    <div
                      className="container-fluid shop-by tile-1 px-lg-4 px-0"
                      id={`sticky1${index}`}
                    >
                      <div className="container-fluid">
                        <ul
                          className="nav nav-pills nav-fill shop-by-tab py-3 mb-4"
                          id="pills-tab"
                          role="tablist"
                        >
                          {item.subbrand.map((itemname) => (
                            <li
                              className="nav-item py-0"
                              role="presentation"
                              key={itemname._id}
                              onClick={() =>
                                navigate(`/brand/${item.brand._id}`)
                              }
                            >
                              <img
                                src={`${itemname.imageUrl}`}
                                className="shopby-top-icoimg"
                                alt={itemname.name}
                              />
                              <button
                                className="nav-link fw-semibold py-0 position-relative rounded-pill"
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
                      <div className="portfolio mx-3 ml-3 row">
                        {item.products
                          .slice(0, visibleProducts[item.brand._id] || 8)
                          .map((prod, ind) => (
                            <div className="item col-lg-3 position-relative mb-3 home-product px-0"                                   
                            // onClick={() => handleNavigation(prod._id)}
                            >
                              <div className="home-product-in">
                                <img
                                  src={
                                    prod.images[0] !== null &&
                                    prod.images[0] !== "image_url1"
                                      ? `${prod.images[0]}`
                                      : "assets/images/Rectangle 22.png"
                                  }
                                  className="product-shopby img-fluid"
                                  alt="Web Project 1"
                                  onClick={() => handleNavigation(prod._id)}
                                />

                                <div
                                  className="text-center  border-secondary addtocart-btn px-1 py-1 "
                                  style={{ cursor: "pointer" }}
                                  onClick={() => addcard(prod)}
                                >
                                  <i className="fas fa-cart-plus me-2" /> Add to
                                  Cart
                                </div>
                              </div>

                              <div className="col-md-12 d-flex justify-content-between align-items-end mb-2">
                                <div className="d-flex justify-content-between position-absolute top-0 start-0 w-100">
                                  {item.brand._id ===
                                    "65aa405f6bfadce6d5a0ef3c" && (
                                    <p className="text-white text-center  text-decoration-line-through w-25 mt-2 rounded-end bg-theme-dis">
                                      40%
                                    </p>
                                  )}

                                  <div></div>

                                  <button
                                    className="heart-btn"
                                    id="hertbtn"
                                    onClick={() => {
                                      handleWishlists(prod._id);
                                    }}
                                  >
                                    {wishlist?.wishlistItems?.some(
                                      (item) => item.productId === prod._id
                                    ) ? (
                                      <HeartButton isActives={true} />
                                    ) : (
                                      <HeartButton isActives={false} />
                                    )}
                                    {/* <Rate
                              character={<HeartOutlined />  }
                              count={1}
                            /> */}
                                  </button>
                                </div>

                                <div className=" mt-4 col-md-12 price-prodname">
                                  <p className="text-start prize-size mb-0 ">
                                    {" "}
                                    {item.brand.name} @{prod.name}
                                  </p>
                                  <p className="prod-pric mb-0 ">
                                    ₹{prod.amount}
                                  </p>
                                </div>
                              </div>
                              <div
                                className="text-center d-none border-secondary addtocart-btn px-1 py-1 "
                                style={{ cursor: "pointer" }}

                                onClick={() => handleNavigation(prod._id)}
                              >
                                <i className="fas fa-cart-plus me-2" /> Add to
                                Cart
                              </div>
                            </div>
                          ))}
                      </div>
                      {!visibleProducts[item.brand._id] ? (
                        <div
                          className="text-center view-more"
                          style={{ cursor: "pointer" }}
                          onClick={() => loadMoreOrLessProducts(item.brand._id)}
                        >
                          View More <br />
                          <i className="fa-solid fa-angle-down"></i>
                        </div>
                      ) : (
                        <div
                          className="text-center view-more"
                          style={{ cursor: "pointer" }}
                        >
                          <div onClick={() => loadMoreOrLessProducts(item.brand._id)}>
                            View Less <br />
                            <i className="fa-solid fa-angle-up"></i>
                          </div>

                          <div
                            className="btn text-decoration-none btn-outline-dark fs-6"
                            onClick={() => loadAllProducts(item.brand._id)}
                          >
                            View All <br />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home2;
