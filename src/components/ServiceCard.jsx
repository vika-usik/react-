import { useState } from "react";

function ServiceCard(props) {
  const [count, setCount] = useState(0);

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={props.image}
        className="card-img-top"
        alt={props.title}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text text-muted">
          {props.description}
        </p>

        <p className="fw-bold">Ціна: {props.price} грн</p>

        <div className="d-flex align-items-center gap-2 mt-auto">
          <button
            className="btn btn-outline-secondary"
            onClick={() => setCount(count > 0 ? count - 1 : 0)}
          >
            -
          </button>

          <span>Кількість: {count}</span>

          <button
            className="btn btn-outline-secondary"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>

        <button
          className="btn btn-primary mt-3"
          onClick={() => setCount(count + 1)}
        >
          Замовити
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;