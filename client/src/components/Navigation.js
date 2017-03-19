import React from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';

const Navigation = ({ handleClick, items, selectedIndex }) => {
    const navItems = items.map((item, index) =>
        <BottomNavigationItem icon={item.icon} label={item.label}
            onTouchTap={() => handleClick(index)} key={index} />
    );

    return (<BottomNavigation selectedIndex={selectedIndex} >
        {navItems}
    </BottomNavigation>);
};

export default Navigation;
