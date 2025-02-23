import Navbar from "../stateless/Navbar";
import { useUserContext } from "./UserContext";

const Home = () => {
  const { loggedInUser } = useUserContext();
  console.log("Home", loggedInUser.id);
  return (
    <div>
      <Navbar />
      <h1>
        Home - {loggedInUser.id} {loggedInUser.username}
      </h1>
    </div>
  );
};

export default Home;
