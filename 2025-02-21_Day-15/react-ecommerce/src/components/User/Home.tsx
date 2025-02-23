import { useUserContext } from "./UserContext";

const Home = () => {
  const { loggedInUser } = useUserContext();
  return (
    <div>
      <h1>Home {loggedInUser.id}</h1>
    </div>
  );
};

export default Home;
