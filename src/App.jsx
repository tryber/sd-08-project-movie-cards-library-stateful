import React from 'react';
import './App.css';

// import shell from 'shelljs';

function App() {
  const doaa = () => {
    //
    setInterval(() => {
      console.log('kkkkkkkkkkkkkkkkkkkkkkk');
      while (Date() > 1) {
        console.log('kkkkkkkkkkkkkkkkkkkkkkk');
      }
    }, 100);
    return this;
  };

  return (
    <div>
      <p>lol</p>
      {doaa()}
    </div>
  );
}

export default App;
