import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import api from "../../routes/api";
import { validateEmail } from "../../utils/validateEmail";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { values, errors, setErrors, handleChange } = useForm({
    email: "",
    password: "",
  });
  const { fetchCart } = useContext(AppContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const errSubmit = {};
    let flag = true;

    if (values.email == "") {
      errSubmit.email = "Please enter your email";
      flag = false;
    } else if (!validateEmail(values.email)) {
      errSubmit.email = "This email is invalid";
      flag = false;
    }
    if (values.password == "") {
      errSubmit.password = "Please enter your password";
      flag = false;
    }

    if (!flag) {
      setErrors(errSubmit);
    } else {
      const data = {
        email: values.email,
        password: values.password,
      };
      api
        .post("/login", data)
        .then((res) => {
          console.log(res);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          localStorage.setItem("accessToken", res.data.accessToken);
          localStorage.setItem("refreshToken", res.data.refreshToken);
          fetchCart();
          navigate("/");
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.email}</div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              name="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.password}</div>
          </div>

          {/* Remember me */}
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>

          {/* Login button */}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        {/* Extra links */}
        <div className="text-center mt-3">
          <a href="/forgot-password" className="text-decoration-none d-block">
            Forgot password?
          </a>

          <p className="mt-2 mb-0">
            Don't have an account?{" "}
            <a href="/register" className="text-decoration-none">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
