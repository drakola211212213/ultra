import React, {Component} from 'react';


import Work from './../Work';
import Portfolio from './../Portfolio';
import Socialmedia from './../Socialmedia';
import Footer from './../Footer';
import Profile from './../Profile';
import Home from './../Home';
import About from './../About';


class Index extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <Socialmedia />
        <Footer />
      </div>
    );
  }
  
 
}

export default Index;
