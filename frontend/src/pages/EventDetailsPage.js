import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import axios from 'axios';

const EventDetailsPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/events/${id}`)
      .then(res => setEvent(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!event) return <div>Loading...</div>;

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
      <p>Price: ${event.price}</p>
      <p>Venue: {event.venue}</p>
      <p>Available Tickets: {event.availableTickets}</p>
      <button className="btn" onClick={() => addToCart(event)}>
        Add to Cart
      </button>
    </div>
  );
};

export default EventDetailsPage;