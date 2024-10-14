import React from "react";

import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import About from "./pages/About";
import Loyalty from "./pages/Loyalty";
import SNS from "./pages/Sns";
import Contact from "./pages/Contact";
import Stores from "./pages/Stores";
import Faqs from "./pages/Faqs";
import ShopAll from "./pages/Shopall";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Awards from "./pages/Awards";
import Allbrand from "./pages/Allbrand";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventsSection from "./pages/Events";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import EventDetails from "./pages/EventDetails";
import Blogs from "./pages/Blogs";
import Brandlist from "./pages/Brandlist";
import Privacypolicy from "./pages/Privacypolicy";
import Terms from "./pages/Terms";
import Categorylist from "./pages/Categorylist";
import StoreLocator from "./pages/StoreLocator";
import Wishlist from "./pages/Wishlist";
import Offers from "./pages/offers";
import Shoponline from "./pages/Shoponline";

import Event2 from "./pages/Event2";
import Upcoming from "./pages/Upcoming";

const App = () => {
  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home2" element={<Home2 />} />
          <Route path="/Home3" element={<Home3 />} />
          <Route path="/about" element={<About />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/loyalty" element={<Loyalty />} />
          <Route path="/sns" element={<SNS />} />
          <Route path="/stores" element={<StoreLocator />} />
          <Route path="/shop/:id" element={<ShopAll />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/events" element={<EventsSection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />


          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Checkout />} />
          <Route path="/Allbrand" element={<Allbrand />} />
          <Route path="/checkout" element={<Payment />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/brand/:id" element={<Brandlist />} />
          <Route path="/category/:id" element={<Categorylist />} />
          <Route path="/event-details" element={<EventDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/privacy" element={<Privacypolicy />} />
          <Route path="/term" element={<Terms />} />
          <Route path="/store-locator" element={<StoreLocator />} />

          <Route path="/event2" element={<Event2 />} />


          <Route path="/offers" element={<Offers />} />

          <Route path="/shop-online" element={<Shoponline/>}/>
          <Route path="/upcoming/:id" element={<Upcoming />} />

        </Routes>
      </Router>

    </div>
  );
};

export default App;
