import { useEffect, useState } from "react";
import api from "../../routes/api";
import UserOrder from "./UserSideBar/UserOrder";
import UserCheckOut from "./UserSideBar/UserCheckOut";
import UserWishList from "./UserSideBar/UserWishList";
import UserProFile from "./UserSideBar/UserProfile";
import UserShippAddress from "./UserSideBar/UserShippAddress";
import UserDashBoard from "./UserSideBar/UserDashBoard";

const UserPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [orders, setOrders] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    api
      .get(`order/${user.id}`)
      .then((res) => {
        console.log(res);
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  return (
    <div className="container py-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-lg-3 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body text-center">
              {/* Avatar */}
              <img
                src={`http://localhost:8000/${user.avatar}`}
                alt={user.name}
                className="rounded-circle mb-3"
                width="100"
                height="100"
                style={{
                  objectFit: "cover",
                }}
              />

              {/* User Info */}
              <h5 className="fw-bold mb-1">{user.user_name}</h5>

              <p className="text-muted small">{user.email}</p>

              <hr />

              {/* Menu */}
              <div className="list-group list-group-flush text-start">
                <button
                  className={`list-group-item list-group-item-action border-0 ${
                    activeTab === "dashboard" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("dashboard")}
                >
                  📊 Dashboard
                </button>

                <button
                  className={`list-group-item list-group-item-action border-0 ${
                    activeTab === "orders" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("orders")}
                >
                  📦 My Orders
                </button>

                <button
                  className={`list-group-item list-group-item-action border-0 ${
                    activeTab === "checkout" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("checkout")}
                >
                  💳 My Checkout
                </button>

                <button
                  className={`list-group-item list-group-item-action border-0 ${
                    activeTab === "wishlist" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("wishlist")}
                >
                  ❤️ Wishlist
                </button>

                <button
                  className={`list-group-item list-group-item-action border-0 ${
                    activeTab === "profile" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("profile")}
                >
                  👤 Account Details
                </button>

                <button
                  className={`list-group-item list-group-item-action border-0 ${
                    activeTab === "address" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("address")}
                >
                  📍 Address
                </button>

                <button className="list-group-item list-group-item-action border-0 text-danger">
                  🚪 Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="col-lg-9">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              {/* Dashboard */}
              {activeTab === "dashboard" && <UserDashBoard orders={orders} />}

              {/* Orders */}
              {activeTab === "orders" && <UserOrder orders={orders} />}

              {/* Checkout */}
              {activeTab === "checkout" && (
                <UserCheckOut user={user} orders={orders} />
              )}

              {/* Wishlist */}
              {activeTab === "wishlist" && <UserWishList />}

              {/* Profile */}
              {activeTab === "profile" && <UserProFile user={user} />}

              {/* Address */}
              {activeTab === "address" && <UserShippAddress user={user} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
