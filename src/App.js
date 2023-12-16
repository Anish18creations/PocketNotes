import Sidebar from './Components/Sidebar';
import styles from './Styles/App.module.css';
import React from 'react';

function App() {

  return (
    <div>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
