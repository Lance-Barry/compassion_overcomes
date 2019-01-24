import React, { Component } from 'react';
import Opportunity from '../components/Opportunity';

class OpportunityBoard extends Component {

    render() {
        const { opportunities } = this.props;

        return (
            <div>
                <h3>Opportunity Message Board Page</h3>
                { opportunities.map( opportunity => (
                    <Opportunity key={opportunity.id} opportunity={opportunity} />
                ))}
            </div>
        );
    }
}

export default OpportunityBoard;