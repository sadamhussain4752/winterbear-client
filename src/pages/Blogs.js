import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fetchStoreData } from "../reducer/thunks";
import { useDispatch, useSelector } from "react-redux";
import constant from "../constant/constant";
import { Input, Button, Checkbox } from 'antd'; // Import Ant Design components
import { InstagramEmbed, YouTubeEmbed } from 'react-social-media-embed';

import { Form } from "antd";
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

                    <div className="row blog-title">
                        <div className="col-md-8 text-end mt-md-5 px-5">
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
                                            <Button className="btn button rounded text-start" type="primary">Read More</Button>

                                        </p>



                                    </div>

                                </div>

                            </div>

                        </div>
                        <div className="col-md-4 text-start mt-md-5 blog-store ">
                            <h4 className="col-md-4 text-start mt-4 mb-5">
                                Categories


                            </h4>
                            <div className="col-md-12">
                                <div className="col-md-6 blog-card rounded p-2 d-flex justify-content-start align-items-center mt-4">
                                    <img src={require("../constant/images/blog-c-1.png")} />
                                    <p className="m-2">
                                        Startup
                                    </p>

                                </div>
                                <div className="col-md-6 blog-card rounded p-2 d-flex justify-content-start align-items-center mt-4">
                                    <img src={require("../constant/images/blog-c-2.png")} />

                                    <p className="m-2">
                                        Business
                                    </p>

                                </div>
                                <div className="col-md-6 blog-card rounded p-2 d-flex justify-content-start align-items-center mt-4">
                                    <img src={require("../constant/images/blog-c-3.png")} />

                                    <p className="m-2">
                                        Economy
                                    </p>

                                </div>
                                <div className="col-md-6 blog-card rounded p-2 d-flex justify-content-start align-items-center mt-4">
                                    <img src={require("../constant/images/blog-c-4.png")} />

                                    <p className="m-2">
                                        Technology
                                    </p>

                                </div>
                            </div>
                            <h4 className="col-md-8 text-start mt-5 ">
                                All Tags
                            </h4>
                            <div className="col-md-12">
                                <p className="btn button buy-now-tag text-black bg-transparent border border-secondary m-2">
                                    Business
                                </p>
                                <p className="btn button buy-now-tag text-black bg-transparent border border-secondary m-2">
                                    Experience
                                </p>
                                <p className="btn button buy-now-tag text-black bg-transparent border border-secondary m-2">
                                    Screen
                                </p>
                                <p className="btn button buy-now-tag text-black bg-transparent border border-secondary m-2">
                                    Technology
                                </p>
                                <p className="btn button buy-now-tag text-black bg-transparent border border-secondary m-2">
                                    Marketing
                                </p>
                                <p className="btn button buy-now-tag text-black bg-transparent border border-secondary m-2">
                                    Life
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-120 blog-store">
                <h4 className="col-md-8 text-start mb-5 mx-5">
                    Instagram Post
                </h4>

                <div style={{ display: 'flex', justifyContent: 'center', overflowX: 'auto' }} className="m-5">

                    <div className="reels-container">
                       <iframe width="320" height="550" src="https://www.instagram.com/p/CUbHfhpswxt/embed/" frameborder="0"></iframe>
                       <iframe width="320" height="550" src="https://www.instagram.com/p/CUbHfhpswxt/embed/" frameborder="0"></iframe>
                       <iframe width="320" height="550" src="https://www.instagram.com/p/CUbHfhpswxt/embed/" frameborder="0"></iframe>
                       <iframe width="320" height="550" src="https://www.instagram.com/p/CUbHfhpswxt/embed/" frameborder="0"></iframe>
                       <iframe width="320" height="550" src="https://www.instagram.com/p/CUbHfhpswxt/embed/" frameborder="0"></iframe>
                       <iframe width="320" height="550" src="https://www.instagram.com/p/CUbHfhpswxt/embed/" frameborder="0"></iframe>
                       <iframe width="320" height="550" src="https://www.instagram.com/p/CUbHfhpswxt/embed/" frameborder="0"></iframe>
                       <iframe width="320" height="550" src="https://www.instagram.com/p/CUbHfhpswxt/embed/" frameborder="0"></iframe>
                       
                    </div>
                </div>
            </section>
            <section className="mt-120 blog-store">
                <h4 className="col-md-8 text-start mb-5 mx-5">
                    Youtube Post
                </h4>

                <div style={{ display: 'flex', justifyContent: 'center', overflowX: 'auto' }} className="m-5">

                    <div className="reels-container">
                        <YouTubeEmbed url="https://www.youtube.com/watch?v=ardtvdR28SQ" width={325} height={220} />
                        <YouTubeEmbed url="https://www.youtube.com/watch?v=ardtvdR28SQ" width={325} height={220} />
                        <YouTubeEmbed url="https://www.youtube.com/watch?v=ardtvdR28SQ" width={325} height={220} />
                        <YouTubeEmbed url="https://www.youtube.com/watch?v=ZgLlabyz7oY" width={325} height={220} />
                        <YouTubeEmbed url="https://www.youtube.com/watch?v=POe9SOEKotk&list=RDPOe9SOEKotk&start_radio=1&rv=ZgLlabyz7oY" width={325} height={220} />
                        <YouTubeEmbed url="https://www.youtube.com/watch?v=bwmSjveL3Lc" width={325} height={220} />
                        <YouTubeEmbed url="https://www.youtube.com/watch?v=ldYPuD72W_A" width={325} height={220} />
                        <YouTubeEmbed url="https://www.youtube.com/watch?v=4XZz3WXRw0A" width={325} height={220} />

                    </div>
                </div>
            </section>

            

            <Footer />
        </>
    );
};

export default Blogs;
