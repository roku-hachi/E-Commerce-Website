import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const BlogPage = () => {
  const { blogs } = useContext(AppContext);
  return (
    <div>
      {/* Header */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="fw-bold">Latest Blogs</h1>

          <p className="text-muted mt-3">
            Read the latest articles, tutorials, and news.
          </p>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {blogs.map((blog) => {
              return (
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src={`http://localhost:8000/${blog.image}`}
                      className="card-img-top"
                      style={{
                        height: "220px",
                        objectFit: "contain",
                      }}
                    />

                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title fw-bold">{blog.title}</h5>
                      <small className="text-muted mb-2">
                        {new Date(blog.created_at).toLocaleDateString("vi-VN")}
                      </small>

                      <p className="card-text">{blog.description}</p>

                      <a className="btn btn-dark mt-auto">Read More</a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
