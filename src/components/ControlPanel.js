import React from 'react';
import displayIcon from 'C:/reactproject/kanban-board/src/assests/icons_FEtask/Display.svg'; // Assuming you're using an image as an icon

const ControlPanel = ({ onGroupChange, onSortChange, onDisplayChange }) => {
  return (
    <div className="control-panel">
      {/* Display Dropdown Section */}
      <div className="display-panel-box">
        <label htmlFor="displayMode" className="display-label">
          <img src={displayIcon} alt="Display Icon" className="display-icon" />
          <select id="displayMode" className="display-select" onChange={(e) => onDisplayChange(e.target.value)}>
            <option value="default">Default</option>
            {/* Add more options if needed */}
          </select>
        </label>
      </div>

      {/* Grouping Dropdown Section */}
      <div className="dropdown-panel">
        <label htmlFor="groupBy">Grouping:</label>
        <select id="groupBy" className="dropdown-select" onChange={(e) => onGroupChange(e.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      {/* Ordering Dropdown Section */}
      <div className="dropdown-panel">
        <label htmlFor="sortBy">Ordering:</label>
        <select id="sortBy" className="dropdown-select" onChange={(e) => onSortChange(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default ControlPanel;
