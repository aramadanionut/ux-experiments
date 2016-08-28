// Libs
import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

// Experiments
import Main from './Main.react.js';
import Home from './Home.react.js';
import Article from './Article.react';
import Demo from './Demo.react';

const IS_DEV = window.location.hostname === 'localhost';
const URL_PREFIX = IS_DEV ? '': '/ux-experiments';

var wrapWithDefaultProps = (data, Component) =>  {
    return (props) => (
        <Component articles={data} urlPrefix={URL_PREFIX} {...props} />
    );
};

// Define and export component
export default class App extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    componentWillMount() {
        fetch(URL_PREFIX + '/data/data.json')
            .then(response => response.json())
            .then(data => this.setState({ articles: data.articles }));
    }

    render() {
        if (!this.state.articles) {
            return <p>loading...</p>
        }

        return (
            <Router history={hashHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute component={wrapWithDefaultProps(this.state.articles, Home)} />

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