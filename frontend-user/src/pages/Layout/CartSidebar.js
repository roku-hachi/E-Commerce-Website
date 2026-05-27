import { useContext, useEffect, useState } from "react";
import api from "../../routes/api";
import CartItem from "../../components/Product/CartItem";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const CartSidebar = ({ openCart, setOpenCart }) => {
  const { cart, setCart } = useContext(AppContext);
  return (
    <>
      {/* Overlay */}
      {openCart && (
        <div
          onClick={() => setOpenCart(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            zIndex: 1040,
          }}
        ></div>
      )}

      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: openCart ? "0" : "-450px",
          width: "400px",
          height: "100vh",
          background: "#fff",
          zIndex: 1050,
          transition: "0.3s ease",
          boxShadow: "-5px 0 15px rgba(0,0,0,0.1)",
          overflowY: "auto",
        }}
      >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
          <h4 className="mb-0">Shopping Cart</h4>

          <button
            className="btn btn-sm btn-dark"
            onClick={() => setOpenCart(false)}
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <CartItem cart={cart} setCart={setCart} />

        {/* Footer */}
        <div className="border-top w-100 p-3 mt-auto position-absolute bottom-0 end-0">
          <div className="d-flex justify-content-between mb-3">
            <h5>Total</h5>

            <h5 className="fw-bold">$</h5>
          </div>

          <a href="/checkout" className="btn btn-dark w-100 mb-2">
            Checkout
          </a>

          <a href="/cart" className="btn btn-outline-dark w-100">
            View Cart
          </a>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
