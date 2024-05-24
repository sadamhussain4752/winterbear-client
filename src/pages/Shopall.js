import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import { useDispatch, useSelector } from "react-redux";
import constant from "../constant/constant";
import { useNavigate, useParams } from 'react-router-dom';
import HeartButton from "../components/heartbutton";

import {
  fetchProductData,
  fetchBannerData,
  fetchProductDataOld,
} from "../reducer/thunks";
import HomeSlider from "../components/BrandSlider";
import { Dropdown, Menu, Empty, Pagination, Slider } from "antd";

const ShopAll = () => {
  const dispatch = useDispatch();
  document.title = "Winter Bear";
  document.getElementsByTagName("META")[2].content = "Winter Bear";

  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [selectCategory, setCategory] = useState([]);
  const [sortby, setSortby] = useState('');
  const [priceby, setpriceby] = useState('');
  const { id } = useParams();


  // States to store product list, selected category, and current page
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15; // Number of items per page

  const { productlist, loading: productListLoading } = useSelector(
    (state) => state.productlist
  );
  const { productOldlist, loading: productListLoadings } = useSelector(
    (state) => state.productOldlist
  );
  const { data, loading: bannerLoading } = useSelector((state) => state.data);

  // Fetch product data when component mounts
  useEffect(() => {
    dispatch(fetchProductData());
    dispatch(fetchBannerData());
    dispatch(fetchProductDataOld());
  }, [dispatch]);

  // Set productList when productlist changes
  useEffect(() => {
    if (productlist && productlist.products) {
      setProductList(productlist.products);
    }

  }, [productlist, id]);
  // Handle category selection based on URL parameter
  useEffect(() => {
    if (id && id !== "0" && productlist && productlist.products) {
      const filteredProducts = data.Categorys.filter(
        (item) => item._id === id
      );
      console.log(filteredProducts);
      if (filteredProducts.length > 0) {
        handleCategoryClick(filteredProducts[0]);

      }
    }
  }, [id, productlist]);



  // Define the menu
  const menu = (
    <Menu>
      <Menu.Item onClick={() => {
        setSortby("A to Z")
      }}>Alphabetical: A to Z</Menu.Item>
      <Menu.Item onClick={() => {
        setSortby("Z to A")
      }}>Alphabetical: Z to A</Menu.Item>
    </Menu>
  );

  const pricemenu = (
    <Menu>
      <Menu.Item onClick={() => {
        setpriceby("Low to High")
      }}>Lower to Higher</Menu.Item>
      <Menu.Item onClick={() => {
        setpriceby("High to Low")
      }}>Higher to Lower</Menu.Item>
    </Menu>
  );

  // Handle category click
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    const filteredProducts = productlist.products.filter(
      (item) => item.category_id === categoryId._id
    );
    console.log(categoryId, "categoryId");
    setProductList(filteredProducts);
    setCurrentPage(1); // Reset current page to 1 when category changes
  };

  const handleSubbrandClick = (categoryId) => {
    setSelectedCategory(categoryId);
    const filteredProducts = productlist.products.filter(
      (item) => item.sub_brand_id === categoryId._id
    );
    setProductList(filteredProducts);
  };

  // Function to handle navigation to brand page
  const handleNavigationbrand = (productId) => {
    navigate(`/brand/${productId}`);
  };

  // Function to handle navigation to product details page
  const handleNavigation = (productId) => {
    navigate(`/product/${productId}`);
  };

  // Function to handle pagination change
  const handlePaginationChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate start and end indices of items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <Header />

      <section className="py-5 shop">
        <div className="container-fluid">
          {!selectedCategory && <div className="row">
            <div className="col-md-12 mt-80">
              <div className="section-heading">
                <h3 className="theme-bg-text ">Shop All</h3>
              </div>
            </div>
          </div>}

          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                {selectedCategory && selectedCategory?.category_img_desktop && (
                  <div className="align-items-center">

                    <img
                      className="w-100"
                      src={selectedCategory?.category_img_desktop}
                      alt={selectedCategory?.category_img_desktop}
                    />
                    {/* <p>{item.brand.name}</p> */}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="text-end d-flex justify-content-end filter-item">
              <div className="p-0">
                <button
                  class="btn p-0 text-white"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <i class="fa-solid fa-filter mt-2"></i>
                </button>

                <div
                  class="offcanvas offcanvas-end"
                  tabindex="-1"
                  id="offcanvasRight"
                  aria-labelledby="offcanvasRightLabel"
                >
                  <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">
                      Filter BY Brands
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="offcanvas-body position-relative text-start">
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
              <div>Popular</div>
              <div>Newest</div>
              <div>Best Selling</div>
            </div>
          </div>

          <div className="row justify-content-end">
            <div className="col-md-3 cat-brand">
              <div className="p-0 text-center rounded mx-5">
                <h3 className=" fs-2 fw-bolder text-start mb-4 text-uppercase mt-5">
                  Category
                </h3>
                {data &&
                  data.Categorys &&
                  data.Categorys.map((item) => (
                    <div
                      className={`${item._id === selectedCategory?._id
                        ? ""
                        : "col-md-12 d-flex justify-content-start "
                        }`}
                      key={item._id}
                      onClick={() => handleCategoryClick(item)}
                    >
                      <div className="align-items-start shop-all-card-item ">
                        <p className="">{item.name}</p>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="p-0  text-center rounded mx-5">
                <h3 className=" fs-2 fw-bolder text-start mb-4 text-uppercase  mt-5">
                  Brands
                </h3>

                {productOldlist &&
                  productOldlist.productList &&
                  productOldlist.productList.slice(0, 8).map((item) => (
                    <div key={item.brand.id}>
                      <div
                        className=" shop-all-cards"
                        onClick={() => handleNavigationbrand(item.brand._id)}
                      >
                        {/* <img
                          src={item.brand.imageUrl}
                          alt={item.brand.name}
                          className="img-pop"
                        /> */}
                        <p className="brand-namee">{item.brand.name}</p>

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
                  <p className="brand-namee">More Brands <i class="fa-solid fa-arrow-right"></i></p>

                  </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="row col-md-12 body-card-product">
                {currentItems.map((prod, ind) => (
                  <div
                    className="col-md-3 my-1"
                    key={ind}
                  onClick={() => handleNavigation(prod._id)}
                  >
                    <div class="product-card">
                      <div class="d-flex justify-content-between position-absolute top-0 start-0 w-100 z-3 px-">
                        <p> {prod.brand_id === "65aa405f6bfadce6d5a0ef3c" && <p class="text-white text-center  text-decoration-line-through bg-theme w-25 mt-2 rounded-end">
                          {parseFloat(prod.offeramount / 100).toFixed(0)}%

                        </p>}

                        </p>
                        <HeartButton />
                      </div>
                      <div className="home-product-in">
                        <img
                          src={
                            prod.images[0] !== null &&
                              prod.images[0] !== "image_url1"
                              ? `${prod.images[0]}`
                              : "assets/images/Rectangle 22.png"
                          }
                          className="product-shopall img-fluid"
                          alt={prod.name}
                        />
                        <div class="text-center  border-secondary addtocart-btn px-1 py-1 mx-2" onClick={() => handleNavigation(prod._id)}>
                          <i class="fas fa-cart-plus me-2"></i> Add to Cart
                        </div>
                      </div>
                      <div className="text-center price-card py-2">

                        <p className="font-z text-truncate" style={{ maxWidth: '200px' }}>{prod.name}</p>
                        <p className=" mb-0">₹{prod.amount}</p>

                        <div class="text-center d-none border-secondary addtocart-btn px-1 py-1 mx-2" onClick={() => handleNavigation(prod._id)}>
                          <i class="fas fa-cart-plus me-2"></i> Add to Cart
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-4">
                {productList.length > 0 && (
                  <Pagination
                    current={currentPage}
                    pageSize={itemsPerPage}
                    total={productList.length}
                    onChange={handlePaginationChange}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Gallery />
      <Footer />
    </>
  );
};

export default ShopAll;
