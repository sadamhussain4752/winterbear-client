import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import { useParams } from "react-router-dom";
import { ProductUserById, AddCardProductById, RatingProductUserById } from "../../src/reducer/thunks";
import { useDispatch, useSelector } from "react-redux";
import constant from "../constant/constant";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Nav, Tab } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { message, Rate } from "antd";
import MultiCarousel from "../components/MultiCarousel";
import {
  HeartOutlined,
  ShareAltOutlined
} from "@ant-design/icons";
import Copyimage from "../constant/images/Copy.svg";
import Facebookimage from "../constant/images/Facebook.svg";
import Pinterestimage from "../constant/images/Pinterest.svg";
import Twitterimage from "../constant/images/Twitter.svg";
const options = {
  // loop: true,
  // center: true,
  items: 2,
  margin: 0,
  autoplay: false,
  dots: false,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
};


const Product = () => {
  let userId = localStorage.getItem("userId");
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    ProductIdloading: getOrderUserLoading,
    ProductIderror: ProductIdError,
    GetProductId: GetProductIdResponse,
  } = useSelector((state) => state.GetProductId);

  const {
    productlist,
    loading: productListLoading,
    error: productListError,
  } = useSelector((state) => state.productlist);

  const {
    RatingProductRes: RatingResponce,
    loading: productLoading,
    error: productError,
  } = useSelector((state) => state.RatingProductRes);

  const {
    GetAddcardRes,
    addcardIdloading: addcardIdloading,
  } = useSelector((state) => state.GetAddcardRes);
  const [productId, setProductId] = useState(id);

  useEffect(() => {
    // Fetch product details based on the productId
    fetchProductbyId(productId);

    if (GetAddcardRes) {
      message.success("Success", 5); // Display success message for 5 seconds
      console.log(GetAddcardRes);
    }
  }, [dispatch, productId]);

  const fetchProductbyId = (productI) => {
    dispatch(ProductUserById(productI));
    dispatch(RatingProductUserById(productId));

  };

  const handleCopyUrl = () => {
    const currentUrl = window.location.href; // Get the current URL

    if (!navigator.clipboard) {
      // Clipboard API not supported
      console.error('Clipboard API not supported.');
      // You can provide a fallback mechanism or message to the user here
      return;
    }

    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        console.log('URL copied successfully:', currentUrl);
        message.success('URL copied to clipboard');
        // You can show a success message or perform other actions here
      })
      .catch((error) => {
        console.error('Error copying URL:', error);
        message.error('Failed to copy URL');
        // Handle the error, such as showing an error message to the user
      });
  };

  const handleNavigation = (newProductId) => {
    // Update the productId state when navigation occurs
    setProductId(newProductId);
    // Navigate to the specified product id
    // navigate(`/product/${newProductId}`);
  };

  const renderProductImages = () => {
    const product = GetProductIdResponse?.Products || {};

    return (
      <>
        <OwlCarousel className="owl-theme"  loop margin={10} items={1} dots={false} nav={false}>
          {product?.images &&
            product?.images.map((image, index) => (
              <div key={index} className="item">
                <img
                  src={`${image}`}
                  alt={`Product Image ${index}`}
                  className="product-img-main rounded"
                />
              </div>
            ))}
        </OwlCarousel>
        <div className="d-flex justify-content-center">
          {product && product?.images &&product?.images.length > 1 && <MultiCarousel images={product?.images} />}

        </div>

        {/* <OwlCarousel className="owl-theme" loop margin={10} items={4} dots={false} nav={product.images && product.images.length > 4}>
  {product.images &&
    product.images.map((image, index) => (
      <div key={index} className="item">
        <img
          src={`${constant.baseUrl}${image}`}
          alt={`Product Image ${index}`}
        />
      </div>
    ))}
</OwlCarousel> */}




      </>

    );
  };

  const addcard = (id) => {
    let addcarditem = {
      userId: userId,
      productId: id,
      quantity: "1",
    };
    dispatch(AddCardProductById(addcarditem))
  };

  const buyproduct = async (id) => {
    let addcarditem = {
      userId: userId,
      productId: id,
      quantity: "1",
    };
    await dispatch(AddCardProductById(addcarditem))
    navigate('/cart')
  };


  const renderProductDetails = () => {
    const product = GetProductIdResponse?.Products || {};

    return (
      <div className="row mt-5 product-des" key={product.id}>
        <div className="col-md-5">{renderProductImages()}</div>
        <div className="col-md-7">
          <div className="row col-md-12">
            <Rate disabled defaultValue={5} className="col-md-4" />
            <p className="col-md-4">4.7 Star Rating</p>
            <p className="col-md-4">(0 User feedback)</p>
          </div>
          <h3>{product.name}</h3>
          <div className="col-md-12 row sku-tag mt-3">
            <p className="col-md-6">SKU: {product.sku}</p>
            <p className="col-md-6">Availability: <span className="text-success"> {product.availability}</span></p>
          </div>
          <div className="sku-tag">
            <p>CATEGORIES: FILES, STATIONERY</p>

          </div>
          <div className="col-md-12 sku-tag row mt-3">
            <p className="price-amount col-md-2">₹{product.amount}</p>
            <p className="col-md-2 text-decoration-line-through">₹ {product.offeramount}</p>
            <p className="col-md-2 offer-per">{parseFloat(product.offeramount / product.amount).toFixed(0)}% OFF</p>


          </div>

          <hr />

          <div className="text-start col-md-12 row mt-3">
            <div className="col-md-3 ">
              <p className="d-flex justify-content-center align-items-center border qty-button">
                <button className="btn btn-primary me-2 bg-cl-tr">+</button>
                <span>1</span>
                <button className="btn btn-primary me-2 bg-cl-tr ">-</button>
              </p>
            </div>
            <div className="col-md-3">
              <button className="btn button buy-now-tag" onClick={() => buyproduct(product._id)}>Buy Now</button>

            </div>
            <div className="col-md-4">
              <button
                className="btn button buy-now-tag text-black bg-transparent border border-secondary"
                onClick={() => addcard(product._id)}
              >
                Add to Cart
              </button>
            </div>


          </div>
          <div className="d-flex justify-content-between mt-5 sku-tag">
            <p className="w-50 d-flex">
              <HeartOutlined />

              Add to Wishlist
            </p>
            <p className="w-50 d-flex">
              Share product:{<div className="mx-1" alt={`Product Image`} style={{ cursor: "pointer" }} onClick={handleCopyUrl}>
                <ShareAltOutlined />
              </div>}
              {<img src={Facebookimage} className="mx-1" alt={`Product Image`} />}{" "}
              {<img src={Twitterimage} className="mx-1" alt={`Product Image`} />}{" "}
              {<img src={Pinterestimage} className="mx-1" alt={`Product Image`} />}
            </p>
          </div>
        </div>
        <div className="col-md-12 text-center mt-80 prod-bot-tab">
          {/* Product Tabs */}
          <Tab.Container defaultActiveKey="description" className="tab-discription">
            <Nav variant="tabs" className="justify-content-center border-0 border tab-border-color">
              <Nav.Item>
                <Nav.Link className="tab-text" eventKey="description">Description</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tab-text" eventKey="additional">Additional information</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tab-text" eventKey="specification">Specification</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tab-text" eventKey="reviews">Reviews</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="p-4">
              <Tab.Pane eventKey="description">
                {/* Description Tab Content */}
                <div className="text-start col-md-12 row mt-5">
                  <div className="col-md-5 sku-tag feature-item ">
                    <h4>Description</h4>
                    <p>{product.description}</p>
                    <p>The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.</p>
                  </div>
                  <div className="col-md-4 sku-tag feature-item ">
                    <h4>Feature</h4>
                    <p className="pt-3"><img  src={require("../constant/images/Medal.png")} className="pe-3" /> Free 1 Year Warranty</p>
                    <p className="pt-3">
                    <img  src={require("../constant/images/Truck.png")} className="pe-3" /> 
                      Free Shipping & Fasted Delivery</p>
                    <p className="pt-3">
                    <img  src={require("../constant/images/Handshake.png")} className="pe-3" /> 
                      100% Money-back guarantee</p>
                    <p className="pt-3">
                    <img  src={require("../constant/images/customer-support.png")} className="pe-3" /> 
                      24/7 Customer support</p>
                    <p className="pt-3">
                    <img  src={require("../constant/images/CreditCard.png")} className="pe-3" /> 
                      Secure payment method</p>

                  </div>
                  <div className="col-md-3 sku-tag feature-item ">
                    <h4>Shipping Information</h4>
                    <p><strong>Courier:</strong>  2 - 4 days, free shipping</p>
                    <p><strong>Local Shipping:</strong>  up to one week, ₹19.00</p>
                    <p><strong>UPS Ground Shipping:</strong>  4 - 6 days, ₹29.00</p>
                    <p><strong>Unishop Global Export:</strong> 3 - 4 days, ₹39.00</p>
                    <p>Secure payment method</p>
                  </div>

                </div>

              </Tab.Pane>
              <Tab.Pane eventKey="additional">

                {/* Reviews Tab Content */}
                <div className="col-md-12 text-start ">
                  <div className="text-start">
                    <p className="mt-3">Reviews</p>
                    <p>There are no reviews yet.</p>
                    <p>
                      Only logged in customers who have purchased this product may leave
                      a review.
                    </p>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="specification">
                {/* Reviews Tab Content */}
                <div className="col-md-12 text-start ">
                  <div className="text-start">
                    <p className="mt-3">Reviews</p>
                    <p>There are no reviews yet.</p>
                    <p>
                      Only logged in customers who have purchased this product may leave
                      a review.
                    </p>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="reviews">
                {/* Reviews Tab Content */}
                <div className="col-md-12 text-start ">
                  <div className="text-start">
                    <p className="mt-3">Reviews</p>

                    {RatingResponce && RatingResponce?.ratings && RatingResponce.ratings.map((item) => (
                      <div key={item.id}>
                        <Rate value={item.rating} style={{
                          color: "Green"
                        }} />
                        <p>{item.comment}</p>
                        {/* Add other properties you want to display here */}
                      </div>
                    ))}

                    <p>
                      Only logged in customers who have purchased this product may leave
                      a review.
                    </p>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>

      </div>
    );
  };

  const renderRelatedProducts = () => {
    return (
      <OwlCarousel
        className="owl-theme"
        margin={10}
        autoplay
        dots={false}
        responsive={{
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 5,
          },
        }}
      >
        {productlist?.products?.slice(0, 10).map((prod, ind) => (
          <div key={prod.categoryId} className="portfolio ">
            <div key={ind} className="body-card-product">
              <img
                src={
                  prod.images[0] !== null && prod.images[0] !== "image_url1"
                    ? `${prod.images[0]}`
                    : "assets/images/Rectangle 22.png"
                }
                alt={`Web Project ${ind + 1}`}
              />
              <span className="text-black ">
                {prod.name} ₹{prod.amount}
              </span>

            </div>
            <div
              className="btn button buy-now-tag text-black bg-transparent border border-secondary"
              onClick={() => fetchProductbyId(prod._id)}
            >
              <i className="fas fa-cart-plus" /> Add to Cart
            </div>
          </div>
        ))}
      </OwlCarousel>
    );
  };

  const renderImageProducts = () => {
    const product = GetProductIdResponse?.Products || {};

    return (
      <OwlCarousel className="owl-theme" loop margin={10} items={1}>
        {product.images &&
          product.images.map((image, index) => (
            <div key={index} className="item">
              <img
                src={`${image}`}
                alt={`Product Image ${index}`}
              />
            </div>
          ))}
      </OwlCarousel>
    );
  };


  return (
    <>
      <Header />
      <section className="py-5 mt-80">
        <div className="container">
          {renderProductDetails()}
          <section className="bg-theme-color mt-5 p-3">
            <div className="container-fluid">
              <div className="text-center mt-5 mb-5">
                <h3 className="fw-bolder">Related Products</h3>
              </div>
              {renderRelatedProducts()}
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Product;
