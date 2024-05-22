import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import { useDispatch, useSelector } from "react-redux";
import constant from "../constant/constant";
import { useNavigate, useParams } from 'react-router-dom';
import { fetchProductData, fetchBannerData, fetchProductDataOld } from "../reducer/thunks";
import HomeSlider from "../components/BrandSlider";
import { Dropdown, Menu, Empty, Pagination, Slider } from "antd";

import HeartButton from "../components/heartbutton";





const Brandlist = () => {
  const dispatch = useDispatch();
  document.title = "Winter Bear";
  const { id } = useParams();

  document.getElementsByTagName("META")[2].content = "Winter Bear";
  // States to store product list and selected category
  const [productList, setProductList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subBrandlist, setSubbrand] = useState([])


  const [selectCategory, setCategory] = useState([]);
  const [sortby, setSortby] = useState('');
  const [priceby, setpriceby] = useState('');

  const {
    productlist,
    loading: productListLoading,
    error: productListError,
  } = useSelector((state) => state.productlist);

  const {
    productOldlist,
    loading: productListLoadings,
    error: productListErrors,
  } = useSelector((state) => state.productOldlist);
  console.log(productOldlist, "productlist");

  const {
    data,
    loading: bannerLoading,
    error: bannerError,
  } = useSelector((state) => state.data);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProductData());
    dispatch(fetchBannerData());
    dispatch(fetchProductDataOld());
    setProductList(productlist?.products);


  }, []);
  useEffect(() => {
    if (productOldlist && productOldlist?.productList) {

      let Sub_Brand_List = productOldlist?.productList.filter((item) => {
        return item.brand._id === id
      })
      setSubbrand(Sub_Brand_List)
      console.log(Sub_Brand_List, "Sub_Brand_List");
      // Update productList with all products from Redux state
    }
  }, [productOldlist]);

  useEffect(() => {
    if (productlist && productlist?.products) {
      let Sub_Brand_List = productlist?.products.filter((item) => {
        return item.brand_id === id
      })
      console.log(Sub_Brand_List, "productlist");


      // Update productList with all products from Redux state
      setProductList(Sub_Brand_List);
    }
  }, [productlist]);



  // useEffect(() => {
  //   if (productList.length > 0) {
  //     console.log(productList,"productList");
  //     // Update productList with all products from Redux state
  //     setProductList(productList);
  //   }
  // }, [productlist]);
  // Define the menu
  const menu = (
    <Menu>
      <Menu.Item>
        Alphabetical: A to Z
      </Menu.Item>
      <Menu.Item>
        Alphabetical: Z to A
      </Menu.Item>

    </Menu>
  );

  const pricemenu = (
    <Menu>
      <Menu.Item>
        Lower to Higher
      </Menu.Item>
      <Menu.Item>
        Higher to Lower
      </Menu.Item>

    </Menu>
  );

  // Function to handle navigation to brand page
  const handleNavigationbrand = (productId) => {
    navigate(`/brand/${productId}`);
    window.location.reload();

  };

  const handleNavigation = (productId) => {
    // Navigate to the specified product id
    navigate(`/product/${productId}`);
  };

  const handleSubbrandClick = (categoryId) => {
    setSelectedCategory(categoryId);
    const filteredProducts = productlist.products.filter((item) => item.sub_brand_id === categoryId._id);
    setProductList(filteredProducts);
  };

  // Handle category click
  // Handle category click
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    // Filter products based on the clicked category
    const filteredProducts = productlist.products.filter((item) => {
      return item.sub_brand_id === categoryId._id;
    });
    setProductList(filteredProducts);
  };


  return (
    <>
      <Header />

      <section className="py-5 shop">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-md-12">
              <div className="section-heading">
                {productOldlist && subBrandlist.length > 0 && (

                  <div className="align-items-center full-banner">

                    {/* <h3 className="theme-bg-text">{subBrandlist[0].brand.name}</h3> */}
                    <div className="row px-0 mt-2">

                      <div id="carouselExample1" className="carousel slide w-100">


                        <div className="carousel-inner">

                          {subBrandlist[0]?.brand.banner_img.map((img_item, isIndex) => {

                            return (

                              <div className={`carousel-item  ${isIndex === 0 ? 'active' : ''}`}>
                                <img src={img_item} alt={img_item} className="brand-img px-0 rounded-0" />
                              </div>

                            )

                          })}

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample1" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample1" data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>



                    </div>
                    {/* <p>{item.brand.name}</p> */}
                  </div>
                )}
              </div>
            </div>
          </div>


          <div className="col-md-12 ">
            <div className="section-heading">
              <h3 className="theme-bg-text ">{selectedCategory ? selectedCategory?.name : ""}</h3>
            </div>
          </div>
          <div className="col-md-12 ">
            <div className="p-0  text-center rounded mb-5">
              {productOldlist && subBrandlist && subBrandlist.map((item) => (
                <div key={item.brand.id} className="col-md-12 ">

                  <div className="d-flex justify-content-center">
                    {item.subbrand.map((subItem) => (
                      <div key={subItem.id} className="d-flex justify-content-center flex-column  align-items-center shop-all-cards mx-5"
                        onClick={() => {
                          handleCategoryClick(subItem)
                        }}>
                        <img src={subItem.imageUrl} alt={subItem.name} />
                        <p>{subItem.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div className="col-md-12">
            <div className="text-end d-flex justify-content-end filter-item">
              <div className="p-0">
                <button
                  className="btn p-0 text-white"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight1"
                  aria-controls="offcanvasRight1"
                >
                  <i className="fa-solid fa-filter mt-2"></i>
                </button>

                <div
                  className="offcanvas offcanvas-end"
                  tabindex="-1"
                  id="offcanvasRight1"
                  aria-labelledby="offcanvasRight1Label"
                >
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRight1Label">
                      Filter BY Brands
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body position-relative text-start">
                    {productOldlist &&
                      productOldlist.productList &&
                      productOldlist.productList.map((item) => (
                        <div key={item.brand.id}>
                          <p>{item.brand.name}</p>
                        </div>
                      ))}
                    <div style={{

                    }}>
                      {/* <h5>Price</h5>
                      <Slider defaultValue={0} tooltip={{ open: true, formatter: value => `$${value * 100}` }} /> */}

                    </div>
                    <div className="position-absolute bottom-0 end-0">
                      <button className=" text-black btn button mx-1">
                        {" "}
                        Clear All
                      </button>
                      <button className="text-black btn button mx-1">
                        {" "}
                        Apply
                      </button>
                    </div>

                  </div>
                </div>
              </div>
              <Dropdown
                overlay={menu}
                trigger={["hover"]}
                placement="bottomCenter"
              >
                <div
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  {sortby !== "" ? sortby : "Sort by"}
                </div>
              </Dropdown>
              <Dropdown
                overlay={pricemenu}
                trigger={["hover"]}
                placement="bottomCenter"
              >
                <div
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  {priceby !== "" ? priceby : "Price"}

                </div>
              </Dropdown>
              <div>
                Popular
              </div>
              <div>
                Newest
              </div>
              <div>
                Best Selling
              </div>
            </div>
          </div>


          <div className="row justify-content-end">
            <div className="col-md-3">
              <div className="p-0 text-center rounded mx-5">
                <h3 className=" fs-2 fw-bolder text-start mb-4">Category</h3>

                {data &&
                  data.Categorys &&
                  data.Categorys.map((item) => (
                    <div className={`${item._id === selectedCategory?._id ? "" : "col-md-12 d-flex justify-content-start "}`} key={item._id} onClick={() => navigate(`/shop/${item._id}`)}>
                      <div className="align-items-start shop-all-card-item ">
                        <p>{item.name}</p>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="p-0  text-center rounded mx-5">
                <h3 className=" fs-2 fw-bolder text-start mb-4">Brands</h3>
                {productOldlist && productOldlist.productList && productOldlist.productList.map((item) => (
                  item.brand._id !== id &&
                  <div key={item.brand._id}>
                    <div className="align-items-center shop-all-cards" onClick={() => handleNavigationbrand(item.brand._id)}>
                      <p>{item.brand.name}</p>
                    </div>
                    {/* <div>
                      {item.subbrand.map((subItem) => (
                        <div key={subItem.id} className="align-items-center shop-all-cards" onClick={() => handleSubbrandClick(subItem)}>
                          <div className="d-flex justify-content-start align-items-center text-center mx-5">
                            <img src={subItem.imageUrl} alt={subItem.name} />
                            <p className="mt-3 mx-2">{subItem.name}</p>
                          </div>
                        </div>
                      ))}
                    </div> */}
                  </div>
                ))}
                <div className="shop-all-cards" onClick={()=>{
                        navigate(`/Allbrand`);

                  }}>
                  <p className="brand-namee">More Brands</p>

                  </div>
              </div>
            </div>

            <div className="col-md-9">
              {<div className="row col-md-12 body-card-product" >
                {productList &&
                  productList &&
                  productList.map((prod, ind) => prod.images !== undefined && (
                    <div className="col-md-3 rounded-border mt-3 "
                    //  onClick={() => handleNavigation(prod._id)}
                    >
                      <div className="product-card">
                        <div className="d-flex justify-content-between position-absolute top-0 start-0 w-100 z-3">


                          < p> {prod.brand_id === "65aa405f6bfadce6d5a0ef3c" && <p className="text-white text-center  text-decoration-line-through bg-theme w-25 mt-2 rounded-end">
                            {parseFloat(prod.offeramount / 100).toFixed(0)}%

                          </p>}
                          </p>

                          <HeartButton />
                        </div>
                        <div className="home-product-in">
                          <img
                            src={prod && prod?.images[0] &&
                              prod.images[0] !== null && prod.images[0] !== undefined &&
                              prod.images[0] !== "image_url1"
                              ? `${prod.images[0]}`
                              : "assets/images/Rectangle 22.png"
                            }
                            className=""
                            alt="Web Project 1"
                          />
                        </div>
                        <div className="text-center price-card py-2">
                          <p className="font-z text-truncate" style={{ maxWidth: '200px' }}>{prod.name}</p>
                          <p className=" mb-0 pro-price">₹{prod.amount}</p>

                          <div className="text-center  border-secondary addtocart-btn px-1 py-1 mx-2" onClick={() => handleNavigation(prod._id)}>
                            <i className="fas fa-cart-plus me-2"></i> Add to Cart
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

              </div>}
            </div>

          </div>
        </div>
      </section>

      <Gallery />
      <Footer />
    </>
  );
};

export default Brandlist;
