import { useParams } from "react-router-dom";
import { useFile } from "../../../hooks/useFile";
import { useForm } from "../../../hooks/useForm";
import api from "../../../routes/api";
import ProductForm from "./ProductForm";
import { useEffect } from "react";

const ProductUpdate = () => {
  const { values, errors, setValues, setErrors, handleChange } = useForm({
    name: "",
    price: "",
    detail: "",
    company: "",
  });

  const { files, handleFile } = useFile();

  const { id } = useParams();
  useEffect(() => {
    api
      .get(`/product/${id}`)
      .then((res) => {
        setValues({
          name: res.data.product_name,
          price: res.data.price,
          detail: res.data.detail,
          company: res.data.company,
        });
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
      errSubmit.name = "Please enter blog title";
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
    formData.append("product_name", values.name);
    formData.append("detail", values.detail);
    formData.append("company", values.company);
    formData.append("price", values.price);
    if (files.length > 0) {
      files.forEach((file) => {
        formData.append("image", file);
      });
    }

    api
      .put(`/product/update/${id}`, formData)
      .then((res) => {
        console.log(res);
        alert("product updated successfully!");
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
            isEdit={true}
            handleSubmit={handleUpdate}
            handleChange={handleChange}
            handleFile={handleFile}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductUpdate;
