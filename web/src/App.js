import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MasterPage from './com/MasterPage';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <MasterPage />
      </BrowserRouter>
    );
  }
}

export default App;
