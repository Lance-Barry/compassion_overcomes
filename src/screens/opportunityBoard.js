import React, { Component } from 'react';
import Opportunity from '../components/Opportunity';

import '../styles/opportunityBoard.css';

class OpportunityBoard extends Component {

    render() {
        const { opportunities } = this.props;

        return (
            <div>
                <h3>Volunteer Opportunities</h3>
                { opportunities.map( opportunity => (
                    <Opportunity key={opportunity.AppUserID} opportunity={opportunity} />
                ))}
            </div>
        );
    }
}

export default OpportunityBoard;