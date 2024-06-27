import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import { useDispatch, useSelector } from "react-redux";
import constant from "../constant/constant";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/loder";
import {
  fetchProductData,
  fetchBannerData,
  fetchProductDataOld,
  fetchWishlistData,
  AddWishlistFetch,
} from "../reducer/thunks";
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
  const [subBrandlist, setSubbrand] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15; // Number of items per page
  const [selectCategory, setCategory] = useState([]);
  const [sortby, setSortby] = useState("");
  const [priceby, setpriceby] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [applyFiliter, setapplyFiliter] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 10000]); // Adjust the range as needed
  const [hoveredProductId, setHoveredProductId] = useState("");
  const userIds = localStorage.getItem("userId");
  const [isMobile, setIsMobile] = useState(false);

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

  const {
    wishlist,
    addloading: addloadingLoading,
    error: productListsErrors,
  } = useSelector((state) => state.wishlist);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProductData());
    dispatch(fetchBannerData());
    dispatch(fetchProductDataOld());
    setProductList(productlist?.products);

    if (userIds !== undefined && userIds !== null) {
      dispatch(fetchWishlistData(userIds));
    }
  }, []);
  useEffect(() => {
    if (productOldlist && productOldlist?.productList) {
      let Sub_Brand_List = productOldlist?.productList.filter((item) => {
        return item.brand._id === id;
      });
      setSubbrand(Sub_Brand_List);
      console.log(Sub_Brand_List, "Sub_Brand_List");
      // Update productList with all products from Redux state
    }
  }, [productOldlist]);

  useEffect(() => {
    if (productlist && productlist?.products) {
      let Sub_Brand_List = productlist?.products.filter((item) => {
        return item.brand_id === id;
      });
      console.log(Sub_Brand_List, "productlist");

      // Update productList with all products from Redux state
      setProductList(Sub_Brand_List);
    }
  }, [productlist]);

  useEffect(() => {
    let sortedProducts = [...productList];
    switch (sortby) {
      case "Low to High":
        sortedProducts.sort((a, b) => a.amount - b.amount);
        break;
      case "High to Low":
        sortedProducts.sort((a, b) => b.amount - a.amount);
        break;
      case "A to Z":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z to A":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "Popular":
        // Implement your logic for Popular sorting
        break;
      case "Newest":
        // Implement your logic for Newest sorting
        break;
      case "Best Selling":
        // Implement your logic for Best Selling sorting
        break;
      default:
        break;
    }
    setProductList(sortedProducts);
  }, [sortby, productList]);

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
      <Menu.ItemGroup title="Price">
        <Menu.Item onClick={() => setSortby("Low to High")}>
          Lower to Higher
        </Menu.Item>
        <Menu.Item onClick={() => setSortby("High to Low")}>
          Higher to Lower
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="Order">
        <Menu.Item onClick={() => setSortby("A to Z")}>
          Alphabetical: A to Z
        </Menu.Item>
        <Menu.Item onClick={() => setSortby("Z to A")}>
          Alphabetical: Z to A
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="Other">
        <Menu.Item onClick={() => setSortby("Popular")}>Popular</Menu.Item>
        <Menu.Item onClick={() => setSortby("Newest")}>Newest</Menu.Item>
        <Menu.Item onClick={() => setSortby("Best Selling")}>
          Best Selling
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );

  const pricemenu = (
    <Menu>
      <Menu.Item>Lower to Higher</Menu.Item>
      <Menu.Item>Higher to Lower</Menu.Item>
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
    const filteredProducts = productlist.products.filter(
      (item) => item.sub_brand_id === categoryId._id
    );
    setProductList(filteredProducts);
  };

  // Handle brand filter click
  const handleBrandClick = (brandId) => {
    setSelectedBrands((prevSelectedBrands) => {
      if (prevSelectedBrands.includes(brandId)) {
        return prevSelectedBrands.filter((id) => id !== brandId);
      } else {
        return [...prevSelectedBrands, brandId];
      }
    });
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedPriceRange([0, 10000]); // Reset to default range
  };

  // Handle category click
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    // Filter products based on the clicked category
    const filteredProducts = productlist.products.filter((item) => {
      return item.sub_brand_id === categoryId._id;
    });
    setProductList(filteredProducts);
  };

  const handleWishlists = async (prod_id) => {
    const passbody = { userId: userIds, productId: prod_id };
    await dispatch(AddWishlistFetch(passbody));
  };

  // Function to handle pagination change
  const handlePaginationChange = (page) => {
    setCurrentPage(page);
  };
  // Filter products based on selected filters
  const filterProducts = (products) => {
    return products.filter((product) => {
      if (!applyFiliter) {
        return product;
      }
      // Check if product has brand and brand._id
      const isBrandMatch =
        selectedBrands.length === 0 ||
        (product.brand_id && selectedBrands.includes(product.brand_id));

      // Ensure product has amount property
      const isPriceMatch =
        product.amount >= selectedPriceRange[0] &&
        product.amount <= selectedPriceRange[1];

      return isBrandMatch && isPriceMatch;
    });
  };

  // Calculate start and end indices of items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterProducts(productList).slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  useEffect(() => {
    // Function to check the screen width
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check screen size on initial render
    checkScreenSize();

    // Add event listener to handle window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);


  const bannerImages = isMobile
  ? subBrandlist[0]?.brand?.banner_mob_img
  : subBrandlist[0]?.brand?.banner_img;

  return (
    <>
      <Header />

      <Loader />

      <section className="py-5 shop">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-md-12">
              <div className="section-heading">
                {productOldlist && subBrandlist.length > 0 && (
                  <div className="align-items-center full-banner">
                    {/* <h3 className="theme-bg-text">{subBrandlist[0].brand.name}</h3> */}
                    <div className="row px-0 mt-2">
                      <div
                        id="carouselExample1"
                        className="carousel slide w-100"
                      >
                        <div className="carousel-inner">
                          {bannerImages?.map(
                            (img_item, index) => (
                              <div
                                key={index}
                                className={`carousel-item ${
                                  index === 0 ? "active" : ""
                                }`}
                              >
                                <picture>
                                  <source
                                    media="(min-width: 769px)"
                                    srcSet={img_item}
                                    className="w-100"
                                  />
                                  <source
                                    media="(max-width: 768px)"
                                    srcSet={img_item}
                                    className="w-100"
                                    height={260}
                                  />
                                  <img
                                    src={img_item} // Fallback for browsers that don't support <picture>
                                    alt={`Brand image ${index}`}
                                    loading="lazy"
                                    className="brand-img px-0 rounded-0"
                                  />
                                </picture>
                              </div>
                            )
                          )}
                        </div>

                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExample1"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExample1"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
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
              <h3 className="theme-bg-text ">
                {selectedCategory ? selectedCategory?.name : ""}
              </h3>
            </div>
          </div>
          <div className="col-md-12 ">
            <div className="p-0  text-center rounded mb-5">
              {productOldlist &&
                subBrandlist &&
                subBrandlist.map((item) => (
                  <div key={item.brand.id} className="col-md-12 ">
                    <div className="d-flex justify-content-center">
                      {item.subbrand.map((subItem) => (
                        <div
                          key={subItem.id}
                          className="d-flex justify-content-center flex-column  align-items-center shop-all-cards mx-5"
                          onClick={() => {
                            handleCategoryClick(subItem);
                          }}
                        >
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
              <div className="p-0 rounded mx-1">
                <button
                  class="btn p-0 text-white"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <i class="fa-solid fa-filter mt-2 text-white px-4"></i>
                </button>

                <div
                  class="offcanvas offcanvas-end px-3"
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
                      class="btn-close bg-white"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="col-md-12 ps-4">
                    <div className="row">
                      {productOldlist &&
                        productOldlist.productList &&
                        productOldlist.productList.map((item) =>
                          selectedBrands.some(
                            (selectedBrandId) =>
                              selectedBrandId === item.brand._id
                          ) ? (
                            <div
                              key={item.brand._id}
                              className="col-md-5 btn button filt-bt ms-5"
                              onClick={() => {
                                handleBrandClick(item.brand._id);
                              }}
                              style={{ backgroundColor: "white" }}
                            >
                              <div className=" mx-1">
                                <p>{item.brand.name}</p>
                              </div>

                              <div className="x-close">x</div>
                            </div>
                          ) : null
                        )}
                    </div>
                  </div>

                  <div class="offcanvas-body position-relative text-start">
                    {productOldlist &&
                      productOldlist.productList &&
                      productOldlist.productList.map((item) => (
                        <div
                          key={item.brand._idid}
                          onClick={() => {
                            handleBrandClick(item.brand._id);
                          }}
                        >
                          <p>{item.brand.name}</p>
                        </div>
                      ))}
                    <div style={{}}>
                      {/* <h5>Price</h5>
                      <Slider defaultValue={0} tooltip={{ open: true, formatter: value => `$${value * 100}` }} /> */}
                    </div>
                    <div className="position-fixed bottom-0 end-1 filter-btns-cont ">
                      <button
                        className=" text-black btn button mx-1 filter-btns"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                        onClick={clearFilters}
                      >
                        Clear All
                      </button>
                      <button
                        className="text-black btn button mx-1 filter-btns"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                        onClick={() => setapplyFiliter(!applyFiliter)}
                      >
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
            </div>
          </div>

          <div className="row justify-content-end">
            <div className="col-md-3">
              <div className="p-0 text-center rounded mx-5">
                <h3 className=" fs-2 fw-bolder text-start mb-4">Category</h3>

                {data &&
                  data.Categorys &&
                  data.Categorys.map((item) => (
                    <div
                      className={`${
                        item._id === selectedCategory?._id
                          ? ""
                          : "col-md-12 d-flex justify-content-start "
                      }`}
                      key={item._id}
                      onClick={() => navigate(`/shop/${item._id}`)}
                    >
                      <div className="align-items-start shop-all-card-item ">
                        <p>{item.name}</p>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="p-0  text-center rounded mx-5">
                <h3 className=" fs-2 fw-bolder text-start mb-4">Brands</h3>
                {productOldlist &&
                  productOldlist.productList &&
                  productOldlist.productList.slice(0, 8).map(
                    (item) =>
                      item.brand._id !== id && (
                        <div key={item.brand._id}>
                          <div
                            className="align-items-center shop-all-cards"
                            onClick={() =>
                              handleNavigationbrand(item.brand._id)
                            }
                          >
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
                      )
                  )}
                <div
                  style={{ cursor: "pointer" }}
                  className="shop-all-cards"
                  onClick={() => {
                    navigate(`/Allbrand`);
                  }}
                >
                  <p className="brand-namee">
                    More Brands <i class="fa-solid fa-arrow-right"></i>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="row col-md-12 body-card-product">
                {currentItems.map((prod, ind) => (
                  <div
                    className="col-md-3 my-1"
                    key={ind}
                    onMouseEnter={() => setHoveredProductId(prod._id)}
                    onMouseLeave={() => setHoveredProductId(null)}
                  >
                    <div class="product-card">
                      <div class="d-flex justify-content-between position-absolute top-0 start-0 w-100 z-3 px-">
                        <p>
                          {" "}
                          {prod.brand_id === "65aa405f6bfadce6d5a0ef3c" && (
                            <p className="text-white text-center  text-decoration-line-through w-100 mt-2 rounded-end bg-theme-dis">
                              40%
                            </p>
                          )}
                        </p>
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
                          className="product-shopall img-fluid"
                          alt={prod.name}
                          onClick={() => handleNavigation(prod._id)}
                        />
                        <div
                          class="text-center  border-secondary addtocart-btn px-1 py-1 mx-2"
                          onClick={() => handleNavigation(prod._id)}
                        >
                          <i class="fas fa-cart-plus me-2"></i> Add to Cart
                        </div>
                      </div>
                      <div className="text-center price-card py-2">
                        <p
                          className="font-z text-truncate"
                          style={{ maxWidth: "200px" }}
                        >
                          {prod.name}
                        </p>
                        <p className=" mb-0">₹{prod.amount}</p>

                        <div
                          class="text-center d-none border-secondary addtocart-btn px-1 py-1 mx-2"
                          onClick={() => handleNavigation(prod._id)}
                        >
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

export default Brandlist;
