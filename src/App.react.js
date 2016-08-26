// Libs
import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

// Experiments
import Main from './Main.react.js';
import Index from './Home.react.js';
import UXE from './experiments';

// Define and export component
export default class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute component={Index} />
                    <Route path="/dan/login-register" component={UXE.Dan.LoginRegister} />
                    <Route path="/edy/login-register" component={UXE.Edy.LoginRegister} />
                </Route>
            </Router>
        )
    }
}