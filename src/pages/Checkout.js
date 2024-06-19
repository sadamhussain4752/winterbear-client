import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAddCardProductById,
  DeleteAddCardProductById,
  QtyOrderProductById,
  GetCardProductById
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
  const {
    qtyAddcardRes,
    qtycardIdloading: qtyloader,
    error: qtycardIdListError,
  } = useSelector((state) => state.qtyAddcardRes);
  useEffect(() => {
    if (userId !== undefined && userId !== null && userId !== "") {
      dispatch(GetAddCardProductById(userId));
    } else {
      let getlistcarts = localStorage.getItem("cardstore");
      if (getlistcarts) {
        const productIds =  {productIds :JSON.parse(getlistcarts)}
        console.log(productIds);
        dispatch(GetCardProductById(productIds));
      }
    }
  }, [userId, qtyAddcardRes, DeleteAddcardUserRes]); // Add qtyAddcardRes and DeleteAddcardUserRes as dependencies
  
  // Add DeleteAddcardUserRes as a dependency




  useEffect(() => {
    if (DeleteAddcardUserRes) {
      // Trigger fetching the updated data after successful deletion
      dispatch(GetAddCardProductById(userId));
    }
  }, [DeleteAddcardUserRes, dispatch, userId]);

  const handleUpdateQuantity = (prod_id, qtynumber) => {
    console.log(prod_id, qtynumber, "qtynumber");
    let prod_qty = {
      quantity: String(qtynumber),
      savelater: false,
    };
    dispatch(QtyOrderProductById(prod_qty, prod_id));
  };

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
    console.log(productId,"productId");
    if (userId !== undefined && userId !== null && userId !== "") {
      dispatch(DeleteAddCardProductById(productId._id));
    } else {
      let getlistcarts = localStorage.getItem("cardstore");
  
      if (getlistcarts) {
        let cartItems = JSON.parse(getlistcarts);
  
        // Remove the product with the specified productId
        cartItems = cartItems.filter(item => item.productId !== productId.productId);
  
        // Update localStorage with the new cart data
        localStorage.setItem("cardstore", JSON.stringify(cartItems));
  
        // Dispatch the updated cart items
        dispatch(GetCardProductById({ productIds :cartItems}));
      }
    }
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
        <table className="mt-5 w-100">
          <thead>
            <tr className="border-bottom text-start">
              <th >Products</th>
              <th className="product-amount text-center">Price</th>
              <th className="product-amount text-center">Quantity</th>
              <th className="product-amount text-center">Total Price</th>
              <th className="product-amount text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {GetAddcardUserRes?.AddCarts &&
              GetAddcardUserRes.AddCarts.map((item) => (
                <tr className="text-center" key={item.id}>
                  <td>
                    <div className="product-item mt-4">
                      <div className="product-image w-75">
                        <img
                          src={`${item?.product?.images[0]}`}
                          alt={`Product Image ${item.product.name}`}
                          style={{ width: "80px", height: "80px" }}
                        />
                      </div>
                      <div className="product-details ">
                        <p className="product-name">
                          {item.product.name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="product-amount text-center">₹{item.product.amount}</td>
                  <td className="product-amount text-center">
                    <div className="quantity-col text-center w-75">
                      <button
                        className="quantity-btn"
                        onClick={() =>
                          handleUpdateQuantity(
                            item._id,
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
                            item._id,
                            item.quantity + 1
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="product-amount text-center">₹{item.quantity * item.product.amount}</td>
                  <td>
                    <div
                      style={{ cursor: "pointer" }}

                      className="delete-button"
                      onClick={() => handleRemoveItem(item)}
                    >
                      <i class="fa-solid fa-trash"></i>
                    </div>
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
          {/* <div className="cart-totals-item">
          <span>Shipping :</span>
          <span>Free shipping</span>
        </div> */}
          <div className="cart-totals-item">
            <span>Flat rate :</span>
            <span>{getTotal() < "999" ? `₹150.00` : 'Free shipping'}</span>
          </div>
          <div className="cart-totals-item">
            <span>Tax :</span>
            <span>₹15.00</span>
          </div>
          <div className="cart-totals-item total border-top mt-4 pt-3">
            <span>Total :</span>
            <span>{getTotal() < "999" ? getTotal() + 150.00 : getTotal()}</span>
          </div>
          {/* Proceed to Checkout button */}
          <div className="cart-totals-item-btn mt-4 mb-4 ">
            <button className="btn button w-75 rounded-pill" onClick={handleCheckout}>
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
              <div className="col-md-12 row mt-5 tab-wid">
                {renderCartList()}
                {renderCardtotals()}

                {/* <Relatedproducts/> */}
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
