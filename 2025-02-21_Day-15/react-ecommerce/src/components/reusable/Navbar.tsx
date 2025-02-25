import { NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import { useCartContext } from "../../contexts/UserCartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart } = useCartContext();
  const { loggedInUser, dispatch } = useUserContext();
  return (
    <nav className="nav nav-pills gap-2 p-2 border border-primary d-flex w-100 align-items-center">
      <div className="d-flex gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "nav-link active rounded-2 home-btn"
              : "nav-link rounded-2 home-btn"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "nav-link active rounded-2 home-btn"
              : "nav-link rounded-2 home-btn"
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive
              ? "nav-link active rounded-2 home-btn"
              : "nav-link rounded-2 home-btn"
          }
        >
          Cart({cart.products.length})
        </NavLink>
      </div>
      <button
        className="btn btn-link logout ms-auto"
        onClick={() => {
          dispatch({ type: "logout", data: loggedInUser });
          navigate("/login");
        }}
      >
        {loggedInUser.id ? "Logout" : "Login"}
      </button>
    </nav>
  );
};

export default Navbar;
