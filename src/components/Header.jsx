import React from 'react';

function Header({ cart }) {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm p-3">
      <div className="container">
        {}
        <h2 className="navbar-brand m-0 fw-bold" style={{ fontSize: '1.5rem' }}>
          Хімчистка <span className="text-primary">CleanPro</span>
        </h2>

        {}
        <div className="d-flex align-items-center gap-4">
          <nav>
            <ul className="navbar-nav d-flex flex-row gap-3 m-0">
              <li className="nav-item">
                <a className="nav-link text-white px-2" href="#" style={{ cursor: 'pointer' }}>Головна</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white px-2" href="#" style={{ cursor: 'pointer' }}>Каталог</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white px-2" href="#" style={{ cursor: 'pointer' }}>Про нас</a>
              </li>
            </ul>
          </nav>

          {}
          <div className="d-flex align-items-center bg-primary text-white px-3 py-2 rounded-pill shadow-sm">
            <span className="me-2">🛒</span>
            <span className="fw-bold">Кошик: {totalCount}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;