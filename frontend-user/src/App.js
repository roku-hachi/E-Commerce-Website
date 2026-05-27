import logo from "./logo.svg";
import "./App.css";
import Header from "./pages/Layout/Header";
import Footer from "./pages/Layout/Footer";

function App(props) {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow-1">{props.children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
