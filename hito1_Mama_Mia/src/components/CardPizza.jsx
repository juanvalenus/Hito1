// components/CardPizza.jsx
import { formatNumber } from "../utils/formatNumber";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card shadow-sm" style={{ width: "18rem", minHeight: "100%" }}>
      <img src={img} className="card-img-top" alt={`Pizza ${name}`} style={{ height: "180px", objectFit: "cover" }} />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{name}</h5>
          <p className="mb-1"><strong>Ingredientes:</strong></p>
          <ul className="ps-3">
            {ingredients.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>
        </div>
        <div className="mt-3">
          <p className="fw-bold">Precio: ${formatNumber(price)}</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-primary btn-sm">Ver más</button>
            <button className="btn btn-success btn-sm">Añadir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;

