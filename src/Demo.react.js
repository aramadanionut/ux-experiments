import React from 'react';

import UXE from './experiments';

export default class Demo extends React.Component {
    render() {
        var article = this.props.articles.find(
            article => article.slug === this.props.params.experimentTitle
        );
        var DemoComponent = UXE[this.props.params.user][article.component];

        return <DemoComponent />;
    }
}