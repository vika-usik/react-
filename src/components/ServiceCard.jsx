import { useState } from "react";

function ServiceCard({ id, title, description, price, image, addToCart }) {
  const [tempCount, setTempCount] = useState(1);

  const handleIncrement = () => setTempCount(prev => prev + 1);
  const handleDecrement = () => setTempCount(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddClick = () => {
    addToCart({ id, title, price }, tempCount);
    setTempCount(1);
  };

  return (
    <div className="card h-100 shadow-sm">
      <img src={image} className="card-img-top" alt={title} style={{ height: "200px", objectFit: "cover" }} />
      <div className="card-body d-flex flex-column text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted small">{description}</p>
        <p className="fw-bold text-primary">Ціна: {price} грн</p>

        {}
        <div className="d-flex justify-content-center align-items-center gap-3 mb-3 mt-auto">
          <button className="btn btn-sm btn-outline-secondary" onClick={handleDecrement}>-</button>
          <span className="fw-bold">{tempCount}</span>
          <button className="btn btn-sm btn-outline-secondary" onClick={handleIncrement}>+</button>
        </div>

        <button className="btn btn-primary w-100" onClick={handleAddClick}>
          Додати в кошик
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;