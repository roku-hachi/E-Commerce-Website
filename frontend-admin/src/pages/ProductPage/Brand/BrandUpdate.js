import BrandForm from "./BrandForm";

const BrandUpdate = () => {
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
          <BrandForm />
        </div>
      </div>
    </div>
  );
};

export default BrandUpdate;
