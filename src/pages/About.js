import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
const About = () => {
  const backgroundImageStyle = {
    background: 'url("assets/images/about-bg.png")',
    backgroundSize: '100% 100%',

  };
  document.title = "about";
  document.getElementsByTagName("META")[2].content = "about";
  return (
    <>
      <Header />
      {/* <div
        className="breadcum mt-80"
        style={backgroundImageStyle}
      >
        <div className="about-breadcum-content d-md-block d-none">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <h3>Step into the K-pop Style Realm</h3>
              <h5>Your Ultimate Destination for Trendsetting Fashion</h5>
              <a href="#" className="button">
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <section className="py-5 mt-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="section-heading">
                <h3 className="theme-bg-text  ">About us</h3>
              </div>
            </div>
            <div className="col-md-8 text-center">
              <span className="sub-heading">
                Welcome to Winterbear, where we redefine shopping as our lifestyle.
                Winterbear is India’s first character-based multi-category brand,
                serving as the country’s largest hub for official licensed merchandise.
                Since our launch with LINE FRIENDS and BT21 at VR Chennai,
                we've expanded our offerings through robust partnerships,
                showcasing a diverse portfolio of over 100+ international brands.
                From iconic favourites like Mickey Mouse and The Smurfs to beloved
                anime series such as Dragon Ball Z and Naruto, our collection
                embodies a rich tapestry of timeless classics and contemporary favourites.

              </span>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <p>
                WINTERBEAR's extensive offerings extend beyond apparel to encompass
                various categories, including stationery, home decor, fashion accessories,
                plush toys, and consumer electronics. WINTERBEAR's commitment to
                providing a varied and inclusive range of products ensures that our range
                caters to a wide spectrum of interests and tastes, distinguishing us in
                the realm of licensed merchandise and guaranteeing a perfect fit for
                every customer.

              </p>
              
            </div>
            <div className="col-md-6 position-relative">
              <div className="about1 position-absolute">
                <img src="assets/images/about1.png" className="" />
              </div>
              <div className="about2 position-absolute">
                <img src="assets/images/about2.png" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="section-heading">
                <h3 className="theme-bg-text">Globally Curated</h3>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-4 mb-4">
              <div className="image-container about-img-cont">
                <img
                  src='assets\images\about\About Us_Icons_Business Development.png'
                  class="img-fluid d-block mx-auto"
                  alt="Your Image"
                />

                <div className="abt-cont">

                  <p className="head-abt-sub mb-0">
                    Globally Curated
                  </p>

                  <p>
                    At Winterbear, we take pride in curating the finest offerings from around the world, bringing our customers the best of the best. Our top sellers are sourced globally, with imports spanning South Korea, USA, France, and Hong Kong.
                  </p>

                </div>
                {/* <div className="overlay">
                  <p className="fs-1 fw-bold">Excellence</p>
                </div> */}
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="image-container about-img-cont">
                <img
                  src='assets\images\about\About Us_Icons_Location.png'
                  class="img-fluid d-block mx-auto "
                  alt="Your Image"
                />



                <div className="abt-cont">

                  <p className="head-abt-sub mb-0">
                    Uncompromising Quality
                  </p>

                  <p>
                    Quality is our cornerstone. Whether it's material, design, style, or durability, we make no compromises. Winterbear exclusively offers premium licensed merchandise of the utmost quality, crafted by our dedicated in-house design team.
                  </p>

                </div>

                {/* <div className="overlay">
                  <p className="fs-1 fw-bold">Innovation</p>
                </div> */}
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="image-container about-img-cont">
                <img
                  src='assets\images\about\About Us_Icons_Marketing.png'
                  class="img-fluid d-block mx-auto "
                  alt="Your Image"
                />

                <div className="abt-cont">

                  <p className="head-abt-sub mb-0">
                    Seasonal Trendsetting
                  </p>

                  <p>
                    Winterbear stays ahead with fresh collections every season, ensuring a dynamic and trendsetting experience. Our products are exclusive and time-limited, meaning once they're gone, they're gone. With constant research and development, we stay attuned to current trends, providing opportunities for customers to express their personality through their favourite IPs.
                  </p>

                </div>

                {/* <div className="overlay">
                  <p className="fs-1 fw-bold">Integrity</p>
                </div> */}
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="image-container about-img-cont">
                <img
                  src='assets\images\about\About Us_Icons_Product.png'
                  class="img-fluid d-block mx-auto "
                  alt="Your Image"
                />


                <div className="abt-cont">

                  <p className="head-abt-sub mb-0">
                    Authenticity Guaranteed
                  </p>

                  <p>
                    With over 100 IPs, Winterbear caters to a diverse audience, featuring both Eastern favourites like Naruto and Western classics like The Smurfs. Every product is official and licensed, ensuring authenticity. We synchronize our launches with international release dates, ensuring our customers have access to the latest global trends right in our store.
                  </p>

                </div>

                {/* <div className="overlay">
                  <p className="fs-1 fw-bold">Collaboration</p>
                </div> */}
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="image-container about-img-cont">
                <img
                  src='assets\images\about\About Us_Icons_Setup.png'
                  class="img-fluid d-block mx-auto "
                  alt="Your Image"
                />

                <div className="abt-cont">

                  <p className="head-abt-sub mb-0">
                    Market Presence
                  </p>

                  <p>
                    Winterbear is a pioneer for official licensed merchandise and is a fan favourite. As the ultimate one-stop destination for all things licensed, our stores cater to every fan's needs, offering an unparalleled selection.
                  </p>

                </div>

                {/* <div className="overlay">
                  <p className="fs-1 fw-bold"> Customer value</p>
                </div> */}
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="image-container about-img-cont">
                <img
                  src='assets\images\about\About Us_Icons_Technology.png'
                  class="img-fluid d-block mx-auto"
                  alt="Your Image"
                />

                <div className="abt-cont">

                  <p className="head-abt-sub mb-0">
                    Brand Valor
                  </p>

                  <p>
                    Our brand's strength lies in the extensive lineup of 100+ brands housed within our stores, collectively valued at over 50 crores. Partnering with Winterbear grants you access to this esteemed array of licenses without the need for individual licensing. Our brand's prestige, coupled with our exclusive product line, ensures your store becomes a cherished destination for local patrons, fostering both authenticity and exclusivity.
                  </p>

                </div>

                {/* <div className="overlay">
                  <p className="fs-1 fw-bold"> Care And Share</p>
                </div> */}
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

export default About;
