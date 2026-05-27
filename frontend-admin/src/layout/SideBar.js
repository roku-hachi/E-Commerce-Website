import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Sidebar = () => {
  const [openProduct, setOpenProduct] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };
  return (
    <div className="bg-dark text-white p-3 vh-100" style={{ width: "250px" }}>
      <h3 className="fw-bold mb-4">Admin Panel</h3>

      <ul className="nav flex-column">
        {/* Dashboard */}
        <li className="nav-item mb-2">
          <a href="/admin/dashboard" className="nav-link text-white">
            📊 Dashboard
          </a>
        </li>

        {/* Product Menu */}
        <li className="nav-item mb-2">
          <button
            className="btn btn-dark w-100 text-start"
            onClick={() => setOpenProduct(!openProduct)}
          >
            📦 Product Management
          </button>

          {openProduct && (
            <div className=" ms-3 mt-2" id="productMenu">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink to="/admin/products" className="nav-link text-white">
                    Products
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/admin/categories"
                    className="nav-link text-white"
                  >
                    Categories
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/admin/brands" className="nav-link text-white">
                    Brands
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </li>

        {/* Blogs */}
        <li className="nav-item mb-2">
          <a href="/admin/blogs" className="nav-link text-white">
            📝 Blogs
          </a>
        </li>

        {/* Orders */}
        <li className="nav-item mb-2">
          <a href="/admin/orders" className="nav-link text-white">
            🛒 Orders
          </a>
        </li>

        {/* Users */}
        <li className="nav-item mb-2">
          <a href="/admin/users" className="nav-link text-white">
            👤 Users
          </a>
        </li>

        {/* Logout */}
        <li className="nav-item mt-4">
          <button className="btn btn-danger w-100" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
