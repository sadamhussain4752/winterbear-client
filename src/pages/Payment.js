import React, { useState, useEffect, useCallback } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { GetAddCardProductById } from "../reducer/thunks";
import constant from "../constant/constant";
import { Steps, Input, Form, message, Button, Select } from "antd";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import Cards from "react-credit-cards-2";
import useRazorpay from "react-razorpay";
const { Option } = Select;

const IndianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Jammu and Kashmir",
];

const CitiesByState = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Tirupati", "Guntur"],
  "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat"],
  Assam: ["Guwahati", "Dibrugarh", "Jorhat", "Silchar"],
  Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"],
  Chhattisgarh: ["Raipur", "Bhilai", "Bilaspur", "Durg"],
  Goa: ["Panaji", "Margao", "Vasco da Gama"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  Haryana: ["Chandigarh", "Faridabad", "Gurgaon", "Rohtak"],
  "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala", "Kullu"],
  Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
  Karnataka: ["Bangalore", "Mysuru", "Hubballi", "Mangaluru"],
  Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur", "Gwalior"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
  Manipur: ["Imphal", "Thoubal", "Bishnupur"],
  Meghalaya: ["Shillong", "Tura", "Jowai"],
  Mizoram: ["Aizawl", "Lunglei", "Champhai"],
  Nagaland: ["Kohima", "Dimapur", "Mokokchung"],
  Odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur"],
  Punjab: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar"],
  Rajasthan: ["Jaipur", "Udaipur", "Jodhpur", "Kota"],
  Sikkim: ["Gangtok", "Namchi", "Mangan"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem"],
  Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
  Tripura: ["Agartala", "Udaipur", "Dharmanagar"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi"],
  Uttarakhand: ["Dehradun", "Haridwar", "Rishikesh", "Nainital"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol"],
  "Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag", "Baramulla"],
  // ... add more states and cities
};

const Payment = () => {
  const dispatch = useDispatch();
  const [Razorpay] = useRazorpay();
  const [form] = Form.useForm();

  const [selectedState, setSelectedState] = useState(null);

  const handleStateChange = (value) => {
    setSelectedState(value);
  };

  const createOrder = async (params) => {
    // Implement your logic to create an order on the backend
    // and return the order details including an 'id'
    // Example:
    const response = await fetch(`${constant.baseUrl}api/order/orders`, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  };

  const handlePayment = async () => {
    let params = {
      amount: Math.round(getTotal() * 100),
      currency: "INR",
      receipt: "Receipt no. 1",
      notes: {
        notes_key_1: "Tea, Earl Grey, Hot",
        notes_key_2: "Tea, Earl Grey… decaf.",
      },
    };
    const order = await createOrder(params); //  Create order on your backend

    const options = {
      key: "rzp_test_6lyQTyrcSZUJgZ", // Enter the Key ID generated from the Dashboard
      amount: Math.round(getTotal() * 100) , // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "WINTERBEAR",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
      handler: function (response) {
        console.log(response);
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      prefill: {
        name: "Piyush Garg",
        email: "youremail@example.com",
        contact: "9629283625",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#221A42",
      },
    };

    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    rzp1.open();
  };

  const description = "This is a description.";

  let userId = localStorage.getItem("userId");
  // Dummy cart items (replace with actual data)
  const [focus, SetFocus] = useState("");

  const {
    GetAddcardUserRes,
    addloading: addloadingLoading,
    error: productListError,
  } = useSelector((state) => state.GetAddcardUserRes);

  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    phonenumber: "",
    country: "",
    streetAddress: "",
    townCity: "",
    state: "",
    pinCode: "",
  });

  const handleShippingAddressChange = (field, value) => {
    setShippingAddress({
      ...shippingAddress,
      [field]: value,
    });
  };

  const validateRules = {
    required: { required: true, message: "This field is required" },
    email: { type: "email", message: "Please enter a valid email" },
    number: { type: "number", message: "Please enter a valid number" },
  };

  const onFinish = (values) => {
    // Handle form submission here
    message.success("Form submitted successfully!");
  };

  // Dummy payment details (replace with actual data)
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    // ... add more fields as needed
  });

  useEffect(() => {
    if (userId !== undefined || userId !== null) {
      dispatch(GetAddCardProductById(userId));
    }
  }, []);

  const handlePaymentDetailsChange = (details) => {
    setPaymentDetails(details);
  };

  const getTotalPrice = () => {
    return (
      GetAddcardUserRes?.AddCarts &&
      GetAddcardUserRes.AddCarts.reduce(
        (total, item) => total + item.product.amount * item.quantity,
        0
      )
    );
  };

  const placeOrder = () => {
    // Call your backend API to place the order with the cart items, shipping address, and payment details
    // Note: This is a simplified example and does not include actual API calls or error handling

    // Clear the cart after placing the order
    // Optionally, navigate to a success page or show a confirmation message
    alert("Order placed successfully!");
  };

  const handlePayNow = () => {
    form.submit();
    // You can perform additional actions after form submission if needed
  };
  // Define the getSubtotal function
  function getSubtitle() {
    return (
      GetAddcardUserRes?.AddCarts &&
      GetAddcardUserRes.AddCarts.map((item) => (
        <div className="cart-totals-item">
          <span>
            <img
              src={`${constant.baseUrl}${item?.product?.images[0]}`}
              alt={`Product Image ${item.product.name}`}
              style={{ width: "80px", height: "80px" }}
            />
          </span>
          <span className="p-2">
            {item?.product?.name} <br />
            {item?.quantity} x ₹{item?.product?.amount}
          </span>
        </div>
      ))
    );
  }

  // Define the getTotal function
  function getTotal() {
    return (
      GetAddcardUserRes?.AddCarts &&
      GetAddcardUserRes.AddCarts.reduce(
        (total, item) => total + item.product.amount * item.quantity,
        0
      )
    );
  }

  const renderCardtotals = () => {
    return (
      <div className="col-md-4 h-25 mt-3">
        <div className="cart-totals p-4">
          {getSubtitle()}
          <div className="cart-totals-item border-top mt-3 pt-3">
            <span>Sub-total</span>
            <span>{getTotal()}</span>
          </div>
          <div className="cart-totals-item">
            <span>Shipping</span>
            <span>Free shipping</span>
          </div>
          <div className="cart-totals-item">
            <span>Discount</span>
            <span>₹ 0</span>
          </div>
          <div className="cart-totals-item">
            <span>Tax</span>
            <span>₹ 18</span>
          </div>
          <div className="cart-totals-item total border-top mt-4 pt-3">
            <span>Total</span>
            <span>₹{getTotal()}</span>
          </div>
          <div className="cart-totals-item-btn mt-4 mb-4">
            <button className="btn button " onClick={handlePayment}>
            Proceed to Payment
            </button>
          </div>
        </div>
        {/* {renderPaymentForm()} */}
      </div>
    );
  };

  const renderShippingAddressForm = () => {
    return (
      <div className="shipping-address col-md-8 mt-3 h-25 ">
        <h3>Billing Information</h3>
        <Form form={form} name="shippingAddressForm" onFinish={onFinish}>
          <div className="col-md-12 row">
            <Form.Item
              name="firstName"
              label="First Name"
              className="col-md-4"
              labelCol={{ span: 24 }}
              rules={[validateRules.required]}
            >
              <Input
                value={shippingAddress.firstName}
                className="form-control text-input-address"
                onChange={(e) =>
                  handleShippingAddressChange("firstName", e.target.value)
                }
              />
            </Form.Item>

            <Form.Item
              name="lastName"
              label="Last Name"
              className="col-md-4"
              labelCol={{ span: 24 }}
              rules={[validateRules.required]}
            >
              <Input
                value={shippingAddress.lastName}
                className="form-control text-input-address"
                onChange={(e) =>
                  handleShippingAddressChange("lastName", e.target.value)
                }
              />
            </Form.Item>

            <Form.Item
              name="phonenumber"
              label="Phone Number"
              className="col-md-4"
              labelCol={{ span: 24 }}
              rules={[
                validateRules.required,
                {
                  pattern: /^[0-9]{10}$/,
                  message: "Please enter a valid phone number",
                },
              ]}
            >
              <Input
                value={shippingAddress.phonenumber}
                className="form-control text-input-address"
                onChange={(e) =>
                  handleShippingAddressChange("phonenumber", e.target.value)
                }
              />
            </Form.Item>
          </div>

          <Form.Item
            name="address"
            label="Address"
            className="col-md-12"
            labelCol={{ span: 24 }}
            rules={[validateRules.required]}
          >
            <Input
              value={shippingAddress.address}
              className="form-control text-input-address"
              onChange={(e) =>
                handleShippingAddressChange("address", e.target.value)
              }
            />
          </Form.Item>

          <div className="col-md-12 row">
            <Form.Item
              label="Country"
              name="country"
              className="col-md-4"
              labelCol={{ span: 24 }}
              rules={[validateRules.required]}
            >
              <Input
                value="India"
                className="form-control text-input-address"
                disabled
              />
            </Form.Item>

            <Form.Item
              label="State"
              name="state"
              className="col-md-4"
              labelCol={{ span: 24 }}
              rules={[validateRules.required]}
            >
              <Select
                value={selectedState}
                onChange={handleStateChange}
                placeholder="Select a state"
              >
                {IndianStates.map((state) => (
                  <Option key={state} value={state}>
                    {state}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label="City"
              name="city"
              className="col-md-4"
              labelCol={{ span: 24 }}
              rules={[validateRules.required]}
            >
              <Select placeholder="Select a city" disabled={!selectedState}>
                {selectedState &&
                  CitiesByState[selectedState].map((city) => (
                    <Option key={city} value={city}>
                      {city}
                    </Option>
                  ))}
              </Select>
            </Form.Item>
          </div>

          <div className="col-md-12 row">
            <Form.Item
              name="email"
              label="Email"
              className="col-md-8"
              labelCol={{ span: 24 }}
              rules={[validateRules.required]}
            >
              <Input
                value={shippingAddress.streetAddress}
                className="form-control text-input-address"
                onChange={(e) =>
                  handleShippingAddressChange("streetAddress", e.target.value)
                }
              />
            </Form.Item>

            <Form.Item
              name="pinCode"
              label="ZIP Code"
              className="col-md-4"
              labelCol={{ span: 24 }}
              rules={[validateRules.required, validateRules.number]}
            >
              <Input
                value={shippingAddress.pinCode}
                className="form-control text-input-address"
                onChange={(e) =>
                  handleShippingAddressChange("pinCode", e.target.value)
                }
              />
            </Form.Item>
          </div>
        </Form>
      </div>
    );
  };

  return (
    <>
      <Header />

      <section className="py-5 mt-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="section-heading">
                <h3 className="theme-bg-text">Checkout</h3>
              </div>
            </div>
          </div>

          <div className="">
            <div className="col-md-12">
              <Steps
                current={2}
                items={[
                  {
                    title: "Address",
                    description,
                  },
                  {
                    title: "Order Summary",
                    description,
                    subTitle: "Left 00:00:08",
                  },
                  {
                    title: "payment",
                    description,
                  },
                ]}
              />
            </div>
            <div className="col-md-12 row mt-5">
              {renderShippingAddressForm()}
              {renderCardtotals()}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Payment;
