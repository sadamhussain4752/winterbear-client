import React,{useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Testimonals from "../components/Testimonals";
import "./Awards.css";
import BrandSlider from "../components/BrandSlider";
import { useDispatch, useSelector } from "react-redux";
import { fetchBannerData } from "../reducer/thunks";


const AllBrand = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBannerData());
  }, []);

  const backgroundImageStyle = {
    background: 'url("assets/images/bear.jpeg")',
    backgroundSize: "cover",
    postion: "relative",
  };

  const {
    data,
    loading: bannerLoading,
    error: bannerError,
  } = useSelector((state) => state.data);
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
            <div id="A" className="row py-3 border-bottom Name-A">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">A</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Aladdin
                      </a>
                   
                     {" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Agust D
                      </a>
                   
                     {" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                       Avengers
                      </a>
                   
                     {" "}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                       Attack on Titan
                      </a>
                   
                     {" "}
                    </p>
                  </div>
                 
                </div>
              </div>
            </div>
            <div id="b" className="row py-3 border-bottom Name-B">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">B</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Baby Shark
                      </a>{" "}
                    </p>
                  </div>

                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                   Black Clover
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Beauty and the beast
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                     Barbie
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                       Banitte
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                       Bandai Namco
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Brigerton
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        BlackPink
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                       Black Widow
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                    Black Panther
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                       BTS
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="c" className="row py-3 border-bottom Name-C">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">C</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                       Chainsaw Man
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                       Captain America
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Cinnamoroll
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Cindrella
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="d" className="row py-3 border-bottom Name-G">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">d</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Deathnote
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                     Dark Horse
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                   Disney Princess
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                     Disney
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                     Demon Slayer
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                     Dragonball Z
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="e" className="row py-3 border-bottom Name-G">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">E</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                    Enhypen
                      </a>{" "}
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
            <div id="f" className="row py-3 border-bottom Name-G">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">F</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                       Fortnite
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                    Fifa
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                    Frozen
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                 Friends
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
           
            <div id="g" className="row py-3 border-bottom Name-G">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">G</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Garfeild
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        G(idle)
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Genshin Impact
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                       Godzilla
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="h" className="row py-3 border-bottom Name-G">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">H</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                       Harry Potter
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                       Haikyu
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                       Hulk
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                    Hot Wheels
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                  Hello Kitty
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                    Hawkeye
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                    Hasbro
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="i" className="row py-3 border-bottom Name-G">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">I</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                      Ironman
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                       IVE
                      </a>{" "}
                    </p>
                  </div>
               
                </div>
              </div>
            </div>
            <div id="j" className="row py-3 border-bottom Name-G">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">J</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                       Jujutsu Kaisen
                      </a>{" "}
                    </p>
                  </div>
               
                </div>
              </div>
            </div>
            <div id="k" className="row py-3 border-bottom Name-K">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">K</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                       Kuromi
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                      Kodansha
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                    Kero Kero Keroppi
                      </a>{" "}
                    </p>
                  </div>
                
                 
                </div>
              </div>
            </div>
            <div id="l" className="row py-3 border-bottom Name-L">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">L</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Lion King
                      </a>{" "}
                    </p>
                  </div>

                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Lessarafim
                      </a>{" "}
                    </p>
                  </div>
                
                </div>
              </div>
            </div>
            <div id="m" className="row py-3 border-bottom Name-M">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">M</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                    Money Heist
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                       Mickey Mouse
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                       Marvel Studios
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Mulan
                      </a>{" "}
                    </p>
                  </div>
                  
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Music
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        My Melody 
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        My Little Pony
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        My Hero Academia
                      </a>{" "}
                    </p>
                  </div>
                 
                </div>
              </div>
            </div>
            <div id="n" className="row py-3 border-bottom Name-P">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">N</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                      NCT 127
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        NASA
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                 Naruto
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                       New Jeans
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                      Netflix
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="o" className="row py-3 border-bottom Name-P">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">O</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                       One Piece
                      </a>{" "}
                    </p>
                  </div>
            
                </div>
              </div>
            </div>
            <div id="p" className="row py-3 border-bottom Name-P">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">P</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Pokemon
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Peter Pan
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Peppa Peg
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                  Paw Petrol
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Pacman
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Pompompuri
                      </a>{" "}
                    </p>
                  </div>
              
                </div>
              </div>
            </div>
          
            <div id="s" className="row py-3 border-bottom Name-S">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">S</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                       Seven Seas
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Sanrio
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Sailor Moon
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                     Snoopy
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Smurfs
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Sleeping Beauty
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >Seventeen</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Squid Game
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
               Spy X Family
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        SpiderMan
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                    Snow white
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                       Stary Kids
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                       Stranger Kids
                      </a>{" "}
                    </p>
                  </div>
                
                </div>
              </div>
            </div>
            <div id="t" className="row py-3 border-bottom Name-T">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">T</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                  Talking Tom
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >Taemin</a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                      =The Witcher
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        The Simpsons
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                      The Little Mermaid
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        The Jungle Book
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        The Cars
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        The Batman
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Tarzan
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Tangled
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Transformers
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Tom and Jerry
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Tinker Bell
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Thor
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                       TXT
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                        Twice
                      </a>{" "}
                    </p>
                  </div>
                 
                </div>
              </div>
            </div>
            <div id="u" className="row py-3 border-bottom Name-T">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">U</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                Universal Studios
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="v" className="row py-3 border-bottom Name-T">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">V</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
                Viz Media
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="w" className="row py-3 border-bottom Name-T">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">W</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
               Wonder Women
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
              Winnie the pooh
                      </a>{" "}
                    </p>
                  </div>
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
              Wednesday
                      </a>{" "}
                    </p>
                  </div>
              
                </div>
              </div>
            </div>
            <div id="w" className="row py-3 border-bottom Name-T">
              <div className="offset-md-1 col-md-1 fw-bold fs-3">W</div>
              <div className="col-md-10">
                <div className="row">
                  <div className=" col-md-4">
                    <p>
                      <a
                        className="text-decoration-none text-dark small m-0"
                        href="#"
                      >
            Yen Press
                      </a>{" "}
                    </p>
                  </div>
                 
              
                </div>
              </div>
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