import React from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Stores from "./pages/Stores";
import Faqs from "./pages/Faqs";
import ShopAll from "./pages/Shopall";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventsSection from "./pages/Events";

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
        </Routes>
      </Router>
    </div>
  );
};

export default App;
