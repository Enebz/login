import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import './App.css';

import Authentication from './api/authentication'
import { Context } from './stores/Store'


import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

function App(props) {

  const [state, dispatch] = useContext(Context);

  useEffect(() => {

    async function checkLogin() {
      try {
        const result = await Authentication.isLoggedIn()  
        if (result && result.success) {
          dispatch({
            type: "USER",
            command: "LOGIN",
            data: {
              username: result.username
            }
          });
        } else {
          dispatch({
            type: "USER",
            command: "LOGOUT",
          });
        }
      } catch (e) {
        dispatch({
          type: "USER",
          command: "ERROR",
        });
      }
    }

    checkLogin();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  console.log(state)
  
  return (
    <Router>
      <div className="app">
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login">
            {state.user.loggedIn === true ? <Redirect to="/"/> : <Login /> }
          </Route>
          <Route exact path="/register">
            {state.user.loggedIn === true ? <Redirect to="/"/> : <Register /> }
          </Route>
          <Route exact path="/profile">
            {state.user.loggedIn === true ? <Profile /> : <Redirect to="/login"/>}
          </Route>
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
