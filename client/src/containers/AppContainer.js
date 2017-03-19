import React, { Component } from 'react';
import ThemeWrapper from './ThemeWrapper';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from '../components/Menu';
import Navigation from '../containers/NavigationContainer';
import Content from './RouteContainer';
import App from '../components/App';

const ThemedApp = ThemeWrapper(App);

class AppContainer extends Component {
    render() {
        return (
            <Router>
                <ThemedApp title="Trip O Meter" Content={<Content />} Navigation={<Navigation />} Menu={<Menu />} />
            </Router>
        );
    }
}

export default AppContainer;