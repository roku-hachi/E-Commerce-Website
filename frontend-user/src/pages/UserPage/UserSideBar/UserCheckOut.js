const UserCheckOut = ({ user, orders }) => {
  // Total Spent
  const totalSpent = orders.reduce((sum, order) => sum + order.total_price, 0);

  return (
    <>
      <h4 className="fw-bold mb-4">Checkout Information</h4>

      <div className="row">
        {/* Shipping Address */}
        <div className="col-md-6 mb-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="fw-bold mb-3">Shipping Address</h5>

              <p className="mb-1">{user.name}</p>

              <p className="mb-1">{user.address}</p>

              <p className="mb-1">{user.phone}</p>

              <p className="text-muted">{user.email}</p>

              <button className="btn btn-dark btn-sm">Edit Address</button>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="col-md-6 mb-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="fw-bold mb-3">Payment Method</h5>

              <div className="mb-2">
                <span className="badge bg-success">Default</span>
              </div>

              <p className="mb-1">PayPal</p>

              <p className="text-muted">john@example.com</p>

              <button className="btn btn-dark btn-sm">Manage Payment</button>
            </div>
          </div>
        </div>

        {/* Checkout Stats */}
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="fw-bold mb-4">Checkout Summary</h5>

              <div className="row text-center">
                <div className="col-md-4 mb-3">
                  <h3 className="fw-bold">{orders.length}</h3>

                  <p className="text-muted mb-0">Total Orders</p>
                </div>

                <div className="col-md-4 mb-3">
                  <h3 className="fw-bold">${totalSpent.toLocaleString()}</h3>

                  <p className="text-muted mb-0">Total Spent</p>
                </div>

                <div className="col-md-4 mb-3">
                  <h3 className="fw-bold">{orders[orders.length - 1]?.id}</h3>

                  <p className="text-muted mb-0">Last Order</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCheckOut;
