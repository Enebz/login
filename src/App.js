import React from 'react';
import './App.css';

import Header from './Header';

class App extends React.Component {

  constructor(props){
    super(props);
  };
  
  render() {
    return (
      <div className="app">
        <Home></Home>
      </div>
    )
  }
}

export default App;
