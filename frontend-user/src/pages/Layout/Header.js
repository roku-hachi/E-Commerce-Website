import { Link, useNavigate } from "react-router-dom";
import CartSidebar from "./CartSidebar";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const { openCart, setOpenCart } = useContext(AppContext);
  const handleCart = () => {
    setOpenCart(true);
  };
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            MyBlogShop
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/profile">
                  Profile
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/product/list">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/blogs">
                  Blogs
                </Link>
              </li>

              <li className="nav-item">
                <button className="nav-link" onClick={handleCart}>
                  Cart
                </button>
              </li>

              <li className="nav-item">
                {!user ? (
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                ) : (
                  <a className="nav-link" onClick={handleLogout}>
                    Logout
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <CartSidebar openCart={openCart} setOpenCart={setOpenCart} />
    </>
  );
};

export default Header;
