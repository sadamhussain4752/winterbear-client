import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Faqs = () => {
  document.title = "Faqs";
  document.getElementsByTagName("META")[2].content = "about";
  return (
    <>
      <Header />
      <section className="section myaccount mt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="section-heading">
                <h3 className="theme-bg-text">Faqs</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="container faqs border border-secondry">
          <div className="row ">
            <div className="col-md-12 bg-white py-3 border-0">
              <div className="container-fluid ">
                <ul
                  className="nav nav-pills nav-fill py-1 mb-3  list-inline border-bottom"
                  id="faqs-tab"
                  role="tablist"
                >
                  <li
                    className="nav-item cart-item list-inline-item"
                    role="presentation"
                  >
                    <button
                      className="nav-link text-dark  fw-semibold  position-relative  rounded border  active"
                      id="pills-koya-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-koya"
                      type="button"
                      role="tab"
                      aria-controls="pills-koya"
                      aria-selected="true"
                    >
                   GENERAL
                    </button>
                  </li>
                  <li
                    className="nav-item cart-item list-inline-item"
                    role="presentation"
                  >
                    <button
                      className="nav-link text-dark  fw-semibold position-relative rounded border"
                      id="pills-rj-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-rj"
                      type="button"
                      role="tab"
                      aria-controls="pills-rj"
                      aria-selected="false"
                    >
                      Shipping
                    </button>
                  </li>
                  <li
                    className="nav-item cart-item list-inline-item"
                    role="presentation"
                  >
                    <button
                      className="nav-link text-dark text-light fw-semibold position-relative rounded border"
                      id="pills-shooky-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-shooky"
                      type="button"
                      role="tab"
                      aria-controls="pills-shooky"
                      aria-selected="false"
                    >
                      Returns/Exchanges/Cancel an order
                    </button>
                  </li>

                  <li
                    className="nav-item cart-item list-inline-item"
                    role="presentation"
                  >
                    <button
                      className="nav-link text-dark text-light fw-semibold position-relative rounded border"
                      id="pills-mang-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-mang"
                      type="button"
                      role="tab"
                      aria-controls="pills-mang"
                      aria-selected="false"
                    >
                      Payment Methods
                    </button>
                  </li>
                  <li
                    className="nav-item cart-item list-inline-item"
                    role="presentation"
                  >
                    <button
                      className="nav-link text-dark text-light fw-semibold position-relative rounded border"
                      id="pills-chimmy-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-chimmy"
                      type="button"
                      role="tab"
                      aria-controls="pills-chimmy"
                      aria-selected="false"
                    >
                      Rewards
                    </button>
                  </li>
                </ul>
                <div
                  className="tab-content text-white px-lg-3"
                  id="pills-tabContent"
                >
                  <div
                    className="tab-pane fade  active show"
                    id="pills-koya"
                    role="tabpanel"
                    aria-labelledby="pills-koya-tab"
                  >
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                          <i class="px-3 fa-solid fa-caret-right"></i>     What is the BearClub Rewards Program?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseOne"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            Of course! We have teamed up with LINE FRIENDS to
                            start pop-up stores across India, bringing official
                            BT21 and LINE FRIENDS products to India for the
                            first time ever.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                          >
                           <i class="px-3 fa-solid fa-caret-right"></i>    Can we expect more of such pop-ups from Winterbear?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                          Our motto is to bring to our customers the very best products from all over the globe. Without a doubt, you can expect us to collaborate with more brands and bring products from different IPs over the coming months.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                          >
                          <i class="px-3 fa-solid fa-caret-right"></i>     Which other IPs is Winterbear dealing with currently?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                          We have currently also partnered with SMURFS (our Smurf Collection releasing in April). Subscribe to our socials or our newsletter to be updated about new collaborations, pop-ups and more official merchandise.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree01"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree01"
                          >
                          <i class="px-3 fa-solid fa-caret-right"></i>   If an item is out-of-stock, how long does it take for it to be available again?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThree01"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                          Due to high demand, we recommend shopping early to secure the products you love. Once a product is out-of-stock, we will try our best to get it back in stock within 5 weeks. If it isn’t back on-stock, then it is likely gone for good.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree02"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree02"
                          >
                          <i class="px-3 fa-solid fa-caret-right"></i>    How frequently will the products be updating on the website?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThree02"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                          Currently, our online store has less than one-third of the products available in the physical store for pre-orders. We will continue to add new products on a week-to-week basis, and the same will be updated to our customers via newsletters.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade  text-white"
                    id="pills-rj"
                    role="tabpanel"
                    aria-labelledby="pills-rj-tab"
                  >
                    <p className="text-dark">Shipping</p>
                    <hr />
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-shooky"
                    role="tabpanel"
                    aria-labelledby="pills-shooky-tab"
                  >
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOneReturns"
                            aria-expanded="false"
                            aria-controls="flush-collapseOneReturns"
                          >
                         <i class="px-3 fa-solid fa-caret-right"></i>    Is it possible to cancel an order once it’s placed?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseOneReturns"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                          An order can be cancelled only before it is dispatched to your address. If an order has been successfully cancelled, then refund will be processed to source account within 7-14 business days. Orders cannot be cancelled once dispatched.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwoReturns"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwoReturns"
                          >
                         <i class="px-3 fa-solid fa-caret-right"></i>     Can I change my order?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseTwoReturns"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                          For customers wishing to change the items in their order, we recommend cancelling their current order before it is dispatched, and placing a new order. Once the order has been dispatched, customers would not be able to change or cancel their order.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThreeReturns"
                            aria-expanded="false"
                            aria-controls="flush-collapseThreeReturns"
                          >
                          <i class="px-3 fa-solid fa-caret-right"></i>    How can one return or exchange the product bought from the website?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThreeReturns"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                          We follow a no return, no refund policy for all items except apparel, for which, we understand that there might be concerns with sizing. As such, we allow exchanges for only apparel, so that you can retain the piece that fits you best. 
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThreeReturns0"
                            aria-expanded="false"
                            aria-controls="flush-collapseThreeReturns0"
                          >
                          <i class="px-3 fa-solid fa-caret-right"></i>    What happens if Winterbear cancels my order?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThreeReturns0"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                          If an order is cancelled by us, then we guarantee a refund of the full amount.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThreeReturns01"
                            aria-expanded="false"
                            aria-controls="flush-collapseThreeReturns01"
                          >
                           <i class="px-3 fa-solid fa-caret-right"></i>   Can I exchange the products bought online in the store?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThreeReturns01"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                          Customers cannot exchange products regardless of whether it was bought online or in the store (exception is granted only for apparel). Apparel can be exchanged both online and in the store for another size.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThreeReturns02"
                            aria-expanded="false"
                            aria-controls="flush-collapseThreeReturns02"
                          >
                           <i class="px-3 fa-solid fa-caret-right"></i>    Can I exchange the apparel I bought for another size?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThreeReturns02"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                          Yes. We allow customers to exchange the apparel piece bought by them for another size. Although, if the price tag/hand tag is harmed in any way whatsoever, we will be unable to exchange it for another new piece regardless of reason.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThreeReturns03"
                            aria-expanded="false"
                            aria-controls="flush-collapseThreeReturns03"
                          >
                           <i class="px-3 fa-solid fa-caret-right"></i>   When will I receive my order? What is the estimated delivery time?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThreeReturns03"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                          Your order will be delivered to your doorstep within 7 business days.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThreeReturns04"
                            aria-expanded="false"
                            aria-controls="flush-collapseThreeReturns04"
                          >
                           <i class="px-3 fa-solid fa-caret-right"></i>    Do you offer free shipping?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThreeReturns04"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                          We offer free shipping for order above ₹999. A flat fee of ₹150 will be charged for orders below ₹999.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThreeReturns05"
                            aria-expanded="false"
                            aria-controls="flush-collapseThreeReturns05"
                          >
                          <i class="px-3 fa-solid fa-caret-right"></i>   What all locations do you ship to?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThreeReturns05"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                          We ship to places all over India!
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThreeReturns06"
                            aria-expanded="false"
                            aria-controls="flush-collapseThreeReturns06"
                          >
                           <i class="px-3 fa-solid fa-caret-right"></i>   How will my order be shipped to me?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThreeReturns06"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                          We ship all our orders through Ship Rocket using delivery partners like DHL, Delhivery, Blue Dart, Pickrr, IThink Logistics, Blowhorn etc. You will receive an email from the delivery partner handling your order once we start processing it for shipment.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThreeReturns07"
                            aria-expanded="false"
                            aria-controls="flush-collapseThreeReturns07"
                          >
                          <i class="px-3 fa-solid fa-caret-right"></i>    How can I track my order?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThreeReturns07"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                          You can track the status of your order by entering your order number (and relevant delivery details) received in your email on the website of our delivery partner whose handling your order.
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-mang"
                    role="tabpanel"
                    aria-labelledby="pills-mang-tab"
                  >
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOnePayment"
                            aria-expanded="false"
                            aria-controls="flush-collapseOnePayment"
                          >
                           <i class="px-3 fa-solid fa-caret-right"></i>   Which payment gateway do you use?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseOnePayment"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                          We use CCAvenue for all transactions.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwoPayment"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwoPayment"
                          >
                           <i class="px-3 fa-solid fa-caret-right"></i>    What payment methods are accepted?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseTwoPayment"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                          We accept UPI, Debit cards (Mastercard, Visa, RuPay), Credit Cards, Net Banking, Amex and e-wallets.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThreePayment"
                            aria-expanded="false"
                            aria-controls="flush-collapseThreePayment"
                          >
                           <i class="px-3 fa-solid fa-caret-right"></i>    Do you accept Cash on Delivery (COD)?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThreePayment"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                          Yes. We accept Cash on Delivery.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-chimmy"
                    role="tabpanel"
                    aria-labelledby="pills-chimmy-tab"
                  >
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOneRewards"
                            aria-expanded="false"
                            aria-controls="flush-collapseOneRewards"
                          >
                          <i class="px-3 fa-solid fa-caret-right"></i>   What is the BearClub Rewards Program?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseOneRewards"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                          BearClub is Winterbear’s Official Membership Program used to reward our precious customers’ with exciting presents and freebies using Bearcoins.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwoRewards"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwoRewards"
                          >
                           <i class="px-3 fa-solid fa-caret-right"></i>  What are Bearcoins?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseTwoRewards"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                          Bearcoins are the loyalty points earned by customers in their BearClub membership.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThreeRewards"
                            aria-expanded="false"
                            aria-controls="flush-collapseThreeRewards"
                          >
                           <i class="px-3 fa-solid fa-caret-right"></i>    How do I earn Bearcoins?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThreeRewards"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                          Bearcoins can be earned in multiple ways:
                          <br/>
                          <ol><li>By creating an account with us and joining our rewards program.</li><li>By partaking in the brand’s events/giveaways/competitions.</li><li>By referring a friend</li><li>By making a purchase at our online or in-person store.</li></ol>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThreeRewards01"
                            aria-expanded="false"
                            aria-controls="flush-collapseThreeRewards01"
                          >
                           <i class="px-3 fa-solid fa-caret-right"></i>   What can I do with Bearcoins?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThreeRewards01"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                          Bearcoins can be used to avail exciting gifts and freebies at both our online and physical stores during checkout. To keep the BearClub (Winterbear’s membership program) exciting for our customers, we change the items that can be redeemed for free when using Bearcoins on a monthly basis. 
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThreeRewards02"
                            aria-expanded="false"
                            aria-controls="flush-collapseThreeRewards02"
                          >
                           <i class="px-3 fa-solid fa-caret-right"></i>    Do Bearcoins expire?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThreeRewards02"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                          Bearcoins reset once every six months. We recommend customers to visit the store and redeem their favourite item using their Bearcoins before their account is reset.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThreeRewards03"
                            aria-expanded="false"
                            aria-controls="flush-collapseThreeRewards03"
                          >
                          <i class="px-3 fa-solid fa-caret-right"></i>   What are the membership tiers?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThreeRewards03"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                          BearClub has three tiers- Snow Spirit, Snow Fairy and Snow Angel.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThreeRewards04"
                            aria-expanded="false"
                            aria-controls="flush-collapseThreeRewards04"
                          >
                           <i class="px-3 fa-solid fa-caret-right"></i>    How do I achieve Snow Spirit Status?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThreeRewards04"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                          Snow Spirit is the first tier of the BearClub, and is achieved once an account has been created (and the rewards program has been joint) either on our website or our in-person stores.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThreeRewards05"
                            aria-expanded="false"
                            aria-controls="flush-collapseThreeRewards05"
                          >
                           <i class="px-3 fa-solid fa-caret-right"></i>    How do I achieve Snow Fairy Status?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThreeRewards05"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                          Snow Fairy is the middle tier in our membership. Snow Fairies are allowed to pre-order items before their general sale and can avail additional discounts. If products happen to sell-out during pre-orders, then it would not be made available at general sale for Snow Spirits. To become a Snow Fairy, our Snow Spirits must accumulate 450 Bearcoins by partaking in any of the four ways to earn coins in the membership.
                          </div>
                        </div>
                      </div>

                     

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Faqs;