import React, { useContext } from 'react';

import Authentication from '../api/authentication'
import { Context } from '../stores/Store'

import { FaLowVision, FaSignOutAlt } from 'react-icons/fa';

import Body from '../components/Body'
import Button from '../components/input/buttons/Button'
import IconButton from '../components/input/buttons/IconButton'
import Header from '../components/text/Header';
import Text from '../components/text/Text';
import TextField from '../components/input/fields/TextField';


function Profile(props) {

  const [state, dispatch] = useContext(Context)

  async function onLogOutClick() {
    // POST Login
    try {
      if (process.env.NODE_ENV === "development") {
        dispatch({
          type: "USER",
          command: "LOGOUT",
        });
        return;
      }
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

      <Header type={1}>
        Buttons
      </Header>
      <Header type={2}>
        Buttons
      </Header>
      <Header type={3}>
        Buttons
      </Header>
      <Header type={4}>
        Buttons
      </Header>

      <Text>
        Ipsum minim cupidatat sit aute nulla id. Sunt ex proident sit pariatur magna occaecat fugiat ullamco ex. Do ullamco culpa id velit quis in. 
      </Text>
      <Text>
      Laboris veniam reprehenderit esse ex consequat laborum et amet occaecat Lorem sit consectetur ea duis. Voluptate ut adipisicing in mollit proident.
      </Text>

      <Button 
        //onClick={onLogOutClick}
        rightIcon={<FaSignOutAlt />}
      >
        Log out
      </Button>

      <IconButton>
        <FaSignOutAlt />
      </IconButton>

      <TextField 
        id="text-1"
        type="password"
        placeholder="Write..."
        icon={<FaLowVision/>}
      />
    </Body>
  )
}

export default Profile;
