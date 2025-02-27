import { Link } from "react-router-dom";
import { ModeToggle } from "../utils/ModeToggle";

const Header = () => {
  return (
    <>
      <div className="text-center p-2 bg-primary text-white">
        <Link to="/" className="text-white text-decoration-none">
          <h1 className="fw-bold m-2">React Commerce</h1>
        </Link>
        <div className="position-absolute top-6 end-2">
          <ModeToggle />
        </div>
      </div>
    </>
  );
};

export default Header;
