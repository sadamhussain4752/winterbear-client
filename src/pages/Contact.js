import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Contact = () => {
    document.title = "about";
    document.getElementsByTagName("META")[2].content = "about";
    return (
        <>
        <Header />
            <h2>About Us</h2>
            <p>We are a passionate team dedicated to providing high-quality products/services. Learn more about our story here.</p>
            <Footer />
    </>
    );
};

export default Contact;
