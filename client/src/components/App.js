import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';

const styles = {
  title: {
    cursor: 'pointer',
    color:'white'
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

const Title = ({ title }) => (<Link to="/"><span style={styles.title}>{title}</span></Link>);

const App = ({ title, Content, Navigation, Menu }) => (
  <div style={styles.app} >
    <AppBar
      title={<Title title={title} />}
      showMenuIconButton={false}
      iconElementRight={Menu} />
    <div style={styles.content}>
      <div style={styles.center}>{Content}</div>
    </div>
    {Navigation}
  </div>
);

export default App;
