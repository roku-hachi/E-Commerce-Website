import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.level !== 1) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
