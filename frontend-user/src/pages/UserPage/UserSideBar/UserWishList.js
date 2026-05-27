import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

const UserWishList = () => {
  const { wishlist } = useContext(AppContext);
  return (
    <>
      {/* Title */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="fw-bold mb-1">Wishlist</h4>

          <p className="text-muted mb-0">Your favorite products</p>
        </div>
      </div>

      {/* Table */}
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          {wishlist?.length > 0 ? (
            <div className="table-responsive">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {wishlist.map((item) => {
                    const product = item.products;
                    const finalPrice = product.sale_price || product.price;

                    return (
                      <tr key={product.id}>
                        {/* Product */}
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src={`http://localhost:8000/${product.image}`}
                              alt={product.product_name}
                              width="70"
                              height="70"
                              className="rounded border"
                              style={{
                                objectFit: "contain",
                              }}
                            />

                            <div className="ms-3">
                              <h6 className="mb-1 fw-bold">
                                {product.product_name}
                              </h6>

                              <small className="text-muted">
                                {product.detail?.slice(0, 50)}
                                ...
                              </small>
                            </div>
                          </div>
                        </td>

                        {/* Category */}
                        <td>
                          <span className="badge bg-secondary">
                            {product.category}
                          </span>
                        </td>

                        {/* Price */}
                        <td>
                          {product.sale_price ? (
                            <div>
                              <div className="fw-bold text-danger">
                                ${product.sale_price}
                              </div>

                              <small className="text-muted text-decoration-line-through">
                                ${product.price}
                              </small>
                            </div>
                          ) : (
                            <span className="fw-bold">${product.price}</span>
                          )}
                        </td>

                        {/* Status */}
                        <td>
                          {product.stock > 0 ? (
                            <span className="badge bg-success">In Stock</span>
                          ) : (
                            <span className="badge bg-danger">
                              Out of Stock
                            </span>
                          )}
                        </td>

                        {/* Actions */}
                        <td>
                          <div className="d-flex justify-content-center gap-2">
                            {/* View */}
                            <a
                              href={`/product/${product.id}`}
                              className="btn btn-sm btn-outline-dark"
                            >
                              View
                            </a>

                            {/* Add Cart */}
                            <button className="btn btn-sm btn-dark">
                              Add Cart
                            </button>

                            {/* Remove */}
                            <button className="btn btn-sm btn-danger">✕</button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-5">
              <h5>Your wishlist is empty</h5>

              <p className="text-muted">Save products you love for later.</p>

              <a href="/products" className="btn btn-dark">
                Browse Products
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserWishList;
