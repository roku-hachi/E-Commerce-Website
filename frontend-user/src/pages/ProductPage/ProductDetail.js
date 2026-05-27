import { useContext, useEffect, useState } from "react";
import api from "../../routes/api";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import ProductCard from "../../components/Product/ProductCard";

const ProductDetail = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [addWishlist, setAddWishlist] = useState(false);
  const [isWishlist, setIsWishlist] = useState([]);
  const { addToCart, products, wishlist } = useContext(AppContext);
  const hasSale =
    product.sale_price && Number(product.sale_price) < Number(product.price);

  useEffect(() => {
    api
      .get(`/product/${params.id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  const handleWishList = () => {
    const data = {
      product_id: product.id,
    };
    if (!addWishlist) {
      api
        .post("/wishlist/add", data)
        .then((res) => {
          console.log(res);
          setIsWishlist(res.data);
          setAddWishlist(true);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    } else {
      api
        .delete(`/wishlist/delete/${wishlist.id}`)
        .then((res) => {
          console.log(res);
          setAddWishlist(false);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };
  const showWishlist = wishlist.some((item) => item.product_id === product.id);
  return (
    <div>
      {/* Product Details */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            {/* Product Image */}
            <div className="col-md-6">
              <img
                src={`http://localhost:8000/${product.image}`}
                className="img-fluid rounded shadow"
                style={{
                  width: "100%",
                  maxHeight: "500px",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Product Info */}
            <div className="col-md-6">
              <span className="badge bg-secondary mb-3">
                {product.categorys?.name}
              </span>

              <div className="d-flex align-items-center justify-content-between mb-3">
                <h1 className="fw-bold mb-0">{product.product_name}</h1>

                <button
                  className="btn border-0 shadow-none"
                  onClick={handleWishList}
                >
                  {showWishlist ? (
                    <FaHeart size={28} className="text-danger" />
                  ) : addWishlist ? (
                    <FaHeart size={28} className="text-danger" />
                  ) : (
                    <FaRegHeart size={28} className="text-dark" />
                  )}
                </button>
              </div>

              {hasSale ? (
                <div className="d-flex align-items-center gap-2">
                  <h3 className="fw-bold text-danger mb-0">
                    ${product.sale_price}
                  </h3>

                  <small className="text-muted text-decoration-line-through">
                    ${product.price}
                  </small>
                </div>
              ) : (
                <h3 className="fw-bold text-dark mb-0">${product.price}</h3>
              )}

              <p className="text-muted">{product.detail}</p>

              {/* Product Info */}
              <ul className="list-group mb-4">
                <li className="list-group-item">
                  <strong>Brand:</strong> {product.brands?.name}
                </li>

                <li className="list-group-item">
                  <strong>Stock:</strong>{" "}
                  {product.stock > 0 ? (
                    <span className="text-success">In Stock</span>
                  ) : (
                    <span className="text-danger">Out of Stock</span>
                  )}
                </li>
              </ul>

              {/* Quantity */}
              <div className="mb-4">
                <label className="form-label fw-bold">Quantity</label>

                <div
                  className="d-flex align-items-center"
                  style={{ width: "140px" }}
                >
                  {/* Decrease */}
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                  >
                    -
                  </button>

                  {/* Quantity Display */}
                  <input
                    type="text"
                    className="form-control text-center mx-2"
                    value={quantity}
                    readOnly
                  />

                  {/* Increase */}
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={() =>
                      setQuantity(
                        quantity < product.stock ? quantity + 1 : product.stock,
                      )
                    }
                  >
                    +
                  </button>
                </div>

                {/* Stock */}
                <small className="text-muted">Stock: {product.stock}</small>
              </div>

              {/* Buttons */}
              <div className="d-flex gap-3">
                <button
                  className="btn btn-dark btn-lg"
                  onClick={() => addToCart(product.id, quantity)}
                >
                  Add to Cart
                </button>

                <button className="btn btn-outline-secondary btn-lg">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4">Related Products</h2>

          <div className="row">
            {products
              .filter((item) => {
                return (
                  item.brand_id === product.brand_id && item.id !== product.id
                );
              })
              .map((item) => {
                return <ProductCard key={item.id} product={item} />;
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
