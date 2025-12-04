const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  price: { type: Number, required: true },
  availableTickets: { type: Number, required: true },
  venue: { type: String, required: true }
});

module.exports = mongoose.model('Event', eventSchema);