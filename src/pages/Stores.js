import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fetchStoreData } from "../reducer/thunks";
import { useDispatch, useSelector } from "react-redux";
import constant from "../constant/constant";
import { Input, Button, Checkbox } from 'antd';

const Store = () => {
  document.title = "about";
  document.getElementsByTagName("META")[2].content = "about";
  const dispatch = useDispatch();
  const [switchmap, Setswitchmap] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6951.884818544733!2d73.91645700152864!3d18.56101042164914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1712392855771!5m2!1sen!2sin");
  const [pincode, setPincode] = useState(0);
  const {
    storelist,
    loading: bannerLoading,
    error: bannerError,
  } = useSelector((state) => state.storelist);
  
  useEffect(() => {
    dispatch(fetchStoreData());
  }, [dispatch]);

  const handlePincodeChange = (e) => {
    const newPincode = e.target.value;
    setPincode(newPincode);
    handleMap(newPincode);
  };

  const handleMap = (pincode) => {
    switch (parseInt(pincode)) {
      case 411014:
        Setswitchmap("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6951.884818544733!2d73.91645700152864!3d18.56101042164914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1712392855771!5m2!1sen!2sin");
        break;
      case 400070:
        Setswitchmap("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.4991446482654!2d72.88445867499166!3d19.08574650166685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c887efb78b9f%3A0x9f9dc99c3119470a!2sPhoenix%20Marketcity!5e0!3m2!1sen!2sin!4v1712393664879!5m2!1sen!2sin");
        break;
      case 600040:
        Setswitchmap("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5029835864902!2d72.8843911749917!3d19.08557790167229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c887efb78b9f%3a0x9f9dc99c3119470a!2sphoenix%20marketcity!5e0!3m2!1sen!2sin!4v1712393872790!5m2!1sen!2sin");
        break;
      case 560102:
        Setswitchmap("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2938856797864!2d80.19455707488453!3d13.08055171248063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526402be882bef%3A0xad2f3f45016d6710!2sVR%20Chennai!5e0!3m2!1sen!2sin!4v1712394057264!5m2!1sen!2sin");
        break;
      default:
        Setswitchmap("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6951.884818544733!2d73.91645700152864!3d18.56101042164914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1712392855771!5m2!1sen!2sin");
        break;
    }
  };

  return (
    <>
      <Header />
      <section className=" mt-120">
        <div className="container">
          <div className="row ">
            <div className="col-md-12 ">
              <div className="section-heading">
                <h6 className="theme-bg-text small">Our Stores</h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 text-end mt-md-5">
              <iframe
                src={switchmap}
                height="450"
                width="100%"
                style={{ border: "0" }}
                allowFullScreen=""
                className="col-md-12 text-end mt-md-5"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-md-4 text-start mt-md-5 find-store">
              <h4>Find Your Preferred Store</h4>
              <p>Find your preferred store to learn about its opening hours, stock availability, and relevant offers.</p>
              <div className="input-group mt-4">
                <p>Enter a PIN code</p>
                <Input placeholder="Enter PIN code" className="form-control text-input w-100" onChange={handlePincodeChange} />
              </div>
              <div className="input-group row d-flex justify-content-start align-items-start col-md-12 mt-3">
                <Checkbox className="col-md-1" />
                <label className="checkbox-label col-md-11">Remember my postal code for delivery, availability, and stock information.</label>
              </div>
              <p className="mt-3">Use your current location</p>
              <Button onClick={handleMap} className="btn button rounded w-100 ht-10" type="primary">Find a preferred store</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-120">
        {storelist &&
          storelist.admins &&
          storelist.admins.map((item, index) => {

            console.log(index + "hi");

            let align = "";

            if (index % 2 === 0) {
              align = "start";
            } else {
              align = "end"; 
            }


            return (
              <div className="container">
                <div className="col-md-12" style={{ display: "flex", justifyContent: align }}>

                  <div className="box-card-over position-relative">
                    <div className="col-md-12">
                      <img src="assets/images/store.png" className="img-fluid col-4" />
                      <img src="assets/images/store1.png" className="img-fluid col-4" />
                      <img src="assets/images/store2.png" className="img-fluid col-4" />

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
              </div>
            );
          })}


      </section>
      <Footer />
    </>
  );
};

export default Store;
