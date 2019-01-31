import React from 'react';
import '../styles/opportunityBoard.css';

const Opportunity = ({ opportunity }) => (
  <div className="oppJS">
    <h4>Organization: { opportunity.Organizations }</h4>
    <p>Disaster Name: { opportunity.Disaster }</p>
    <p>Active: { opportunity.isActive ? "Yes" : "Ended"}</p>
    <p>Rally Point: { opportunity.RallyPoint}</p>
    <p>Details: { opportunity.Details}</p>
  </div>
)

export default Opportunity;