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
import { message } from "antd";
import SplashScreen from "../components/SplashScreen";

const Home3 = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  // States to handle dynamic data
  const [blogs, setBlogs] = useState([]);
  const [events, setEvents] = useState([]);
  const [storeLocations, setStoreLocations] = useState([]);
  const [hoveredProductId, setHoveredProductId] = useState("");

  // Redux state selectors
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

    if (userId) {
      dispatch(fetchWishlistData(userId));
    }

    // Fetch dynamic content such as blogs, events, and store locations
    fetchBlogs();
    fetchEvents();
    fetchStoreLocations();
  }, [dispatch, userId]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blogs"); // Fetch from API or data source
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/events");
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  };

  const fetchStoreLocations = async () => {
    try {
      const response = await fetch("/api/store-locations");
      const data = await response.json();
      setStoreLocations(data);
    } catch (error) {
      console.error("Failed to fetch store locations:", error);
    }
  };

  const success = (items) => {
    messageApi.open({
      type: "loading",
      content: items,
      duration: 0,
    });
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

      if (!productExists) {
        addtocarts.push(passbody);
      }

      localStorage.setItem("cardstore", JSON.stringify(addtocarts));

      if (getlistcarts) {
        const productIds = { productIds: addtocarts };
        dispatch(GetCardProductById(productIds));
      }
    }
  };

  if (!data) {
    return <SplashScreen />;
  }

  return (
    <>
      {contextHolder}
      <Header />

      <section className="py-5 mt-4">
        <div className="container-fluid">
          <h1 className="text-start">EVENTS & BLOGS</h1>
          <div className="category-slider1">
            <div className="d-flex justify-content-between">
              <h5 className="my-3">LATEST BLOG POST</h5>
              <h5 className="my-3">
                <a className="link-underline-secondary text-dark">Explore blog posts</a>
              </h5>
            </div>

            {/* Dynamically display blog posts */}
            {blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <div key={index} className="w-100">
                  <img className="w-100" src={blog.image} alt={blog.title} />
                  <p>{blog.title}</p>
                </div>
              ))
            ) : (
              // <p>No blog posts available</p>
              <img className="w-100 " src="assets/images/new-ban.png" />
            )}
          </div>
        </div>
      </section>

      <section className="pb-5 mt-4">
        <div className="container-fluid">
          <h1 className="text-start">NEW STORE LOCATIONS</h1>
          <div className="category-slider1">
            <div className="d-flex justify-content-between">
              <h5 className="my-3">NEW STORE LOCATION</h5>
              <h5 className="my-3">
                <a className="link-underline-secondary text-dark">View more events</a>
              </h5>
            </div>

            {/* Dynamically display store locations */}
            {storeLocations.length > 0 ? (
              storeLocations.map((store, index) => (
                <div key={index} className="w-100">
                  <img className="w-100" src={store.image} alt={store.name} />
                  <p>{store.name}</p>
                </div>
              ))
            ) : (
              // <p>No store locations available</p>
              <img className="w-100" src="assets/images/new-ban1.png" />
            )}
          </div>
        </div>
      </section>

      <Footer className="pt-3" />
    </>
  );
};

export default Home3;
