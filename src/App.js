import React from "react";

import Home from "./pages/Home";
import About from "./pages/About";
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
import Wishlist from "./pages/Wishlist";
import Address from "./pages/Address";

import Payment from "./pages/Payment";
import MyOrder from "./pages/MyOrder";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/shop" element={<ShopAll />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/events" element={<EventsSection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Checkout />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/orders" element={<MyOrder />} />
          <Route path="/address" element={<Address />} />
          <Route path="/checkout" element={<Payment />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
