import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ServiceDetails({ addToCart }) {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/services/${id}`)
      .then((res) => {
        setService(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Помилка завантаження послуги:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center mt-5 py-5">Завантаження...</div>;
  if (!service) return <div className="text-center mt-5 py-5">Послугу не знайдено</div>;

  const imageUrl = service.image || "https://via.placeholder.com/600x300?text=Немає+фото";

  return (
    <div className="container mt-5 py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0 overflow-hidden">
            <img 
              src={imageUrl} 
              className="card-img-top" 
              alt={service.name} 
              style={{ maxHeight: "300px", objectFit: "cover" }} 
            />
            <div className="card-body p-5">
              <h1 className="fw-bold text-primary mb-3">{service.name}</h1>
              
              <div className="badge bg-primary text-wrap mb-4" style={{ fontSize: '1rem' }}>
                Ціна: {service.price} грн
              </div>

              <h5 className="text-muted mt-3">Детальний опис</h5>
              <p className="mt-3 text-secondary" style={{ lineHeight: '1.8' }}>
                {service.description || "Для цієї послуги поки немає детального опису."}
              </p>

              <div className="mt-5 border-top pt-4 text-center">
                <Link to="/catalog" className="btn btn-outline-dark px-4 me-3">
                  ⬅ Назад до каталогу
                </Link>
                {}
                <button 
                  className="btn btn-success px-4" 
                  onClick={() => addToCart(service, 1)}
                >
                  ➕ Додати в кошик
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;