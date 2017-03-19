import React, { Component } from 'react';
import ThemeWrapper from './ThemeWrapper';
import App from '../components/App';

const ThemedApp = ThemeWrapper(App);

class AppContainer extends Component {
    render() {
        return (
            <ThemedApp />
        );
    }
}

export default AppContainer;