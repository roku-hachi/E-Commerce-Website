import { useContext, useEffect, useState } from "react";
import api from "../../routes/api";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();

  const { categories, brands } = useContext(AppContext);

  useEffect(() => {
    if (keyword.trim() !== "") {
      api
        .get(`/product/search?keyword=${keyword}`)
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      api
        .get(`/product/list?page=${page}`)
        .then((res) => {
          setProducts(res.data.products);

          setTotalPages(res.data.totalPages);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [keyword, page]);

  const handleEdit = (id) => {
    navigate(`update/${id}`);
  };

  const handleDelete = (id) => {
    api
      .delete(`/product/delete/${id}`)
      .then((res) => {
        console.log(res);
        setProducts((prev) => prev.filter((product) => product.id != id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <nav className="navbar navbar-light bg-white shadow-sm px-4 mt-4">
        <h4 className="mb-0">Manage Products</h4>

        <a href="/admin/products/create" className="btn btn-dark">
          + Add Product
        </a>
      </nav>

      <div className="container-fluid p-4">
        {/* Search & Filter */}
        <div className="card shadow-sm border-0 mb-4">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search products..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>

              <div className="col-md-3">
                <select className="form-select">
                  <option>All Categories</option>
                  {categories.map((category) => {
                    return (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="col-md-3">
                <select className="form-select">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Out of Stock</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Products Table */}
        <div className="card shadow-sm border-0">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Price</th>
                    <th>Sale price</th>
                    <th>Stock</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((product) => {
                    return (
                      <tr key={product.id}>
                        {/* ID */}
                        <td>{product.id}</td>

                        {/* Image */}
                        <td>
                          <img
                            src={`http://localhost:8000/${product.image[0]}`}
                            width="60"
                            height="60"
                            className="rounded"
                            style={{ objectFit: "cover" }}
                          />
                        </td>

                        {/* Name */}
                        <td className="fw-semibold">{product.product_name}</td>

                        <td className="fw-semibold">{product.company}</td>

                        <td>{product.price}</td>

                        <td>
                          {product.sale_price === null ? 0 : product.sale_price}
                        </td>

                        <td>{product.stock}</td>

                        <td>
                          {product.status ? (
                            <span className="badge bg-success">Active</span>
                          ) : (
                            <span className="badge bg-danger">Inactive</span>
                          )}
                        </td>

                        {/* Actions */}
                        <td>
                          <div className="d-flex gap-2">
                            <a
                              className="btn btn-sm btn-primary"
                              onClick={() => handleEdit(product.id)}
                            >
                              Edit
                            </a>

                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => handleDelete(product.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Empty State */}
            {products.length == 0 && (
              <div className="text-center py-5">
                <h5>No products found</h5>
                <p className="text-muted">Start by adding a new product.</p>
              </div>
            )}
          </div>
        </div>

        {/* Pagination */}
        {keyword === "" && (
          <div className="d-flex justify-content-center mt-4">
            <nav>
              <ul className="pagination">
                {/* PREV */}
                <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                  <button
                    className="page-link"
                    onClick={() => setPage(page - 1)}
                  >
                    Previous
                  </button>
                </li>

                {/* PAGE NUMBER */}
                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    key={index}
                    className={`page-item ${page === index + 1 ? "active" : ""}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setPage(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}

                {/* NEXT */}
                <li
                  className={`page-item ${page === totalPages ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => setPage(page + 1)}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductPage;
