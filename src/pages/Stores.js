import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fetchStoreData } from "../reducer/thunks";
import { useDispatch, useSelector } from "react-redux";
import constant from "../constant/constant";
import { Input, Button, Checkbox } from 'antd'; // Import Ant Design components

import { Form } from "antd";
const Days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"

]
const Store = () => {
  document.title = "about";
  document.getElementsByTagName("META")[2].content = "about";
  const dispatch = useDispatch();
  // Destructuring with different names to avoid conflict
  const {
    storelist,
    loading: bannerLoading,
    error: bannerError,
  } = useSelector((state) => state.storelist);

  console.log(storelist && storelist.admins && storelist.admins, "product");

  document.title = "Winter Bear";
  document.getElementsByTagName("META")[2].content = "Winter Bear";
  useEffect(() => {
    dispatch(fetchStoreData());
  }, []);
  return (
    <>
      <Header />

      <section className=" mt-120">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-md-12 ">
              <div className="section-heading">
                <h6 className="theme-bg-text small">Our Stores</h6>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-8 text-end mt-md-5  ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1705490836330!5m2!1sen!2sin"
                // width="1266"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                className="col-md-12 text-end mt-md-5 "
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-md-4 text-start mt-md-5 find-store ">
              <h4>Find Your Preferred Store</h4>
              <p>Find your preferred store to learn about its opening hours, stock availability, and relevant offers.</p>
              <div className="input-group mt-4">
                <p>Enter a PIN code</p>
                <Input placeholder="Enter PIN code" className="form-control text-input w-100" /> {/* Ant Design Input component */}
              </div>
              <div className="input-group row d-flex justify-content-start align-items-start col-md-12 mt-3">
                <Checkbox className="col-md-1" />
                <label className="checkbox-label col-md-11">Remember my postal code for delivery, availability, and stock information.</label>
              </div>
              <p className="mt-3">Use your current location</p>

              <Button className="btn button rounded w-100" type="primary">Find a preferred store</Button> {/* Ant Design Button component */}
            </div>
          </div>
        </div>
      </section>
      <section className=" mt-120">

        {storelist &&
          storelist.admins &&
          storelist.admins.map((item, index) => {
            return (

              <div className="col-md-12 d-flex justify-content-center">

                <div className="box-card-over position-relative">
                  <div className="col-md-12">
                    <img src="assets/images/store.png" className="img-fluid col-md-4" />
                    <img src="assets/images/store1.png" className="img-fluid col-md-4" />
                    <img src="assets/images/store2.png" className="img-fluid col-md-4" />

                  </div>
                  <div className="position-absolute top-0 start-0 light-background">
                  <h4>
                    Bangalore
                    </h4>
                  </div>
                  <div className="text-box-store p-4">
                    <h4>
                      Visit Winterbear store at VR {item.storename}
                    </h4>
                    <p>
                      Shop No. {item.storeaddress}.
                    </p>
                    <p>
                      Monday-Sunday: 10:30am-10:00pm
                    </p>
                  </div>
                </div>
              </div>

            );
          })}


      </section>


      <Footer />
    </>
  );
};

export default Store;
