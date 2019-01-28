import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Home from './screens/home';
import About from './screens/about';
import Volunteers from './screens/volunteers';
import Organizations from './screens/organizations';
import OpportunityBoard from './screens/opportunityBoard';

import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
    state = {
        opportunities: null,
        id: 1000
    }

    fetchOpportunities = () => {
        fetch("http://localhost:2048/opportunities") // action that takes a while
            .then((res) => { // what we do after it's done
                return res.json();
            })
            .then((opportunities) => { // what we do after that
                this.setState({ opportunities: opportunities })
            })
    }

    postOpportunity = async (opp) => {
        console.log(`posting opp:`)
        const res = await axios.post('http://localhost:2048/opportunities', opp);
        console.log(res);
    }
    
    componentDidMount() {
        this.fetchOpportunities()
    }

    onSubmit = async (opportunity) => {
        console.log("from handle submit")
        console.log(opportunity)
        await this.postOpportunity(opportunity);
        await this.fetchOpportunities();
    }

    render() {
        const { opportunities } = this.state;
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/volunteers" component={Volunteers} />
                    <Route path="/organizations" render={() => (
                        <Organizations onSubmit={this.onSubmit}/>
                    )} />
                    <Route path="/opportunities" render={() => {
                        if (!opportunities) {
                            return <div>Loading...</div>
                        }
                        return (
                            <OpportunityBoard opportunities={opportunities} />
                        )
                    }} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
