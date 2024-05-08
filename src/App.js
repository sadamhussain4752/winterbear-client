import React from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Awards from "./pages/Awards";
import Loyalty from "./pages/Loyalty";
import Allbrand from "./pages/Allbrand";
import Contact from "./pages/Contact";
import Stores from "./pages/Stores";
import Faqs from "./pages/Faqs";
import ShopAll from "./pages/Shopall";
import Login from "./pages/Login";
import Account from "./pages/Account";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventsSection from "./pages/Events";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import EventDetails from "./pages/EventDetails";
import Blogs from "./pages/Blogs";
import Brandlist from "./pages/Brandlist";


const App = () => {
  return (
    <div>
     
      <Router> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/loyalty" element={<Loyalty />} />
          <Route path="/Allbrand" element={<Allbrand />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/shop" element={<ShopAll />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/events" element={<EventsSection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Checkout />} />
          <Route path="/checkout" element={<Payment />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/brand/:id" element={<Brandlist />} />
          <Route path="/event-details" element={<EventDetails/>}/>
          <Route path="/blogs" element={<Blogs/>}/>

        </Routes>
      </Router>
      
    </div>
  );
};

export default App;
