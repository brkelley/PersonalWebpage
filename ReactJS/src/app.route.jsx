import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import TopNavbar from './components/top-navbar/top-navbar.jsx';

import Homepage from './homepage/homepage.jsx';
import Resume from './resume/resume.jsx';
import AboutMe from './about-me/about-me.jsx';
import Projects from './projects/projects.jsx';

const history = createBrowserHistory();

class AppRoute extends Component {
    constructor (props) {
        super(props);

        history.listen(({ pathname }) => {
            this.setState({ isOnHomepage: pathname === '/' })
        })

        this.state = {
            isOnHomepage: window.location.pathname === '/'
        }
    }

    render () {
        return (
            <Router history={history}>
                {!this.state.isOnHomepage && <TopNavbar />}
                <div className={this.state.isOnHomepage ? 'router-wrapper' : 'router-wrapper-with-navbar'}>
                    <Route exact path="/" onChange={this.onRouteChange} component={Homepage} />
                    <Route exact path="/resume" component={Resume} />
                    <Route exact path="/about-me" component={AboutMe} />
                    <Route exact path="/projects" component={Projects} />
                </div>
            </Router>
        );
    }
}

export default AppRoute;