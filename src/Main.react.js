// Libs
import React from 'react';
import {Link, IndexLink } from 'react-router';

// Define and export component
export default class Main extends React.Component {
    render() {
        let userSwitcher;

        if (this.props.location.pathname !== '/') {
            let routeParts = this.props.location.pathname.split('/');
            let currentRoute = routeParts.splice(2, routeParts.length).join('/');

            userSwitcher = (
                <nav className="footer-nav">
                    <IndexLink to='/' className="home" activeClassName="active">Home</IndexLink>
                    <Link to={`/dan/${currentRoute}`} activeClassName="active">dan</Link>
                    <span className="separator">/</span>
                    <Link to={`/edy/${currentRoute}`} activeClassName="active">edy</Link>
                </nav>
            );
        }

        return (
            <div>
                {userSwitcher}
                {this.props.children}
            </div>
        )
    }
}