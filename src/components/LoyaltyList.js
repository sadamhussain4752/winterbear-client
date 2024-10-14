import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.theme.green.css"; // Import any additional theme if needed

const LoyaltyList = () => {
  return (
    <section className="py-5 px-md-5 px-3">
      <div
        className="container-fluid rounded-5 py-5 "
        style={{
          background: "#bae6f7",
        }}
      >
        <div className=" theme-bg-text mb-2 fs-1 y-5 text-center rewards">
          May Rewards
        </div>

        <OwlCarousel
          className="owl-theme my-3 "
          loop
          margin={15}
          autoplay
          dots={false}
          autoplayTimeout={1800}
          smartSpeed={500}
          responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            1000: {
              items: 4,
            },
          }}
        >
          <div className="item px-3">
            <img
              src="assets/images/reward-1.png"
              className="w-100 d-block mx-auto"
              alt="Gallery Item"
            />
            <p className=" loy-lis-fs text-center lh-sm mb-0 mt-3">
            BT21 MININI PHOTO ALBUM
            </p>
            <p className=" loy-lis-poi text-center"> 150 points</p>
          </div>
          <div className="item px-3">
            <img
              src="assets/images/reward-2.png"
              className="w-100 d-block mx-auto"
              alt="Gallery Item"
            />
            <p className=" loy-lis-fs text-center lh-sm mb-0 mt-3">
            BT21 HAND MIRROR PINK
            </p>
            <p className=" loy-lis-poi text-center"> 200 points</p>
          </div>
          <div className="item px-3">
            <img
              src="assets/images/reward-3.png"
              className="w-100 d-block mx-auto"
              alt="Gallery Item"
            />
            <p className=" loy-lis-fs text-center lh-sm mb-0 mt-3">
            BT21MININI DOLL ECO BAG
            </p>
            <p className=" loy-lis-poi text-center"> 350 points</p>
          </div>
          <div className="item px-3">
            <img
              src="assets/images/reward-4.png"
              className="w-100 d-block mx-auto"
              alt="Gallery Item"
            />
            <p className=" loy-lis-fs text-center lh-sm mb-0 mt-3">
            BT21 MININI SOFT KEYRING
            </p>
            <p className=" loy-lis-poi text-center"> 600 points</p>
          </div>
         
        </OwlCarousel>

       
      </div>

      <p className="d-block mx-auto text-center my-3 ">
          <a href="#" className="button btn btn-dark text-uppercase px-5 my-4 fs-4 text-white rounded-5">
            Redeem
          </a>
        </p>
    </section>
  );
};

export default LoyaltyList;
