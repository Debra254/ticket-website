import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <nav style={{ padding: '1.5rem', backgroundColor: '#000', borderBottom: '2px solid #d4af37' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '2rem', fontWeight: 'bold', textDecoration: 'none', color: '#ffd700', fontFamily: 'Georgia, serif', letterSpacing: '2px' }}>
          LUXE TICKETS
        </Link>
        <div>
          <Link to="/" style={{ margin: '0 1.5rem', textDecoration: 'none', color: '#d4af37', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Events</Link>
          <Link to="/cart" style={{ margin: '0 1.5rem', textDecoration: 'none', color: '#d4af37', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Cart ({cartItems.length})
          </Link>
          <Link to="/login" style={{ margin: '0 1.5rem', textDecoration: 'none', color: '#d4af37', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;