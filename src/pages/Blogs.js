import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fetchStoreData } from "../reducer/thunks";
import { useDispatch, useSelector } from "react-redux";
import constant from "../constant/constant";
import { Input, Button, Checkbox } from 'antd'; // Import Ant Design components
import { InstagramEmbed, YouTubeEmbed } from 'react-social-media-embed';

import { Form } from "antd";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"

]
const Blogs = () => {
    document.title = "about";
    document.getElementsByTagName("META")[2].content = "about";
    const dispatch = useDispatch();
      useEffect(() => {
    // Function to load the Elfsight script
    const loadElfsightScript = () => {
      const script = document.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.dataset.useServiceCore = true;
      script.defer = true;
      document.body.appendChild(script);

      // Cleanup function to remove the script when the component unmounts
      return () => {
        document.body.removeChild(script);
      };
    };

    // Load the Elfsight script only once
    if (!window.elfsightScriptLoaded) {
      window.elfsightScriptLoaded = true;
      loadElfsightScript();
    }
  }, []);
    // Destructuring with different names to avoid conflict
    const {
        storelist,
        loading: bannerLoading,
        error: bannerError,
    } = useSelector((state) => state.storelist);

    console.log(storelist && storelist.admins && storelist.admins, "product");

    document.title = "Winter Bear";
    document.getElementsByTagName("META")[2].content = "Winter Bear";
    useEffect(() => {
        dispatch(fetchStoreData());
    }, []);

    useEffect(() => {
        // Function to load the Elfsight script
        const loadElfsightScript = () => {
          const script = document.createElement('script');
          script.src = 'https://static.elfsight.com/platform/platform.js';
          script.dataset.useServiceCore = true;
          script.defer = true;
          document.body.appendChild(script);
    
          // Cleanup function to remove the script when the component unmounts
          return () => {
            document.body.removeChild(script);
          };
        };
    
        // Load the Elfsight script only once
        if (!window.elfsightScriptLoaded) {
          window.elfsightScriptLoaded = true;
          loadElfsightScript();
        }
      }, []);
    return (
        <>
            <Header />

            <section className=" mt-120">
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-md-12 ">
                            <div className="section-heading">
                                <h6 className="theme-bg-text small">Blogs</h6>
                            </div>
                        </div>
                    </div>

                    <div className="container">

                        <div className="row blog-title">
                            <div className="col-md-9 text-end mt-md-5 px-5">
                                <h4 className="col-md-8 text-start mb-5">
                                    Featured Post
                                </h4>
                                <div className="border p-4 rounded">
                                    <img src={require("../constant/images/blogs-banner.png")} className="img-fluid col-md-12" />
                                    <div className="col-md-12">
                                        <div className="text-box-store">
                                            <p className="m-2 text-start">
                                                By John Doe   l   May 23, 2022
                                            </p>
                                            <h4 className="m-2 text-start">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                                            </h4>
                                            <p className="m-2 text-start">
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                                            </p>
                                            <p className="m-2 text-start">
                                                <Button className="btn button w-auto rounded text-start" type="primary">Read More</Button>

                                            </p>



                                        </div>

                                    </div>

                                </div>

                            </div>
                            <div className="col-md-3 text-start mt-md-5 blog-store ">
                                <h4 className="col-md-4 text-start mb-5">
                                    Categories


                                </h4>
                                <div className="col-md-12">
                                    <div className="col-md-12 blog-card rounded p-2 d-flex justify-content-start align-items-center mt-4">
                                        <img src={require("../constant/images/blog-c-1.png")} />
                                        <p className="m-2">
                                            Startup
                                        </p>

                                    </div>
                                    <div className="col-md-12 blog-card rounded p-2 d-flex justify-content-start align-items-center mt-4">
                                        <img src={require("../constant/images/blog-c-2.png")} />

                                        <p className="m-2">
                                            Business
                                        </p>

                                    </div>
                                    <div className="col-md-12 blog-card rounded p-2 d-flex justify-content-start align-items-center mt-4">
                                        <img src={require("../constant/images/blog-c-3.png")} />

                                        <p className="m-2">
                                            Economy
                                        </p>

                                    </div>
                                    <div className="col-md-12 blog-card rounded p-2 d-flex justify-content-start align-items-center mt-4">
                                        <img src={require("../constant/images/blog-c-4.png")} />

                                        <p className="m-2">
                                            Technology
                                        </p>

                                    </div>
                                </div>
                                <h4 className="col-md-8 text-start mt-5 ">
                                    All Tags
                                </h4>
                                <div className="col-md-12 px-3">
                                    <div className="d-flex justify-content-between">
                                        <p className="btn button buy-now-tag text-black bg-transparent border border-secondary my-2">
                                            Business
                                        </p>
                                        <p className="btn button buy-now-tag text-black bg-transparent border border-secondary my-2">
                                            Experience
                                        </p>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <p className="btn button buy-now-tag text-black bg-transparent border border-secondary my-2">
                                            Screen
                                        </p>
                                        <p className="btn button buy-now-tag text-black bg-transparent border border-secondary my-2">
                                            Technology
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="btn button buy-now-tag text-black bg-transparent border border-secondary my-2">
                                            Marketing
                                        </p>
                                        <p className="btn button buy-now-tag text-black bg-transparent border border-secondary my-2">
                                            Life
                                        </p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-120 blog-store">
                <h4 className="col-md-8 text-start mb-5 mx-5">
                    Best of the Month
                </h4>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 px-3">
                            <img className="w-100" src={require("../constant/images/best-1.png")} />
                            <p className="p-date pt-4 text-secondary">SEP - 10th</p>
                            <h6>
                                How I’m Fighting the Return of FOMO
                            </h6>
                        </div>
                        <div className="col-lg-3 px-3">
                            <img className="w-100" src={require("../constant/images/best-3.png")} />
                            <p className="p-date pt-4 text-secondary">SEP - 10th</p>
                            <h6 className="">
                                At Delilah Las Vegas, You Can Have the Wild Night
                            </h6>
                        </div>
                        <div className="col-lg-3 px-3">
                            <img className="w-100" src={require("../constant/images/best-2.png")} />
                            <p className="p-date pt-4 text-secondary">SEP - 10th</p>
                            <h6 className="">
                                Vogue’s Official Guide to the Hamptons
                            </h6>
                        </div>
                        <div className="col-lg-3 px-3">
                            <img className="w-100" src={require("../constant/images/best-4.png")} />
                            <p className="p-date pt-4 text-secondary">SEP - 10th</p>
                            <h6 className="">
                                27 Vogue Editors Share the Best White T-Shirts
                            </h6>
                        </div>

                    </div>
                </div>

            </section>


            <section className="mt-120 blog-store">
                <h4 className="col-md-8 text-start mb-5 mx-5">
                    Instagram Post
                </h4>

                <div style={{ display: 'flex', justifyContent: 'center', overflowX: 'auto' }} className="m-5 insta">

                <div className="elfsight-app-841d23e5-59a5-44b9-bcd2-ee730cd8d10b" data-elfsight-app-lazy></div>

                </div>
            </section>


            <section className="mt-120 blog-store">
                <h4 className="col-md-8 text-start mb-5 mx-5">
                   Youtube Viedos 
                </h4>

                <div className="container">
                    <OwlCarousel className='owl-theme' loop margin={10} nav>
                        <div class='item'>
                            <YouTubeEmbed url="https://www.youtube.com/watch?v=ardtvdR28SQ" width={'100%'} height={220} />
                        </div>
                        <div class='item'>
                            <YouTubeEmbed url="https://www.youtube.com/watch?v=ardtvdR28SQ" width={'100%'} className="" height={220} />
                        </div>
                        <div class='item'>
                            <YouTubeEmbed url="https://www.youtube.com/watch?v=ardtvdR28SQ" width={'100%'} className="" height={220} />
                        </div>
                        <div class='item'>
                            <YouTubeEmbed url="https://www.youtube.com/watch?v=ZgLlabyz7oY" width={'100%'} className="" height={220} />
                        </div>
                        <div class='item'>
                            <YouTubeEmbed url="https://www.youtube.com/watch?v=POe9SOEKotk&list=RDPOe9SOEKotk&start_radio=1&rv=ZgLlabyz7oY" width={'100%'} className="" height={220} />
                        </div>
                        <div class='item'>
                            <YouTubeEmbed url="https://www.youtube.com/watch?v=bwmSjveL3Lc" width={'100%'} className="" height={220} />
                        </div>
                        <div class='item'>
                            <YouTubeEmbed url="https://www.youtube.com/watch?v=ldYPuD72W_A" width={'100%'} className="" height={220} />
                        </div>
                        <div class='item'>

                            <YouTubeEmbed url="https://www.youtube.com/watch?v=4XZz3WXRw0A" width={'100%'} className="" height={220} />
                        </div>
                    </OwlCarousel>
                </div>
            </section>

            {/* 
            <section className="mt-120 blog-store">
                <h4 className="col-md-8 text-start mb-5 mx-5">
                    Youtube Post
                </h4>



                <div style={{ display: 'flex', justifyContent: 'center', overflowX: 'auto' }} className="m-5">

                    <div className="reels-container">











                    </div>
                </div>
            </section> */}


            <Footer />
        </>
    );
};

export default Blogs;
