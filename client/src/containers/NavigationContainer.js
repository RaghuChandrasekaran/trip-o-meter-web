import React, { Component } from 'react';
import Calc from 'material-ui/svg-icons/maps/directions-car';
import Price from 'material-ui/svg-icons/editor/attach-money';
import Expenses from 'material-ui/svg-icons/action/account-balance-wallet';
import Navigation from '../components/Navigation';

class NavigationContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedIndex: 0, };
        this.handleItemClick = this.handleItemClick.bind(this);
        this.items = [
            { icon: <Calc />, label: "Calc" },
            { icon: <Price />, label: "Price" },
            { icon: <Expenses />, label: "Expenses" }];
    }

    handleItemClick(index) {
        this.setState({ selectedIndex: index });
    }

    render() {
        return (
            <Navigation handleClick={this.handleItemClick} items={this.items} selectedIndex={this.state.selectedIndex} />
        );
    }
}

export default NavigationContainer;
