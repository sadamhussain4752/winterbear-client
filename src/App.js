import React from "react";

import Home from "./pages/Home";
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


const App = () => {
  return (
    <div>
     
      <Router> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/loyalty" element={<Loyalty />} />
          <Route path="/sns" element={<SNS />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/shop" element={<ShopAll />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/events" element={<EventsSection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Checkout />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/Allbrand" element={<Allbrand />} /> 
          <Route path="/checkout" element={<Payment />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/brand/:id" element={<Brandlist />} />
          <Route path="/category/:id" element={<Categorylist />} />
          <Route path="/event-details" element={<EventDetails/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/privacy" element={<Privacypolicy/>}/>
          <Route path="/term" element={<Terms/>}/>



        </Routes>
      </Router>
      
    </div>
  );
};

export default App;
