import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact render={(props) => (
          <HomePage {...props} />
        )} />
      </Switch>
    )
  }
}

export default App;