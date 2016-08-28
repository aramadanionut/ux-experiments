import React from 'react';

import Column from './components/Column.react';
import Markdown from './components/Markdown.react';

export default class Article extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentWillMount() {
        // Get article file
        this._fetchData(this.props.params.user, this.props.params.experimentTitle);
    }

    componentWillReceiveProps(nextProps) {
        this._fetchData(nextProps.params.user, nextProps.params.experimentTitle);
    }

    _fetchData(user, experimentTitle) {
        return fetch(this.props.urlPrefix + `/data/articles/${user}_${experimentTitle}.md`)
            .then(response => response.text())
            .then(content => this.setState({ content }));
    }

    render() {
        return (
            <div className="row article">
                <Column medium="12">
                    <Markdown content={this.state.content} />
                </Column>
            </div>
        );
    }
}