// components/Navbar.jsx
import { formatNumber } from "../utils/formatNumber";

const Navbar = ({ isAuthenticated, setView, handleLogout }) => {
  const total = 25000;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 justify-content-between">
      <div>
        <button className="btn btn-outline-primary me-2" onClick={() => setView("home")}>
          🍕 Home
        </button>

        {isAuthenticated ? (
          <>
            <button className="btn btn-outline-success me-2">🔓 Profile</button>
            <button className="btn btn-outline-danger me-2" onClick={handleLogout}>
              🔒 Logout
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-secondary me-2" onClick={() => setView("login")}>
              🔐 Login
            </button>
            <button className="btn btn-outline-secondary me-2" onClick={() => setView("register")}>
              📝 Register
            </button>
          </>
        )}
      </div>

      <button className="btn btn-outline-warning">
        🛒 Total: ${formatNumber(total)}
      </button>
    </nav>
  );
};

export default Navbar;

