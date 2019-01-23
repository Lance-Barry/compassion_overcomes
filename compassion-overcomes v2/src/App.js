import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './screens/home';
import About from './screens/about';
import Volunteers from './screens/volunteers';
import Organizations from './screens/organizations';

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/volunteers" component={Volunteers} />
                <Route path="/organizations" component={Organizations} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
