import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Calc from 'material-ui/svg-icons/maps/directions-car';
import Price from 'material-ui/svg-icons/editor/attach-money';
import Expenses from 'material-ui/svg-icons/action/account-balance-wallet';
import Navigation from '../components/Navigation';

class NavigationContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedIndex: 0, };
        this.handleItemClick = this.handleItemClick.bind(this);
        this.indexList = ['calc', 'price', 'expenses'];
        this.items = [
            {
                icon: <Link to="/" ><Calc /></Link>, label: "Calc", to: 'calc'
            },
            {
                icon: <Link to="/price" ><Price /></Link>, label: "Price", to: 'price'
            },
            {
                icon: <Link to="/expenses" ><Expenses /></Link>, label: "Expenses", to: 'expenses'
            }];
    }

    handleItemClick(path) {
        let index = this.indexList.indexOf(path);
        this.setState({ selectedIndex: index });
    }

    render() {
        return (
            <Navigation handleClick={this.handleItemClick} items={this.items} selectedIndex={this.state.selectedIndex} />
        );
    }
}

export default NavigationContainer;
