// Libs
import React from 'react';
import {Link, IndexLink } from 'react-router';
import classNames from 'classnames';

// Define and export component
export default class Main extends React.Component {
    render() {
        let userSwitcher;

        if (this.props.location.pathname !== '/') {
            let routeParts = this.props.location.pathname.split('/').filter(item => !!item);
            let parentRoute = routeParts.splice(0, 1);

            userSwitcher = (
                <nav className="footer-nav">
                    <div className="menu">
                        <IndexLink to='/' className="menu-item" activeClassName="active">Home</IndexLink>

                        <Link to={`/article/${this.props.params.user}/${this.props.params.experimentTitle}`}
                              className="menu-item" activeClassName="active">Article</Link>

                        <span className="separator">/</span>

                        <Link to={`/demo/${this.props.params.user}/${this.props.params.experimentTitle}`}
                              className="menu-item" activeClassName="active">Demo</Link>
                    </div>

                    <div className="switcher">
                        <Link to={`/${parentRoute}/dan/${this.props.params.experimentTitle}`} activeClassName="active">dan</Link>

                        <div className="avatar-wrapper">
                            <div className={classNames("avatar", "avatar-left", {"active": this.props.params.user === 'dan'})} 
                                 style={{backgroundImage: 'url("http://localhost:3000/assets/img/avatar_dan.jpg")'}}></div>

                            <div className={classNames("avatar", "avatar-right", {"active": this.props.params.user === 'edy'})}
                                 style={{backgroundImage: 'url("http://localhost:3000/assets/img/avatar_edy.jpg")'}}></div>
                        </div>

                        <Link to={`/${parentRoute}/edy/${this.props.params.experimentTitle}`} activeClassName="active">edy</Link>
                    </div>
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