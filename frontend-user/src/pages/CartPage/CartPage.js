import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const CartPage = () => {
  const { cart } = useContext(AppContext);
  const cartItems = cart?.cart_items;
  const totalPrice = cartItems?.reduce((total, item) => {
    const product = item.product;

    const finalPrice = product.sale_price || product.price;

    return total + finalPrice * item.quantity;
  }, 0);
  return (
    <div className="container py-5">
      {/* Header */}
      <div className="mb-4">
        <h2 className="fw-bold">Shopping Cart</h2>

        <p className="text-muted">Review all products in your cart</p>
      </div>

      <div className="row">
        {/* Cart Items */}
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              {cartItems?.length > 0 ? (
                cartItems.map((item) => {
                  const product = item.product;
                  const finalPrice = product.sale_price || product.price;

                  return (
                    <div
                      key={product.id}
                      className="row align-items-center border-bottom py-4"
                    >
                      {/* Image */}
                      <div className="col-md-2 text-center">
                        <img
                          src={`http://localhost:8000/${product.image}`}
                          alt={product.product_name}
                          className="img-fluid rounded"
                          style={{
                            height: "90px",
                            objectFit: "contain",
                          }}
                        />
                      </div>

                      {/* Product Info */}
                      <div className="col-md-4">
                        <h5 className="fw-bold mb-1">{product.product_name}</h5>

                        <p className="text-muted small mb-2">
                          {product.detail?.slice(0, 80)}
                        </p>

                        <span className="badge bg-secondary">
                          {product.category}
                        </span>
                      </div>

                      {/* Price */}
                      <div className="col-md-2 text-center">
                        {product.sale_price ? (
                          <>
                            <div className="fw-bold text-danger">
                              ${product.sale_price}
                            </div>

                            <small className="text-muted text-decoration-line-through">
                              ${product.price}
                            </small>
                          </>
                        ) : (
                          <div className="fw-bold">${product.price}</div>
                        )}
                      </div>

                      {/* Quantity */}
                      <div className="col-md-2">
                        <div className="d-flex justify-content-center">
                          <div
                            className="d-flex align-items-center border rounded"
                            style={{
                              overflow: "hidden",
                            }}
                          >
                            {/* Minus */}
                            <button className="btn btn-light btn-sm px-3">
                              −
                            </button>

                            {/* Qty */}
                            <div
                              className="px-3 fw-bold"
                              style={{
                                minWidth: "40px",
                                textAlign: "center",
                              }}
                            >
                              {item.quantity}
                            </div>

                            {/* Plus */}
                            <button className="btn btn-light btn-sm px-3">
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="col-md-2 text-center">
                        <div className="fw-bold mb-2">
                          ${(finalPrice * item.quantity).toFixed(2)}
                        </div>

                        <button className="btn btn-sm btn-danger">
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-5">
                  <h4>Your cart is empty</h4>

                  <p className="text-muted">Add some products to your cart.</p>

                  <a href="/products" className="btn btn-dark">
                    Continue Shopping
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="col-lg-4 mt-4 mt-lg-0">
          <div className="card shadow-sm border-0 sticky-top">
            <div className="card-body">
              <h4 className="mb-4">Order Summary</h4>

              {/* Total Products */}
              <div className="d-flex justify-content-between mb-3">
                <span>Total Products</span>

                <span>{cartItems?.length || 0}</span>
              </div>

              {/* Shipping */}
              <div className="d-flex justify-content-between mb-3">
                <span>Shipping</span>

                <span>$0</span>
              </div>

              <hr />

              {/* Total */}
              <div className="d-flex justify-content-between mb-4">
                <h5>Total</h5>

                <h5 className="fw-bold">${totalPrice?.toFixed(2)}</h5>
              </div>

              {/* Buttons */}
              <button className="btn btn-dark w-100 mb-3">
                Proceed to Checkout
              </button>

              <a href="/products/list" className="btn btn-outline-dark w-100">
                Continue Shopping
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
