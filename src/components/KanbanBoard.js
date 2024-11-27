import React, { useState } from 'react';
import TicketCard from './Ticketcard';

const KanbanBoard = ({ groupedTickets }) => {
  const [selectedTicket, setSelectedTicket] = useState(null); 


  const handleSelectTicket = (title) => {
    setSelectedTicket(title); 
  };

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <div key={group} className="kanban-column">
          <h2>{group}</h2>
          {groupedTickets[group].map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              selectedTicket={selectedTicket}
              onSelectTicket={handleSelectTicket} 
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
