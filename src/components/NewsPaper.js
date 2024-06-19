import React, { useState } from "react";
import { Modal, Form, Input, Button, message, Checkbox } from "antd";

const NewsPaper = ({ visible, onClose }) => {
    const [notificationData, setNotificationData] = useState({
        email: "",
        phone: "",
        whatsapp: false, // Add state for WhatsApp notification
    });

    const handleEmailChange = (e) => {
        setNotificationData((prevData) => ({ ...prevData, email: e.target.value }));
    };

    const handlePhoneChange = (e) => {
        setNotificationData((prevData) => ({ ...prevData, phone: e.target.value }));
    };

    const handleWhatsAppChange = (e) => {
        setNotificationData((prevData) => ({ ...prevData, whatsapp: e.target.checked }));
    };

    const handleSubscribe = () => {
        // Logic for subscribing the user for notifications
        console.log(notificationData); // You can send this data to your backend or perform any other actions
        message.success("Subscribed successfully!");
        onClose();
    };

    return (
        <Modal
            visible={visible}
            onCancel={onClose}
          
            footer={null}
            className="news-paper-modal"
        >
            <div className="news-paper-modal-div">

                <div className="row">
                    <div className="col-lg-6">

                        <div className="text-center ">
                            <p className="text-white font-news">
                            Welcome to Winterbear! 
                            </p>
                            <p className="text-white fs-5 fw-bold ">
                                GET 21% OFF
                            </p>
                            <p className="text-white font-news-text">
                            India's first one-stop destination for all official licensed merchandise.
                            </p>
                            <div className="d-flex justify-content-center align-items-center align-self-center font-news-text">
                                <p className="text-white ">
                                    Starting price:
                                </p>
                                <button className="btn bg-white font-news-btn">
                                    ₹ 99 INR
                                </button>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-6 pt-5 pt-lg-0">
                        <Form initialValues={notificationData}>
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter your email",
                                    },
                                    {
                                        type: "email",
                                        message: "Please enter a valid email",
                                    },
                                ]}
                            >
                                <Input
                                    className="form-control"
                                    placeholder="Enter Your Email Address"
                                    onChange={handleEmailChange}
                                />
                            </Form.Item>

                            <Form.Item
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter your phone number",
                                    },
                                ]}
                            >
                                <Input
                                    className="form-control"
                                    placeholder="Enter Your Phone Number"
                                    onChange={handlePhoneChange}
                                />
                            </Form.Item>

                            <Form.Item>
                                <Checkbox className="text-white" onChange={handleWhatsAppChange}>Receive important information and updates on WhatsApp</Checkbox>
                            </Form.Item>

                            <div className="d-flex justify-content-center pt-2 mb-5">
                                <Button
                                    type="primary"
                                    className="btn button w-75 h-25"
                                    onClick={handleSubscribe}
                                >
                                    SUBSCRIBE
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default NewsPaper;
