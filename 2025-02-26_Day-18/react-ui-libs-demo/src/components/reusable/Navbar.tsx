import { NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import { useCartContext } from "@/contexts/AppContext";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart } = useCartContext();
  const { loggedInUser, dispatch } = useUserContext();
  return (
    <nav className="flex items-center gap-4 p-2 border-b shadow-sm dark:bg-gray-900">
      <div className="flex gap-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            cn(
              "px-4 py-2 rounded-md transition-colors hover:bg-gray-200 dark:hover:bg-gray-700",
              isActive ? "bg-gray-300 dark:bg-gray-800 font-semibold" : ""
            )
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            cn(
              "px-4 py-2 rounded-md transition-colors hover:bg-gray-200 dark:hover:bg-gray-700",
              isActive ? "bg-gray-300 dark:bg-gray-800 font-semibold" : ""
            )
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            cn(
              "px-4 py-2 rounded-md transition-colors hover:bg-gray-200 dark:hover:bg-gray-700",
              isActive ? "bg-gray-300 dark:bg-gray-800 font-semibold" : ""
            )
          }
        >
          Cart ({cart.products.length})
        </NavLink>
        <NavLink
          to="/add_new"
          className={({ isActive }) =>
            cn(
              "px-4 py-2 rounded-md transition-colors",
              isActive
                ? "bg-red-500 text-white font-semibold"
                : "hover:bg-gray-200 dark:hover:bg-gray-700"
            )
          }
        >
          Add New
        </NavLink>
      </div>
      <div className="ml-auto flex items-center gap-3 text-secondary">
        <Button
          variant="outline"
          onClick={() => {
            dispatch({ type: "logout", data: loggedInUser });
            navigate("/login");
          }}
        >
          {loggedInUser.id ? "Logout" : "Login"}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
