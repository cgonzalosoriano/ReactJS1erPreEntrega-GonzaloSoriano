import React from 'react';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <a className="navbar-brand" href="/">Tu Tienda</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/category1">Categoría 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/category2">Categoría 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/category3">Categoría 3</a>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
