// src/components/TicketPurchaseForm.js

import React, { useState } from 'react';
import { purchaseTicket } from '../api/api';

function TicketPurchaseForm({ eventId }) {
  const [quantity, setQuantity] = useState(1);
  const [user, setUser] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    purchaseTicket({ eventId, quantity, user })
      .then(() => {
        alert('Ticket purchased successfully!');
      })
      .catch(error => {
        console.error("Error purchasing ticket:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '16px' }}>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
        min="1"
        required
      />
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        placeholder="Your Name"
        required
      />
      <input
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Your Email"
        required
      />
      <button type="submit">Buy Ticket</button>
    </form>
  );
}

export default TicketPurchaseForm;
