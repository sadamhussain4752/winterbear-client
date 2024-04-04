import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Item, Input, message, Button } from "antd/es";
import { fetchAddressList } from "../reducer/thunks";
import moment from "moment";
import AddressModel from "./AddressModel";


const Address = () => {
  let userId = localStorage.getItem("userId");
  const [isAddressModelVisible, setAddressModelVisible] = useState(false);

  const showAddressModel = () => {
    setAddressModelVisible(true);
  };

  const closeAddressModel = () => {
    setAddressModelVisible(false);
  };

  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const {
    loading: getgetOrderUserLoading,
    Ordererror: getgetOrderUserError,
    addresslist: getOrderResponse,
  } = useSelector((state) => state.addresslist);
  console.log(getOrderResponse);

  useEffect(() => {
    dispatch(fetchAddressList(userId));
  }, []);

  return (
    <div className="col-md-9 p-4 ">
      <div className="col-md-12 bg-white p-3 rounded">
        <div className="mx-4 mt-3">
          <div className="d-flex justify-content-between">
          <p className="p-header">Address</p>
          <button
              className="btn button h-25"
              type="button"
              onClick={showAddressModel}
            >
              Add New Address
            </button>
          </div>
         
          <table class="table h-50">
         
            <thead>
              <tr className="table-head">
                <th scope="col">Company Name</th>
                <th scope="col">Full Name</th>
                <th scope="col">Mobile</th>
                <th scope="col">Street</th>
                <th scope="col">Type Address</th>
              </tr>
            </thead>
            <tbody>
              {getOrderResponse?.Addresslist.map((item) => (
                <tr>
                  <th className="table-th">{item.companyName}</th>
                  <td className="table-th">{item.fullName}</td>
                  <td className="table-th">{item.phone}</td>
                  <td className="table-th">{item.street}</td>
                  <td className="table-th">{item.typeAddress}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AddressModel onClose={closeAddressModel} visible={isAddressModelVisible}/>
    </div>
  );
};

export default Address;
