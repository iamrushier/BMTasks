import Navbar from "../stateless/Navbar";
import { useUserContext } from "./UserContext";

const Cart = () => {
  const { loggedInUser } = useUserContext();
  console.log("Cart", loggedInUser.id);
  return (
    <div>
      <Navbar />
      <h1>
        Cart - {loggedInUser.id} {loggedInUser.username}
      </h1>
    </div>
  );
};

export default Cart;
