import React from 'react';

const TicketCard = ({ ticket, selectedTicket, onSelectTicket }) => (
  <div className="ticket-card">
    <div className="ticket-header">
      <h3>
        <label>
          <input
            type="radio"
            name="selectedTicket"
            value={ticket.title}
            checked={selectedTicket === ticket.title}
            onChange={() => onSelectTicket(ticket.title)} 
          />
          {ticket.title}  {/* Ticket Title */}
        </label>
      </h3>
    </div>
    <p>ID: {ticket.id}</p>
    <p>Status: {ticket.status}</p>
    <p>Priority: {ticket.priority}</p>
  </div>
);

export default TicketCard;
