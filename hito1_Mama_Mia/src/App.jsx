// App.jsx
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [view, setView] = useState("login"); // 'login', 'register', 'home'
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setView("home");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setView("login");
  };

  return (
    <>
      <Navbar
        isAuthenticated={isAuthenticated}
        setView={setView}
        handleLogout={handleLogout}
      />
      {view === "login" && <Login onLoginSuccess={handleLoginSuccess} />}
      {view === "register" && <Register />}
      {view === "home" && isAuthenticated && <Home />}
      <Footer />
    </>
  );
}

export default App;
