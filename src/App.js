import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from './Menu';
import Todo from './Todo';
import Done from './Done';

import "./css/App.css";
class App extends Component {
  render(){
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={Menu}/>
            <Route path="/todo" component={Todo}/>
            <Route path="/done" component={Done}/>
          </Switch>
      </Router>
    )
  }
}

export default App;
