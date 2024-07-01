import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container container my-5">
      <div className="row">
        <div className="col text-center">
          <h1 className="display-4">{greeting}</h1>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
