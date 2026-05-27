import CategoryForm from "./CategoryForm";
import { useForm } from "../../../hooks/useForm";
import api from "../../../routes/api";

const CategoryCreate = () => {
  const { values, errors, setErrors, handleChange } = useForm({
    name: "",
    slug: "",
    description: "",
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
        description: values.description,
      };
      api
        .post("/category/add", data)
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
          <h3 className="mb-0">Create Category</h3>

          <small className="text-muted">Add a new category to your store</small>
        </div>

        <a href="/admin/categories" className="btn btn-outline-dark">
          Back to Categories
        </a>
      </div>

      {/* Form */}
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <CategoryForm
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

export default CategoryCreate;
