import React from 'react';
import OrgForm from '../components/OrgForm';

const Organizations = ({ handleSubmit }) => (
    <div>
        <h2>Organizations</h2>
        <OrgForm handleSubmit={handleSubmit}/>
    </div>
);

export default Organizations;