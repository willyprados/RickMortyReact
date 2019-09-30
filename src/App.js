import React from 'react';
import './App.scss';
import Header from './components/Header';
import Nav from './components/Nav';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Card/>
    </div>
  );
}

export default App;

