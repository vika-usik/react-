import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import ServiceDetails from "./pages/ServiceDetails";
import ContactPage from "./pages/ContactPage"; 
import AboutPage from "./pages/AboutPage"; 

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

  const clearCart = () => {
    setCart([]);
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Завантаження...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header cart={cart} clearCart={clearCart} />
      
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage addToCart={addToCart} />} />
          
          {}
          <Route path="/service/:id" element={<ServiceDetails addToCart={addToCart} />} />
          
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} /> {}
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;