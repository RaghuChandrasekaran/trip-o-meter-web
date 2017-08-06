import React, { Component } from 'react';
import ThemeWrapper from './ThemeWrapper';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContent from '../components/AppContent';
import AppBar from '../components/AppBar';
import Navigation from './NavigationContainer';
import Content from './RouteContainer';

const styles = {
    app: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        padding: 0
    }
};

const App = ({ children }) => {
    return (
        <div style={styles.app} >
            <AppBar title="Trip O Meter" />
            {children}
            <Navigation />
        </div>);
};

const ThemedApp = ThemeWrapper(App);

class AppContainer extends Component {
    render() {
        return (
            <Router>
                <ThemedApp>
                    <AppContent>
                        <Content />
                    </AppContent>
                </ThemedApp>
            </Router>
        );
    }
}

export default AppContainer;