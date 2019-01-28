import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './screens/home';
import About from './screens/about';
import Volunteers from './screens/volunteers';
import Organizations from './screens/organizations';
import OpportunityBoard from './screens/opportunityBoard';

import Header from './components/Header';
import Footer from './components/Footer';

const defaultOpportunities = [{
        id: 23782,
        organization: "Bethel Church",
        disaster: "Carr Fire",
        isActive: true,
        rallyPoint: "Bethel’s College View campus to the Salvation Army building at 2691 Larkspur Ln, Redding, CA 96002",
        details: "As of Saturday, August 11, 2018, the Salvation Army Distribution Center has moved from Bethel’s College View campus. All donations and picking up of needed items by Carr Fire victims are now at that address. Visit https://www.bethel.com/carrfire/#resources for local resources and volunteer opportunities.",
    },
    {
        id: 332,
        organization: "Samaritan's Purse",
        disaster: "Hurricane Michael",
        isActive: true,
        rallyPoint: "City Hall, 1st Ave and Main St., every morning at 8 a.m.",
        details: "Ongoing clean-up for local residents needed. Eye protection, gloves and work boots required.",
    },
    {
        id: 9121,
        organization: "Red Cross",
        disaster: "Spencer SD Tornado",
        isActive: false,
        rallyPoint: "Red Cross Tent, located on high school football field every morning at 8 a.m. ",
        details: "F5 tornado struck city of Spencer causing catastrophic damage. Search and rescue efforts on-going. Eye protection, gloves and work boots required",
    },
]

class App extends Component {
    state = {
        opportunities: defaultOpportunities,
        id: 1000
    }

    fetchOpportunities = () => {
        fetch("http://localhost:2048/opportunities") // action that takes a while
            .then((res) => { // what we do after it's done
                console.log(res);
                return res.json();
            })
            .then((opportunities) => { // what we do after that
                console.log(opportunities)
                this.setState({ opportunities: opportunities })
            })
    }
    
    componentDidMount() {
        this.fetchOpportunities()
    }

    handleSubmit = (opportunity) => {
        console.log(opportunity);
        opportunity["id"] = this.state.id
        this.setState((state) => {
            const newState = {
                id: state.id++,
                opportunities: [...state.opportunities, opportunity]
            }
            console.log(newState.opportunities)
            return newState;
        })
    }

    deleteOpportunity = (id) => {
        this.setState((state) => {
            return {
                opportunities: state.opportunities.filter(opp => opp.id !== id)
            }
        })
    }

    // THIS IS CONTRIVED, DOESN'T DO ANYTHING

    filterExample = (list, number) => {
        const newList = list.filter((num) => num !== number)
        return newList;
    }

    filterNumbers = (numbers) => {
        let list = [1, 2, 3, 4, 5, 6];
        console.log(list)
        for (let num of numbers) {
            list = this.filterExample(list, num)
            console.log(list);
        }
    }

    render() {
        const { opportunities } = this.state;
        this.filterNumbers([4, 6, 1])
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/volunteers" component={Volunteers} />
                    <Route path="/organizations" render={() => (
                        <Organizations handleSubmit={this.handleSubmit}/>
                    )} />
                    <Route path="/opportunities" render={() => (
                        <OpportunityBoard opportunities={opportunities} myname="Lance" />
                    )} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
