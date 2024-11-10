const Ticket = require('../models/Ticket');
const Event = require('../models/Event');

exports.purchaseTicket = async (req, res) => {
  const { eventId, userId, quantity } = req.body;
  const event = await Event.findById(eventId);

  if (event.ticketsAvailable < quantity) {
    return res.status(400).json({ message: 'Not enough tickets available' });
  }

  const ticket = new Ticket({ event: eventId, user: userId, quantity });
  await ticket.save();

  event.ticketsAvailable -= quantity;
  await event.save();

  res.status(201).json(ticket);
};

exports.getAvailableTickets = async (req, res) => {
  const tickets = await Ticket.find({ user: req.params.userId });
  res.json(tickets);
};
