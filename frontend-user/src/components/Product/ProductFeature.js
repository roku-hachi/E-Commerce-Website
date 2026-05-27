import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import ProductCard from "./ProductCard";

const ProductFeature = () => {
  const { products } = useContext(AppContext);
  console.log("product:", products);
  return (
    <section className="py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Featured Products</h2>

          <a href="/products" className="btn btn-outline-dark">
            View All
          </a>
        </div>

        <div className="row">
          {products.map((product) => {
            return product.featured ? (
              <ProductCard key={product.id} product={product} />
            ) : null;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductFeature;
