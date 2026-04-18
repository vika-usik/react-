import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cart, clearCart }) {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm p-3">
      <div className="container">
        
        {}
        <Link to="/" className="navbar-brand m-0 fw-bold text-decoration-none" style={{ fontSize: '1.5rem' }}>
          Хімчистка <span className="text-primary">CleanPro</span>
        </Link>

        <div className="d-flex align-items-center gap-4">
          <nav>
            <ul className="navbar-nav d-flex flex-row gap-3 m-0">
              <li className="nav-item">
                <Link className="nav-link text-white px-2" to="/">Головна</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white px-2" to="/catalog">Каталог</Link>
              </li>
              <li className="nav-item">
                <span className="nav-link text-white px-2" style={{ cursor: 'pointer', opacity: 0.7 }}>Про нас</span>
              </li>
            </ul>
          </nav>

          {}
          <div className="d-flex align-items-center gap-2">
            <div className="d-flex align-items-center bg-primary text-white px-3 py-2 rounded-pill shadow-sm">
              <span className="me-2">🛒</span>
              <span className="fw-bold text-nowrap">Кошик: {totalCount}</span>
            </div>

            {}
            {totalCount > 0 && (
              <button 
                onClick={clearCart} 
                className="btn btn-outline-danger btn-sm rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '32px', height: '32px', padding: '0' }}
                title="Очистити кошик"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;