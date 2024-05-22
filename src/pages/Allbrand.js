import React,{useEffect,useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Testimonals from "../components/Testimonals";
import "./Awards.css";
import BrandSlider from "../components/BrandSlider";
import { useDispatch, useSelector } from "react-redux";
import { fetchBannerData } from "../reducer/thunks";


const AllBrand = () => {
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
              <li className="nav-item " id="#b">
                <a className="nav-link text-dark fw-bold" href="#a">
                  A
                </a>
              </li>
              <li className="nav-item " id="#c">
                <a className="nav-link text-dark fw-bold" href="#b">
                  B
                </a>
              </li>
              <li className="nav-item " id="#d">
                <a className="nav-link text-dark fw-bold" href="#c">
                  C
                </a>
              </li>

              <li className="nav-item " id="#d">
                <a className="nav-link  text-dark fw-bold">D</a>
              </li>
              <li className="nav-item " id="#e">
                <a className="nav-link  text-dark fw-bold" href="#">
                  E
                </a>
              </li>
              <li className="nav-item " id="#f">
                <a className="nav-link  text-dark fw-bold" href="#">
                  F
                </a>
              </li>
              <li className="nav-item " id="#g">
                <a className="nav-link text-dark fw-bold" href="#">
                  G
                </a>
              </li>

              <li className="nav-item " id="#">
                <a className="nav-link text-dark fw-bold" href="#h">
                  H
                </a>
              </li>
              <li className="nav-item " id="#i">
                <a className="nav-link text-dark fw-bold" href="#i">
                  I
                </a>
              </li>
              <li className="nav-item " id="#j">
                <a className="nav-link text-dark fw-bold" href="#j">
                  J
                </a>
              </li>

              <li className="nav-item " id="#k">
                <a className="nav-link text-dark fw-bold " href="#"k>
                  K
                </a>
              </li>
              <li className="nav-item " id="#l">
                <a className="nav-link text-dark fw-bold" href="#l">
                  L
                </a>
              </li>
              <li className="nav-item " id="#m">
                <a className="nav-link text-dark fw-bold" href="#m">
                  M
                </a>
              </li>
              <li className="nav-item " id="#n">
                <a className="nav-link text-dark fw-bold" href="#n">
                  N
                </a>
              </li>
              <li className="nav-item " id="#o">
                <a className="nav-link text-dark fw-bold" href="#o">
                  O
                </a>
              </li>
              <li className="nav-item " id="#p">
                <a className="nav-link text-dark fw-bold" href="#p">
                  P
                </a>
              </li>
              <li className="nav-item " id="#q">
                <a className="nav-link text-dark fw-bold" href="#q">
                  Q
                </a>
              </li>

              <li className="nav-item " id="#r">
                <a className="nav-link text-dark fw-bold mb-3" href="#r">
                  R
                </a>
              </li>
              <li className="nav-item " id="#s">
                <a className="nav-link text-dark fw-bold" href="#s">
                  S
                </a>
              </li>
              <li className="nav-item " id="#t">
                <a className="nav-link text-dark fw-bold" href="#t">
                  T
                </a>
              </li>

              <li className="nav-item " id="#u">
                <a className="nav-link text-dark fw-bold" href="#u">
                  U
                </a>
              </li>
              <li className="nav-item " id="#v">
                <a className="nav-link text-dark fw-bold" href="#v">
                  V
                </a>
              </li>
              <li className="nav-item " id="#w">
                <a className="nav-link text-dark fw-bold" href="#w">
                  W
                </a>
              </li>
              <li className="nav-item " id="#x">
                <a className="nav-link text-dark fw-bold" href="#x">
                  X
                </a>
              </li>
              <li className="nav-item " id="#y">
                <a className="nav-link text-dark fw-bold" href="#y">
                  Y
                </a>
              </li>
              <li className="nav-item " id="#z">
                <a className="nav-link text-dark fw-bold" href="#z">
                  Z
                </a>
              </li>
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
                  <div key={product._id} className="col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                                               <img className="icons-img" src={product.imageUrl}/>

                        {product.name}
                      </a>
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