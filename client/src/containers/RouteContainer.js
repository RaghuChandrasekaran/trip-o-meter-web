import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Card from '../components/Card';

class RouteContainer extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" render={() => (<Card page="Calc" />)}/>
                <Route path="/calc" render={() => (<Card page="Calc" />)} />
                <Route path="/price" render={() => (<Card page="Price" />)} />
                <Route path="/expenses" render={() => (<Card page="Expenses" />)} />
                <Route path="/about" render={() => (<Card page="About" />)} />
            </div>
        );
    }
}

export default RouteContainer;