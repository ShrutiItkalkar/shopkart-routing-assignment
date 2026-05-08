import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      {/* TODO: Replace <a> with Link */}
      <Link to="/">ShopKart</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

export default Navbar;
