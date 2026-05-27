import { Link } from "react-router-dom";
import ProductFeature from "../../components/Product/ProductFeature";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const HomePage = () => {
  const { blogs } = useContext(AppContext);
  return (
    <div>
      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Welcome to MyBlogShop</h1>

          <p className="lead mt-3">
            Explore amazing products and read useful blog articles.
          </p>

          <Link to="/products/list" className="btn btn-primary btn-lg mt-3">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Products Section */}
      <ProductFeature />

      {/* Blog Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Latest Blogs</h2>

            <a href="/blogs" className="btn btn-outline-dark">
              Read More
            </a>
          </div>
          <div className="row">
            {blogs.slice(0, 3).map((blog) => {
              return (
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <img
                      src={`http://localhost:8000/${blog.image}`}
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "contain" }}
                    />

                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{blog.title}</h5>

                      <p className="card-text">{blog.description}</p>

                      <a className="btn btn-primary mt-auto">Read Article</a>
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

export default HomePage;
