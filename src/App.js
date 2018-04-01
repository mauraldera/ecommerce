import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {}
  }
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <div>
        <Navbar />
        <Route
          exact path="/"
          component={Home}

          />
          <Route
          exact path="/about"
          component={About}

          />

           
          <Route
          exact path="/shop"
          component={Shop}

          />

          <Route
          exact path="/service"
          component={Service}

          />
          <Route
          exact path="/contact"
          component={Contact}

          />
        
        </div>
      </Switch>
     
      </BrowserRouter>


    );

  }

}

export default App;