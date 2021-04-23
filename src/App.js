import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import './App.css';

import Navigation from './components/Navigation';
import Hjem from './pages/Hjem';
import Login from './pages/Poeng';
import Bestill from './pages/Bestill';
import NotFound from './pages/NotFound'

function App(props) {
  return (
    <Router>
      <div className="app">
        <Navigation /> 
        <Switch>
          <Route exact path="/" component={Hjem} />
          <Route exact path="/bestill" component={Bestill} />
          <Route exact path="/login" component={Login} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
