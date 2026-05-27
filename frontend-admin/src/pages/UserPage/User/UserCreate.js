import { useFile } from "../../../hooks/useFile";
import { useForm } from "../../../hooks/useForm";
import api from "../../../routes/api";
import UserForm from "./UserForm";
import { validateEmail } from "../../../utils/validateEmail";

const UserCreate = () => {
  const { values, errors, setErrors, handleChange } = useForm({
    name: "",
    email: "",
    address: "",
    phone: "",
    level: "",
    password: "",
    confirmPassword: "",
  });

  const { files, handleFile } = useFile();

  const handleCreate = (e) => {
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

    if (!files || files.length === 0) {
      errSubmit.avatar = "Please upload your avatar";
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

    if (values.password === "") {
      errSubmit.password = "Please enter your password";
      flag = false;
    }

    if (values.confirmPassword === "") {
      errSubmit.confirmPassword = "Please confirm password";
      flag = false;
    } else if (values.confirmPassword !== values.password) {
      errSubmit.confirmPassword = "Passwords do not match";
      flag = false;
    }

    if (!flag) {
      setErrors(errSubmit);
      return;
    }

    const formData = new FormData();
    formData.append("user_name", values.name);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("address", values.address);
    formData.append("phone", values.phone);
    formData.append("level", values.level);
    formData.append("avatar", files[0]);

    api
      .post("/user/add", formData)
      .then((res) => {
        console.log(res);
        alert("User created successfully!");
      })
      .catch((err) => {
        console.log(err);
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
            handleChange={handleChange}
            handleFile={handleFile}
            handleSubmit={handleCreate}
          />
        </div>
      </div>
    </div>
  );
};

export default UserCreate;
