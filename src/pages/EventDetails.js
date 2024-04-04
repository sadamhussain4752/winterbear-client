import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Eventlist from "../components/Event-list";

const EventDetails = () => {
    const [activeTab, setActiveTab] = useState("div1");

    const showDiv = (divId) => {
        setActiveTab(divId);
    };

    return (
        <>
            <Header />

            <section className="py-5 mt-80">
                <div className="">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h3 className="theme-bg-text">Event Details</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center text-center ">
                        <div className="position-relative">
                            <img
                                src={require("../constant/images/Hero Section.png")}
                                alt="Upcoming Sale"
                                className="img-fluid"
                            />

                            <div>
                                <div className="col-md-12 row d-flex justify-content-between p-5">
                                    <h4 className="col-md-9 text-start event-details-title">Sound Of Christmas 2024</h4>
                                    <div className="col-md-3 text-end">
                                        <img className="image-icons" src={require("../constant/images/Interested Button.png")} />
                                        <img className="image-icons" src={require("../constant/images/Share button.png")} />
                                    </div>



                                </div>
                                <div className="col-md-12 row d-flex justify-content-between p-5">
                                    <div className="col-md-9 text-start event-des-date">
                                        <h5>
                                            Date and Time
                                        </h5>
                                        <p>
                                            <img src={require("../constant/images/uiw_date.png")} />
                                            Saturday, 2 December 2023
                                        </p>
                                        <p>
                                            <img src={require("../constant/images/icon-park-outline_time.png")} />
                                            6:30 PM - 9:30 PM
                                        </p>
                                        <p>
                                            + Add to Calendar
                                        </p>

                                    </div>
                                    <div className="col-md-3 text-end event-des-date">
                                        <button>
                                            <img src={require("../constant/images/ion_ticket.png")} />   Buy Tickets
                                        </button>
                                        <h5 className="mt-5">
                                            Ticket Information
                                        </h5>
                                        <p>
                                            <img src={require("../constant/images/ion_ticket.png")} /> Standard Ticket: ₹ 200 each
                                        </p>
                                    </div>



                                </div>
                                <div className="col-md-12 row d-flex justify-content-between p-5">
                                    <div className="col-md-12 text-start event-des-date">
                                        <h5>
                                            Location
                                        </h5>
                                        <p>
                                            Bal Gandharva Rang Mandir, Near Junction Of 24th & 32nd Road & Patwardhan Park,Off Linking Road, Bandra West., Mumbai, India
                                        </p>

                                    </div>
                                    <div className="col-md-12 text-end mt-md-5  ">
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

                                </div>

                                <div className="col-md-12 row d-flex justify-content-between p-5">
                                    <div className="col-md-12 text-start font-z">
                                        <h5>
                                            Event Description
                                        </h5>
                                        <p>
                                            Get ready to kick off the Christmas season in Mumbai with <strong> SOUND OF CHRISTMAS - your favourite LIVE Christmas concert!</strong>
                                        </p>
                                        <p>
                                            City Youth Movement invites you to the 4th edition of our annual Christmas festivities - by the youth and for the youth! Feat. your favourite worship leaders, carols, quizzes and some exciting surprises!
                                        </p>
                                        <p>
                                            Bring your family and friends and sing along your favourite Christmas carols on the 2nd of December, 6:30 PM onwards at the Balgandharva Rang Mandir, Bandra West. Book your tickets now!
                                        </p>
                                        <strong>
                                            3 Reasons to attend the event:
                                        </strong>
                                        <p className="mt-3">
                                            1. The FIRST Christmas concert of Mumbai!
                                        </p>
                                        <p>
                                            2. A special Christmas Choir!                                        </p>
                                        <p>
                                            3. Special Dance performances and many more surprises!                                        </p>

                                    </div>




                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </section>

            <Gallery />
            <Footer />
        </>
    );
};

export default EventDetails;
