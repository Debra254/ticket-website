import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/events')
      .then(res => setEvents(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Events</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px' }}>
        {events.map(event => (
          <div key={event._id} style={{ border: '2px solid #d4af37', padding: '30px', backgroundColor: '#111', boxShadow: '0 4px 20px rgba(212, 175, 55, 0.2)' }}>
            <h3 style={{ color: '#ffd700', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>{event.title}</h3>
            <p style={{ marginBottom: '10px', lineHeight: '1.6' }}>{event.description}</p>
            <p style={{ marginBottom: '8px', fontWeight: 'bold' }}>Date: {new Date(event.date).toLocaleDateString()}</p>
            <p style={{ marginBottom: '8px', fontSize: '1.2rem', color: '#ffd700', fontWeight: 'bold' }}>Price: ${event.price}</p>
            <p style={{ marginBottom: '20px' }}>Venue: {event.venue}</p>
            <Link to={`/events/${event._id}`} className="btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;