import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAddCardProductById,
  DeleteWishlistFetch,
  QtyOrderProductById,
  fetchWishlistData,
} from "../reducer/thunks";
import constant from "../constant/constant";
import { useNavigate } from "react-router-dom";
import { Steps } from "antd";
import Relatedproducts from "../components/Relatedproducts";

const Wishlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const description = "This is a description.";

  let userId = localStorage.getItem("userId");

  const {
    wishlist,
    addloading: addloadingLoading,
    error: productListError,
  } = useSelector((state) => state.wishlist);
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
    if ((userId !== undefined && userId !== null) || qtyAddcardRes) {
      dispatch(fetchWishlistData(userId));
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
      wishlist?.AddCarts &&
      wishlist.AddCarts.reduce(
        (total, item) => total + item.product.amount * item.quantity,
        0
      )
    );
  };
  const handleRemoveItem = async (productId) => {
   await dispatch(DeleteWishlistFetch(productId));
    dispatch(fetchWishlistData(userId));

  };
  const handleCheckout = () => {
    navigate(`/checkout`);
  };

  // Define the getSubtotal function
  function getSubtotal() {
    return (
      wishlist?.AddCarts &&
      wishlist.AddCarts.reduce(
        (total, item) => total + item.product.amount * item.quantity,
        0
      )
    );
  }

  // Define the getTotal function
  function getTotal() {
    return (
      wishlist?.AddCarts &&
      wishlist.AddCarts.reduce(
        (total, item) => total + item.product.amount * item.quantity,
        0
      )
    );
  }

  // Dummy content for cart list
  const renderCartList = () => {
    return (
      <div className="cart-list col-md-12 h-25">
        <table className="mt-5 w-100">
          <thead>
            <tr className="border-bottom text-center">
              <th>WISHLIST</th>

              <th className="product-amount text-center">Product Details</th>

              <th className="product-amount text-center">Price</th>

              <th className="product-amount text-center">Action</th>
            </tr>
          </thead>
          <tbody className="pt-4">
            {wishlist?.wishlistItems &&
              wishlist.wishlistItems.map((item) => (
                <tr className="text-center" key={item.id}>
                  <td>
                    <div className="product-item mt-4">
                      <div className="product-image w-100 d-flex justify-content-center">
                        <img
                          src={`${item?.product?.images[0]}`}
                          alt={`Product Image ${item.product.name}`}
                          style={{ width: "80px", height: "80px" }}
                          className="me-0 "
                        />
                      </div>
                      {/* <div className="product-details d-flex align-items-cente justify-content-center mt-4">
                        <p className="product-name mb-0">
                          {item.product.name}
                        </p>
                      </div> */}
                    </div>
                  </td>

                  <td className="productdet">
                    SKU: 7493-ORANGE Availability: IN STOCK CATEGORIES: FILES,
                    STATIONERY
                  </td>

                  <td className="product-amount text-center">
                    ₹{item.product.amount}
                  </td>

                  <td>
                    <button
                      className="delete-button pointer-cur"
                      onClick={() => handleRemoveItem(item._id)}
                    >
                      <i class="fa-solid fa-trash"></i>
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

  const renderCardtotals = () => {};

  return (
    <>
      <Header />

      <section className="py-5 mt-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="section-heading">
                <h3 className="theme-bg-text">Wishlist</h3>
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

export default Wishlist;
