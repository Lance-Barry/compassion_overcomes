import React from "react";
import { Link } from "react-router-dom";
import HeaderStyles from "../styles/HeaderStyles";

import '../styles/header.css';

const Header = () => (
    <div className="menuStyling">
        <div style={HeaderStyles}>
            <Link className="nav-button" to="/">Home |</Link>
            <Link className="nav-button" to="/about"> About |</Link>
            <Link className="nav-button" to="/organizations"> Organizations |</Link>
            <Link className="nav-button" to="/opportunities"> Opportunities</Link>
        </div>
    </div>
);

export default Header;
