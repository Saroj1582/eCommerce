import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout({ setData, cartItems, showFilter }) {
  return (
    <>
      <Navbar setdata={setData} cartItems={cartItems} showFilter={showFilter} />
      <Outlet />
    </>
  );
}

export default Layout;
