import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import { useParams } from "react-router-dom";
import { ProductUserById, AddCardProductById } from "../../src/reducer/thunks";
import { useDispatch, useSelector } from "react-redux";
import constant from "../constant/constant";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Nav, Tab } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import MultiCarousel from "../components/MultiCarousel";
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
    GetAddcardRes ,
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
      <OwlCarousel className="owl-theme" loop margin={10} items={1} dots={false} nav={false}>
      {product.images &&
        product.images.map((image, index) => (
          <div key={index} className="item">
            <img
              src={`${constant.baseUrl}${image}`}
              alt={`Product Image ${index}`}
            />
          </div>
        ))}
    </OwlCarousel>
    <div className="d-flex justify-content-center">
    {product && product?.images &&  <MultiCarousel images={product?.images}/>}

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
      <div className="row mt-5" key={product.id}>
        <div className="col-md-5">{renderProductImages()}</div>
        <div className="col-md-7">
          <h3>{product.name}</h3>
          <p>Amount: ${product.amount}</p>
          <p>{product.description}</p>
          <div className="text-start">
            <p className="d-flex justify-content-start align-items-center">
              <button className="btn btn-primary me-2 bg-cl-tr">+</button>
              <span>1</span>
              <button className="btn btn-primary me-2 bg-cl-tr">-</button>
            </p>
            <button
              className="btn button mx-3"
              onClick={() => addcard(product._id)}
            >
              Add to Cart
            </button>
            <button className="btn button" onClick={() => buyproduct(product._id)}>Buy Now</button>
            <p className="mt-3">SKU: {product.sku}</p>
            <p>CATEGORIES: FILES, STATIONERY</p>
            <p>AVAILABILITY: {product.availability}</p>
          </div>
        </div>
        <div className="col-md-12 text-center mt-4">
          {/* Product Tabs */}
          <Tab.Container defaultActiveKey="description">
            <Nav variant="tabs" className="justify-content-center">
              <Nav.Item>
                <Nav.Link eventKey="description">Description</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="reviews">Reviews (0)</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="description">
                {/* Description Tab Content */}
                <p>{product.description}</p>
              </Tab.Pane>
              <Tab.Pane eventKey="reviews">
                {/* Reviews Tab Content */}
                <p>No Reviews</p>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
        <div className="col-md-12 text-start mt-4">
          <div className="text-start">
            <p className="mt-3">Reviews</p>
            <p>There are no reviews yet.</p>
            <p>
              Only logged in customers who have purchased this product may leave
              a review.
            </p>
          </div>
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
        {productlist?.productList[0].products?.slice(0, 6).map((prod, ind) => (
          <div key={prod.categoryId} className="portfolio">
            <div key={ind} className="item">
              <img
                src={
                  prod.images[0] !== null && prod.images[0] !== "image_url1"
                    ? `${constant.baseUrl}${prod.images[0]}`
                    : "assets/images/Rectangle 22.png"
                }
                alt={`Web Project ${ind + 1}`}
              />
              <span className="text-white">
                {prod.name} ₹{prod.amount}
              </span>
              <div
                className="add-to-cart"
                onClick={() => fetchProductbyId(prod._id)}
              >
                <i className="fas fa-cart-plus" /> Add to Cart
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    );
  };

  const renderImageProducts = () => {
    const product = GetProductIdResponse?.Products || {};

    return (
      <OwlCarousel className="owl-theme"  loop margin={10} items={1}>
        {product.images &&
          product.images.map((image, index) => (
            <div key={index} className="item">
              <img
                src={`${constant.baseUrl}${image}`}
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
          <section className="py-5">
            <div className="container-fluid">
              <div className="text-center">
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
