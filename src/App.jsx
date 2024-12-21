import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Navbar } from "react-bootstrap";
import Header from "./components/Navabr";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <>
      {/* <h1>Namaste Redux Products</h1> */}
      <div className="App">
        <Provider store={store}>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
          </Router>
        </Provider>
      </div>
    </>
  );
}

export default App;
