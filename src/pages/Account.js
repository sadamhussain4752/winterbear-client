import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";



function MyAccount() {
    return (

        <>

            <Header />

            <section className="section myaccount mt-80" >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h3 className="theme-bg-text">My Account</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container bgg" >


                    <div className="row">
                        <div className="col-lg-3 co3seg">
                            <div className="nav flex-column nav-pills me-3 w-100 " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <button className="nav-link accBtn active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Manage My Account</button>
                                <button className="nav-link accBtn" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Payment Options</button>
                                <button className="nav-link accBtn" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" disabled>Address</button>
                                <button className="nav-link accBtn" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Orders</button>
                                <button className="nav-link accBtn" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Logout</button>
                            </div>
                        </div>
                        <div className="col-lg-9 col-12">
                            <div className="tab-content w-100" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">

                                    <div className="form">
                                        <div className="container-fluid px-1 mx-auto">
                                            <div className="row d-flex justify-content-center">
                                                <div className=" col-lg-12 col-11 text-center">

                                                    <div className="card">
                                                        <p className="cmfont text-start">Edit Your Profile</p>
                                                        <form className="form-card" onsubmit="event.preventDefault()">
                                                            <div className="row justify-content-between text-left">
                                                                <div className="form-group col-sm-6 flex-column d-flex">
                                                                    <label className="form-control-label">First name</label>
                                                                    <input type="text" id="fname" name="fname" placeholder="" onblur="validate(1)" />
                                                                </div>
                                                                <div className="form-group col-sm-6 flex-column d-flex">
                                                                    <label className="form-control-label">
                                                                        Last name
                                                                    </label>
                                                                    <input type="text" id="lname" name="lname" placeholder="" onblur="validate(2)" />
                                                                </div>
                                                            </div>
                                                            <div className="row justify-content-between text-left">
                                                                <div className="form-group col-sm-6 flex-column d-flex">
                                                                    <label className="form-control-label">
                                                                        email</label>
                                                                    <input type="text" id="email" name="email" placeholder="" onblur="validate(3)" />
                                                                </div>
                                                                <div className="form-group col-sm-6 flex-column d-flex">
                                                                    <label className="form-control-label">
                                                                        Phone no
                                                                    </label>
                                                                    <input type="text" id="mob" name="mob" placeholder="" onblur="validate(4)"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="row justify-content-between text-left">
                                                                <div className="form-group col-12 flex-column d-flex">
                                                                    <label className="form-control-label">Job title
                                                                    </label>
                                                                    <input type="text" id="job" name="job" placeholder="" onblur="validate(5)" />
                                                                </div>
                                                            </div>
                                                            <div className="row justify-content-between text-left">
                                                                <div className="form-group col-12 flex-column d-flex">
                                                                    <label className="form-control-label">
                                                                        Password Changes
                                                                    </label>
                                                                    <input type="text" id="" name="ans" placeholder="Current Passwod" onblur="validate(6)" />

                                                                    <input type="text" id="" name="ans" placeholder="New Passwod" onblur="validate(6)" />

                                                                    <input type="text" id="" name="ans" placeholder="Confirm New Passwod" onblur="validate(6)" />
                                                                </div>
                                                            </div>
                                                            <div className="row ">
                                                                <div className="form-group col-sm-12 d-flex justify-content-end">
                                                                    <button type="submit" className="btn-block btnn btn-primary">
                                                                        Cancel
                                                                    </button>
                                                                    <button type="submit" className="btn-block btnn1 btn-primary">
                                                                        Save Chnages
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">...</div>
                                <div className="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">...</div>
                                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">...</div>
                                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">...</div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <Footer />
        </>

    )
}

export default MyAccount;