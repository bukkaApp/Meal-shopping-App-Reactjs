import React, { Component } from 'react';
import './Appstyle.css';
import Home from './Home';
import Footer from '../frontpage/Footer';
import Reg from './Reg';
import Map from './Map';



class App extends Component {
  render() {
    return (
      <div className="dev">
        <Home />
        <Reg />
        <Footer />
      </div>
    );
  }
}

export default App;
