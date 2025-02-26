import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "70vh" }}
    >
      <div className="text-center">
        <h1 className="text-danger p-3">This page doesn't exist</h1>
        <Link to="/" className="btn btn-primary btn-sm">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
