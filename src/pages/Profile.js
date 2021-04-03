import React, { useContext } from 'react';

import Authentication from '../api/authentication'
import { Context } from '../stores/Store'

import { FaSignOutAlt } from 'react-icons/fa';

import Body from '../components/Body'
import Button from '../components/Button'

function Profile(props) {

  const [state, dispatch] = useContext(Context)

  async function onLogOutClick() {
    // POST Login
    try {
      const result = await Authentication.logout()
      if (result && result.success) {
        dispatch({
          type: "USER",
          command: "LOGOUT",
        });

        window.location.href = "/login"

      } else if (result && result.success === false) {

      }
    } catch (e) {
      
    }
  }

  return (
    <Body className="home">
      <Button onClick={onLogOutClick}>
          <div className="flex items-center justify-center space-x-2">
            <p>Log out</p>
            <FaSignOutAlt />
          </div>
        </Button>
    </Body>
  )
}

export default Profile;
