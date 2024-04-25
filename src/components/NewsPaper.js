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
            width="440px"
            footer={null}
            className="news-paper-modal"
        >
            <div className="news-paper-modal-div">
                <div className="text-center ">
                    <p className="text-white font-news">
                        Welcome To WINTERBEAR !
                    </p>
                    <p className="text-white fs-5 fw-bold ">
                        GET 21% OFF
                    </p>
                    <p className="text-white font-news-text">
                        Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.
                    </p>
                    <div className="d-flex justify-content-center align-items-center align-self-center font-news-text">
                        <p className="text-white ">
                            Starting price:
                        </p>
                        <button className="btn bg-white font-news-btn">
                            $99 USD
                        </button>
                    </div>

                </div>

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
        </Modal>
    );
};

export default NewsPaper;
