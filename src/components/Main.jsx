import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import PromoBanner from "./PromoBanner";

function Main({ addToCart }) { 
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]); 
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchServices = () => {
    setIsLoading(true);
    axios.get("http://127.0.0.1:8000/api/services")
      .then((res) => {
        setServices(res.data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchServices(); 
    axios.get("http://127.0.0.1:8000/api/categories")
      .then((res) => setCategories(res.data));
  }, []);

  const filterByCategory = (categoryId) => {
    setIsLoading(true);
    axios.get(`http://127.0.0.1:8000/api/services?category_id=${categoryId}`)
      .then((res) => {
        setServices(res.data);
        setIsLoading(false);
      });
  };

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="main py-4">
      <div className="container">
        <h1 className="text-center">Ласкаво просимо до нашої хімчистки!</h1>
        <PromoBanner />

        <h2 className="mt-5 mb-4 text-center">Наші послуги</h2>

        {}
        <div className="d-flex justify-content-center gap-2 mb-4">
          <button className="btn btn-outline-primary" onClick={fetchServices}>Всі</button>
          {categories.map((cat) => (
            <button key={cat.id} className="btn btn-outline-primary" onClick={() => filterByCategory(cat.id)}>
              {cat.name}
            </button>
          ))}
        </div>

        <div className="mb-4">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Пошук послуги за назвою..." 
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {}
        {isLoading ? (
          <p className="text-center">Завантаження...</p>
        ) : (
          <div className="row">
            {filteredServices.map((service) => (
              <div className="col-md-4 mb-5" key={service.id}>
                <ServiceCard {...service} title={service.name} addToCart={addToCart} />
                <div className="text-center mt-2">
                  <Link to={`/service/${service.id}`} className="btn btn-link btn-sm">🔎 Детальніше</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Main;