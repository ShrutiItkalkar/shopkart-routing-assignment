import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      {/* TODO: Replace <a> with Link */}
      <Link to="/">ShopKart</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;
