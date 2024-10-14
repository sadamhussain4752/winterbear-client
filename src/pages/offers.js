import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import offer1 from "../constant/images/offer-1.png";
import offer11 from "../constant/images/offer-11.png";
import offer12 from "../constant/images/offer-12.png";

import Testimonals from "../components/Testimonals";

function Offers() {
    return (
        <>
            <Header />
            <div className="offer-main mt-5">

                <div className="top-patch">
                    <span>IT’S A DASIQUE DREAM 💓</span>
                    <span> Shop NEW makeup drop!</span>
                    <span> SHOP NOW</span>
                </div>

                <div className="container py-5 border-bottom">
                    <p className="p-sub-path"> Home /
                        Special Deals & Offers </p>


                    <h3 class="theme-bg-text text-start">Special Deals & Offers</h3>
                    <p className="sm-fnt">
                        New deals and offers are updated monthly—don't miss out! Check back often to get the best deals. Available while supplies last. Terms apply.*
                    </p>
                    <img src={offer1} className="w-100" />

                    <div className="row mt-4">
                        <div className="col-lg-6">
                            <img src={offer11} className="w-100" />
                        </div>

                        <div className="col-lg-6">
                            <img src={offer12} className="w-100" />
                        </div>
                    </div>
                    <p className="p-end-txt mt-4 mb-0">
                        THE FINE PRINT
                    </p>
                    <p className="sm-fnt">  *All offers are listed in CAD and will be converted to your currency at checkout. Free with minimum merchandise purchase as stated above. Valid while supplies last. One per client, unless otherwise stated. Sale/discounted items are final sale. Promo cannot be stacked with any other offers. SUKOSHI MART may modify or cancel offer at any time. Open to all legal residents of all countries/regions we ship to.
                    </p>
                </div>
                <Testimonals />
            </div>
            <Footer />
        </>

    )
}

export default Offers;