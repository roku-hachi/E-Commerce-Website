import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 bg-light min-vh-100">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
