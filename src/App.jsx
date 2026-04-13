import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (service, amount) => {
    setCart(prev => {
      const found = prev.find(item => item.id === service.id);

      if (found) {
        return prev.map(item =>
          item.id === service.id
            ? { ...item, qty: item.qty + amount }
            : item
        );
      }

      return [...prev, { ...service, qty: amount }];
    });
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Завантаження...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header cart={cart} />
      <Main addToCart={addToCart} />
      <Footer />
    </>
  );
}

export default App;