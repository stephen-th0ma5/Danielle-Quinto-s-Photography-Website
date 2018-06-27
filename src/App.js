import React, { Component } from 'react';
import Navbar from './Components/NavBar';
import Quote from './Components/Quote';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Quote />
      </div>
    );
  }
}

export default App;
