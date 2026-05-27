import { useEffect, useState } from "react";
import api from "../../routes/api";

const CartItem = ({ cart, setCart }) => {
  const cartItems = cart?.cart_items;

  const updateQuantity = async (id, type) => {
    const currentItem = cartItems.find((item) => item.id === id);

    if (!currentItem) return;

    let newQuantity =
      type === "increase" ? currentItem.quantity + 1 : currentItem.quantity - 1;

    if (newQuantity < 1) return;

    // Optimistic update
    setCart((prev) => ({
      ...prev,
      cart_items: prev.cart_items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: newQuantity,
            }
          : item,
      ),
    }));

    try {
      await api.put(`/cart/update/${id}`, {
        quantity: newQuantity,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = async (id) => {
    try {
      setCart((prev) => ({
        ...prev,
        cart_items: prev.cart_items.filter((item) => item.id !== id),
      }));

      await api.delete(`/cart/delete/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-3">
      {cartItems?.length > 0 ? (
        cartItems.map((item) => {
          const product = item.product;
          return (
            <div key={product.id} className=" mb-4 pb-3 border-bottom">
              <div className="d-flex justify-content-between align-items-start">
                {/* Image */}
                <img
                  src={`http://localhost:8000/${product.image}`}
                  alt={product.product_name}
                  width="80"
                  height="80"
                  className="rounded"
                  style={{ objectFit: "contain" }}
                />

                {/* Info */}
                <div className="ms-3 flex-grow-1">
                  <h6 className="mb-1">{product.product_name}</h6>

                  {/* Price */}
                  <div className="d-flex mb-2">
                    {product.sale_price ? (
                      <div className="d-flex align-items-center gap-2">
                        <span className="fw-bold text-danger">
                          ${product.sale_price}
                        </span>

                        <small className="text-muted text-decoration-line-through">
                          ${product.price}
                        </small>
                      </div>
                    ) : (
                      <span className="fw-bold">${product.price}</span>
                    )}
                  </div>

                  {/* Quantity UI đẹp hơn */}
                  <div className="d-flex align-items-center gap-2">
                    <div
                      className="d-flex align-items-center border rounded"
                      style={{ overflow: "hidden" }}
                    >
                      {/* Minus */}
                      <button
                        className="btn btn-sm btn-light px-2"
                        disabled={item.quantity <= 1}
                        onClick={() => updateQuantity(item.id, "decrease")}
                      >
                        −
                      </button>

                      {/* Value */}
                      <div
                        className="px-3 fw-bold"
                        style={{ minWidth: "30px", textAlign: "center" }}
                      >
                        {item.quantity}
                      </div>

                      {/* Plus */}
                      <button
                        className="btn btn-sm btn-light px-2"
                        onClick={() => updateQuantity(item.id, "increase")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className="btn btn-sm border-0 rounded-circle d-flex justify-content-center align-items-center"
                    style={{
                      width: "32px",
                      height: "32px",
                      backgroundColor: "#f8f9fa",
                      transition: "0.2s",
                    }}
                    onClick={() => removeItem(item.id)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#dc3545";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#f8f9fa";
                      e.currentTarget.style.color = "#000";
                    }}
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-center py-5">
          <h5>Your cart is empty</h5>
        </div>
      )}
    </div>
  );
};

export default CartItem;
