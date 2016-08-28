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
            let switchUser = this.props.params.user === 'dan' ? 'edy' : 'dan';

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

                    <Link to={`/${parentRoute}/${switchUser}/${this.props.params.experimentTitle}`} className="switcher">
                        <span className={classNames("user", "user-left", {"active": this.props.params.user === 'dan'})}>dan</span>

                        <div className="avatar-wrapper">
                            <div className={classNames("avatar", "avatar-right", {"active": this.props.params.user === 'dan'})}
                                 style={{backgroundImage: `url("${this.props.urlPrefix}/assets/img/avatar_dan.jpg")`}}></div>

                            <div className={classNames("avatar", "avatar-left", {"active": this.props.params.user === 'edy'})}
                                 style={{backgroundImage: `url("${this.props.urlPrefix}/assets/img/avatar_edy.jpg")`}}></div>
                        </div>
                        
                        <span className={classNames("user", "user-right", {"active": this.props.params.user === 'edy'})}>edy</span>
                    </Link>
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