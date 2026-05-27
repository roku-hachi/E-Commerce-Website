import CategoryForm from "./CategoryForm";

const CategoryUpdate = () => {
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
          <CategoryForm />
        </div>
      </div>
    </div>
  );
};

export default CategoryUpdate;
