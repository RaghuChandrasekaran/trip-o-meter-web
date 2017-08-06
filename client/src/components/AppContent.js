import React from 'react';

const styles = {
  content: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
};

const AppContent = ({ title, children }) => (
  <div style={styles.content}>
    <div style={styles.center}>
      {children}
    </div>
  </div>
);

export default AppContent;
