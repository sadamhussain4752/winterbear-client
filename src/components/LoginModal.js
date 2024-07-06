import React, { useState, useRef, useEffect } from "react";
import { Modal, Form, Input, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Google from "../constant/images/button.svg";
import { LoginUserData, VerifyOTP, AddCardProductById } from "./../reducer/thunks"; // Import the CreateUserData action
import { signInWithGooglePopup, auth } from "../firebase/firebaseconfig";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";

const LoginModal = ({ visible, onClose }) => {
  const dispatch = useDispatch();
  const formRef = useRef();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    mobilenumber: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [otpError, setOtpError] = useState("");

  const {
    loading: getprofileUserLoading,
    loginerror: getprofileUserError,
    otpVerificationResponse: otpVerification,
  } = useSelector((state) => state.otpVerificationResponse);


  const {
    loginData: loginresponce,
  } = useSelector((state) => state.loginData);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generateRecaptcha = () => {
    // Create a new RecaptchaVerifier instance
    return window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});

  };

  // Function to handle sending OTP
  const handleSend = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {

      auth.languageCode = 'it'; // Set language code if needed
      const appVerifier = await generateRecaptcha(); // Generate RecaptchaVerifier
      console.log(appVerifier, "appVerifier");
      const phoneNumber = "+919629283625"; // Replace with the phone number to send OTP
      // Send OTP via SMS using signInWithPhoneNumber function
      console.log(phoneNumber, "phoneNumber");
      console.log(auth, phoneNumber, appVerifier, "appVerifier");

      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      console.log(confirmationResult, "confirmationResult");

      // SMS sent. Prompt user to type the code from the message.
      // Save confirmation result for further verification
      window.confirmationResult = confirmationResult;

    } catch (error) {
      // Error occurred during OTP sending
      console.error("Error sending OTP:", error);
    }
  };

  const handleSendOtp = () => {
    const { email, password, mobilenumber } = loginData;
    if ((email && password) || (mobilenumber && mobilenumber.length === 10)) {
      let body = {};
      if (email && password) {
        body = { email, password };
        // Call API to send OTP

        dispatch(LoginUserData(body)); // Replace sendOTPAction with your actual action

      } else if (mobilenumber) {
        // Call API to send OTP
        body = { mobilenumber: mobilenumber };

        dispatch(LoginUserData(body)); // Replace sendOTPAction with your actual action
        setOtpSent(true);
      }
    } else {
      message.error(
        "Please enter valid email and password or a 10-digit mobile number with OTP"
      );
    }
  };

  const handleLogin = () => {
    const { email, password, mobilenumber } = loginData;
    if (
      (email && password) ||
      (mobilenumber && mobilenumber.length === 10 && otpValue)
    ) {
      let body = {};
      if (email && password) {
        body = { email: email, otp: otpValue };
        // dispatch(VerifyOTP(body)); // Dispatch action to verify OTP
      } else if (mobilenumber && otpValue) {
        body = { mobilenumber: mobilenumber, otp: otpValue };
        // dispatch(VerifyOTP(body)); // Dispatch action to verify OTP
      }
    } else {
      message.error(
        "Please enter valid email and password or a 10-digit mobile number with OTP"
      );
    }
  };

  // Handle OTP verification response
  useEffect(() => {
    if (otpVerification) {
      console.log(otpVerification, "otpVerification");
      if (otpVerification !== "Invalid OTP") {
        message.success(otpVerification.message, 5);
        if (otpVerification.UserType === "3") {
          message.success("Success", 5); // Display success message for 5 seconds
          console.log(otpVerification);
          localStorage.setItem("userId", otpVerification.userId);
          onClose();
          window.location.reload();
          window.location.href = "/";
        } else {
          message.success("Not exist as User", 5); // Display success message for 5 seconds
        }
        // Perform actions after successful OTP verification
      } else {
        message.error(otpVerification, 5);
      }
    }

  }, [otpVerification]);

  useEffect(() => {
    const handleLoginResponse = async () => {
      if (loginresponce?.userId) {
        try {
          message.success("Success", 5); // Display success message for 5 seconds
          console.log(loginresponce);

          // Set userId in localStorage
          localStorage.setItem("userId", loginresponce.userId);



          // Get the cart items from localStorage
          let getlistcarts = localStorage.getItem("cardstore");

          if (getlistcarts) {
            const cartItems = JSON.parse(getlistcarts).map(item => ({
              ...item,
              userId: loginresponce.userId,
            }));

            // Dispatch all add card actions
            await Promise.all(cartItems.map(item => dispatch(AddCardProductById(item))));
          }
          // Remove cart items from localStorage
          localStorage.removeItem("cardstore");
          // Close the modal or perform any UI updates
          onClose();

          // Reload the page and redirect to the home page
          window.location.reload();
          window.location.href = "/";
        } catch (error) {
          console.error("Error handling login response:", error);
        }
      }
    };

    handleLoginResponse();
  }, [loginresponce?.userId]);


  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    // const response = await sendOTPviaSMS("+919629283625");
    console.log(response);
    const { email, password, mobilenumber } = loginData;

    let body = {
      email: response.user.email,
      "password": "",
      "google_signin": response.user.emailVerified
    }

    dispatch(LoginUserData(body)); // Replace sendOTPAction with your actual action



  }


  return (
    <Modal visible={visible} onCancel={onClose} width="350px" footer={null} style={{ marginTop: "3%" }}
    >
      <h4 className="text-center font-weight-bold head-control mt-4">Login</h4>
      <p className="text-center p-text mb-4">Choose one of the options below</p>
      <Form onFinish={handleSendOtp} initialValues={loginData}>
        {!otpSent ? (
          <>
            {loginData.mobilenumber.length !== 10 && (
              <>
                <Form.Item name="email">
                  <Input
                    name="email"
                    className="form-control text-input"
                    placeholder="Email"
                    onChange={handleInputChange}
                  />
                </Form.Item>

                <Form.Item name="password">
                  <Input
                    name="password"
                    className="form-control text-input custom-password-input"
                    placeholder="Password"
                    onChange={handleInputChange}
                    style={{ backgroundColor: "transparent" }}
                  />
                </Form.Item>
              </>
            )}
            <div className="mb-3">
              {loginData.mobilenumber.length !== 10 && <p className="text-center p-text">OR</p>
              }

              <div id="recaptcha-container"></div>

              <div className="d-flex justify-content-center">
                <img
                  onClick={logGoogleUser}
                  // className="text-center"
                  height={"44px"}
                  alt=""
                  src={Google}
                />
              </div>
              <p className="text-center p-text">OR</p>

            </div>
            {loginData.password.length < 1 && (
              <Form.Item
                name="mobilenumber"
                rules={[
                  {
                    required: true,
                    message: "Please enter your Mobile Number",
                  },
                ]}
              >
                <Input
                  name="mobilenumber"
                  className="form-control text-input"
                  placeholder="Mobile Number"
                  onChange={handleInputChange}
                />
              </Form.Item>
            )}

            <div className="d-flex justify-content-center pt-2">
              <Button
                type="primary"
                className="btn button w-75 h-25"
                onClick={handleSendOtp}
              >
                {loginData.password.length < 1 ? "Send OTP" : "Login"}
              </Button>
            </div>
          </>
        ) : (
          <>
            <Form.Item
              name="otp"
              rules={[
                {
                  required: true,
                  message: "Please enter OTP",
                },
              ]}
            >
              <Input
                name="otp"
                className="form-control text-input"
                placeholder="Enter OTP"
                onChange={(e) => setOtpValue(e.target.value)}
              />
            </Form.Item>

            {otpError && <p className="text-danger">{otpError}</p>}

            <div className="d-flex justify-content-center pt-2">
              <Button
                type="primary"
                className="btn button w-75 h-25"
                onClick={handleLogin}
              >
                Verify OTP
              </Button>
            </div>
          </>
        )}
      </Form>
    </Modal>
  );
};

export default LoginModal;
