const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  venue: { type: String, required: true },
  category: { type: String, enum: ['Sports', 'Concerts', 'Theater', 'Reality Shows', 'Festivals'] },
  ticketsAvailable: { type: Number, default: 0 },
  price: { type: Number, required: true },
  status: { type: String, enum: ['Open', 'Limited', 'Sold Out'], default: 'Open' },
  imageUrl: { type: String }
});

module.exports = mongoose.model('Event', EventSchema);
