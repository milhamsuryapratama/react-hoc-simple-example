import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Username from './components/Username';
import Hoc from './components/Hoc';

const Uppercase = Hoc(Username)

const App = () => {
  return (
    <div>
      <Uppercase>m. ilham surya pratama dan hais batara</Uppercase>
    </div>
  )
}

export default App;
