import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';

class App extends React.Component{
  render() {
    return (
      <div className={styles.app}>
        <Header />
        <MainContent />      
      </div>
    );
  }
}

export default App;
