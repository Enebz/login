import React from 'react';
import Header from './Header';

class Home extends React.Component {

  constructor(props){
    super(props);
  };
  
  render() {
    return (
      <div className="home">
        <Header></Header>
      </div>
    )
  }
}

export default Home;
