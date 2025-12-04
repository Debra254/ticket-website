import React from 'react';
import { useCart } from '../context/CartContext';
import axios from 'axios';

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/payment/process', 
        { amount: total, eventId: cartItems[0]?._id },
        { headers: { Authorization: `Bearer ${token}` }}
      );
      clearCart();
      alert('Payment successful!');
    } catch (error) {
      alert('Payment failed');
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <h3>Order Summary</h3>
        {cartItems.map(item => (
          <div key={item.id} style={{ padding: '15px', borderBottom: '1px solid #d4af37', backgroundColor: '#111', margin: '5px 0' }}>
            <span style={{ fontSize: '1.1rem' }}>{item.title} - ${item.price}</span>
          </div>
        ))}
        <div style={{ marginTop: '20px', fontSize: '1.2rem', fontWeight: 'bold' }}>
          Total: ${total}
        </div>
        <button className="btn" onClick={handlePayment} style={{ marginTop: '20px' }}>
          Complete Payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;