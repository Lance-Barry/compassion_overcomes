import React from 'react';

const Opportunity = ({ opportunity }) => (
  <div style={{margin: "50px auto", padding: "50px", marginTop: "80px", textAlign: "center", border: "5px solid black"}}>
    <h3>Organization: { opportunity.organization }</h3>
    <p>Disaster Name: { opportunity.disaster }</p>
    <p>Active: { opportunity.isActive ? "Yes" : "Ended"}</p>
    <p>Rally Point: { opportunity.rallyPoint}</p>
    <p>Details: { opportunity.details}</p>
  </div>
)

export default Opportunity;