import React from 'react';
import './App.css';

import Header from './components/Header';
import SeachBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <SeachBar />
      <AddMovie />
    </div>
  );
}

export default App;
