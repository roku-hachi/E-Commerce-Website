import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="container py-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Products</h2>

          <p className="text-muted mb-0">Explore our latest products</p>
        </div>

        {/* Search */}
        <div style={{ width: "300px" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="row">
        {products && products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-12">
            <div className="text-center py-5">
              <h4>No products found</h4>

              <p className="text-muted">Please check again later.</p>
            </div>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination">
            <li className="page-item disabled">
              <button className="page-link">Previous</button>
            </li>

            <li className="page-item active">
              <button className="page-link">1</button>
            </li>

            <li className="page-item">
              <button className="page-link">2</button>
            </li>

            <li className="page-item">
              <button className="page-link">3</button>
            </li>

            <li className="page-item">
              <button className="page-link">Next</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ProductList;
