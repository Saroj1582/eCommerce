import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { items } from "./Data";

function Navbar({ setdata, cartItems, showFilter }) {
  const location = useLocation();
  console.log(location);

  function filterByCategory(category) {
    const filteredData = items.filter((item) => item.category === category);
    setdata(filteredData);
  }

  function filterByPrice(price) {
    const filteredData = items.filter((item) => item.price <= price);
    setdata(filteredData);
  }

  function searchProduct(e) {
    const query = e.target.value;
    const filteredProducts = items.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setdata(filteredProducts);
  }

  return (
    <>
      <header className="sticky-top">
        <div className="flex justify-between p-[15px] bg-[#270858] text-white">
          <Link to="/" className="font-bold w-[20%] text-center">
            E-cart
          </Link>
          <div className="w-[60%] text-center">
            <input
              onChange={searchProduct}
              className="w-[50%] font-semibold text-black border-none outline-none p-1"
              type="text"
              placeholder="Search Products"
            />
          </div>
          <Link to="/cart" className="w-[20%] text-center font-bold">
            <button
              type="button"
              className="btn btn-primary position-relative py-1 px-2 bg-blue-600"
            >
              <FaShoppingCart />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-[10px] font-bold">
                {cartItems.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>
        {location.pathname === "/" && (
          <div className="flex justify-between p-[15px] bg-[#4b1b78] text-white font-bold">
            <div className="item">Filter by {"->"}</div>
            <div className="item">No filter</div>
            <div
              onClick={() => filterByCategory("mobiles")}
              className="item cursor-pointer"
            >
              Mobiles
            </div>
            <div
              onClick={() => filterByCategory("laptops")}
              className="item cursor-pointer"
            >
              Laptops
            </div>
            <div
              onClick={() => filterByCategory("tablets")}
              className="item cursor-pointer"
            >
              Tablets
            </div>
            <div
              onClick={() => filterByPrice("29999")}
              className="item cursor-pointer"
            >
              {">="} 29999
            </div>
            <div
              onClick={() => filterByPrice("49999")}
              className="item cursor-pointer"
            >
              {">="} 49999
            </div>
            <div
              onClick={() => filterByPrice("69999")}
              className="item cursor-pointer"
            >
              {">="} 69999
            </div>
            <div
              onClick={() => filterByPrice("89999")}
              className="item cursor-pointer"
            >
              {">="} 89999
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
