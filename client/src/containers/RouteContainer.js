import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { RouteTransition } from 'react-router-transition';

const Page = ({ match: { params }, location: { pathname } }) => (
    <RouteTransition
        pathname={pathname}
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }} >
        <h1>{params.pagename}</h1>
    </RouteTransition>);

class RouteContainer extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" render={() => (<Redirect to="/calc" />)} />
                <Route path="/:pagename" component={Page} />
            </div>
        );
    }
}

export default withRouter(RouteContainer);