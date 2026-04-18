import { useParams, Link } from "react-router-dom";

function ServiceDetails() {
  const { id } = useParams();

  const serviceInfo = {
    "1": "Хімчистка одягу",
    "2": "Чистка килимів",
    "3": "Прання білизни"
  };

  const serviceName = serviceInfo[id] || "Послугу не знайдено";

  return (
    <div className="container mt-5 py-5 text-center">
      <div className="card shadow-lg p-5 border-0">
        <h2 className="text-muted mb-4">Детальна інформація</h2>
        <h1 className="display-3 fw-bold text-primary mb-3">{serviceName}</h1>
        
        <div className="alert alert-info d-inline-block px-5 mt-3">
          Ви переглядаєте сторінку послуги з <strong>ID: {id}</strong>
        </div>

        <p className="mt-4 text-secondary" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Ми використовуємо лише перевірені методики для цієї послуги. 
          Ваше замовлення буде виконано протягом 24 годин з гарантією якості.
        </p>

        <div className="mt-5">
          <Link to="/catalog" className="btn btn-outline-dark px-4 me-3">⬅ Назад до каталогу</Link>
          <button className="btn btn-success px-4">Підтвердити замовлення</button>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;