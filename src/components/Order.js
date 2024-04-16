import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, Modal, Row, Col, Form, Rate } from "antd";
import { OrderUserList } from "../reducer/thunks";
import moment from "moment";
import constant from "../constant/constant";


const Order = () => {
  let userId = localStorage.getItem("userId");

  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewMore = (record) => {
    setSelectedOrder(record);
    setModalVisible(true);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const modalContent = (
    <div className="p-5 ">
      <p>
        <strong>Name:</strong> {selectedOrder?.user?.firstname}
      </p>
      <p>
        <strong>Address:</strong> {selectedOrder?.address?.street}
      </p>
      <p>
        <strong>Phone Number:</strong> {selectedOrder?.user?.mobilenumber}
      </p>

      <p>
        <strong>Rating:</strong> <Rate value={2} style={{
          color: "Green"
        }} />

      </p>
      <p className="mb-0">&nbsp;</p>
      {selectedOrder?.products.map((product) => (
        <Row key={product._id} gutter={[16, 16]}>
          <Col span={4}>
            <img
              src={`${product.images[0]}`}
              alt={product.title}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Col>

          <Col span={12}>
            <p>
              <strong>Title:</strong> {product.name}
            </p>

            <p>
              <strong>Delivery Status:</strong> {selectedOrder.delivered_type === "1" ? "Card" : "COD"}
            </p>
            <p>
              <strong>Payment Mode:</strong> {selectedOrder.delivery}
            </p>
          </Col>
          <Col span={8}>
            <Row>
              <Col span={12}>
                <p className="text-start">
                  <strong>Sub-total:</strong>
                </p>
              </Col>
              <Col span={12}>
                <p className="text-end">
                  {product.amount}
                </p>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <p className="text-start">
                  <strong>GST Tax:</strong>
                </p>
              </Col>
              <Col span={12}>
                <p className="text-end">
                  <span>18% ({product.offeramount} * 0.18) = {(product.offeramount * 0.18).toFixed(2)}</span>

                </p>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <p className="text-start">
                  <strong>Shipping fee:</strong>
                </p>
              </Col>
              <Col span={12}>
                <p className="text-end">
                  Free
                </p>
              </Col>
            </Row>




          </Col>

        </Row>
      ))}
      <Row className="bg-white">
        <Col span={12}>
          <p className="text-start py-3 ps-3">
            <strong>Total Order Amount:</strong>
          </p>
        </Col>
        <Col span={12}>
          <p className="text-end py-3">
            ${selectedOrder?.totalAmount}
          </p>
        </Col>
      </Row>

    </div>
  );


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
                  <td>{moment(item.createdAt).format("DD-MM-YYYY")}</td>
                  <td>{item.paymentStatus}</td>
                  <td>{item.totalAmount}</td>
                  <td>
                    <div className="rectangle" style={{
                      cursor: "pointer"
                    }} onClick={() => handleViewMore(item)}>
                      <p className="text-center p-texts">View Details</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        title="Order Details"
        visible={modalVisible}
        onCancel={handleModalCancel}
        footer={null}
        width={800}
        className="card-body rounded "
      >
        {modalContent}
      </Modal>
    </div>
  );
};

export default Order;
