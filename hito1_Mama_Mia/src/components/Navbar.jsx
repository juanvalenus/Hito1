import React from "react";
import { formatNumber } from "../utils/FormatNumber";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div>
        <button className="btn btn-outline-primary me-2">🍕 Home</button>
        {token ? (
          <>
            <button className="btn btn-outline-success me-2">🔓 Profile</button>
            <button className="btn btn-outline-danger me-2"> 🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn_outline-secondary me-2">🔐 Login</button>
            <button className="btn btn_outline-secondary me-2">
              🔐 Register
            </button>
          </>
        )}
      </div>
      <button className="btn btn-outline-warning">
        {" "}
        🛒 Total: ${formatNumber(total)}
      </button>
    </nav>
  );
};

export default Navbar;
