import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import { useDispatch, useSelector } from "react-redux";
import constant from "../constant/constant";
import { useNavigate } from 'react-router-dom';
import { fetchProductData, fetchBannerData } from "../reducer/thunks";
import HomeSlider from "../components/BrandSlider";
import { Dropdown, Menu, Empty } from 'antd';




const ShopAll = () => {
  const dispatch = useDispatch();
  document.title = "Winter Bear";
  document.getElementsByTagName("META")[2].content = "Winter Bear";
  // States to store product list and selected category
  const [productList, setProductList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const {
    productlist,
    loading: productListLoading,
    error: productListError,
  } = useSelector((state) => state.productlist);
  const {
    data,
    loading: bannerLoading,
    error: bannerError,
  } = useSelector((state) => state.data);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProductData());
    dispatch(fetchBannerData());
    setProductList(productlist?.productList)

  }, []);
  useEffect(() => {
    if (productlist && productlist.productList) {
      console.log(productlist, "productList");
      // Update productList with all products from Redux state
      setProductList(productlist.productList);
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


  const handleNavigation = (productId) => {
    // Navigate to the specified product id
    navigate(`/product/${productId}`);
  };

  // Handle category click
  // Handle category click
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    // Filter products based on the clicked category
    const filteredProducts = productlist.productList.filter((item) => {
      return item.brand.category_id === categoryId._id;
    });
    setProductList(filteredProducts);
  };


  return (
    <>
      <Header />

      <section className="py-5 shop">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 mt-80">
              <div className="section-heading">
                <h3 className="theme-bg-text ">Shop by</h3>
              </div>
            </div>
          </div>

          <HomeSlider />

          <div className="col-md-12 ">
            <div className="section-heading">
              <h3 className="theme-bg-text ">{selectedCategory ? selectedCategory?.name : "Trending Products"}</h3>
            </div>
          </div>

          <div className="col-md-12">
            <div className="text-end d-flex justify-content-end filter-item">
              {/* <div>
                Sort by:
              </div> */}
              <Dropdown overlay={menu} trigger={['hover']} placement="bottomCenter">
                <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  Sort by:
                </div>
              </Dropdown>
              <Dropdown overlay={pricemenu} trigger={['hover']} placement="bottomCenter">
                <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  Price
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
            <div className="col-md-1">
              <div className="p-0 border text-center rounded ">
                {data &&
                  data.Categorys &&
                  data.Categorys.map((item) => (
                    <div className={`${item._id === selectedCategory?._id ? "bg-theme-color" : ""}`} key={item._id} onClick={() => handleCategoryClick(item)}>
                      <div className="align-items-center shop-all-card">
                        <img src={`${constant.baseUrl}${item.imageUrl}`} />
                        <p>{item.name}</p>
                      </div>
                    </div>
                  ))}
              </div>

            </div>

            <div className="col-md-11">
              {productList &&
                productList.map((item, index) => {
                  if (!item || !item.products || item.products.length === 0)
                    return null;
                  return (
                    <div className="row body-card-product" >
                      {item &&
                        item.products &&
                        item.products.map((prod, ind) => (
                          <div className="col-md-3 product-index" onClick={() => handleNavigation(prod._id)}>
                            <div className="product-card">
                              <img

                                src={

                                  prod.images[0] !== null &&
                                    prod.images[0] !== "image_url1"
                                    ? `${constant.baseUrl}${prod.images[0]}`
                                    : "assets/images/Rectangle 22.png"
                                }
                                alt="Web Project 1"
                              />
                              <div className="text-center price-card py-2">
                                <p className=" mb-0">
                                  ${prod.amount}
                                </p>
                                <p className="font-z">
                                  {prod.name}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}

                    </div>
                  );
                })}
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
