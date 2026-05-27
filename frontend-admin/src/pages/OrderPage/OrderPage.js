import { useEffect, useState } from "react";
import api from "../../routes/api";

const OrderPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api
      .get("/order")
      .then((res) => {
        console.log(res);
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  return (
    <>
      <nav className="navbar navbar-light bg-white shadow-sm px-4">
        <div>
          <h4 className="mb-0">Manage Orders</h4>
          <small className="text-muted">View and manage customer orders</small>
        </div>
      </nav>

      <div className="container-fluid p-4">
        {/* Filters */}
        <div className="card shadow-sm border-0 mb-4">
          <div className="card-body">
            <div className="row g-3">
              {/* Search */}
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search orders..."
                />
              </div>

              {/* Status */}
              <div className="col-md-3">
                <select className="form-select">
                  <option>All Status</option>
                  <option>Completed</option>
                  <option>Pending</option>
                  <option>Shipping</option>
                  <option>Cancelled</option>
                </select>
              </div>

              {/* Payment */}
              <div className="col-md-3">
                <select className="form-select">
                  <option>All Payment</option>
                  <option>Credit Card</option>
                  <option>PayPal</option>
                  <option>Cash</option>
                </select>
              </div>

              {/* Button */}
              <div className="col-md-2">
                <button className="btn btn-dark w-100">Filter</button>
              </div>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="card shadow-sm border-0">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Email</th>
                    <th>Total</th>
                    <th>Payment</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {orders.map((order) => {
                    return (
                      <tr key={order.id}>
                        {/* Order ID */}
                        <td className="fw-bold">{order.id}</td>

                        {/* Customer */}
                        <td>{order.user.user_name}</td>

                        {/* Email */}
                        <td>{order.user.email}</td>

                        {/* Total */}
                        <td>{order.total_price}</td>

                        {/* Payment */}
                        <td>{order.payment_method}</td>

                        {/* Status */}
                        <td>{order.status}</td>

                        {/* Date */}
                        <td>
                          {" "}
                          {new Date(order.created_at).toLocaleDateString(
                            "vi-VN",
                          )}
                        </td>

                        {/* Actions */}
                        <td>
                          <div className="d-flex gap-2">
                            <a className="btn btn-sm btn-primary">View</a>

                            <button className="btn btn-sm btn-danger">
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
            {/* {orders.length == 0 && (
              <div className="text-center py-5">
                <h5>No products found</h5>
                <p className="text-muted">Start by adding a new product.</p>
              </div>
            )} */}
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
                <button className="page-link">Next</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
