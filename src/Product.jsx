import React, { useContext } from 'react';
import { AppContext } from './App';

function Product({ data }) {
  const { addToCart, quantity, setQuantity } = useContext(AppContext); // Use addToCart, quantity, and setQuantity from context

  return (
    <div>
      <h1 align="center">Top Products</h1><br /><br />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {data.map((product, index) => {
            return (
              <div key={index} className="col">
                <div
                  className="card text-center align-items-center py-4"
                  style={{
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px"
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '5px' }}
                    className="mb-3 pt-3"
                  />
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                    {product.title.length > 20 ? product.title.slice(0, 20) + "..." : product.title}
                  </h3>
                  <pre style={{ fontSize: "1rem", fontWeight: "bold", margin: 0 }}>
                    ${product.discountedPrice} <strike>${product.actualPrice}</strike>
                  </pre>
                  
                  {/* Quantity Dropdown */}
                  <div className="mt-3">
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="form-select"
                      style={{ width: "100px" }}
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    className="btn btn-dark mt-3"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Product;
