import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Testimonals from "../components/Testimonals";
import "./Awards.css";
import BrandSlider from "../components/BrandSlider";
import { useDispatch, useSelector } from "react-redux";
import { fetchBannerData } from "../reducer/thunks";
import { useNavigate } from "react-router-dom";


const AllBrand = () => {
  const navigate = useNavigate();

  const [productsByLetter, setProductsByLetter] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBannerData());
  }, []);

  const {
    data,
    loading: bannerLoading,
    error: bannerError,
  } = useSelector((state) => state.data);

  useEffect(() => {
    if (data && data?.Brands) {
      // Create an object to hold arrays for each letter A to Z
      const productsByLetter = {};

      // Initialize arrays for each letter
      for (let i = 65; i <= 90; i++) { // ASCII codes for A-Z
        const letter = String.fromCharCode(i);
        productsByLetter[letter] = [];
      }

      // Sort products by name
      const sortedProducts = data?.Brands.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });

      // Push products into respective arrays based on starting letter
      sortedProducts.forEach(product => {
        const firstLetter = product.name[0].toUpperCase();
        if (productsByLetter[firstLetter]) {
          productsByLetter[firstLetter].push(product);
        }
      });

      setProductsByLetter(productsByLetter);
    }
  }, [data?.Brands]);


  const backgroundImageStyle = {
    background: 'url("assets/images/bear.jpeg")',
    backgroundSize: "cover",
    postion: "relative",
  };


  document.title = "Awards";
  document.getElementsByTagName("META")[2].content = "Awards";
  return (
    <>
      <Header />

      <section className="shop px-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h3 className="theme-bg-text">BRAND DIRECTORY</h3>
              </div>
            </div>
          </div>
          {data && data?.Brands && <BrandSlider />}


          <div className="row py-3 ">
            {/* <h5 className="text-left fw-bold fs-3 mt-3">Brand Directory</h5> */}
            <ul className="nav nav-pills nav-fill border-bottom">
              <li className="nav-item " id="">
                <a className="nav-link text-dark fw-bold mb-3" href="#">
                  #
                </a>
              </li>
              {Object.entries(productsByLetter).map(([letter, products]) => (
                products.length > 0 ?  (
                  <li className="nav-item " id={"#"+letter.toUpperCase()}>
                  <a className="nav-link text-dark fw-bold" href={"#"+letter.toUpperCase()}>
                    {letter.toUpperCase()}
                  </a>
                </li>
                ) : (
                  <li className="nav-item disabled" id={"#"+letter.toUpperCase()}>
                  <a className="nav-link text-dark fw-bold" href={"#"+letter.toUpperCase()}>
                    {letter.toUpperCase()}
                  </a>
                </li>
                )
              ))}
              
            </ul>

            <div id="#" className="row py-3 border-bottom Name#">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">#</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >

                      </a>
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >

                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {Object.entries(productsByLetter).map(([letter, products]) => (
                products.length > 0 && (
                  <div key={letter} id={letter.toUpperCase()} className="row py-3 border-bottom Name-A">
                    <div className="offset-md-1 col-md-1 fw-bold fs-3">{letter}</div>
                    <div className="col-md-10">
                      <div className="row">
                        {products.map((product, index) => (
                          <div key={product._id} className="col-md-4 brand-img-cont" onClick={()=>{
                            navigate(`/brand/${product._id}`);

                          }}>
                            <p>
                              <a
                                className="text-decoration-none text-dark small m-0"
                                href="#"
                              >
                                <div className="brand-innimg-cont">
                                  <img className="icons-img" src={product.imageUrl} />
                                </div>
                              </a>
                              <p className="brand-img-name">
                                {product.name}
                              </p>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>

          </div>
        </div>
      </section>

      <Testimonals />

      <Footer />
    </>
  );
};

export default AllBrand;