import { useContext, useEffect, useState } from "react";
import CategoryForm from "./Category/CategoryForm";
import api from "../../routes/api";
import { AppContext } from "../../context/AppContext";

const CategoryPage = () => {
  const { categories } = useContext(AppContext);
  return (
    <>
      {/* Header */}
      <nav className="navbar navbar-light bg-white shadow-sm px-4 mt-4">
        <h4 className="mb-0">Manage Categories</h4>

        <a href="/admin/categories/create" className="btn btn-dark">
          + Add Category
        </a>
      </nav>

      <div className="container-fluid p-4">
        {/* Search */}
        {/* <div className="card shadow-sm border-0 mb-4">
          <div className="card-body">
            <input
              type="text"
              className="form-control"
              placeholder="Search category..."
              value={keyword}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div> */}

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
                  {categories.length > 0 ? (
                    categories.map((category) => (
                      <tr key={category.id}>
                        <td>{category.id}</td>

                        <td className="fw-semibold">{category.name}</td>

                        <td>{category.slug}</td>

                        <td>
                          {category.status ? (
                            <span className="badge bg-success">Active</span>
                          ) : (
                            <span className="badge bg-danger">Inactive</span>
                          )}
                        </td>

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
                        No categories found
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

export default CategoryPage;
