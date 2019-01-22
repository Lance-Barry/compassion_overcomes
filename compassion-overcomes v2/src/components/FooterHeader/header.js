//import React from 'react';

import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Header = () => (
    <Router>
        <div>


            <Link className="nav-button" to="/">Home |</Link>

            <Link className="nav-button" to="/about"> About |</Link>

            <Link className="nav-button" to="/organizations"> Organziations |</Link>

            <Link className="nav-button" to="/volunteers"> Volunteers</Link>



            <Switch>
                <Route path="/" exact="true" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/organizations" component={Organizations} />
                <Route path="/volunteers" component={Volunteers} />
            </Switch>
        </div>
    </Router>
);

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Organizations = () => (
    <div>
        <h2>Organizations</h2>
    </div>
);

const Volunteers = () => (
    <div>
        <h2>Volunteers</h2>
    </div>
)

// const Organizations = ({ match }) => (
//   <div>
//     <h2>Organizations</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>Components</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//       </li>
//     </ul>

//     <Route path={`${match.url}/:topicId`} component={Topic} />
//     <Route
//       exact
//       path={match.url}
//       render={() => <h3>Please select a topic.</h3>}
//     />
//   </div>
// );

// const Volunteers = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// );

export default Header;
// import HeaderStyles from 'styles/HeaderStyles';

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <a href="/">Home |</a>
//                 <a href="/about"> About |</a>
//                 <a href="/organization"> Organizations |</a>
//                 <a href="/volunteer"> Volunteers</a>
//             </div>
//         )
//     }
// }

//export default Header;