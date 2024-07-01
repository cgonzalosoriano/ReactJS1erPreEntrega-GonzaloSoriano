import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () => {
  return (
    <div className="cart-widget d-flex align-items-center">
      <FaShoppingCart size={30} className="mr-2" />
      <span className="badge badge-pill badge-primary">3</span>
    </div>
  );
}

export default CartWidget;
