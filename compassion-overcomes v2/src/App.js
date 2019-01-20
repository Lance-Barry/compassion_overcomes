import React from 'react';
//import ReactDOM from 'react-dom';
//import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
//import { ImageBackground } from 'react-native';
//import './App.css
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Home from './screens/home';
import About from './screens/about';
import Volunteers from './screens/volunteers';
import Organizations from './screens/organizations';

import Cards from './styles/Cards';

// import About from './about';
// import Organizations from './organizations';
// import Volunteers from './volunteers';
import Header from './components/FooterHeader/header';
import Footer from './components/FooterHeader/footer';
//import HeaderStyles from './styles/HeaderStyles';



//import Cards from './styles/Cards';



function App() {
    return (
        <BrowserRouter>
            <div>

                <Header>


                    <div className="header-links">


                        <li>
                            <Link className="nav-button" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="nav-button" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="nav-button" to="/volunteers">Volunteers</Link>
                        </li>
                        <li>
                            <Link className="nav-button" to="/organizations">Organizations</Link>
                        </li>
                        {/* <li>
          <Link className="nav-button" to="/careerForm">GitCareerForm</Link>
              </li> */}
                        

                    </div>

                </Header>

                <Switch>
                    <Route path="/" exact="true" component={Home} />
                    <Route path="/about" exact="true" component={About} />
                    <Route path="/volunteers" exact="true" component={Volunteers} />
                    <Route path="/organziations" exact="true" component={Organizations} />
                    
                    {/* <Route path="/gitStarted" exact="true" component={GitStarted} /> 
            <Route path="/jobBoard" exact="true" component={JobBoard} />
            <Route path="/careerForm" exact="true" component={CareerForm} />
            <Route path="/connection" exact="true" component={Connection} /> */}
                </Switch>
                
                <Cards /><br></br>
                <Footer />

            </div>

        </BrowserRouter>

    );
}


export default App;

// let ImageBackground = './resources/images/smallFooterNoVerse.jpg';

// export default class App extends React.Component {
//            render() {
//                return (
//                   <ImageBackground source={require('./resources/images/smallFooterNoVerse.jpg')} style={styles.container}>
//                        </ImageBackground>
//                );
//            }
//        }
//        const styles = StyleSheet.create({
//                container: {
//                    flex: 1,
//                    alignItems: 'center',
//                    justifyContent: 'center',
//                },
//            });





