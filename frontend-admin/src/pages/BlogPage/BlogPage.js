import { useEffect, useState } from "react";
import api from "../../routes/api";
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/blog/list")
      .then((res) => {
        console.log(res);
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err.respone.err);
      });
  }, []);

  const handleEdit = (id) => {
    navigate(`update/${id}`);
  };

  const handleDelete = (id) => {
    api
      .delete(`/blog/delete/${id}`)
      .then((res) => {
        console.log(res);
        setBlogs((prev) => prev.filter((blog) => blog.id != id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <nav className="navbar navbar-light bg-white shadow-sm px-4 mt-4">
        <h4 className="mb-0">Manage Blogs</h4>

        <a href="/admin/blogs/create" className="btn btn-dark">
          + Add Blog
        </a>
      </nav>
      <div className="container-fluid p-4">
        <div className="card shadow-sm border-0">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Like</th>
                    <th>Comment</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {blogs.map((blog) => {
                    return (
                      <tr key={blog.id}>
                        {/* Title */}
                        <td className="fw-semibold">{blog.title}</td>

                        {/* Category */}
                        <td>100</td>

                        {/* Author */}
                        <td>100</td>

                        {/* Date */}

                        {/* Actions */}
                        <td>
                          <div className="d-flex gap-2">
                            <a
                              className="btn btn-sm btn-primary"
                              onClick={() => handleEdit(blog.id)}
                            >
                              Edit
                            </a>

                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => handleDelete(blog.id)}
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
            {blogs.length == 0 && (
              <div className="text-center py-5">
                <h5>No blogs found</h5>
                <p className="text-muted">Start by adding a new blog.</p>
              </div>
            )}
          </div>
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-center mt-4">
          <nav>
            <ul className="pagination">
              <li className="page-item disabled">
                <button className="page-link">Previous</button>
              </li>

              <li className="page-item active">
                <button className="page-link">1</button>
              </li>

              <li className="page-item">
                <button className="page-link">2</button>
              </li>

              <li className="page-item">
                <button className="page-link">3</button>
              </li>

              <li className="page-item">
                <button className="page-link">Next</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
