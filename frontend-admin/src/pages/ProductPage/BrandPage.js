import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const BrandPage = () => {
  const { brands } = useContext(AppContext);
  return (
    <>
      {/* Header */}
      <nav className="navbar navbar-light bg-white shadow-sm px-4 mt-4">
        <h4 className="mb-0">Manage Brands</h4>

        <a href="/admin/brands/create" className="btn btn-dark">
          + Add Brand
        </a>
      </nav>

      <div className="container-fluid p-4">
        {/* Table */}
        <div className="card shadow-sm border-0">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Slug</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {brands.length > 0 ? (
                    brands.map((brand) => (
                      <tr key={brand.id}>
                        {/* ID */}
                        <td>{brand.id}</td>

                        {/* Name */}
                        <td className="fw-semibold">{brand.name}</td>

                        {/* Slug */}
                        <td>{brand.slug}</td>

                        {/* Status */}
                        <td>
                          {brand.status ? (
                            <span className="badge bg-success">Active</span>
                          ) : (
                            <span className="badge bg-danger">Inactive</span>
                          )}
                        </td>

                        {/* Actions */}
                        <td>
                          <div className="d-flex gap-2">
                            <button className="btn btn-sm btn-primary">
                              Edit
                            </button>

                            <button className="btn btn-sm btn-danger">
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center py-4">
                        No brands found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandPage;
