import { NavLink } from "react-router-dom";

const CategoryBar = () => {
  return (
    <div className="border p-2 bg-light rounded">
      <nav className="nav nav-pills d-flex justify-content-center gap-4">
        <NavLink
          to="/products"
          end
          className={({ isActive }) =>
            `nav-link ${isActive ? "bg-secondary text-white" : "text-dark"}`
          }
        >
          All Products
        </NavLink>
        <NavLink
          to="/products/jewelery"
          className={({ isActive }) =>
            `nav-link ${isActive ? "bg-secondary text-white" : "text-dark"}`
          }
        >
          Jewelery
        </NavLink>
        <NavLink
          to="/products/electronics"
          className={({ isActive }) =>
            `nav-link ${isActive ? "bg-secondary text-white" : "text-dark"}`
          }
        >
          Electronics
        </NavLink>
        <NavLink
          to="/products/men's clothing"
          className={({ isActive }) =>
            `nav-link ${isActive ? "bg-secondary text-white" : "text-dark"}`
          }
        >
          Men's Clothing
        </NavLink>
        <NavLink
          to="/products/women's clothing"
          className={({ isActive }) =>
            `nav-link ${isActive ? "bg-secondary text-white" : "text-dark"}`
          }
        >
          Women's Clothing
        </NavLink>
      </nav>
    </div>
  );
};

export default CategoryBar;
