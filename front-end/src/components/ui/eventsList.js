// src/components/EventsList.js

import React, { useEffect, useState } from 'react';
import { fetchEvents } from '../api/api';
import TicketPurchaseForm from './TicketPurchaseForm';

function EventsList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(data => {
      setEvents(data);
    });
  }, []);

  return (
    <div>
      {events.map(event => (
        <div key={event._id} style={{ border: '1px solid #ddd', padding: '16px', margin: '16px 0' }}>
          <h3>{event.name}</h3>
          <p>Date: {event.date}</p>
          <p>Venue: {event.venue}</p>
          <p>Description: {event.description}</p>
          <p>Available Tickets: {event.availableTickets}</p>

          {/* Render the TicketPurchaseForm component for each event */}
          <TicketPurchaseForm eventId={event._id} />
        </div>
      ))}
    </div>
  );
}

export default EventsList;
