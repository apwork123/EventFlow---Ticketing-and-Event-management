const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  purchaseDate: { type: Date, default: Date.now },
  quantity: { type: Number, required: true }
});

module.exports = mongoose.model('Ticket', TicketSchema);
