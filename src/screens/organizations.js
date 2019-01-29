import React from 'react';
import OrgForm from '../components/OrgForm';

const Organizations = ({ onSubmit }) => (
    <div className="OrgName">
        <h2>Organizations</h2>
        <OrgForm onSubmit={onSubmit}/>
    </div>
    
    
);

export default Organizations;