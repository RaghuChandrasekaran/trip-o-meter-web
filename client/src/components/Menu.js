import React from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

const URL = process.env.url ? `https://${process.env.url}/docs` : "http://localhost:3000/docs";

const Menu = () => (
    <IconMenu
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
        <a target="_blank" href={`${URL}`} >
            <MenuItem primaryText="API Docs" />
        </a>
        <Link to="/about"><MenuItem primaryText="About" /></Link>
    </IconMenu>
);

export default Menu;