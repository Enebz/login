import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../stores/Store'

function ProfileWidget(props) {

  const [state, dispatch] = useContext(Context);

  if (!state.user.loggedIn) {
    return (
      <div className={`flex items-center ${props.className}`}>
      <div className="flex-col pl-4">
          <p className="text-black font-extrabold">Not signed in</p>
          <p className="text-coral-normal"><Link to="/login">Log in</Link> or <Link to="/signup">Sign up</Link></p>
      </div>
    </div>
    );
  }
  return (
    <div className="flex items-center py-2">
      <img className="inline object-cover w-16 h-16 rounded-full" src="https://www.newmusicusa.org/wp-content/uploads/2015/09/guy-square-by-dor-malka-364x364.jpg" alt="Profile avatar" />
      <div className="flex-col pl-4">
          <p className="text-black font-extrabold">{state.user.username}</p>
          <p className="text-coral-normal"><Link to="/profile">See your profile</Link></p>
      </div>
    </div>
  )
}

export default ProfileWidget;
