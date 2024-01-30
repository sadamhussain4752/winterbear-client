import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fetchStoreData } from "../reducer/thunks";
import { useDispatch, useSelector } from "react-redux";
import { Form, Item, Input, message, Button, Radio } from "antd/es";
import cardimg from "../constant/images/visa.png";

const PaymentOption = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [card, setCard] = useState(1);
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

  return (
    <div className="col-md-9 p-4 ">
      <div className="col-md-12 bg-white p-3 rounded">
        <div className="mx-4 mt-3">
          <p className="p-header">Edit Payment Option</p>

          <Radio.Group
            className="row d-flex justify-content-between"
            onChange={onChange}
            value={card}
          >
            {ListCard.map((item) => (
              <div key={item.id} className="col-md-12 row">
                <Radio className="border border-1 p-2 " value={item.id}>
                  <div className="d-flex flex-row ">
                    <img
                      src={item.card_img}
                      className="card-image"
                      alt="Logo"
                    />
                    <div className="col-md-5">
                      <div>
                        {"*".repeat(item.Card_Number.length - 4).slice(-8) +
                          item.Card_Number.slice(-4)}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="text-start">Expires {item.expires}</div>
                    </div>
                    <div className="col-md-11">
                      <div className="text text-end red-text mt-2">
                        Remove
                      </div>
                    </div>
                  </div>
                </Radio>
              </div>
            ))}
          </Radio.Group>
        </div>
      </div>
    </div>
  );
};

export default PaymentOption;
