import { useFile } from "../../../hooks/useFile";
import { useForm } from "../../../hooks/useForm";
import api from "../../../routes/api";
import BlogForm from "./BlogForm";

const BlogCreate = () => {
  const { values, errors, setErrors, handleChange } = useForm({
    title: "",
    description: "",
    content: "",
  });
  const { files, handleFile } = useFile();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleCreate = (e) => {
    e.preventDefault();

    const errSubmit = {};
    let flag = true;

    if (values.title === "") {
      errSubmit.name = "Please enter blog title";
      flag = false;
    }

    if (!files || files.length === 0) {
      errSubmit.image = "Please upload blog image";
      flag = false;
    }

    if (values.description === "") {
      errSubmit.description = "Please enter blog description";
      flag = false;
    }

    if (values.content === "") {
      errSubmit.content = "Please enter blog content";
      flag = false;
    }

    if (!flag) {
      setErrors(errSubmit);
      return;
    }

    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("content", values.content);
    files.forEach((file) => {
      formData.append("image", file);
    });

    api
      .post("/blog/add", formData)
      .then((res) => {
        console.log(res);
        alert("Blog created successfully!");
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
          <h3 className="mb-0">Create Blog</h3>
          <small className="text-muted">
            Write and publish a new blog post
          </small>
        </div>

        <a href="/admin/blogs" className="btn btn-outline-dark">
          Back to Blogs
        </a>
      </div>

      {/* Form Card */}
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <BlogForm
            values={values}
            errors={errors}
            handleFile={handleFile}
            handleSubmit={handleCreate}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCreate;
