import { useEffect, useState } from "react";
import api from "../../routes/api";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    api
      .get("/user/list")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEdit = (id) => {
    navigate(`update/${id}`);
  };

  const handleDelete = (id) => {
    api
      .delete(`user/delete/${id}`)
      .then((res) => {
        console.log(res);
        setUsers((prev) => prev.filter((user) => user.id != id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <nav className="navbar navbar-light bg-white shadow-sm px-4 mt-4">
        <h4 className="mb-0">Manage Users</h4>

        <a href="/admin/users/create" className="btn btn-dark">
          + Add user
        </a>
      </nav>
      <div className="container-fluid p-4">
        <div className="card shadow-sm border-0">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => {
                    return (
                      <tr key={user.id}>
                        <td>
                          <img
                            src={`http://localhost:8000/${user.avatar}`}
                            width="60"
                            height="60"
                            className="rounded"
                            style={{ objectFit: "cover" }}
                          />
                        </td>

                        <td className="fw-semibold">{user.user_name}</td>

                        <td>{user.email}</td>

                        <td>{user.level === 1 ? "Admin" : "User"}</td>

                        <td>
                          <div className="d-flex gap-2">
                            <a
                              className="btn btn-sm btn-primary"
                              onClick={() => handleEdit(user.id)}
                            >
                              Edit
                            </a>

                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => handleDelete(user.id)}
                            >
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
                <button className="page-link">3</button>
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

export default UserPage;
