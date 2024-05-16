import React,{useState,useEffect} from 'react';
import { Modal, Form, Input, Button,message } from 'antd';
import { CreateUserData } from "./../reducer/thunks";
import { useDispatch, useSelector } from "react-redux";

const RegisterModal = ({ visible, onClose }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [failModalVisible, setFailModalVisible] = useState(false);

  const {
    loading: createUserLoading,
    error: createUserError,
    userData: createUserResponse,
  } = useSelector((state) => state.userData);

  const handleRegister = (values) => {
    if (values.email && values.password && values.firstName && values.lastName && values.mobileNumber) {
      let body = {
        firstname: values.firstName,
        lastname: values.lastName,
        mobilenumber: values.mobileNumber,
        email: values.email,
        password: values.password,
        UserType: "1",
      };
  
      // Dispatch the CreateUserData action
      dispatch(CreateUserData(body));
    } else {
      // Handle validation errors or show a message to the user
      console.error("Please enter valid data for registration");
    }
  };

  const handleClear = () => {
    // Reset the form fields
    form.resetFields();
  };

  const handleSuccessModalClose = () => {
    // Close the success modal
    setSuccessModalVisible(false);
    // Close the registration modal
    onClose();
  };

  const handleFailModalClose = () => {
    // Close the fail modal
    setFailModalVisible(false);
  };

 // Listen for changes in the registration response
  useEffect(() => {
    if (createUserResponse) {
      // If registration was successful, show the success modal
      // setSuccessModalVisible(true);
      message.success(createUserResponse, 5); // Display error message for 5 seconds
      console.log(createUserResponse);
      onClose()
      localStorage.setItem("userId", createUserResponse.userId);
      onClose();
      window.location.reload();
      window.location.href = "/";
    }
    if (createUserError) {
      console.log(createUserError);
      // message.error(createUserError, 5); // Display error message for 5 seconds
      console.error("Please enter valid data for registration");

    }
  }, [createUserResponse, createUserError]);

  // Display a message when registration fails
 
  return (
    <>
     <Modal
      visible={visible}
      onCancel={onClose}
      width="350px" // Set the width to your desired value
      footer={null}
    >
       <h4 className="text-center font-weight-bold head-control mt-4 mb-4" >
       Register
        </h4>
       
      <Form form={form} onFinish={handleRegister}>
        <Form.Item
          name="firstName"
          rules={[{ required: true, message: 'Please enter your first name' }]}
        >
          <Input               
          className="form-control text-input"
          placeholder="First Name" />
        </Form.Item>

        <Form.Item
          name="lastName"
          rules={[{ required: true, message: 'Please enter your last name' }]}
        >
          <Input className="form-control text-input" placeholder="Last Name" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please enter your email' }]}
        >
          <Input className="form-control text-input" placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="mobileNumber"
          rules={[{ required: true, message: 'Please enter your mobile number' }]}
        >
          <Input className="form-control text-input" placeholder="Mobile Number" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input className="form-control text-input" placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <div style={{ textAlign: 'center' }}>
            <Button type="primary"
              className="btn button w-75 h-25 mt-4"
               htmlType="submit">
              Register
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
    {/* <Modal
        visible={successModalVisible}
        onCancel={handleSuccessModalClose}
        footer={null}
      >
        <div style={{ textAlign: 'center' }}>
          <h3>Registration Successful!</h3>
          <Button type="primary" onClick={handleSuccessModalClose}>
            Close
          </Button>
        </div>
      </Modal>

      <Modal
        visible={failModalVisible}
        onCancel={handleFailModalClose}
        footer={null}
      >
        <div style={{ textAlign: 'center' }}>
          <h3>Registration Failed!</h3>
          <Button type="primary" onClick={handleFailModalClose}>
            Close
          </Button>
        </div>
      </Modal> */}

    
    </>
   

  );
};

export default RegisterModal;
