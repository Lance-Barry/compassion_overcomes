import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './screens/home';
import About from './screens/about';
import Volunteers from './screens/volunteers';
import Organizations from './screens/organizations';
import OpportunityBoard from './screens/opportunityBoard';

import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
    state = {
        opportunities: null
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/volunteers" component={Volunteers} />
                    <Route path="/organizations" component={Organizations} />
                    <Route path="/opportunities" component={OpportunityBoard} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
