const BrandForm = ({ values, errors, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        {/* Brand Name */}
        <div className="col-md-6 mb-3">
          <label className="form-label">Brand Name</label>

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

            <label className="form-check-label">Active Brand</label>
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="d-flex justify-content-end">
        <button className="btn btn-dark px-4">Create Brand</button>
      </div>
    </form>
  );
};

export default BrandForm;
