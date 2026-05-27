import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const ProductCard = ({ product }) => {
  const hasSale =
    product.sale_price && Number(product.sale_price) < Number(product.price);

  const { addToCart } = useContext(AppContext);

  return (
    <div className="col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm border-0 position-relative">
        {/* Sale Badge */}
        {!hasSale ? (
          <span></span>
        ) : (
          <span
            className="badge bg-danger position-absolute"
            style={{
              top: "10px",
              right: "10px",
              zIndex: 10,
            }}
          >
            Sale
          </span>
        )}

        {/* Product Image */}
        <img
          src={`http://localhost:8000/${product.image}`}
          alt={product.product_name}
          className="card-img-top"
          style={{
            height: "220px",
            objectFit: "contain",
          }}
        />

        {/* Card Body */}
        <div className="card-body d-flex flex-column">
          {/* Category */}
          <span className="badge bg-secondary mb-2 w-auto">
            {product.category}
          </span>

          {/* Product Name */}
          <h5 className="card-title fw-bold">{product.product_name}</h5>

          {/* Description */}
          <p className="card-text text-muted small">
            {product.detail?.length > 80
              ? product.detail.slice(0, 80) + "..."
              : product.detail}
          </p>

          {/* Price */}
          <div className="mb-3">
            {hasSale ? (
              <div className="d-flex align-items-center gap-2">
                <h6 className="fw-bold text-danger mb-0">
                  ${product.sale_price}
                </h6>

                <small className="text-muted text-decoration-line-through">
                  ${product.price}
                </small>
              </div>
            ) : (
              <h6 className="fw-bold text-dark mb-0">${product.price}</h6>
            )}
          </div>

          {/* Buttons */}
          <div className="d-flex gap-2 mt-auto">
            <a
              href={`/product/${product.id}`}
              className="btn btn-outline-dark w-50"
            >
              Details
            </a>

            <button
              className="btn btn-dark w-50"
              onClick={() => addToCart(product.id, 1)}
            >
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
