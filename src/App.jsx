import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Navbar } from "react-bootstrap";
import Header from "./components/Navabr";
function App() {
  return (
    <>
      {/* <h1>Namaste Redux Products</h1> */}
      <div className="APp">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
