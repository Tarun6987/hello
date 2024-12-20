import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Cards({ data }) { 
  return (
    <div className="d-flex flex-wrap justify-content-evenly gap-2">
      {data.map((product) => ( 
        <div className="card p-2 border">
          <img src={product.image} alt={product.title} style={{height:"100px",width:"100px"}}/>
          <h3>{product.title.length > 5 ? product.title.slice(0, 5) : product.title}</h3>
          <h3>{product.brand}</h3>
          <pre>
            {product.discountedPrice} <strike>{product.actualPrice}</strike>
          </pre>
          <h3>{product.rating}</h3>
        </div>
      ))}
    </div>
  );
}

export default Cards;
