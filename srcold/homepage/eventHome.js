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
      <div>
        <Home />
      </div>
      <div>
        <Reg />
      </div>
      <div>
        <Footer />
      </div>
      </div>
    );
  }
}

export default App;
