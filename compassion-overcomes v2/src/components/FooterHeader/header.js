import React from 'react';
// import HeaderStyles from 'styles/HeaderStyles';

class Header extends React.Component {
    render() {
        return (
            <div>
                <a href="/">Home |</a>
                <a href="/about"> About |</a>
                <a href="/volunteer"> Volunteer |</a>
                <a href="/organization"> Organization </a>
                

            </div>
        )
    }
}

export default Header;