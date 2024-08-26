import React, { useState } from "react";
import Nav from "./components/Nav";
import Product from "./components/Product";
import { items } from "./components/Data";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import SearchItem from "./components/SearchItem";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [data, setdata] = useState([...items]);
  const [cart, setcart] = useState([]);
  return (
    <>
      <Router>
        <Nav setdata={setdata} cart={cart} />
        <Routes>
          <Route
            path={"/"}
            element={<Product items={data} cart={cart} setcart={setcart} />}
          ></Route>
          <Route path={"/product/:id"} element={<ProductDetail />}></Route>
          <Route
            path={"/cart"}
            element={<Cart setcart={setcart} cart={cart} />}
          ></Route>
          <Route path={"/search/:term"} element={<SearchItem />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
