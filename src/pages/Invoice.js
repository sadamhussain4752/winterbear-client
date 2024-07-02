import React from "react";
import html2pdf from "html2pdf.js";

const Invoice = () => {
  const invoiceData = [
    { description: "Communication", qty: 5, unitPrice: 75, total: 375.0 },
    { description: "Asset Gathering", qty: 3, unitPrice: 75, total: 225.0 },
    { description: "Design Development", qty: 5, unitPrice: 75, total: 375.0 },
    { description: "Animation", qty: 20, unitPrice: 75, total: 1500.0 },
    {
      description: "Animation Revisions",
      qty: 10,
      unitPrice: 75,
      total: 750.0,
    },
    { description: "HST", qty: "HST", unitPrice: "13%", total: 419.25 },
    { description: "Communication", qty: 5, unitPrice: 75, total: 375.0 },
    { description: "Asset Gathering", qty: 3, unitPrice: 75, total: 225.0 },
    { description: "Design Development", qty: 5, unitPrice: 75, total: 375.0 },
    { description: "Animation", qty: 20, unitPrice: 75, total: 1500.0 },
    {
      description: "Animation Revisions",
      qty: 10,
      unitPrice: 75,
      total: 750.0,
    },
    { description: "HST", qty: "HST", unitPrice: "13%", total: 419.25 },
    { description: "Communication", qty: 5, unitPrice: 75, total: 375.0 },
    { description: "Asset Gathering", qty: 3, unitPrice: 75, total: 225.0 },
    { description: "Design Development", qty: 5, unitPrice: 75, total: 375.0 },
    { description: "Animation", qty: 20, unitPrice: 75, total: 1500.0 },
    {
      description: "Animation Revisions",
      qty: 10,
      unitPrice: 75,
      total: 750.0,
    },
    { description: "HST", qty: "HST", unitPrice: "13%", total: 419.25 },
    { description: "HST", qty: "HST", unitPrice: "13%", total: 419.25 },
  ];

  const calculateTotals = (items) => {
    const totalQty = items.reduce(
      (acc, item) => acc + (typeof item.qty === "number" ? item.qty : 0),
      0
    );
    const totalUnitPrice = items.reduce(
      (acc, item) =>
        acc + (typeof item.unitPrice === "number" ? item.unitPrice : 0),
      0
    );
    const totalAmount = items.reduce((acc, item) => acc + item.total, 0);

    return { totalQty, totalUnitPrice, totalAmount };
  };

  const totals = calculateTotals(invoiceData);

  const generatePDF = () => {
    const element = document.getElementById("invoice");
    html2pdf(element, {
      margin: 1,
      filename: "invoice.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    });
  };

  return (
    <>
      <div className="container bor-updn" id="invoice">
        <div className="container clr-tp ">
          <div className="row d-flex justify-content-center align-items-center py-4">
            <div className="col-2">
              <img
                className="w-50"
                src="assets/images/Winterbear-Favicon32x32.png"
                alt="Ping"
              />
            </div>
            <div className="col-4">
              <h4>WINTER BEAR</h4>
              <p>
                Official BT21 & LINE FRIENDS
                <br /> Merchandise in India.
                <br />
                Contact No: +91 1234567890
              </p>
            </div>
            <div className="col-4">
              <p>Date: 01/01/2024</p>
              <hr />
              <p>Invoice No: 123676d3dr456</p>
              <hr />
            </div>
          </div>
        </div>
        <div className="text-end px-2 py-2">
          Payment terms (due on receipt, due in X days)
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-5">
            <p>BILL TO</p>
            <p>Contact Name: Afreen</p>
            <p>Company Name: something</p>
            <p>
              Address: Official BT21 & LINE FRIENDS
              <br /> Merchandise in India.
            </p>
            <p>Phone: +91 1234567890</p>
            <p>Email: abcd@gmail.com</p>
          </div>
          <div className="col-5">
            <p>SHIP TO</p>
            <p>Name: xyz</p>
            <p>Company Name: something</p>
            <p>
              Address: Official BT21 & LINE FRIENDS
              <br /> Merchandise in India.
            </p>
            <p>Phone: +91 1234567890</p>
          </div>
        </div>
        <div className="d-block mx-auto py-4" id="table">
          <table className="w-100">
            <thead>
              <tr className="tabletitle title-pad">
                <th className="item">
                  <p>Item Description</p>
                </th>
                <th className="Hours">
                  <p>Qty</p>
                </th>
                <th className="Rate">
                  <p>Unit Price</p>
                </th>
                <th className="subtotal">
                  <p>Total</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.map((item, index) => (
                <tr className="service" key={index}>
                  <td className="tableitem">
                    <p className="itemtext">{item.description}</p>
                  </td>
                  <td className="tableitem">
                    <p className="itemtext">{item.qty}</p>
                  </td>
                  <td className="tableitem">
                    <p className="itemtext">₹{item.unitPrice}</p>
                  </td>
                  <td className="tableitem">
                    <p className="itemtext">₹{item.total}</p>
                  </td>
                </tr>
              ))}
              <tr className="tabletitle">
                <td className="tableitem">
                  <p>Total</p>
                </td>
                <td className="tableitem">
                  <p>{totals.totalQty}</p>
                </td>
                <td className="tableitem">
                  <p>₹{totals.totalUnitPrice}</p>
                </td>
                <td className="tableitem">
                  <p>₹{totals.totalAmount}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row sub-total">
          <div className="col-5">Remarks / Payment Instructions:</div>
          <div className="col-5">
            <p>SUBTOTAL:</p>
            <p>DISCOUNT:</p>
            <p>SUBTOTAL LESS DISCOUNT:</p>
            <p>TAX RATE:</p>
            <p>TOTAL TAX:</p>
            <p>SHIPPING/HANDLING:</p>
            <p className="clr-tp p-3">
              <b>BALANCE DUE:</b>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
      <button
        onClick={generatePDF}
        className="btn clr-tp mt-4"
      >
        Download PDF
      </button>
      </div>
    </>
  );
};

export default Invoice;