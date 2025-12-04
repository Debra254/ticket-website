import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} style={{ border: '2px solid #d4af37', padding: '20px', margin: '15px 0', backgroundColor: '#111' }}>
              <h4 style={{ color: '#ffd700', marginBottom: '10px' }}>{item.title}</h4>
              <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Price: ${item.price}</p>
              <button className="btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div style={{ marginTop: '20px' }}>
            <h3>Total: ${total}</h3>
            <Link to="/checkout" className="btn">Proceed to Checkout</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;