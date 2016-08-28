// Libs
import React from 'react';
import {Link} from 'react-router';

// Components
import Column from './components/Column.react';

// Define and export component
export default class Index extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        var links = this.props.articles && this.props.articles.map((article) => {
            return (
                <Link to={`/article/dan/${article.slug}`}
                      key={article.slug}
                      className="experiment-link"
                      activeClassName="active">
                    {article.label}
                </Link>
            );
        });

        return (
            <div className="home">
                <div className="row">
                    <Column medium="12">
                        <div className="header">
                            <h1 className="title"> UX Experiments </h1>
                            <h2 className="subtitle"> because UI matters most </h2>
                        </div>
                    </Column>
                </div>

                <div className="row">
                    <Column medium="12">
                        <div className="experiment-links">
                            {links}
                        </div>
                    </Column>
                </div>
            </div>
        )
    }
}
