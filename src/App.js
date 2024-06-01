import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./screens/Home";
import About from "./screens/About";
import Order from "./screens/Order";
import MyOrder from "./screens/MyOrder";
import Cart from "./screens/Cart";

function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="order" element={<Order />} />
        <Route path="cart" element={<Cart />} />
        <Route path="my-order" element={<MyOrder />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
