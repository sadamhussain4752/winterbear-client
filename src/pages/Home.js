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
  GetAddCardProductById,
  GetCardProductById,
} from "../reducer/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HeartButton from "../components/heartbutton";
import "./innerstyle.css";
import { message } from "antd";
import SplashScreen from "../components/SplashScreen";
import SnsSl from "../components/SnsSl";


const Home2 = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visibleProducts, setVisibleProducts] = useState({}); // Initial number of products to display for each brand
  const userId = localStorage.getItem("userId");
  const [hoveredProductId, setHoveredProductId] = useState("");

  const { data, loading: bannerLoading, error: bannerError } = useSelector(
    (state) => state.data
  );
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

  const success = (items) => {
    messageApi.open({
      type: "loading",
      content: items,
      duration: 0,
    });
    // Dismiss manually and asynchronously
    setTimeout(messageApi.destroy, 2500);
  };

  const handleNavigation = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleWishlists = async (prod_id) => {
    if (userId) {
      const passbody = { userId: userId, productId: prod_id };
      await dispatch(AddWishlistFetch(passbody));
    } else {
      message.error(`Please log in to Wishlist the product.`);
    }
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
    success(`Successfully Added to Cart: ${id.name}`);
    if (userId) {
      let addcarditem = {
        userId: userId,
        productId: id._id,
        quantity: "1",
      };
      await dispatch(AddCardProductById(addcarditem));
      await dispatch(GetAddCardProductById(userId));

      // message.success(`Successfully Added to Cart: ${id.name}`);
    } else {
      const passbody = {
        userId: userId,
        productId: id._id,
        quantity: 1, // Use number for quantity
      };

      let getlistcarts = localStorage.getItem("cardstore");
      let addtocarts = [];

      if (getlistcarts) {
        addtocarts = JSON.parse(getlistcarts);
      }

      // Check if the product already exists in the cart
      let productExists = false;
      addtocarts = addtocarts.map((item) => {
        if (item.productId === id._id) {
          productExists = true;
          return {
            ...item,
            quantity: parseInt(item.quantity) + 1,
          };
        }
        return item;
      });

      // If the product does not exist, add it to the cart
      if (!productExists) {
        addtocarts.push(passbody);
      }

      localStorage.setItem("cardstore", JSON.stringify(addtocarts));

      if (getlistcarts) {
        const productIds = { productIds: addtocarts };
        dispatch(GetCardProductById(productIds));
      }

      // message.success(`Successfully Added to Cart: ${id.name}`);
    }
  };

  const imageData = [
    { id: 1, src: "../assets/images/look-1.png", alt: "Look 1" },
    { id: 2, src: "../assets/images/look-2.png", alt: "Look 2" },
    { id: 3, src: "../assets/images/look-1.png", alt: "Look 1" },
    { id: 4, src: "../assets/images/look-2.png", alt: "Look 2" },
    { id: 5, src: "../assets/images/look-1.png", alt: "Look 1" }
  ];

  const loadAllProducts = (brandId) => {
    navigate(`/brand/${brandId}`);
  };
  if (!data) {
    return <SplashScreen />;
  }

  return (
    <>
      {contextHolder}
      <Header />
      {data && data.banners && <HomeSlider />}
      {/* <div className="pt-md-5">{data && data.Brands &&
       <BrandSlider />
       }</div> */}
     <section>
      <div className="container">
        
        <div className="row d-flex justify-content-center my-4 cl-blue py-3">
          {imageData.map((image) => (
            <div key={image.id} className="col-lg-2 col-12 text-center">
              <img className="w-75" src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
        
        <h1 className="text-center">CHOOSE YOUR STYLE</h1>
        
        <div className="row d-flex justify-content-center my-4 cl-blue py-3">
          {imageData.map((image) => (
            <div key={image.id} className="col-lg-2 col-12 text-center">
              <img className="w-75" src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
    

      <section>{/* <SnsSl /> */}</section>

      {/* <section className="py-5 shop">
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
                          loading="lazy"
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
                          loading="lazy"
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
                                loading="lazy"
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
                      <div className="portfolio mx-lg-3 ml-3 row flex-nowrap overflow-auto">
  {item.products
    .slice(0, visibleProducts[item.brand._id] || 8)
    .map((prod, ind) => (
      <div
        className="item col-lg-3 col-6 position-relative mb-3 home-product px-0 px-4"
        onMouseEnter={() => setHoveredProductId(prod._id)}
        onMouseLeave={() => setHoveredProductId(null)}
        key={ind}
      >
        <div className="home-product-in">
          <img
            src={
              hoveredProductId === prod._id &&
              prod.images.length > 1 &&
              prod.images[1]
                ? prod.images[1]
                : prod.images[0] !== null && prod.images[0] !== "image_url1"
                ? prod.images[0]
                : "assets/images/Rectangle 22.png"
            }
            className="product-shopby img-fluid"
            alt={prod.name}
            loading="lazy"
            onClick={() => handleNavigation(prod._id)}
          />

          <div
            className="text-center border-secondary addtocart-btn px-1 py-1"
            style={{ cursor: "pointer" }}
            onClick={() => addcard(prod)}
          >
            <i className="fas fa-cart-plus me-2" /> Add to Cart
          </div>
        </div>

        <div className="col-md-12 d-flex justify-content-between align-items-end mb-2">
          <div className="d-flex justify-content-between position-absolute top-0 start-0 w-100 px-4 px-lg-0">
            {item.brand._id === "65aa405f6bfadce6d5a0ef3c" && (
              <p className="text-white text-center text-decoration-line-through w-25 mt-2 rounded-end bg-theme-dis">
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
            </button>
          </div>

          <div className="mt-4 col-md-12 price-prodname">
            <p className="text-start prize-size mb-0">{prod.name}</p>
            <p className="prod-pric mb-0">₹{prod.amount}</p>
          </div>
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
      </section> */}

      <section className="py-5 shop">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h1 className="text-center">NEW ARRIVAL</h1>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {productOldlist &&
              productOldlist.productList &&
              productOldlist.productList.slice(0, 1).map((item, index) => {
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
                          loading="lazy"
                        />
                      </div>
                    </div>
                    {/* <div className="mb-3" id="sticky2">
                      <div
                        className="sticky-logo-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate(`/brand/${item.brand._id}`)}
                      >
                        <img
                          src={`${item.brand.imageUrl}`}
                          className="d-block mx-auto sticky-log2"
                          alt={item.brand.name}
                          loading="lazy"
                        />
                      </div>
                    </div> */}
                    <div
                      className="container-fluid shop-by tile-1 px-lg-4 px-0"
                      id={`sticky1${index}`}
                    >
                      {/* <div className="container-fluid">
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
                                loading="lazy"
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
                      </div> */}
                      <div className="portfolio mx-lg-3 ml-3 row flex-nowrap overflow-auto">
                        {item.products
                          .slice(0, visibleProducts[item.brand._id] || 8)
                          .map((prod, ind) => (
                            <div
                              className="item1 col-lg-3 col-6 position-relative mb-3 home-product px-0 px-4"
                              onMouseEnter={() => setHoveredProductId(prod._id)}
                              onMouseLeave={() => setHoveredProductId(null)}
                              key={ind}
                            >
                              <div className="home-product-in">
                                <img
                                  src={
                                    hoveredProductId === prod._id &&
                                    prod.images.length > 1 &&
                                    prod.images[1]
                                      ? prod.images[1]
                                      : prod.images[0] !== null &&
                                        prod.images[0] !== "image_url1"
                                      ? prod.images[0]
                                      : "assets/images/Rectangle 22.png"
                                  }
                                  className="product-shopby img-fluid"
                                  alt={prod.name}
                                  loading="lazy"
                                  onClick={() => handleNavigation(prod._id)}
                                />

                                <div
                                  className="text-center border-secondary addtocart-btn px-1 py-1"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => addcard(prod)}
                                >
                                  <i className="fas fa-cart-plus me-2" /> Add to
                                  Cart
                                </div>
                              </div>

                              <div className="col-md-12 d-flex justify-content-between align-items-end mb-2">
                                <div className="d-flex justify-content-between position-absolute top-0 start-0 w-100 px-4 px-lg-0">
                                  {item.brand._id ===
                                    "65aa405f6bfadce6d5a0ef3c" && (
                                    <p className="text-white text-center text-decoration-line-through w-25 mt-2 rounded-end bg-theme-dis">
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
                                  </button>
                                </div>

                                <div className="mt-4 col-md-12 price-prodname">
                                  <p className="text-start prize-size mb-0">
                                    {prod.name}
                                  </p>
                                  <p className="prod-pric mb-0">
                                    ₹{prod.amount}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>

                      {/* {!visibleProducts[item.brand._id] ? (
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
                          <div
                            onClick={() =>
                              loadMoreOrLessProducts(item.brand._id)
                            }
                          >
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
                      )} */}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container-fluid">
          <h1 className="text-center">TOP CATEGORIES </h1>
          <div className="category-slider">
            {data &&
              data.Categorys &&
              data.Categorys.map((item) => (
                <div className="category-item rounded-circle" key={item._id}>
                  <div
                    className="collection-box-1 d-block mx-auto"
                    onClick={() => navigate(`/shop/${item._id}`)}
                  >
                    <div className="image-container-1">
                      <img
                        src={`${item.imageUrl}`}
                        className="mb-0"
                        alt={item.name}
                        loading="lazy"
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h1 className="text-start ms-lg-3">BEST SELLER</h1>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {productOldlist &&
              productOldlist.productList &&
              productOldlist.productList.slice(0, 1).map((item, index) => {
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
                          loading="lazy"
                        />
                      </div>
                    </div>
                    {/* <div className="mb-3" id="sticky2">
                      <div
                        className="sticky-logo-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate(`/brand/${item.brand._id}`)}
                      >
                        <img
                          src={`${item.brand.imageUrl}`}
                          className="d-block mx-auto sticky-log2"
                          alt={item.brand.name}
                          loading="lazy"
                        />
                      </div>
                    </div> */}
                    <div
                      className="container-fluid shop-by tile-1 px-lg-4 px-0"
                      id={`sticky1${index}`}
                    >
                      {/* <div className="container-fluid">
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
                                loading="lazy"
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
                      </div> */}
                      <div className="portfolio mx-lg-3 ml-3 row flex-nowrap overflow-auto">
                        {item.products
                          .slice(0, visibleProducts[item.brand._id] || 8)
                          .map((prod, ind) => (
                            <div
                              className="item1 col-lg-3 col-6 position-relative mb-3 home-product px-0 px-4"
                              onMouseEnter={() => setHoveredProductId(prod._id)}
                              onMouseLeave={() => setHoveredProductId(null)}
                              key={ind}
                            >
                              <div className="home-product-in">
                                <img
                                  src={
                                    hoveredProductId === prod._id &&
                                    prod.images.length > 1 &&
                                    prod.images[1]
                                      ? prod.images[1]
                                      : prod.images[0] !== null &&
                                        prod.images[0] !== "image_url1"
                                      ? prod.images[0]
                                      : "assets/images/Rectangle 22.png"
                                  }
                                  className="product-shopby img-fluid"
                                  alt={prod.name}
                                  loading="lazy"
                                  onClick={() => handleNavigation(prod._id)}
                                />

                                <div
                                  className="text-center border-secondary addtocart-btn px-1 py-1"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => addcard(prod)}
                                >
                                  <i className="fas fa-cart-plus me-2" /> Add to
                                  Cart
                                </div>
                              </div>

                              <div className="col-md-12 d-flex justify-content-between align-items-end mb-2">
                                <div className="d-flex justify-content-between position-absolute top-0 start-0 w-100 px-4 px-lg-0">
                                  {item.brand._id ===
                                    "65aa405f6bfadce6d5a0ef3c" && (
                                    <p className="text-white text-center text-decoration-line-through w-25 mt-2 rounded-end bg-theme-dis">
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
                                  </button>
                                </div>

                                <div className="mt-4 col-md-12 price-prodname">
                                  <p className="text-start prize-size mb-0">
                                    {prod.name}
                                  </p>
                                  <p className="prod-pric mb-0">
                                    ₹{prod.amount}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>

                      {/* {!visibleProducts[item.brand._id] ? (
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
                          <div
                            onClick={() =>
                              loadMoreOrLessProducts(item.brand._id)
                            }
                          >
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
                      )} */}
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
