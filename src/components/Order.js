import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Item, Input, message, Button } from "antd/es";
import { OrderUserList } from "../reducer/thunks";
import moment from "moment";


const Order = () => {
  let userId = localStorage.getItem("userId");

  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const {
    loading: getgetOrderUserLoading,
    Ordererror: getgetOrderUserError,
    getOrder: getOrderResponse,
  } = useSelector((state) => state.getOrder);

  useEffect(() => {
    dispatch(OrderUserList(userId));
  }, []);

  return (
    <div className="col-md-9 p-4 ">
      <div className="col-md-12 bg-white p-3 rounded">
        <div className="mx-4 mt-3">
          <p className="p-header">Order</p>
          <table class="table h-50">
            <thead>
              <tr>
                <th scope="col">Order Id</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Total</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {getOrderResponse?.orders.map((item) => (
                <tr>
                  <th scope="row">#{item._id.slice(-7)}</th>
                  <td>{moment(item.createdAt).format("DD-MM-YYYY") }</td>
                  <td>{item.paymentStatus}</td>
                  <td>{item.totalAmount}</td>
                  <td>
                    <div className="rectangle">
                      <p className="text-center p-texts">View Details</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
