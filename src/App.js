import React, { useState, useEffect } from 'react';
import './App.css';
import ControlPanel from './components/ControlPanel';
import KanbanBoard from './components/KanbanBoard';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState('status');  
  const [sortBy, setSortBy] = useState('priority'); 
  
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        console.log(data);  
        setTickets(data.tickets || data);  
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();  
  }, []); 

  
  const groupedTickets = tickets.reduce((acc, ticket) => {
    const groupKey = ticket[groupBy];  
    if (!acc[groupKey]) acc[groupKey] = [];
    acc[groupKey].push(ticket);
    return acc;
  }, {});

 
  const sortedTickets = Object.keys(groupedTickets).reduce((acc, group) => {
    
    const sortedGroup = [...groupedTickets[group]].sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);  
      }
      return a.priority - b.priority;  
    });
    acc[group] = sortedGroup;
    return acc;
  }, {});

  return (
    <div className="App">

      <ControlPanel onGroupChange={setGroupBy} onSortChange={setSortBy} />
      <KanbanBoard groupedTickets={sortedTickets} />
    </div>
  );
};

export default App;
