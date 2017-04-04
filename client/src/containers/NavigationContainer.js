import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
                icon:<Calc />, label: "Calc", to: 'calc'
            },
            {
                icon:<Price />, label: "Price", to: 'price'
            },
            {
                icon:<Expenses />, label: "Expenses", to: 'expenses'
            }];
    }

    handleItemClick(path) {
        let index = this.indexList.indexOf(path);
        this.setState({ selectedIndex: index });
        this.props.history.push(path);
    }

    componentWillReceiveProps(nextProps){
        let path=nextProps.location.pathname.replace('/','');
        let index = path.length > 0 ? this.indexList.indexOf(path):0;
        this.setState({ selectedIndex: index });
    }

    render() {
        return (
            this.state.selectedIndex >= 0?
            <Navigation handleClick={this.handleItemClick} items={this.items} selectedIndex={this.state.selectedIndex} />
            :false
        );
    }
}

export default withRouter(NavigationContainer);
