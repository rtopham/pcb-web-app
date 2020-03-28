import React, { Component } from 'react';
import MainRouter from './MainRouter';
import {BrowserRouter} from 'react-router-dom'
//import logo from './logo.svg';
//import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      
      <MainRouter/>
      </BrowserRouter>
      
    );
  }
}

export default App;
