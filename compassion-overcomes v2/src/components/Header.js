import React from "react";
import { Link } from "react-router-dom";
import HeaderStyles from "../styles/HeaderStyles";

const Header = () => (
    <div style={HeaderStyles}>
        <Link className="nav-button" to="/">Home |</Link>
        <Link className="nav-button" to="/about"> About |</Link>
        <Link className="nav-button" to="/organizations"> Organizations |</Link>
        <Link className="nav-button" to="/volunteers"> Volunteers</Link>
    </div>
);

export default Header;
