const CategoryForm = ({ values, errors, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        {/* Category Name */}
        <div className="col-md-6 mb-3">
          <label className="form-label">Category Name</label>

          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            name="name"
            value={values.name}
            onChange={handleChange}
          />

          <div className="invalid-feedback">{errors.name}</div>
        </div>

        {/* Slug */}
        <div className="col-md-6 mb-3">
          <label className="form-label">Slug</label>

          <input
            type="text"
            className={`form-control ${errors.slug ? "is-invalid" : ""}`}
            name="slug"
            value={values.slug}
            onChange={handleChange}
          />

          <div className="invalid-feedback">{errors.slug}</div>
        </div>

        {/* Status */}
        <div className="col-12 mb-3">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="status"
              checked={values.status}
              onChange={handleChange}
            />

            <label className="form-check-label">Active Category</label>
          </div>
        </div>
        <div className="col-12 mb-3">
          <label className="form-label">Description</label>

          <textarea
            rows="5"
            className={`form-control ${errors.description ? "is-invalid" : ""}`}
            name="description"
            value={values.description}
            onChange={handleChange}
          ></textarea>

          <div className="invalid-feedback">{errors.detail}</div>
        </div>
      </div>

      {/* Submit */}
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-dark px-4">
          Create Category
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;
