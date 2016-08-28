// Libs
import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

// Experiments
import Main from './Main.react.js';
import Index from './Home.react.js';
import Article from './Article.react';
import Demo from './Demo.react';

var wrapWithDefaultProps = (data, Component) =>  {
    return (props) => <Component articles={data} {...props} />
};

// Define and export component
export default class App extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    componentWillMount() {
        fetch('/data/data.json')
            .then(response => response.json())
            .then(data => this.setState({ articles: data.articles }));
    }

    render() {
        if (!this.state.articles) {
            return <p>loading...</p>
        }

        return (
            <Router history={browserHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute component={wrapWithDefaultProps(this.state.articles, Index)} />

                    <Route path="demo">
                        <Route path=":user/:experimentTitle" component={wrapWithDefaultProps(this.state.articles, Demo)} />
                    </Route>

                    <Route path="article">
                        <Route path=":user/:experimentTitle" component={wrapWithDefaultProps(this.state.articles, Article)} />
                    </Route>
                </Route>
            </Router>
        )
    }
}