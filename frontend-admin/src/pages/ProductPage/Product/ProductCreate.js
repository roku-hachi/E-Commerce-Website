import { useFile } from "../../../hooks/useFile";
import { useForm } from "../../../hooks/useForm";
import api from "../../../routes/api";
import ProductForm from "./ProductForm";

const ProductCreate = () => {
  const { values, errors, setErrors, handleChange } = useForm({
    product_name: "",
    company: "",
    price: "",
    sale_price: "",
    stock: "",
    detail: "",
    category_id: "",
    brand_id: "",
    featured: false,
    status: true,
  });

  const { files, handleFile } = useFile();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleCreate = (e) => {
    e.preventDefault();

    const errSubmit = {};
    let flag = true;

    if (values.product_name === "") {
      errSubmit.product_name = "Please enter product name";
      flag = false;
    }

    if (!files || files.length === 0) {
      errSubmit.image = "Please upload product image";
      flag = false;
    }

    if (values.detail === "") {
      errSubmit.detail = "Please enter product description";
      flag = false;
    }

    if (values.price === "") {
      errSubmit.price = "Please enter product price";
      flag = false;
    }
    if (values.company === "") {
      errSubmit.company = "Please enter company";
      flag = false;
    }

    if (!flag) {
      setErrors(errSubmit);
      return;
    }

    const formData = new FormData();
    formData.append("product_name", values.product_name);
    formData.append("detail", values.detail);
    formData.append("company", values.company);
    formData.append("price", values.price);
    formData.append("sale_price", values.sale_price);
    formData.append("stock", values.stock);
    formData.append("category_id", values.category_id);
    formData.append("brand_id", values.brand_id);
    formData.append("featured", values.featured);
    formData.append("status", values.status);
    formData.append("user_id", user.id);

    files.forEach((file) => {
      formData.append("image", file);
    });

    api
      .post("/product/add", formData)
      .then((res) => {
        console.log(res);
        alert("product created successfully!");
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
          <h3 className="mb-0">Create Product</h3>
          <small className="text-muted">Add a new product to your store</small>
        </div>

        <a href="/admin/products" className="btn btn-outline-dark">
          Back to Products
        </a>
      </div>

      {/* Form Card */}
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <ProductForm
            values={values}
            errors={errors}
            handleSubmit={handleCreate}
            handleChange={handleChange}
            handleFile={handleFile}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
