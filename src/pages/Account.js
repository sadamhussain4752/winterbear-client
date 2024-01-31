import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fetchStoreData } from "../reducer/thunks";
import { useDispatch, useSelector } from "react-redux";
import { Form, Item, Input, message, Button } from "antd/es";
import EditProfile from "../components/EditProfile";
import PaymentOption from "../components/PaymentOption";
import Address from "../components/Address";
import Order from "../components/Order";
const Account = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [activeTab, setActiveTab] = useState("profile");

  const [loginData, setLoginData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (fieldName, value) => {
    setLoginData({ ...loginData, [fieldName]: value });
  };

  const handleLogin = () => {
    // Handle form submission
    // Access form data using form.getFieldsValue()
    const formData = form.getFieldsValue();
    console.log("Form Data:", formData);
    // Add your logic for handling form data submission
  };

  const {
    loading: getprofileUserLoading,
    loginerror: getprofileUserError,
    getprofile: getUserResponse,
  } = useSelector((state) => state.getprofile);

  useEffect(() => {
    if (getUserResponse && getUserResponse.User) {
      form.setFieldsValue({
        firstName: getUserResponse.User.firstname,
        lastName: getUserResponse.User.lastname,
        email: getUserResponse.User.email,
        phoneNo: getUserResponse.User.mobilenumber,
        currentPassword: getUserResponse.User.currentPassword,
        newPassword: getUserResponse.User.newPassword,
        confirmNewPassword: getUserResponse.User.confirmNewPassword,
      });
    }
  }, [getUserResponse, form]);
  
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    // Add logic to handle the tab click, such as loading specific data or navigating to a different section
  };
  const renderTabClick = (item) => {
    switch (item) {
      case "profile":
        return <EditProfile />;
      case "payment":
        return <PaymentOption />;
      case "address":
        return <Address />;
      case "order":
        return <Order />;
      case "logout":
        return logoutFunction();
      default:
        return null; // Return null or any default component for unknown cases
    }
  };
  
  const logoutFunction = () => {
    localStorage.removeItem('userId');
    window.location.reload();
    window.location.href = "/";


  };
  


  return (
    <>
      <Header />

      <section className=" mt-120">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-md-12 ">
              <div className="section-heading">
                <h6 className="theme-bg-text small">My Account</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="container-fluid bg-white">
            <div className="row d-flex justify-content-center">
              <div className="col-md-10">
                <div className="card-body row rounded">
                <div className="col-md-3 p-5 p-5">
                    <p className="p-header">Manage My Account</p>
                    <p
                      className={`p-text ft-16 ${activeTab === "profile" ? "active" : ""}`}
                      onClick={() => handleTabClick("profile")}
                    >
                      My Profile
                    </p>
                    <p
                      className={`p-text ft-16 ${activeTab === "payment" ? "active" : ""}`}
                      onClick={() => handleTabClick("payment")}
                    >
                      Payment Option
                    </p>
                    <p
                      className={`p-text ft-16 ${activeTab === "address" ? "active" : ""}`}
                      onClick={() => handleTabClick("address")}
                    >
                      Address
                    </p>
                    <p
                      className={`p-text ft-16 ${activeTab === "order" ? "active" : ""}`}
                      onClick={() => handleTabClick("order")}
                    >
                      Order
                    </p>
                    <p
                      className={`p-text ft-16 ${activeTab === "logout" ? "active" : ""}`}
                      onClick={() => handleTabClick("logout")}
                    >
                      Logout
                    </p>
                  </div>
                  {renderTabClick(activeTab)}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Account;
