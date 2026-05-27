const UserProFile = ({ user }) => {
  return (
    <>
      <h4 className="fw-bold mb-4">Account Details</h4>

      <form>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Full Name</label>

            <input
              type="text"
              className="form-control"
              value={user.user_name}
              readOnly
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Email</label>

            <input
              type="email"
              className="form-control"
              value={user.email}
              readOnly
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Phone</label>

            <input
              type="text"
              className="form-control"
              value={user.phone}
              readOnly
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Address</label>

            <input
              type="text"
              className="form-control"
              value={user.address}
              readOnly
            />
          </div>
        </div>

        <button className="btn btn-dark">Edit Profile</button>
      </form>
    </>
  );
};

export default UserProFile;
