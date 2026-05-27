import { useForm } from "../../../hooks/useForm";
import api from "../../../routes/api";
import BrandForm from "./BrandForm";

const BrandCreate = () => {
  const { values, errors, setErrors, handleChange } = useForm({
    name: "",
    slug: "",
    status: true,
  });

  const handleCreate = (e) => {
    e.preventDefault();
    const errSubmit = {};
    let flag = true;

    if (values.name === "") {
      errSubmit.name = "Please enter product description";
      flag = false;
    }

    if (values.slug === "") {
      errSubmit.slug = "Please enter product price";
      flag = false;
    }

    if (!flag) {
      setErrors(errSubmit);
    } else {
      const data = {
        name: values.name,
        slug: values.slug,
        status: values.status,
      };
      api
        .post("/brand/add", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };
  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="mb-0">Create Brand</h3>

          <small className="text-muted">Add a new brand to the system</small>
        </div>

        <a href="/admin/brands" className="btn btn-outline-dark">
          Back to Brands
        </a>
      </div>

      {/* Form */}
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <BrandForm
            values={values}
            errors={errors}
            handleChange={handleChange}
            handleSubmit={handleCreate}
          />
        </div>
      </div>
    </div>
  );
};

export default BrandCreate;
