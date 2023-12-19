import "./App.css";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import SearchedProduct from "./components/SearchedProduct";
import Cart from "./components/Cart";
import { useState } from "react";
import { items } from "./components/Data";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([...items]);
  const [cartItems, setCartItems] = useState([]);
  const [showFilter, setShowFilter] = useState(true);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <Layout
            setData={setData}
            cartItems={cartItems}
            showFilter={showFilter}
          />
        }
      >
        <Route
          path=""
          element={
            <Product
              data={data}
              setCartItems={setCartItems}
              cartItems={cartItems}
            />
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProductDetail cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route path="/search/:item" element={<SearchedProduct />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
