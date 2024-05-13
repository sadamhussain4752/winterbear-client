import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Eventlist from "../components/Event-list";
import Wave from "../components/Wave";
import { fetchEventData } from "../reducer/thunks";
import { useDispatch, useSelector } from "react-redux";
import "./Events.css";
const EventsSection = () => {
  const [activeTab, setActiveTab] = useState("div1");
  const dispatch = useDispatch();

  const showDiv = (divId) => {
    setActiveTab(divId);
  };

  const {
    eventlist,
    loading: bannerLoading,
    error: bannerError,
  } = useSelector((state) => state.eventlist);

  useEffect(() => {
    dispatch(fetchEventData());
  }, [dispatch]);

  const wavesData = [
    {
      src: require("../constant/images/property.png"),
      description:
        "Delve into the world of exquisite properties, where architectural marvels meet serene landscapes. From charming cottages nestled amidst lush greenery to sleek urban apartments boasting panoramic views, our collection showcases a diverse range of properties tailored to every discerning taste. Each property embodies timeless elegance and impeccable craftsmanship, offering a harmonious blend of luxury and comfort. Explore enchanting gardens, inviting interiors, and state-of-the-art amenities that redefine modern living. Whether you seek a tranquil retreat or a vibrant urban abode, our curated selection ensures that your dream home is just a click away.",
    },
    {
      src: require("../constant/images/teddy-bear.png"),
      description:
        "Embark on a journey of cuddles and companionship with our adorable teddy bears. Crafted with the utmost care and attention to detail, each teddy bear exudes warmth and charm, ready to become your loyal friend for life. From classic teddy bears with soft, plush fur to whimsical designs that spark joy, our collection offers something for every age and occasion. Whether you're looking for the perfect gift to celebrate a special milestone or simply craving some cuddle therapy, our cuddly companions are here to spread love and laughter. Embrace the magic of childhood nostalgia and create cherished memories with our irresistible teddy bears",
    },
    {
      src: require("../constant/images/property.png"),
      description:
        "Delve into the world of exquisite properties, where architectural marvels meet serene landscapes. From charming cottages nestled amidst lush greenery to sleek urban apartments boasting panoramic views, our collection showcases a diverse range of properties tailored to every discerning taste. Each property embodies timeless elegance and impeccable craftsmanship, offering a harmonious blend of luxury and comfort. Explore enchanting gardens, inviting interiors, and state-of-the-art amenities that redefine modern living. Whether you seek a tranquil retreat or a vibrant urban abode, our curated selection ensures that your dream home is just a click away.",
    },
    {
      src: require("../constant/images/teddy-bear.png"),
      description:
        "Embark on a journey of cuddles and companionship with our adorable teddy bears. Crafted with the utmost care and attention to detail, each teddy bear exudes warmth and charm, ready to become your loyal friend for life. From classic teddy bears with soft, plush fur to whimsical designs that spark joy, our collection offers something for every age and occasion. Whether you're looking for the perfect gift to celebrate a special milestone or simply craving some cuddle therapy, our cuddly companions are here to spread love and laughter. Embrace the magic of childhood nostalgia and create cherished memories with our irresistible teddy bears",
    },
    {
      src: require("../constant/images/property.png"),
      description:
        "Delve into the world of exquisite properties, where architectural marvels meet serene landscapes. From charming cottages nestled amidst lush greenery to sleek urban apartments boasting panoramic views, our collection showcases a diverse range of properties tailored to every discerning taste. Each property embodies timeless elegance and impeccable craftsmanship, offering a harmonious blend of luxury and comfort. Explore enchanting gardens, inviting interiors, and state-of-the-art amenities that redefine modern living. Whether you seek a tranquil retreat or a vibrant urban abode, our curated selection ensures that your dream home is just a click away.",
    },
    {
      src: require("../constant/images/teddy-bear.png"),
      description:
        "Embark on a journey of cuddles and companionship with our adorable teddy bears. Crafted with the utmost care and attention to detail, each teddy bear exudes warmth and charm, ready to become your loyal friend for life. From classic teddy bears with soft, plush fur to whimsical designs that spark joy, our collection offers something for every age and occasion. Whether you're looking for the perfect gift to celebrate a special milestone or simply craving some cuddle therapy, our cuddly companions are here to spread love and laughter. Embrace the magic of childhood nostalgia and create cherished memories with our irresistible teddy bears",
    },
    {
      src: require("../constant/images/property.png"),
      description:
        "Delve into the world of exquisite properties, where architectural marvels meet serene landscapes. From charming cottages nestled amidst lush greenery to sleek urban apartments boasting panoramic views, our collection showcases a diverse range of properties tailored to every discerning taste. Each property embodies timeless elegance and impeccable craftsmanship, offering a harmonious blend of luxury and comfort. Explore enchanting gardens, inviting interiors, and state-of-the-art amenities that redefine modern living. Whether you seek a tranquil retreat or a vibrant urban abode, our curated selection ensures that your dream home is just a click away.",
    },
    {
      src: require("../constant/images/teddy-bear.png"),
      description:
        "Embark on a journey of cuddles and companionship with our adorable teddy bears. Crafted with the utmost care and attention to detail, each teddy bear exudes warmth and charm, ready to become your loyal friend for life. From classic teddy bears with soft, plush fur to whimsical designs that spark joy, our collection offers something for every age and occasion. Whether you're looking for the perfect gift to celebrate a special milestone or simply craving some cuddle therapy, our cuddly companions are here to spread love and laughter. Embrace the magic of childhood nostalgia and create cherished memories with our irresistible teddy bears",
    },
    {
      src: require("../constant/images/property.png"),
      description:
        "Delve into the world of exquisite properties, where architectural marvels meet serene landscapes. From charming cottages nestled amidst lush greenery to sleek urban apartments boasting panoramic views, our collection showcases a diverse range of properties tailored to every discerning taste. Each property embodies timeless elegance and impeccable craftsmanship, offering a harmonious blend of luxury and comfort. Explore enchanting gardens, inviting interiors, and state-of-the-art amenities that redefine modern living. Whether you seek a tranquil retreat or a vibrant urban abode, our curated selection ensures that your dream home is just a click away.",
    },
    {
      src: require("../constant/images/teddy-bear.png"),
      description:
        "Embark on a journey of cuddles and companionship with our adorable teddy bears. Crafted with the utmost care and attention to detail, each teddy bear exudes warmth and charm, ready to become your loyal friend for life. From classic teddy bears with soft, plush fur to whimsical designs that spark joy, our collection offers something for every age and occasion. Whether you're looking for the perfect gift to celebrate a special milestone or simply craving some cuddle therapy, our cuddly companions are here to spread love and laughter. Embrace the magic of childhood nostalgia and create cherished memories with our irresistible teddy bears",
    },
    {
      src: require("../constant/images/property.png"),
      description:
        "Delve into the world of exquisite properties, where architectural marvels meet serene landscapes. From charming cottages nestled amidst lush greenery to sleek urban apartments boasting panoramic views, our collection showcases a diverse range of properties tailored to every discerning taste. Each property embodies timeless elegance and impeccable craftsmanship, offering a harmonious blend of luxury and comfort. Explore enchanting gardens, inviting interiors, and state-of-the-art amenities that redefine modern living. Whether you seek a tranquil retreat or a vibrant urban abode, our curated selection ensures that your dream home is just a click away.",
    },
    {
      src: require("../constant/images/teddy-bear.png"),
      description:
        "Embark on a journey of cuddles and companionship with our adorable teddy bears. Crafted with the utmost care and attention to detail, each teddy bear exudes warmth and charm, ready to become your loyal friend for life. From classic teddy bears with soft, plush fur to whimsical designs that spark joy, our collection offers something for every age and occasion. Whether you're looking for the perfect gift to celebrate a special milestone or simply craving some cuddle therapy, our cuddly companions are here to spread love and laughter. Embrace the magic of childhood nostalgia and create cherished memories with our irresistible teddy bears",
    },
  ];

  const getImageSource = (divId) => {
    switch (divId) {
      case "div1":
        return "assets/images/Banner3.webp";
      case "div2":
        return "assets/images/Banner2.webp";
      case "div3":
        return "assets/images/Banner1.webp";
      default:
        return "";
    }
  };

  return (
    <>
      <Header />

      <section className="py-5 mt-80">
        <div className="no">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="section-heading">
                <h3 className="theme-bg-text">Event Details</h3>
              </div>
            </div>
          </div>

          <div className="row justify-content-center text-center ">
            <div className="position-relative">
              <img
                src={require("../constant/images/EventPageAnimation.gif")}
                alt="Upcoming Sale"
                className="img-fluid pt-5 mt-5"
              />
              <div className="col-md-12 row d-flex justify-content-center position-absolute top-0 ">
                <div className=" col-md-9 row d-flex justify-content-center event-tap ">
                  <p className="col-md-3 event-text-color">Upcoming Events</p>
                  <p className="col-md-3 event-item">
                    40% di sconto dal 20 aprile al 5 maggio!
                  </p>
                  <p className="col-md-3 event-text-color">India</p>
                </div>

                <div className="about-breadcum-content d-md-block">
                  <div className="row justify-content-center">
                    <div className="col-md-12 mt-5">
                      {/* <h3 className="text-main-color">Sound of Christmas 2024</h3> */}
                      {/* <h5>Your Ultimate Destination for Trendsetting Fashion</h5> */}
                      <a href="/event-details" className="button">
                        More Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="waveContainer" style={{
                backgroundImage : `url(${require("../../src/constant/images/Dots.png")})`
              }}>
                {eventlist && eventlist.events.map((wave, index) => (
                  <Wave key={index} src={wave.imageUrl} title={wave.name} description={wave.description} />
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5 my" style={{position:'relative'}}>
          <div className="row">
            <div
              className="col-md-12 d-flex justify-content-center align-items-center my-3"
            
            >
              <div>
                <img
                  src="assets/images/Category.png"
                  alt="category"
                  className="w-100"
                />
              </div>
              <div
              id="first-div"  className="first-div"
                href=""
                title=""
               
              >
                hello 1
              </div>
              <div  id="second-div" className="second-div"
                href=""
                title=""
               
              >
                hello 2
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

export default EventsSection;
