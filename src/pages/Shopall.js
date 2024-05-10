import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import { useDispatch, useSelector } from "react-redux";
import constant from "../constant/constant";
import { useNavigate } from "react-router-dom";
import {
  fetchProductData,
  fetchBannerData,
  fetchProductDataOld,
} from "../reducer/thunks";
import HomeSlider from "../components/BrandSlider";
import { Dropdown, Menu, Empty, Pagination } from "antd";

const ShopAll = () => {
  const dispatch = useDispatch();
  document.title = "Winter Bear";
  document.getElementsByTagName("META")[2].content = "Winter Bear";

  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);

  // States to store product list, selected category, and current page
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16; // Number of items per page

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
  }, [productlist]);

  // Define the menu
  const menu = (
    <Menu>
      <Menu.Item>Alphabetical: A to Z</Menu.Item>
      <Menu.Item>Alphabetical: Z to A</Menu.Item>
    </Menu>
  );

  const pricemenu = (
    <Menu>
      <Menu.Item>Lower to Higher</Menu.Item>
      <Menu.Item>Higher to Lower</Menu.Item>
    </Menu>
  );

  // Handle category click
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    const filteredProducts = productlist.products.filter(
      (item) => item.category_id === categoryId._id
    );
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
          <div className="row">
            <div className="col-md-12 mt-80">
              <div className="section-heading">
                <h3 className="theme-bg-text ">Shop All</h3>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="text-end d-flex justify-content-end filter-item">
              <Dropdown
                overlay={menu}
                trigger={["hover"]}
                placement="bottomCenter"
              >
                <div
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Sort by
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
                  Price
                </div>
              </Dropdown>
              <div>Popular</div>
              <div>Newest</div>
              <div>Best Selling</div>
            </div>
          </div>

          <div className="row justify-content-end">
            <div className="col-md-3">
              <div className="p-0 text-center rounded mx-5">
                <h3 className=" fs-2 fw-bolder text-start mb-4 text-uppercase">
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
                  productOldlist.productList.map((item) => (
                    <div key={item.brand.id}>
                      <div
                        className=" shop-all-cards"
                        onClick={() => handleNavigationbrand(item.brand._id)}
                      >
                        <img
                          src={item.brand.imageUrl}
                          alt={item.brand.name}
                          className="img-pop"
                        />
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
              </div>
            </div>

            <div className="col-md-9">
              <div className="row col-md-12 body-card-product">
                {currentItems.map((prod, ind) => (
                  <div className="col-md-3 mb-4">
                    <div className="item  px-3 pl-3 pt-3 border border-secondary rounded position-relative">
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
                      <div className="col-md-12 d-flex justify-content-between align-items-end mb-2">
                        <div className="d-flex justify-content-between position-absolute top-0 start-0 w-100">
                          <p className="text-white text-center   bg-theme w-25 mt-2 rounded-end">
                            <span className="text-white text-decoration-line-through">
                              {parseFloat(prod.offeramount / 100).toFixed(0)}%
                            </span>
                          </p>

                          <button className="heart-btn" id="hertbtn">
                            <i class="fa-regular fa-heart"></i>
                          </button>
                        </div>

                        <div className="d-flex justify-content-between align-items-end mt-1 col-md-12">
                          <p className="text-start prize-size col-md-8 mb-0">
                            {" "}
                            {prod.name}
                          </p>
                          <p className="text-end fw-bold col-md-4 mb-0">
                            ₹{prod.amount}
                          </p>
                        </div>
                      </div>

                      <div
                        className="text-center  border-secondary position-absolute addtocart-btn px-1 py-1 "
                        onClick={() => handleNavigation(prod._id)}
                      >
                        <i className="fas fa-cart-plus" /> Add to Cart
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
