const UserDashBoard = ({ orders }) => {
  console.log(orders);
  const total = orders.reduce((sum, order) => {
    return sum + order.total_price;
  }, 0);
  return (
    <>
      <h4 className="fw-bold mb-4">Dashboard</h4>

      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card border-0 bg-light">
            <div className="card-body text-center">
              <h3 className="fw-bold">{orders.length}</h3>

              <p className="mb-0">Orders</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card border-0 bg-light">
            <div className="card-body text-center">
              <h3 className="fw-bold">3</h3>

              <p className="mb-0">Wishlist</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card border-0 bg-light">
            <div className="card-body text-center">
              <h3 className="fw-bold">${total}</h3>

              <p className="mb-0">Total Spent</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserDashBoard;
