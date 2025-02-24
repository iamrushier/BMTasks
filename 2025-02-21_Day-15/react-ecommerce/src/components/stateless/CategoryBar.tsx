import React from "react";
import { Link, Outlet } from "react-router-dom";

const CategoryBar = () => {
  return (
    <div className="border  p-2 bg-light rounded">
      <nav className="nav nav-pills d-flex justify-content-center gap-5">
        <Link to="/" className="nav-link text-dark fw-bold">
          All Products
        </Link>
        <Link to="jewlery" className="nav-link text-dark fw-bold">
          Jewelry
        </Link>
        <Link to="electronics" className="nav-link text-dark fw-bold">
          Electronics
        </Link>
        <Link to="men's clothing" className="nav-link text-dark fw-bold">
          Men's Clothing
        </Link>
        <Link to="women's clothing" className="nav-link text-dark fw-bold">
          Women's Clothing
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default CategoryBar;
