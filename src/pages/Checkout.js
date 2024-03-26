import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAddCardProductById,
  DeleteAddCardProductById,
} from "../reducer/thunks";
import constant from "../constant/constant";
import { useNavigate } from "react-router-dom";
import { Steps } from "antd";
import Relatedproducts from "../components/Relatedproducts";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const description = "This is a description.";

  let userId = localStorage.getItem("userId");

  const {
    GetAddcardUserRes,
    addloading: addloadingLoading,
    error: productListError,
  } = useSelector((state) => state.GetAddcardUserRes);
  const {
    DeleteAddcardUserRes,
    Deleteloading: DeleteloadingLoading,
    error: DeleteloadingError,
  } = useSelector((state) => state.DeleteAddcardUserRes);

  useEffect(() => {
    if (userId !== undefined || userId !== null) {
      dispatch(GetAddCardProductById(userId));
    }
  }, [userId, DeleteAddcardUserRes]); // Add DeleteAddcardUserRes as a dependency

  useEffect(() => {
    if (DeleteAddcardUserRes) {
      // Trigger fetching the updated data after successful deletion
      dispatch(GetAddCardProductById(userId));
    }
  }, [DeleteAddcardUserRes, dispatch, userId]);

  const handleUpdateQuantity = () =>{

  }

  const getTotalPrice = () => {
    return (
      GetAddcardUserRes?.AddCarts &&
      GetAddcardUserRes.AddCarts.reduce(
        (total, item) => total + item.product.amount * item.quantity,
        0
      )
    );
  };
  const handleRemoveItem = (productId) => {
    dispatch(DeleteAddCardProductById(productId));
  };
  const handleCheckout = () => {
    navigate(`/checkout`);
  };

  // Define the getSubtotal function
  function getSubtotal() {
    return (
      GetAddcardUserRes?.AddCarts &&
      GetAddcardUserRes.AddCarts.reduce(
        (total, item) => total + item.product.amount * item.quantity,
        0
      )
    );
  }

  // Define the getTotal function
  function getTotal() {
    return (
      GetAddcardUserRes?.AddCarts &&
      GetAddcardUserRes.AddCarts.reduce(
        (total, item) => total + item.product.amount * item.quantity,
        0
      )
    );
  }

  // Dummy content for cart list
  const renderCartList = () => {
    return (
      <div className="cart-list col-md-8 h-25">
        <table className="mt-5">
          <thead>
            <tr className="border-bottom">
              <th >Products</th>
              <th className="product-amount text-center">Price</th>
              <th className="product-amount text-center">Quantity</th>
              <th className="product-amount text-center">Price</th>
              <th className="product-amount text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {GetAddcardUserRes?.AddCarts &&
              GetAddcardUserRes.AddCarts.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="product-item mt-4">
                      <div className="product-image w-75">
                        <img
                          src={`${constant.baseUrl}${item?.product?.images[0]}`}
                          alt={`Product Image ${item.product.name}`}
                          style={{ width: "80px", height: "80px" }}
                        />
                      </div>
                      <div className="product-details ">
                        <span className="product-name">
                          {item.product.name}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="product-amount text-center">${item.product.amount}</td>
                  <td className="product-amount text-center">
                    <div className="quantity-col text-center w-75">
                      <button
                        className="quantity-btn"
                        onClick={() =>
                          handleUpdateQuantity(
                            item.product.id,
                            item.quantity - 1
                          )
                        }
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() =>
                          handleUpdateQuantity(
                            item.product.id,
                            item.quantity + 1
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="product-amount text-center">${item.quantity * item.product.amount}</td>
                  <td>
                    <button
                      className="delete-button btn button"
                      onClick={() => handleRemoveItem(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* <div className="total-price">Total: ${getTotalPrice()}</div> */}
      </div>
    );
  };

  const renderCardtotals = () => {
    return (
        <div className="col-md-4">
 <div className="cart-totals mx-2">
        <h6 className="mt-4 mb-3">Price Details</h6>
        <div className="cart-totals-item border-top mt-3 pt-3">
          <span>Subtotal :</span>
          <span>₹{getSubtotal()}</span>
        </div>
        <div className="cart-totals-item">
          <span>Shipping :</span>
          <span>Free shipping</span>
        </div>
        <div className="cart-totals-item">
          <span>Flat rate :</span>
          <span>₹150.00</span>
        </div>
        <div className="cart-totals-item">
          <span>Tax :</span>
          <span>₹15.00</span>
        </div>
        <div className="cart-totals-item total border-top mt-4 pt-3">
          <span>Total :</span>
          <span>₹{getTotal()}</span>
        </div>
        {/* Proceed to Checkout button */}
        <div className="cart-totals-item-btn mt-4 mb-4">
          <button className="btn button " onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      </div>
        </div>
       
    );
  };

  return (
    <>
      <Header />

      <section className="py-5 mt-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="section-heading">
                <h3 className="theme-bg-text">Cart</h3>
              </div>
            </div>
          </div>

          <div className="">
            <div className="col-md-12">
              {/* <Steps
                current={1}
                items={[
                  {
                    title: "Product",
                    description,
                  },
                  {
                    title: "Order Summary",
                    description,
                    subTitle: "Left 00:00:08",
                  },
                  {
                    title: "payment",
                    description,
                  },
                ]}
              /> */}
              <div className="col-md-12 row mt-5">
              {renderCartList()}
              {renderCardtotals()}
              <Relatedproducts/>
              </div>
             
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Checkout;
