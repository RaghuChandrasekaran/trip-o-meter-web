import React from 'react';
import AppBar from 'material-ui/AppBar';
import Menu from './Menu';
import Card from './Card';
import Navigation from '../containers/NavigationContainer';

const styles = {
  title: {
    cursor: 'pointer',
  },
  app: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    padding: 0
  },
  content: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
};

const App = () => (
  <div style={styles.app} >
    <AppBar
      title={<span style={styles.title}>Trip O Meter</span>}
      showMenuIconButton={false}
      iconElementRight={<Menu />} />
    <div style={styles.content}>
      <div style={styles.center}><Card /></div>
    </div>
    <Navigation />
  </div>
);

export default App;
