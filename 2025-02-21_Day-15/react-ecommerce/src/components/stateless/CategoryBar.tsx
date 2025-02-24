import { NavLink } from "react-router-dom";

const CategoryBar = () => {
  return (
    <div className="border p-2 bg-light rounded">
      <nav className="nav nav-pills d-flex justify-content-center gap-4">
        <NavLink to="/products" end className="nav-link">
          All Products
        </NavLink>
        <NavLink to="/products/jewelery" className="nav-link">
          Jewelry
        </NavLink>
        <NavLink to="/products/electronics" className="nav-link">
          Electronics
        </NavLink>
        <NavLink to="/products/men's clothing" className="nav-link">
          Men's Clothing
        </NavLink>
        <NavLink to="/products/women's clothing" className="nav-link">
          Women's Clothing
        </NavLink>
      </nav>
    </div>
  );
};

export default CategoryBar;
