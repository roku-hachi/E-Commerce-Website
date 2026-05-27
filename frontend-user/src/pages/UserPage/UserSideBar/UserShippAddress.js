const UserShippAddress = ({ user }) => {
  return (
    <>
      <h4 className="fw-bold mb-4">Address</h4>

      <div className="card border-0 bg-light">
        <div className="card-body">
          <p className="mb-1 fw-bold">Home Address</p>

          <p className="text-muted">{user.address}</p>

          <button className="btn btn-dark">Edit Address</button>
        </div>
      </div>
    </>
  );
};
export default UserShippAddress;
