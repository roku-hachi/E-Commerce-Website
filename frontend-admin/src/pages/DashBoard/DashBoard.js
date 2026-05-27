const DashBoard = () => {
  return (
    <div className="container-fluid p-4">
      {/* Recent Orders */}
      <div className="card shadow-sm border-0 mt-4">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">Recent Orders</h5>
          </div>

          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>Orders</th>
                  <th>Customers</th>
                  <th>Total</th>
                  <th>Blogs</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>order.id</td>

                  <td>order.customer</td>

                  <td>order.total</td>

                  <td>order.total</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body text-center">
              <h5>Add New Product</h5>

              <p className="text-muted">Create and publish a new product.</p>

              <a href="/admin/products/create" className="btn btn-dark">
                Add Product
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body text-center">
              <h5>Create Blog Post</h5>

              <p className="text-muted">Write and publish a new article.</p>

              <a href="/admin/blogs/create" className="btn btn-primary">
                New Blog
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body text-center">
              <h5>Manage Users</h5>

              <p className="text-muted">View and manage user accounts.</p>

              <a href="/admin/users" className="btn btn-secondary">
                Users
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
