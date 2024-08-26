import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { useState } from "react";

const Nav = ({ setdata, cart }) => {
  const [searchterm, setsearchterm] = useState();
  const Navigate = useNavigate();
  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    console.log(element);
    setdata(element);
  };
  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setdata(element);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Navigate(`/search/${searchterm}`);
  };

  return (
    <>
      <header>
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            E-Cart
          </Link>
          <form onSubmit={handleSubmit} className="search-bar">
            <input
              type="text"
              value={searchterm}
              placeholder="Search Product"
              onChange={(e) => setsearchterm(e.target.value)}
            />
          </form>
          <Link to={"/cart/"} className="cart">
            <button type="button" class="btn btn-primary position-relative">
              <FaShoppingCart />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
              </span>
            </button>
          </Link>
        </div>
        <div className="nav-bar-wrapper">
          <div className="items">Filter by {"->"}</div>
          <div className="items" onClick={() => setdata(items)}>
            No Filter
          </div>
          <div className="items" onClick={() => filterByCategory("mobiles")}>
            Mobiles
          </div>
          <div className="items" onClick={() => filterByCategory("laptops")}>
            Laptops
          </div>
          <div className="items" onClick={() => filterByCategory("tablets")}>
            Tablets
          </div>
          <div className="items" onClick={() => filterByPrice("29999")}>
            {">="}29999
          </div>
          <div className="items" onClick={() => filterByPrice("49999")}>
            {">="}49999
          </div>
          <div className="items" onClick={() => filterByPrice("69999")}>
            {">="}69999
          </div>
          <div className="items" onClick={() => filterByPrice("89999")}>
            {">="}89999
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
