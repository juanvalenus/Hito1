// components/Header.jsx
const Header = () => {
  return (
    <header
      style={{
        backgroundImage: 'url("/assets/img/Header.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "2rem",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1>Bienvenido a Pizzería Mamma Mia!</h1>
      <p>Las mejores pizzas al mejor precio.</p>
    </header>
  );
};

export default Header;

