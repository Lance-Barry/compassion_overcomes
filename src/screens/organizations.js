import React from 'react';
import OrgForm from '../components/OrgForm';

import '../styles/OrgFormStyles.js';
//import '../styles/orgForm.css';
import '../styles/home.css';

const Organizations = ({ onSubmit }) => (
    <div>
        <div class="pageHeading">
            <p>Organizations</p>
            
        </div>
        
        <OrgForm onSubmit={onSubmit} />

    </div>


);

export default Organizations;