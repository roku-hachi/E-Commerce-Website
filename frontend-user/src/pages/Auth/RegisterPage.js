import { useFile } from "../../hooks/useFile";
import { useForm } from "../../hooks/useForm";
import api from "../../routes/api";
import { validateEmail } from "../../utils/validateEmail";

const RegisterPage = () => {
  const { values, errors, setErrors, handleChange } = useForm({
    name: "",
    email: "",
    address: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const { files, handleFile } = useFile();

  const handleSubmit = (e) => {
    e.preventDefault();
    const errSubmit = {};
    let flag = true;

    if (values.name === "") {
      errSubmit.name = "Please enter your name";
      flag = false;
    }
    if (values.email == "") {
      errSubmit.email = "Please enter your email";
      flag = false;
    } else if (!validateEmail(values.email)) {
      errSubmit.email = "This email is invalid";
      flag = false;
    }
    if (!files || files.length == 0) {
      errSubmit.avatar = "Please upload your avatar";
      flag = false;
    }
    if (values.phone == "") {
      errSubmit.phone = "Please enter your phone";
      flag = false;
    }
    if (values.address == "") {
      errSubmit.address = "Please enter your address";
      flag = false;
    }
    if (values.password == "") {
      errSubmit.password = "Please enter your password";
      flag = false;
    }
    if (values.confirmPassword == "") {
      errSubmit.confirmPassword = "Please enter a confirm password";
      flag = false;
    } else if (values.confirmPassword != values.password) {
      errSubmit.confirmPassword = "Incorrect authentication password";
      flag = false;
    }

    if (!flag) {
      setErrors(errSubmit);
    } else {
      const formData = new FormData();
      formData.append("user_name", values.name);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("address", values.address);
      formData.append("phone", values.phone);
      formData.append("level", 1);
      formData.append("avatar", files[0]);

      api
        .post("/user/add", formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Register</h2>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              name="name"
              placeholder="Enter your name"
              value={values.name}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.name}</div>
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              name="email"
              placeholder="Enter email"
              value={values.email}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.email}</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Avatar</label>
            <input
              type="file"
              className={`form-control ${errors.avatar ? "is-invalid" : ""}`}
              name="avatar"
              onChange={handleFile}
            />
            <div className="invalid-feedback">{errors.avatar}</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              className={`form-control ${errors.address ? "is-invalid" : ""}`}
              name="address"
              placeholder="Enter address"
              value={values.address}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.address}</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              name="phone"
              placeholder="Enter phone"
              value={values.phone}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.phone}</div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              name="password"
              placeholder="Enter password"
              value={values.password}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.password}</div>
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
              name="confirmPassword"
              placeholder="Confirm password"
              value={values.confirmPassword}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.confirmPassword}</div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>

        <p className="text-center mt-3 mb-0">
          Already have an account?{" "}
          <a href="/login" className="text-decoration-none">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
