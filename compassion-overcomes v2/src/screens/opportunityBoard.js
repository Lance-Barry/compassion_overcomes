import React, { Component } from 'react';
import Opportunity from '../components/Opportunity';

const defaultOpportunities = [
    {
        id: 9121,
        Organization: "Red Cross",
        DisasterName: "Chicago Fire",
        isOngoing: false,
        is18andUp: true,
        RallyPoint: "156 Chicago Street, Chicago, IL",
        Details: "Fire broke out yesterday mornig at 5pm. We need volunteers to help give out food and first aid to stranded.",
    },
    {
        id: 23782,
        Organization: "FEMA",
        DisasterName: "Carr Fire",
        Ongoing: true,
        is18andUp: true,
        RallyPoint: "Bethel Church",
        Details: "This is some information about the Carr Fire",
    },
    {
        id: 332,
        Organization: "Samaritan's Purse",
        DisasterName: "Hurricane Sandy",
        Ongoing: true,
        is18andUp: true,
        RallyPoint: "City Hall, 1st St and Main",
        Details: "Ongoing clean-up needed.",
    }
]

class OpportunityBoard extends Component {
    state = {
        opportunities: defaultOpportunities
    }

    render() {
        const { opportunities } = this.state;

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