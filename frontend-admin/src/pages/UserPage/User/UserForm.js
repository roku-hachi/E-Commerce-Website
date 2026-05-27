const UserForm = ({
  values,
  errors,
  isEdit,
  handleChange,
  handleFile,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        {/* Name */}
        <div className="col-md-6 mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.name}</div>
        </div>

        {/* Email */}
        <div className="col-md-6 mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.email}</div>
        </div>

        {/* Avatar */}
        <div className="col-md-6 mb-3">
          <label className="form-label">Avatar</label>
          <input
            type="file"
            className={`form-control ${errors.avatar ? "is-invalid" : ""}`}
            name="avatar"
            onChange={handleFile}
          />
          <div className="invalid-feedback">{errors.avatar}</div>
        </div>

        {/* Phone */}
        <div className="col-md-6 mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            name="phone"
            value={values.phone}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.phone}</div>
        </div>

        {/* Address */}
        <div className="col-6 mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className={`form-control ${errors.address ? "is-invalid" : ""}`}
            name="address"
            value={values.address}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.address}</div>
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Role</label>

          <select
            className={`form-select ${errors.level ? "is-invalid" : ""}`}
            name="level"
            value={values.level}
            onChange={handleChange}
          >
            <option value="">Select role</option>

            <option value="1">Admin</option>
            <option value="0">User</option>
          </select>

          <div className="invalid-feedback">{errors.category_id}</div>
        </div>

        {/* Password */}
        <div className="col-md-6 mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.password}</div>
        </div>

        {/* Confirm Password */}
        <div className="col-md-6 mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className={`form-control ${
              errors.confirmPassword ? "is-invalid" : ""
            }`}
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.confirmPassword}</div>
        </div>
      </div>

      {/* Submit */}
      <div className="d-flex justify-content-end">
        <button className="btn btn-dark px-4">
          {isEdit ? "Update User" : "Create User"}
        </button>
      </div>
    </form>
  );
};

export default UserForm;
