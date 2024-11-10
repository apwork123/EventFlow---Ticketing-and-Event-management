const express = require('express');
const { purchaseTicket, getAvailableTickets } = require('../controllers/TicketController');
const router = express.Router();

router.post('/purchase', purchaseTicket);
router.get('/user/:userId', getAvailableTickets);

module.exports = router;
