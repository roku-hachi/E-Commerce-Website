import { useContext, useEffect, useState } from "react";
import api from "../../routes/api";
import ProductList from "../../components/Product/ProductList";
import { AppContext } from "../../context/AppContext";

const ProductPage = () => {
  const { products } = useContext(AppContext);
  return (
    <div>
      {/* Header */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="fw-bold">All Products</h1>

          <p className="text-muted mt-3">
            Browse all available products in our store.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <ProductList products={products} />
    </div>
  );
};

export default ProductPage;
