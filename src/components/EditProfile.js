import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fetchStoreData } from "../reducer/thunks";
import { useDispatch, useSelector } from "react-redux";
import { Form, Item, Input, message, Button } from "antd/es";

const EditProfile = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

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
  



  return (
    <div className="col-md-9 p-4 ">
    <div className="col-md-12 bg-white p-3 rounded">
      <div className="mx-4 mt-3">
        <p className="p-header">Edit Your Profile</p>
        <Form
          form={form}
          onFinish={handleLogin}
          initialValues={loginData}
        >
          <div className="col-md-12 row">
            <div className="col-md-6">
              <p className="p-text p-textbody ft-16">
                First Name
              </p>
              <Form.Item
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "Please enter your first name",
                  },
                ]}
              >
                <Input
                  className="form-control bg-input"
                  placeholder="Enter your first name"
                  value={loginData.firstName}
                  onChange={(e) =>
                    handleChange("firstName", e.target.value)
                  }
                />
              </Form.Item>
            </div>
            <div className="col-md-6">
              <p className="p-text p-textbody ft-16">
                Last Name
              </p>
              <Form.Item
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: "Please enter your last name",
                  },
                ]}
              >
                <Input
                  className="form-control bg-input"
                  placeholder="Enter your last name"
                  value={loginData.lastName}
                  onChange={(e) =>
                    handleChange("lastName", e.target.value)
                  }
                />
              </Form.Item>
            </div>
          </div>
          <div className="col-md-12 row">
            <div className="col-md-6">
              <p className="p-text p-textbody ft-16">Email</p>
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
                  className="form-control bg-input"
                  placeholder="Email"
                  value={loginData.email}
                  onChange={(e) =>
                    handleChange("email", e.target.value)
                  }
                />
              </Form.Item>
            </div>
            <div className="col-md-6">
              <p className="p-text p-textbody ft-16">
                Phone No
              </p>
              <Form.Item
                name="phoneNo"
                rules={[
                  {
                    required: true,
                    message: "Please enter your phone number",
                  },
                ]}
              >
                <Input
                  className="form-control bg-input"
                  placeholder="Phone No"
                  value={loginData.phoneNo}
                  onChange={(e) =>
                    handleChange("phoneNo", e.target.value)
                  }
                />
              </Form.Item>
            </div>
          </div>
          {/* <div className="col-md-12">
<p className="p-text p-textbody ft-16">Address</p>
<Form.Item
name="address"
rules={[
{
required: true,
message: "Please enter your address",
},
]}
>
<Input
className="form-control bg-input"
placeholder="Address"
value={loginData.address}
onChange={(e) => handleChange("address", e.target.value)}
/>
</Form.Item>
</div> */}
          <div className="col-md-12">
            <p className="p-text p-textbody ft-16">
              Password Change
            </p>
            <Form.Item
              name="currentPassword"
              rules={[
                {
                  required: true,
                  message: "Please enter your current password",
                },
              ]}
            >
              <Input
                className="form-control bg-input"
                placeholder="Current Password"
                value={loginData.currentPassword}
                onChange={(e) =>
                  handleChange(
                    "currentPassword",
                    e.target.value
                  )
                }
              />
            </Form.Item>
          </div>
          <div className="col-md-12">
            <Form.Item
              name="newPassword"
              rules={[
                {
                  required: true,
                  message: "Please enter your new password",
                },
              ]}
            >
              <Input
                className="form-control bg-input"
                placeholder="New Password"
                value={loginData.newPassword}
                onChange={(e) =>
                  handleChange("newPassword", e.target.value)
                }
              />
            </Form.Item>
          </div>
          <div className="col-md-12">
            <Form.Item
              name="confirmNewPassword"
              rules={[
                {
                  required: true,
                  message: "Please confirm your new password",
                },
              ]}
            >
              <Input
                className="form-control bg-input"
                placeholder="Confirm New Password"
                value={loginData.confirmNewPassword}
                onChange={(e) =>
                  handleChange(
                    "confirmNewPassword",
                    e.target.value
                  )
                }
              />
            </Form.Item>
          </div>

          <div className="d-flex justify-content-end pt-2">
            <button
              type="primary"
              className="btn bg-cl-tr w-40 h-25"
            >
              Cancel
            </button>
            <Button
              type="primary"
              className="btn button h-25"
              htmlType="submit"
            >
              Save Changes
            </Button>
          </div>
        </Form>
      </div>
    </div>
  </div>
  );
};

export default EditProfile;
