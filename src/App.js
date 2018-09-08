import React, { Component } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Nav.js'
import Header from './components/Header.js'
import About from './components/About.js'
import Promotional from './components/Promotional.js'
import News from './components/News.js'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <About />
        <Promotional />
        <News />
      </div>
    );
  }
}

export default App;
