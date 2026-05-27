import { useContext, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { AppContext } from "../../context/AppContext";
import api from "../../routes/api";

const CheckoutPage = () => {
  const { values, errors, handleChange } = useForm({
    shipping_address: "",
    payment_method: "",
    note: "",
  });

  const user = JSON.parse(localStorage.getItem("user"));
  const { cart } = useContext(AppContext);

  const cartItems = cart?.cart_items;

  const totalPrice = cartItems?.reduce((total, item) => {
    const finalPrice = item.product.sale_price || item.product.price;

    return total + finalPrice * item.quantity;
  }, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      payment_method: values.payment_method,
      shipping_address: values.shipping_address,
      phone: user.phone,
      note: values.note,
    };

    api
      .post("/order/add", data)
      .then((res) => {
        console.log(res);
        alert(res.data.massage);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="mb-4">
        <h2 className="fw-bold">Checkout</h2>

        <p className="text-muted">Confirm your order information</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* Left Side */}
          <div className="col-lg-7">
            {/* Customer Info */}
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body">
                <h4 className="mb-4">Customer Information</h4>

                <div className="row">
                  {/* Name */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Full Name</label>

                    <input
                      type="text"
                      className="form-control"
                      value={user.user_name}
                      readOnly
                    />
                  </div>

                  {/* Email */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>

                    <input
                      type="email"
                      className="form-control"
                      value={user.email}
                      readOnly
                    />
                  </div>

                  {/* Phone */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone</label>

                    <input
                      type="number"
                      className="form-control"
                      value={user.phone}
                      readOnly
                    />
                  </div>

                  {/* Default Address */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Default Address</label>

                    <input
                      type="text"
                      className="form-control"
                      value={user.address}
                      readOnly
                    />
                  </div>

                  {/* Shipping Address */}
                  <div className="col-12 mb-3">
                    <label className="form-label fw-bold">
                      Shipping Address
                    </label>

                    <textarea
                      rows="4"
                      className="form-control"
                      placeholder="Enter shipping address..."
                      value={values.shipping_address}
                      name="shipping_address"
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="col-12 mb-3">
                    <label className="form-label fw-bold">Note</label>

                    <textarea
                      rows="4"
                      className="form-control"
                      placeholder="Enter note..."
                      value={values.note}
                      name="note"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Payment Method</label>

                  <select
                    className={`form-select ${errors.payment_method ? "is-invalid" : ""}`}
                    name="payment_method"
                    value={values.payment_method}
                    onChange={handleChange}
                  >
                    <option value="">Select Payment Method</option>
                    <option value="Cash">Cash on Delivery</option>
                    <option value="PayPal">PayPal</option>
                    <option value="Card">Credit Card</option>
                  </select>

                  <div className="invalid-feedback">
                    {errors.payment_method}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-5 mt-4 mt-lg-0">
            <div className="card shadow-sm border-0 sticky-top">
              <div className="card-body">
                <h4 className="mb-4">Order Summary</h4>

                {/* Products */}
                {cartItems?.map((item) => {
                  const product = item.product;

                  const finalPrice = product.sale_price || product.price;

                  return (
                    <div
                      key={product.id}
                      className="d-flex align-items-center mb-3"
                    >
                      {/* Image */}
                      <img
                        src={`http://localhost:8000/${product.image}`}
                        alt={product.product_name}
                        width="70"
                        height="70"
                        className="rounded"
                        style={{
                          objectFit: "contain",
                        }}
                      />

                      {/* Info */}
                      <div className="ms-3 flex-grow-1">
                        <h6 className="mb-1">{product.product_name}</h6>

                        <small className="text-muted">
                          Qty: {item.quantity}
                        </small>
                      </div>

                      {/* Price */}
                      <div className="fw-bold">
                        ${(finalPrice * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
                <hr />

                {/* Total */}
                <div className="d-flex justify-content-between mb-4">
                  <h5>Total</h5>

                  <h5 className="fw-bold">${totalPrice?.toFixed(2)}</h5>
                </div>

                {/* Button */}
                <button type="submit" className="btn btn-dark w-100">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
