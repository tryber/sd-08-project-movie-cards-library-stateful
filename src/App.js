import React from 'react';
import './App.css';

import Header from './components/Header';
import AddMovie from './components/AddMovie';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <AddMovie />
      <SearchBar />     
    </div>
  );
}

export default App;
