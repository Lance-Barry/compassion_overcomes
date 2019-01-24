import React, { Component } from 'react';
import Opportunity from '../components/Opportunity';

const defaultOpportunities = [
   {
        id: 23782,
        Organization: "Bethel Church",
        DisasterName: "Carr Fire",
        isOngoing: true,
        is18Up: true,
        RallyPoint: "Bethel’s College View campus to the Salvation Army building at 2691 Larkspur Ln, Redding, CA 96002",
        Details: "As of Saturday, August 11, 2018, the Salvation Army Distribution Center has moved from Bethel’s College View campus. All donations and picking up of needed items by Carr Fire victims are now at that address. Visit https://www.bethel.com/carrfire/#resources for local resources and volunteer opportunities.",
    },
    {
        id: 332,
        Organization: "Samaritan's Purse",
        DisasterName: "Hurricane Michael",
        isOngoing: true,
        is18Up: true,
        RallyPoint: "City Hall, 1st Ave and Main St., every morning at 8 a.m.",
        Details: "Ongoing clean-up for local residents needed. Eye protection, gloves and work boots required.",
    },
    {
        id: 9121,
        Organization: "Red Cross",
        DisasterName: "Spencer SD Tornado",
        isOngoing: false,
        is18Up: true,
        RallyPoint: "Red Cross Tent, located on high school football field every morning at 8 a.m. ",
        Details: "F5 tornado struck city of Spencer causing catastrophic damage. Search and rescue efforts on-going. Eye protection, gloves and work boots required",
    },
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