import React, { useContext } from 'react';
import { AppContext } from './App';
function Cart() {
  const { cart, setCart } = useContext(AppContext); 
  const handleQuantityChange = (productId, newQuantity) => {
    setCart(cart.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };
  return (
    <div>
      <h1 align="center">Your Cart</h1><br />
      {cart.length === 0 ? (
        <p align="center">Your cart is empty.</p>
      ) : (
        <div className="container">
          <div className="row">
            {cart.map((item, index) => (
              <div key={index} className="col-12">
                <div className="card mb-4" style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-2">
                        <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                      </div>
                      <div className="col-md-6">
                        <h5>{item.title}</h5>
                        <pre><b>${item.discountedPrice}    <strike>${item.actualPrice}</strike></b></pre>
                      </div>
                      <div className="col-md-2">
                        <select
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                          className="form-select"
                        >
                          {[1, 2, 3, 4, 5].map(num => (
                            <option key={num} value={num}>{num}</option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-2">
                        <h5>Total: ${(item.discountedPrice * item.quantity).toFixed(2)}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Cart;
