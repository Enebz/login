import React from 'react';

class Header extends React.Component {

  constructor(props){
    super(props);
  };
  
  render() {
    return (
      <div className="header">
        <nav className="flex items-center justify-between flex-wrap bg-coral py-4 px-48">

          {/* Logo */}
          <div>
            <h1 className="text-2xl font-black text-eggshell">Topinion</h1>
          </div>

          {/* Links */}
          <div>
            <img className="inline object-cover w-12 h-12 rounded-full" src="https://www.chalenejohnson.com/wp-content/uploads/2015/01/guy-kawasaki-square-626x630.jpg" alt="Profile picture" />
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;
