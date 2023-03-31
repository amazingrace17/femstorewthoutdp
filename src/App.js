import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Login from "./pages/login/login";
import { useState } from "react";
function App() {
  const [startTime, setStartTime] = useState(null);

  function handleStart() {
    setStartTime(new Date().getTime());
    localStorage.setItem("startTime", new Date().getTime());
  }
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login handleStart={handleStart}/>} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart startTime={startTime}/>} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
