import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import { useDispatch, useSelector } from "react-redux";
import constant from "../constant/constant";
import { useNavigate, useParams } from 'react-router-dom';
import { fetchProductData, fetchBannerData, fetchProductDataOld } from "../reducer/thunks";
import HomeSlider from "../components/BrandSlider";
import { Dropdown, Menu, Empty } from 'antd';




const Categorylist = () => {
  const dispatch = useDispatch();
  document.title = "Winter Bear";
  const { id } = useParams();

  document.getElementsByTagName("META")[2].content = "Winter Bear";
  // States to store product list and selected category
  const [productList, setProductList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subBrandlist, setSubbrand] = useState([])

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

      let Sub_Brand_List =  data.Categorys.filter((item) => {
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
        return item.category_id === id
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
          <div className="row">
            <div className="col-md-12 mt-80">
              <div className="section-heading">
                {productOldlist && subBrandlist.length > 0 && (
                  
                  <div className="align-items-center full-banner">
                  <h3 className="theme-bg-text">{subBrandlist[0].brand.name}</h3>

                  <img src={subBrandlist[0].brand.imageUrl} alt={subBrandlist[0].brand.name} />
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
                        <div key={subItem.id} className="align-items-center shop-all-cards mx-5" onClick={()=>{
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
            <div className="col-md-3">
            <div className="p-0 text-center rounded mx-5">
              <h3 className=" fs-2 fw-bolder text-start mb-4">Category</h3>

                {data &&
                  data.Categorys &&
                  data.Categorys.map((item) => (
                    <div className={`${item._id === selectedCategory?._id ? "" : "col-md-12 d-flex justify-content-start "}`} key={item._id} onClick={() => handleCategoryClick(item)}>
                      <div className="align-items-start shop-all-card-item ">
                        <p>{item.name}</p>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="p-0  text-center rounded">
                {productOldlist && productOldlist.productList && productOldlist.productList.map((item) =>  (
                  item.brand._id !== id &&
                  <div key={item.brand._id}>
                    <div className="align-items-center shop-all-cards" onClick={() => handleNavigationbrand(item.brand._id)}>
                      <img src={item.brand.imageUrl} alt={item.brand.name} />
                    </div>
                    <div>
                      {item.subbrand.map((subItem) => (
                        <div key={subItem.id} className="align-items-center shop-all-cards" onClick={() => handleSubbrandClick(subItem)}>
                          <div className="d-flex justify-content-start align-items-center text-center mx-5">
                            <img src={subItem.imageUrl} alt={subItem.name} />
                            <p className="mt-3 mx-2">{subItem.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-9">
              {<div className="row col-md-12 body-card-product" >
                {productList &&
                  productList &&
                  productList.map((prod, ind) => (
                    <div className="col-md-4 rounded-border mt-3" onClick={() => handleNavigation(prod._id)}>
                      <div class="product-card">
                        <img

                          src={

                            prod.images[0] !== null &&
                              prod.images[0] !== "image_url1"
                              ? `${prod.images[0]}`
                              : "assets/images/Rectangle 22.png"
                          }
                          className="rounded border"
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

export default Categorylist;
