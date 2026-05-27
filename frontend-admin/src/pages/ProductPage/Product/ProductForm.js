import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

const ProductForm = ({
  values,
  errors,
  isEdit,
  handleChange,
  handleFile,
  handleSubmit,
}) => {
  const { categories, brands } = useContext(AppContext);

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        {/* Product Name */}
        <div className="col-md-6 mb-3">
          <label className="form-label">Product Name</label>

          <input
            type="text"
            className={`form-control ${
              errors.product_name ? "is-invalid" : ""
            }`}
            name="product_name"
            value={values.product_name}
            onChange={handleChange}
          />

          <div className="invalid-feedback">{errors.product_name}</div>
        </div>

        {/* Company */}
        <div className="col-md-6 mb-3">
          <label className="form-label">Company</label>

          <input
            type="text"
            className={`form-control ${errors.company ? "is-invalid" : ""}`}
            name="company"
            value={values.company}
            onChange={handleChange}
          />

          <div className="invalid-feedback">{errors.company}</div>
        </div>

        {/* Price */}
        <div className="col-md-6 mb-3">
          <label className="form-label">Price</label>

          <input
            type="number"
            className={`form-control ${errors.price ? "is-invalid" : ""}`}
            name="price"
            value={values.price}
            onChange={handleChange}
          />

          <div className="invalid-feedback">{errors.price}</div>
        </div>

        {/* Sale Price */}
        <div className="col-md-6 mb-3">
          <label className="form-label">Sale Price</label>

          <input
            type="number"
            className={`form-control ${errors.sale_price ? "is-invalid" : ""}`}
            name="sale_price"
            value={values.sale_price}
            onChange={handleChange}
          />

          <div className="invalid-feedback">{errors.sale_price}</div>
        </div>

        {/* Stock */}
        <div className="col-md-6 mb-3">
          <label className="form-label">Stock</label>

          <input
            type="number"
            className={`form-control ${errors.stock ? "is-invalid" : ""}`}
            name="stock"
            value={values.stock}
            onChange={handleChange}
          />

          <div className="invalid-feedback">{errors.stock}</div>
        </div>

        {/* Category */}
        <div className="col-md-6 mb-3">
          <label className="form-label">Category</label>

          <select
            className={`form-select ${errors.category_id ? "is-invalid" : ""}`}
            name="category_id"
            value={values.category_id}
            onChange={handleChange}
          >
            <option value="">Select category</option>
            {categories.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>

          <div className="invalid-feedback">{errors.category_id}</div>
        </div>

        {/* Brand */}
        <div className="col-md-6 mb-3">
          <label className="form-label">Brand</label>

          <select
            className={`form-select ${errors.brand_id ? "is-invalid" : ""}`}
            name="brand_id"
            value={values.brand_id}
            onChange={handleChange}
          >
            <option value="">Select brand</option>
            {brands.map((brand) => {
              return (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              );
            })}
          </select>

          <div className="invalid-feedback">{errors.brand_id}</div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="form-check mt-4">
            <input
              type="checkbox"
              className="form-check-input"
              name="status"
              checked={values.status}
              onChange={handleChange}
            />

            <label className="form-check-label">Active Product</label>
          </div>
          <div className="form-check mt-4">
            <input
              type="checkbox"
              className="form-check-input"
              name="featured"
              checked={values.featured}
              onChange={handleChange}
            />

            <label className="form-check-label">Featured Product</label>
          </div>
        </div>

        {/* Image */}
        <div className="col-12 mb-3">
          <label className="form-label">Product Images</label>

          <input
            type="file"
            className={`form-control ${errors.image ? "is-invalid" : ""}`}
            name="image"
            multiple
            onChange={handleFile}
          />

          <div className="invalid-feedback">{errors.image}</div>
        </div>

        {/* Description */}
        <div className="col-12 mb-3">
          <label className="form-label">Description</label>

          <textarea
            rows="5"
            className={`form-control ${errors.detail ? "is-invalid" : ""}`}
            name="detail"
            value={values.detail}
            onChange={handleChange}
          ></textarea>

          <div className="invalid-feedback">{errors.detail}</div>
        </div>
      </div>

      {/* Submit */}
      <div className="d-flex justify-content-end">
        <button className="btn btn-dark px-4">
          {isEdit ? "Update Product" : "Create Product"}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
