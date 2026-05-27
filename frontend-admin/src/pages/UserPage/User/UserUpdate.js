import { useFile } from "../../../hooks/useFile";
import { useForm } from "../../../hooks/useForm";
import api from "../../../routes/api";
import UserForm from "./UserForm";
import { validateEmail } from "../../../utils/validateEmail";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const UserUpdate = () => {
  const { values, errors, setValues, setErrors, handleChange } = useForm({
    name: "",
    email: "",
    address: "",
    phone: "",
    level: "",
    password: "",
    confirmPassword: "",
  });

  const { files, handleFile } = useFile();

  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/user/${id}`)
      .then((res) => {
        setValues({
          name: res.data.user_name,
          email: res.data.email,
          address: res.data.address,
          phone: res.data.phone,
          level: res.data.level,
          password: "",
          confirmPassword: "",
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    const errSubmit = {};
    let flag = true;

    if (values.name === "") {
      errSubmit.name = "Please enter your name";
      flag = false;
    }

    if (values.email === "") {
      errSubmit.email = "Please enter your email";
      flag = false;
    } else if (!validateEmail(values.email)) {
      errSubmit.email = "This email is invalid";
      flag = false;
    }

    if (values.phone === "") {
      errSubmit.phone = "Please enter your phone";
      flag = false;
    }

    if (values.address === "") {
      errSubmit.address = "Please enter your address";
      flag = false;
    }

    if (values.password !== "") {
      if (values.password.length < 6) {
        errSubmit.password = "Password must be at least 6 characters";

        flag = false;
      }

      if (values.confirmPassword !== values.password) {
        errSubmit.confirmPassword = "Passwords do not match";

        flag = false;
      }
    }

    if (!flag) {
      setErrors(errSubmit);
      return;
    }

    const formData = new FormData();
    formData.append("user_name", values.name);
    formData.append("email", values.email);
    formData.append("address", values.address);
    formData.append("phone", values.phone);
    formData.append("level", values.level);
    if (values.password.trim() !== "") {
      formData.append("password", values.password);
    }
    if (files.length > 0) {
      formData.append("avatar", files[0]);
    }

    api
      .put(`/user/update/${id}`, formData)
      .then((res) => {
        console.log(res);
        alert("User updated successfully!");
      })
      .catch((err) => {
        console.log(err.response.data);
        const error = err.response.data;
        setErrors({
          [error.fields]: error.message,
        });
      });
  };

  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="mb-0">Create User</h3>
          <small className="text-muted">Add a new user to the system</small>
        </div>

        <a href="/admin/users" className="btn btn-outline-dark">
          Back to Users
        </a>
      </div>

      {/* Form Card */}
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <UserForm
            values={values}
            errors={errors}
            isEdit={true}
            handleChange={handleChange}
            handleFile={handleFile}
            handleSubmit={handleUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default UserUpdate;
