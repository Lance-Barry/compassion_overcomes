import React from 'react';

const Opportunity = ({ opportunity }) => (
  <div style={{margin: "0 auto", marginTop: "80px", textAlign: "center", border: "1px solid black"}}>
    <h3>Organization: { opportunity.Organization }</h3>
    <p>Disaster Name: { opportunity.DisasterName }</p>
    <p>Ongoing: { opportunity.isOngoing ? "True" : "False"}</p>
    <p>Rally Point: { opportunity.RallyPoint}</p>
    <p>Details: { opportunity.Details}</p>
  </div>
)

export default Opportunity;