import React from "react";
import { Table, Row, Col } from "antd";

const InvoiceTable = ({ products }) => {
  const columns = [
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text) => (
        <img
          src={text}
          alt="Product"
          style={{ maxWidth: "50px", maxHeight: "50px" }}
        />
      ),
    },
    {
      title: "Delivery Status",
      dataIndex: "deliveryStatus",
      key: "deliveryStatus",
    },
    {
      title: "Payment Mode",
      dataIndex: "paymentMode",
      key: "paymentMode",
    },
    {
      title: "Sub-total",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "GST Tax",
      dataIndex: "gstTax",
      key: "gstTax",
    },
    {
      title: "Shipping Fee",
      dataIndex: "shippingFee",
      key: "shippingFee",
    },
  ];

  const dataSource = products.map((product) => ({
    // key: product._id,
    name: product.name,
    image: product.images[0],
    deliveryStatus: product.delivered_type === "1" ? "Card" : "COD",
    paymentMode: product.delivery,
    amount: product.amount,
    gstTax: (product.offeramount * 0.18).toFixed(2),
    shippingFee: "Free",
  }));

  return <Table columns={columns} dataSource={dataSource} pagination={false} />;
};

export default InvoiceTable;
