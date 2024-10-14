import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Button, message } from 'antd';
import { AddAddressFetch ,fetchAddressList} from "./../reducer/thunks";
import { useDispatch } from "react-redux";

const AddressModel = ({ visible, onClose }) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const handleAddAddress = async (values) => {
        if (values.city && values.street && values.pinCode && values.typeAddress && values.companyName && values.fullName && values.mobile) {
            const address = {
                city: values.city,
                street: values.street,
                pinCode: values.pinCode,
                typeAddress: values.typeAddress,
                companyName: values.companyName,
                fullName: values.fullName,
                phone: values.mobile,
                email: values.email,
                state: "Karnataka",
                userId: localStorage.getItem('userId'),
            };

            // Dispatch the AddAddressFetch action
           await dispatch(AddAddressFetch(address));
           dispatch(fetchAddressList(localStorage.getItem('userId')));

           onClose()
        } else {
            message.error("Please fill in all required fields");
        }
    };

    const handleClear = () => {
        form.resetFields();
    };

    return (
        <>
            <Modal
                visible={visible}
                onCancel={onClose}
                width="850px"
                footer={null}
                style={{ marginTop: "3%" }}
            >
                <h4 className="text-center font-weight-bold head-control mt-4 mb-4">
                    Add Address
                </h4>

                <Form form={form} onFinish={handleAddAddress} >
                    <div className='col-md-12 row d-flex'>
                    <Form.Item
                            name="companyName"
                            className='col-md-4'
                            rules={[{ required: true, message: 'Please enter company name' }]}
                        >
                            <Input className="form-control text-input" placeholder="Company Name" />
                        </Form.Item>

                        <Form.Item
                            name="fullName"
                            className='col-md-4'

                            rules={[{ required: true, message: 'Please enter full name' }]}
                        >
                            <Input className="form-control text-input" placeholder="Full Name" />
                        </Form.Item>

                        <Form.Item
                            name="mobile"
                            className='col-md-4'

                            rules={[{ required: true, message: 'Please enter mobile number' }]}
                        >
                            <Input className="form-control text-input" placeholder="Mobile" />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            className='col-md-4'

                            rules={[{ required: true, message: 'Please enter Email' }]}
                        >
                            <Input className="form-control text-input " placeholder="Email" />
                        </Form.Item>

                        <Form.Item
                            name="city"
                            className='col-md-4'

                            rules={[{ required: true, message: 'Please enter city' }]}
                        >
                            <Input className="form-control text-input" placeholder="City" />
                        </Form.Item>

                        <Form.Item
                            name="street"
                            className='col-md-4'

                            rules={[{ required: true, message: 'Please enter street' }]}
                        >
                            <Input className="form-control text-input" placeholder="Street" />
                        </Form.Item>

                        <Form.Item
                            name="pinCode"
                            className='col-md-4'

                            rules={[{ required: true, message: 'Please enter pin code' }]}
                        >
                            <Input className="form-control text-input" placeholder="Pin Code" />
                        </Form.Item>

                        <Form.Item
                            name="typeAddress"
                            className='col-md-4'

                            rules={[{ required: true, message: 'Please enter address type' }]}
                        >
                            <Input className="form-control text-input" placeholder="Address Type" />
                        </Form.Item>

                        <Form.Item>
                            <div style={{ textAlign: 'center' }} className='col-md-4'
                            >
                                <Button type="primary" className="btn button w-75 h-25 mt-4" htmlType="submit">
                                    Add Address
                                </Button>
                            </div>
                        </Form.Item>
                    </div>
                      

                </Form>
            </Modal>
        </>
    );
};

export default AddressModel;
