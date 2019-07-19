import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Homepage from './homepage/homepage.jsx';

const history = createBrowserHistory();

class AppRoute extends Component {
    render () {
        return (
            <Router history={history}>
                <div style={{ height: '100%', width: '100%' }}>
                    <Route exact path="/" component={Homepage} />
                </div>
            </Router>
        );
    }
}

export default AppRoute;