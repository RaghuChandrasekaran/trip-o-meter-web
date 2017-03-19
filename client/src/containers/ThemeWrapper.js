import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    purple500, purple700, purple100,
    amber500,
    grey100, grey300, grey500,
    white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: purple500,
        primary2Color: purple700,
        primary3Color: purple100,
        accent1Color: amber500,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: purple500,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack,
    },
    bottomNavigation: {
        backgroundColor: purple500,
        selectedColor: amber500,
        unselectedColor: white,
        iconColor: white
    },
    svgIcon: {
        color: white
    }
});

injectTapEventPlugin();

function ThemeWrapper(AppComponent) {
    return class extends Component {
        render() {
            return (
                <MuiThemeProvider muiTheme={muiTheme}>
                    <AppComponent />
                </MuiThemeProvider>
            );
        }
    }
}

export default ThemeWrapper;