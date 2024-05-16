import React, { useState, useEffect, useCallback } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { GetAddCardProductById, AddOrderProductById, fetchAddressList, ApplyCouponFetch, ProfileUserData, AddAddressFetch } from "../reducer/thunks";
import constant from "../constant/constant";
import { Steps, Switch, Input, Form, message, Button, Select, Modal, Result, Typography, Radio } from "antd";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import Cards from "react-credit-cards-2";
import useRazorpay from "react-razorpay";
import { useNavigate } from "react-router-dom";
import { CloseCircleOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Paragraph, Text } = Typography;

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
  const navigate = useNavigate();
  const [Razorpay] = useRazorpay();
  const [form] = Form.useForm();
  const [couponNumber, SetCoupon] = useState("");
  const [couponValue, SetCouponValue] = useState(0)
  const [couponType, SetCouponType] = useState(null)
  const [orderType, SetOrderType] = useState(false)
  const [orderfail, SetOrderfail] = useState(false)
  const [selectedState, setSelectedState] = useState(null);
  const [checkbox, setCheckbox] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('online'); // Defaulting to 'online'

  const handleStateChange = (value) => {
    setSelectedState(value);
  };

  const {
    loading: getprofileUserLoading,
    loginerror: getprofileUserError,
    getprofile: getUserResponse,
  } = useSelector((state) => state.getprofile);


  const handleCoupon = () => {
    let bodypass = {
      couponCode: couponNumber,
      userId: userId
    }
    dispatch(ApplyCouponFetch(bodypass))
  }

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };


  const renderDiscount = () => {
    const discountAmount = calculateDiscount();
    return <span>{`-${discountAmount}`}</span>;
  };

  const calculateTotalAmount = () => {

    let discount = 0;
    if (couponType) {
      if (couponType === 'amount') {
        discount = Number(couponValue);
      } else if (couponType === 'percentage') {
        discount = (Number(couponValue) / 100) * (getTotal());
      } else if (couponType === 'bogo') {
        // Example BOGO calculation (adjust as per your requirements)
        discount = getTotal() / 2; // Assuming buy one get one free
      }
    }

    // Calculate the total amount after discount
    const totalAmount = (450 > +getTotal() ? getTotal() + 50 : getTotal()) - discount;
    const loyaltyPointsDiscount = parseFloat(getUserResponse?.User?.loyalty_point / 5);
    const finalAmount = checkbox ? (totalAmount - loyaltyPointsDiscount).toFixed(2) : totalAmount.toFixed(2);
    return finalAmount;

  };

  const shippingamount = () => {
    const calculatedAmount = parseFloat(getTotal()).toFixed(0);

    if (450 > +calculatedAmount) {
      return `${calculatedAmount} +(DC) 50 =` + " " + Number(+calculatedAmount + 50);
    } else {
      return "Delivery Fee";
    }
  };

  const onChangeSwith = (checked) => {
    console.log(`switch to ${checked}`);
    setCheckbox(checked)

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
    if (paymentMethod === "online") {


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
        amount: Math.round(Math.round(calculateTotalAmount()) * 100), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "WINTERBEAR",
        description: "Test Transaction",
        image: "https://winter-bear-client.web.app/assets/images/winterbear-logo.png",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
        handler: async function (response) {
          console.log(response);
          const quantities = GetAddcardUserRes.AddCarts.map((item) => ({
            productId: item.productId, // Product ID
            quantity: item.quantity, // Quantity
          }));

          let bodyresponce = {
            userId: localStorage.getItem("userId"), // Replace with a valid user ID
            addressId: form.getFieldValue().addressId, // Replace with a valid address ID
            productIds: GetAddcardUserRes.AddCarts.map((item) => item.productId), // Replace with valid product IDs in an array
            totalAmount: calculateTotalAmount(), // Replace with the total amount for the order
            delivery: "Card",
            paymentStatus: "Confirmed",
            razorpay_payment_id: response.razorpay_payment_id,
            exta_add_item: "",
            exta_message: '',
            applycoupon: couponNumber,
            quantity: quantities, // Use the array of objects with product ID and quantity

          };

          await dispatch(AddOrderProductById(bodyresponce));
          SetOrderType(true)
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);
        },
        prefill: {
          name: getUserResponse.User.firstname,
          email: getUserResponse.User.email,
          contact: getUserResponse.User.mobilenumber,
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
        // alert(response.error.code);
        // alert(response.error.description);
        // alert(response.error.source);
        // alert(response.error.step);
        // alert(response.error.reason);
        // alert(response.error.metadata.order_id);
        // alert(response.error.metadata.payment_id);
        SetOrderfail(true)
      });

      rzp1.open();
    } else {
      const quantities = GetAddcardUserRes.AddCarts.map((item) => ({
        productId: item.productId, // Product ID
        quantity: item.quantity, // Quantity
      }));

      let bodyresponce = {
        userId: localStorage.getItem("userId"), // Replace with a valid user ID
        addressId: form.getFieldValue().addressId, // Replace with a valid address ID
        productIds: GetAddcardUserRes.AddCarts.map((item) => item.productId), // Replace with valid product IDs in an array
        totalAmount: calculateTotalAmount(), // Replace with the total amount for the order
        delivery: "Cash",
        paymentStatus: "Confirmed",
        razorpay_payment_id: "133",
        exta_add_item: "",
        exta_message: '',
        applycoupon: couponNumber,
        quantity: quantities, // Use the array of objects with product ID and quantity

      };

      await dispatch(AddOrderProductById(bodyresponce));
      SetOrderType(true)
    }
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
  const {
    CouponRes: CouponResponse,
    addloading,
    error,
  } = useSelector((state) => state.CouponRes);
  console.log(CouponResponse, "CouponResponse");

  const {
    loading: getgetOrderUserLoading,
    Ordererror: getgetOrderUserError,
    addresslist: getOrderResponse,
  } = useSelector((state) => state.addresslist);
  console.log(getOrderResponse);

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

  const onFinish = async (values) => {
    console.log(values);
    // Handle form submission here
    // handlePayment();
    const address = {
      city: "Bangalore",
      street: values.address,
      pinCode: values.pinCode,
      typeAddress: values.address,
      companyName: values.lastName,
      fullName: values.firstName,
      phone: values.phonenumber,
      email: values.email,
      state: "Karnataka",
      userId: localStorage.getItem('userId'),
    };
    console.log(address, "address");

    // Dispatch the AddAddressFetch action
    if (!form.getFieldValue().addressId) {
      await dispatch(AddAddressFetch(address));
    }
    handlePayment()
    // message.success("Form submitted successfully!");
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
      dispatch(fetchAddressList(userId));

    }
  }, []);

  useEffect(() => {
    console.log(CouponResponse, "CouponResponse");

    if (CouponResponse?.success) {
      message.success("Coupon applied successfully");

      const { bodysend } = CouponResponse;

      if (bodysend) {
        const { coupon_type, discount } = bodysend;

        SetCouponValue(discount);
        SetCouponType(coupon_type);
      } else {
        // Handle case where bodysend is undefined or null
        console.error("Invalid coupon response: bodysend is missing");
      }
    } else if (typeof CouponResponse === 'string') {
      message.error(CouponResponse);
    } else {
      // Handle other types of CouponResponse that are not valid
      console.error("Invalid CouponResponse:", CouponResponse);
    }
  }, [CouponResponse]);

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

  const handleStateSelect = (value) => {
    // Handle the selected state, e.g., update the state in the component
    console.log("Selected State:", value);

    // Use filter to find the selected address
    const filterAddress = getOrderResponse.Addresslist.find((state) => state._id === value);

    // Log the filtered address
    console.log("Filtered Address:", filterAddress);

    // Use setFieldsValue to update the form values
    form.setFieldsValue({
      addressId: filterAddress._id,
      firstName: filterAddress.fullName,
      lastName: filterAddress.lastName,
      phonenumber: filterAddress.phone,
      address: filterAddress.typeAddress,
      email: filterAddress.email,
      pinCode: filterAddress.pinCode



      // Add other fields as needed
    });
  };


  const handlePayNow = () => {
    form.submit((values) => {
      // You can access the form values here and perform any additional actions
      console.log("Form values submitted:", values);

      // You can perform additional actions after form submission if needed
    });
  };
  // Define the getSubtotal function
  function getSubtitle() {
    return (
      GetAddcardUserRes?.AddCarts &&
      GetAddcardUserRes.AddCarts.map((item) => (
        <div className="cart-totals-item">
          <span>
            <img
              src={`${item?.product?.images[0]}`}
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

  const calculateDiscount = () => {
    let discount = 0;
    if (couponType === 'amount') {
      discount = Number(couponValue);
    } else if (couponType === 'percentage') {
      discount = (Number(couponValue) / 100) * (getTotal());
    } else if (couponType === 'bogo') {
      // Example BOGO calculation (adjust as per your requirements)
      discount = getTotal() / 2; // Assuming buy one get one free
    }
    return discount.toFixed(2);
  };

  const renderCardtotals = () => {
    return (
      <div className="col-md-4 h-25 mt-3">
        <div className="cart-totals p-4">
          {getSubtitle()}
          <div className="cart-totals-item border-top mt-3 pt-3">
            <span>Sub-total</span>
            <span>{getTotal()}</span>
          </div>
          <div className="cart-totals-item border-top mt-3 pt-3 align-self-center">
            <span className="m-2">Coupon</span>
            <Form.Item
              name="firstName"
              className="col-md-6"
              labelCol={{ span: 24 }}
              rules={[validateRules.required]}
            >
              <Input
                value={shippingAddress.firstName}
                className="form-control text-input-address"
                onChange={(e) =>
                  SetCoupon(e.target.value)
                }
              />
            </Form.Item>
            <button className="btn bg-theme text-white text-center h-25" onClick={handleCoupon}>
              Apply
            </button>
          </div>
          <div className="cart-totals-item">
            <span>Shipping</span>
            <span> {shippingamount()}</span>
          </div>
          <div className="cart-totals-item">
            <span>Discount</span>
            {renderDiscount()}
          </div>
          <div className="cart-totals-item">
            <span>Tax</span>
            <span>₹ 18</span>
          </div>
          <div className="cart-totals-item">
            <div class="loyalty-points-container">
              <div class="loyalty-points-flip-card">
                <div class="loyalty-points-front">
                  <span>Winter Bear Points</span>
                </div>
                <div class="loyalty-points-back">
                  <span>{getUserResponse?.User?.loyalty_point} Points</span>
                </div>
              </div>
              <span class="loyalty-points-discount">(Save ₹ {parseFloat(getUserResponse?.User?.loyalty_point / 5).toFixed(0)} )</span>
            </div>
            <span><Switch size="small" value={checkbox} onChange={onChangeSwith} /></span>
          </div>
          <div className="cart-totals-item">
            <div className="d-flex justify-content-center">
              <div className="payment-method-radio-group">
                <Radio.Group onChange={handlePaymentMethodChange} value={paymentMethod}>
                  <Radio value="online">Pay Online</Radio>
                  <Radio value="cod">Cash on Delivery</Radio>
                </Radio.Group>
              </div>
            </div>
          </div>
          <div className="cart-totals-item total border-top mt-4 pt-3">
            <span>Total</span>
            <div className="">
              <div>
                {couponType && <del className="stickout-price mx-3 text-danger">
                  ₹{(getTotal()).toFixed(2)}
                </del>}

                <span>
                  ₹{calculateTotalAmount()}
                </span>
              </div>
            </div>
          </div>


          <div className="cart-totals-item-btn mt-4 mb-4">

            <button className="btn button " onClick={handlePayNow}>
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
            <div className="col-md-12">
              {getOrderResponse && <Form.Item
                name="addressId"
                label="Select an Address"
                labelCol={{ span: 24 }}
                className="col-md-6"
              // rules={[validateRules.required]}
              >
                <Select
                  placeholder="Select an Address"
                  onChange={(selectedState) => handleStateSelect(selectedState)}
                >
                  {getOrderResponse && getOrderResponse?.Addresslist && getOrderResponse?.Addresslist.map((state) => (
                    <Option key={state._id} value={state._id}>
                      {state.typeAddress}
                    </Option>
                  ))}
                </Select>
              </Form.Item>}
            </div>
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
            >
              <Select defaultValue="India">
                <Option value="India">India</Option>
              </Select>
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
              rules={[validateRules.required]}
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
            {/* <div className="col-md-12">
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
            </div> */}
            <div className="col-md-12 row mt-5">
              {renderShippingAddressForm()}
              {renderCardtotals()}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Modal
        visible={orderType}
        onCancel={() => {
          SetOrderType(false);
        }}
        width="770px"
        height="300px"
        style={{ marginTop: "2%" }}
        footer={null}
      >
        <Result
          status="success"
          title="Order Confirmed"
          subTitle="Your order has been successfully confirmed! Order number: 2017182818828182881. We're preparing your items for shipment. Please wait patiently for your order to be processed."
          extra={[
            <Button onClick={() => {
              SetOrderType(false)

              navigate(`/account`);

            }} type="primary" key="track">
              Track Order
            </Button>,
            <Button key="newOrder" onClick={() => {
              SetOrderType(false)
              navigate(`/shop/0`);

            }}>
              Place New Order
            </Button>,
          ]}
        />

      </Modal>
      <Modal
        visible={orderfail}
        onCancel={() => {
          SetOrderfail(false);
        }}
        width="770px"
        height="300px"
        style={{ marginTop: "2%" }}
        footer={null}
      >
        <Result
          status="error"
          title="Order Failed"
          subTitle="We're sorry, but there was an issue processing your order. Please review the following information and try again."
          extra={[
            <Button onClick={() => {
              SetOrderfail(false);

            }} type="primary" key="retry">
              Retry Order
            </Button>,
            <Button onClick={() => {
              SetOrderfail(false);
            }} type key="contact">
              Contact Support
            </Button>,
          ]}
        >
          <div className="desc">
            <Paragraph>
              <Text
                strong
                style={{
                  fontSize: 16,
                }}
              >
                Unfortunately, your order could not be processed due to the following reasons:
              </Text>
            </Paragraph>
            <Paragraph>
              <CloseCircleOutlined className="site-result-demo-error-icon" /> Your payment method was declined. Please check your payment details and try again.
            </Paragraph>

          </div>
        </Result>


      </Modal>
    </>
  );
};

export default Payment;
