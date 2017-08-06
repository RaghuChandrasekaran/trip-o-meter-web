import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const styles = {
    title: {
        cursor: 'pointer',
        color: 'white'
    }
};

const Title = ({ title }) => (<Link to="/"><span style={styles.title}>{title}</span></Link>);

const ActivityBar = ({ title }) => (
    <AppBar
        title={<Title title={title} />}
        showMenuIconButton={false}
        iconElementRight={<Menu />} />
);

export default ActivityBar;
