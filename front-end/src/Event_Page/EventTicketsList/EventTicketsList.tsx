import './EventTicketsList.css';

const tickets = [
  {
    id: 1,
    eventName: "Ticket 1",
    date: "2024-07-15",
    time: "14:00",
    location: "Central Park",
    price: 75,
    availableTickets: 500,
  },
  {
    id: 2,
    eventName: "Ticket 2",
    date: "2024-09-22",
    time: "09:00",
    location: "Convention Center",
    price: 199,
    availableTickets: 200,
  },
  {
    id: 3,
    eventName: "Ticket 3",
    date: "2024-08-05",
    time: "20:00",
    location: "Laugh Factory",
    price: 45,
    availableTickets: 100,
  },
  {
    id: 4,
    eventName: "Ticket 4",
    date: "2024-10-10",
    time: "12:00",
    location: "Riverfront Park",
    price: 85,
    availableTickets: 300,
  },
];

const IconCalendar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const IconClock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const IconMapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const IconTicket = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 5v2"></path>
    <path d="M15 11v2"></path>
    <path d="M15 17v2"></path>
    <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4V7a2 2 0 0 1 2-2z"></path>
  </svg>
);

export default function EventTicketsList() {
  return (
    <div className="container">
      <h1 className="title">Available Event Tickets</h1>
      <div className="ticket-list">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="ticket-card">
            <div className="ticket-content">
              <div className="ticket-info">
                <h2 className="event-name">{ticket.eventName}</h2>
                <div className="event-details">
                  <div className="detail">
                    <IconCalendar />
                    <span>{new Date(ticket.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="detail">
                    <IconClock />
                    <span>{ticket.time}</span>
                  </div>
                </div>
                <div className="detail">
                  <IconMapPin />
                  <span>{ticket.location}</span>
                </div>
                <div className="detail">
                  <IconTicket />
                  <span>{ticket.availableTickets} tickets available</span>
                </div>
              </div>
              <div className="ticket-action">
                <span className="price">${ticket.price}</span>
                <button className="purchase-button">Purchase Ticket</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
