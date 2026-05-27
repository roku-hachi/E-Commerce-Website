import logo from "./logo.svg";
import "./App.css";
import Header from "./layout/Header";
import Sidebar from "./layout/SideBar";

function App(props) {
  return <>{props.children}</>;
}

export default App;
