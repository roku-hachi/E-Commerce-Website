const BlogForm = ({
  handleSubmit,
  handleChange,
  handleFile,
  values,
  errors,
  isEdit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        {/* Title */}
        <div className="col-12 mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className={`form-control ${errors.title ? "is-invalid" : ""}`}
            name="title"
            value={values.title}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.title}</div>
        </div>

        {/* Description */}
        <div className="col-12 mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className={`form-control ${errors.description ? "is-invalid" : ""}`}
            name="description"
            value={values.description}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.description}</div>
        </div>

        {/* Content */}
        <div className="col-12 mb-3">
          <label className="form-label">Content</label>
          <textarea
            className={`form-control ${errors.content ? "is-invalid" : ""}`}
            name="content"
            rows="6"
            value={values.content}
            onChange={handleChange}
          ></textarea>
          <div className="invalid-feedback">{errors.content}</div>
        </div>

        {/* Image */}
        <div className="col-12 mb-3">
          <label className="form-label">Image</label>
          <input
            type="file"
            className={`form-control ${errors.image ? "is-invalid" : ""}`}
            name="image"
            multiple
            onChange={handleFile}
          />
          <div className="invalid-feedback">{errors.image}</div>
        </div>
      </div>

      {/* Submit */}
      <div className="d-flex justify-content-end">
        <button className="btn btn-dark px-4">
          {isEdit ? "Update Blog" : "Publish Blog"}
        </button>
      </div>
    </form>
  );
};

export default BlogForm;
