import React from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';

const Navigation = ({ handleClick, items, selectedIndex }) => {
    const navItems = items.map((item) =>
        <BottomNavigationItem icon={item.icon} label={item.label}
            onTouchTap={() => handleClick(item.to)} key={item.to} />
    );

    return (<BottomNavigation selectedIndex={selectedIndex} >
        {navItems}
    </BottomNavigation>);
};

export default Navigation;
