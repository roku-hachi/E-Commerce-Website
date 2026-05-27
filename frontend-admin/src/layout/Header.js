const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <nav className="navbar navbar-light bg-white shadow-sm px-4">
      <h4 className="mb-0">Dashboard</h4>

      <div className="d-flex align-items-center">
        <span className="me-3">{user.user_name}</span>

        <img
          src={`http://localhost:8000/${user.avatar}`}
          width="60"
          height="60"
          className="rounded"
          style={{ objectFit: "cover" }}
        />
      </div>
    </nav>
  );
};

export default Header;
