import React from 'react';

const Opportunity = ({ opportunity }) => (
  <div style={{margin: "50px auto", padding: "50px", marginTop: "80px", textAlign: "center", border: "5px solid black"}}>
    <h3>Organization: { opportunity.Organization }</h3>
    <p>Disaster Name: { opportunity.DisasterName }</p>
    <p>Active: { opportunity.isActive ? "Yes" : "Ended"}</p>
    <p>Rally Point: { opportunity.RallyPoint}</p>
    <p>Details: { opportunity.Details}</p>
  </div>
)

export default Opportunity;