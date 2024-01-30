import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fetchStoreData } from "../reducer/thunks";
import { useDispatch, useSelector } from "react-redux";
import { Form, Item, Input, message, Button,Radio } from "antd/es";
import cardimg from "./../constant/images/visa.png"

const Address = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [card, setCard] = useState(1);

  const [loginData, setLoginData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setCard(e.target.value);
  };

  const [ListCard, setCardList] = useState([
    {
      Card_Number: "1122-1223-1234-1224",
      expires: "06/2026",
      card_img: cardimg,
      id: 1,
    },
    {
      Card_Number: "1122-1223-1234-1224",
      expires: "06/2026",
      card_img: cardimg,
      id: 2,
    },
    {
      Card_Number: "1122-1223-1234-1224",
      expires: "06/2026",
      card_img: cardimg,
      id: 3,
    },
  ]);

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

//   useEffect(() => {
//     if (getUserResponse && getUserResponse.User) {
//       form.setFieldsValue({
//         firstName: getUserResponse.User.firstname,
//         lastName: getUserResponse.User.lastname,
//         email: getUserResponse.User.email,
//         phoneNo: getUserResponse.User.mobilenumber,
//         currentPassword: getUserResponse.User.currentPassword,
//         newPassword: getUserResponse.User.newPassword,
//         confirmNewPassword: getUserResponse.User.confirmNewPassword,
//       });
//     }
//   }, [getUserResponse, form]);
  



  return (
    <div className="col-md-9 p-4 ">
    <div className="col-md-12 bg-white p-3 rounded">
      <div className="mx-4 mt-3">
        <p className="p-header">Address</p>
        <div className="col-md-12">
        <Radio.Group
          className="row"
          onChange={onChange}
          value={card}
        >
          {ListCard.map((item) => (
           <Radio className="row border border-1 p-3" value={item.id}>
           {/* <div className="col-md-4">
             {"*".repeat(item.Card_Number.length - 4).slice(-8) +
               item.Card_Number.slice(-4)}
           </div>
           <div className="col-md-4">
             <div className="text-start">Expires {item.expires}</div>
             <div className="text text-end mt-2">Edit</div>
             <div className="text text-end red-text mt-2">Remove</div>
           </div> */}
               <div class="col-12">
               <div className="col-4">
             {"*".repeat(item.Card_Number.length - 4).slice(-8) +
               item.Card_Number.slice(-4)}
           </div>
               <div className="text-start">Expires {item.expires}</div>
             <div className="text text-end mt-2">Edit</div>
             <div className="text text-end red-text mt-2">Remove</div>
                </div>

         </Radio>
         
          ))}
        </Radio.Group>
        </div>

      
      </div>
    </div>
  </div>
  );
};

export default Address;
