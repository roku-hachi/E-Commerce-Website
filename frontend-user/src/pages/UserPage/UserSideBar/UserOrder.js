const UserOrder = ({ orders }) => {
  return (
    <>
      <h4 className="fw-bold mb-4">My Orders</h4>

      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>

                <td>
                  {new Date(order.created_at).toLocaleDateString("vi-VN")}
                </td>

                <td>$ {order.total_price}</td>

                <td>
                  <span
                    className={`badge ${
                      order.status === "Completed"
                        ? "bg-success"
                        : "bg-warning text-dark"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>

                <td>
                  <button className="btn btn-sm btn-dark">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserOrder;
