import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fetchStoreData } from "../reducer/thunks";
import { useDispatch, useSelector } from "react-redux";
import constant from "../constant/constant";
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
        </div>
      </section>
      {storelist &&
        storelist.admins &&
        storelist.admins.map((item, index) => {
          if (index % 2 == 0) {
            return (
              <section className="py-2 mb-3 ">
                <div className="container-fluid">
                  <div className="row ">
                    <div className="col-md-12 d-block mx-auto half-width-bg-left">
                      <div className="section-heading ">
                        <h3 className="fs-1 my-4 fw-bold text-main ">
                          {item.storename}
                        </h3>
                      </div>
                    </div>
                    <div className="col-md-6 text-end mt-md-5 ">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1705490836330!5m2!1sen!2sin"
                        width="400"
                        height="450"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                        className="left-20"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <div className="col-md-6 py-5 position-relative light-yeloo">
                      <div className="row ">
                        <div className="offset-md-2 col-md-3 ">
                          <img
                            src="assets/images/store.png"
                            className="w-100 d-block mx-auto"
                            alt="bg"
                          />
                        </div>
                        <div className="col-md-3">
                          <img
                            src="assets/images/store1.png"
                            className="w-100  d-block mx-auto"
                            alt="bg"
                          />
                        </div>
                        <div className="col-md-3">
                          <img
                            src="assets/images/store2.png"
                            className="w-100 d-block mx-auto"
                            alt="bg"
                          />
                        </div>

                        <div className="offset-md-2 col-md-8">
                          {item.storeaddress}
                        </div>
                        <div className="offset-md-2 col-md-5 mt-3 mb-5">
                          {item &&
                            item.storetimming &&
                            Object.values(item.storetimming).map((value, i) => (
                              <div key={i} className="d-flex justify-content-between">
                                <strong>{Days[i]}</strong>
                                <strong>{value}</strong>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          } else {
            return (
              <section className="mt-md-5 py-5 mb-5">
                <div className="container-fluid">
                  <div className="row my-5">
                    <div className="col-md-12 d-block mx-auto half-width-bg-right">
                      <div className="section-heading ">
                        <h3 className="fs-1 my-4 fw-bold text-main ">
                          {item.storename}
                        </h3>
                      </div>
                    </div>
                    <div className="col-md-6  position-relative light-yeloo">
                      <div className="row ">
                        <div className="offset-md-2 col-md-3 ">
                          <img
                            src="assets/images/store.png"
                            className="w-100 d-block mx-auto"
                            alt="bg"
                          />
                        </div>
                        <div className="col-md-3">
                          <img
                            src="assets/images/store1.png"
                            className="w-100  d-block mx-auto"
                            alt="bg"
                          />
                        </div>
                        <div className="col-md-3">
                          <img
                            src="assets/images/store2.png"
                            className="w-100 d-block mx-auto"
                            alt="bg"
                          />
                        </div>
                        <div className="offset-md-2 col-md-8">
                          {item.storeaddress}
                        </div>
                        <div className="offset-md-2 col-md-5 mt-3 mb-5">
                          {item &&
                            item.storetimming &&
                            Object.values(item.storetimming).map((value, i) => (
                              <div key={i} className="d-flex justify-content-between">
                                <strong>{Days[i]}</strong>
                                <strong>{value}</strong>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 text-end ">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1705490836330!5m2!1sen!2sin"
                        width="400"
                        height="450"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                        className="left--20"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </section>
            );
          }
        })}

      <Footer />
    </>
  );
};

export default Store;
