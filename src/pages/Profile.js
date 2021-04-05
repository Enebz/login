import React, { useContext, useState } from 'react';

import Authentication from '../api/authentication'
import { Context } from '../stores/Store'

import { FaEnvelope, FaLock, FaLowVision, FaSignOutAlt } from 'react-icons/fa';

import Body from '../theme/layout/Body'
import Button from '../theme/input/buttons/Button'
import IconButton from '../theme/input/buttons/IconButton'
import Header from '../theme/text/Header';
import Text from '../theme/text/Text';
import TextField from '../theme/input/fields/TextField';
import Switch from '../theme/input/toggle/Switch';
import ErrorLabel from '../theme/utils/labels/ErrorLabel';
import SuccessLabel from '../theme/utils/labels/SuccessLabel';
import InfoLabel from '../theme/utils/labels/InfoLabel';
import Card from '../theme/card/Card';



function Profile(props) {

  const [state, dispatch] = useContext(Context)

  const [checked, setChecked] = useState({
    a: true,
    b: false,
    c: false,
  });

  function handleSwitchChange(id) {
    setChecked({...checked, [id]: !checked[id]})
  }

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
    <Body className="home space-y-2">

      <Header type={1}>
        Lorem Ipsum
      </Header>
      <Header type={2}>
        Lorem Ipsum
      </Header>
      <Header type={3}>
        Lorem Ipsum
      </Header>
      <Header type={4}>
        Lorem Ipsum
      </Header>

      <Text>
        Ipsum minim cupidatat sit aute nulla id. Sunt ex proident sit pariatur magna occaecat fugiat ullamco ex. Do ullamco culpa id velit quis in. 
      </Text>
      <Text>
      Laboris veniam reprehenderit esse ex consequat laborum et amet occaecat Lorem sit consectetur ea duis. Voluptate ut adipisicing in mollit proident.
      </Text>

      <Button 
        onClick={onLogOutClick}
        rightIcon={<FaSignOutAlt />}
      >
        Log out
      </Button>

      <IconButton>
        <FaSignOutAlt />
      </IconButton>

      <IconButton
        type="filled"
      >
        <FaSignOutAlt />
      </IconButton>

      <TextField 
        id="text-1"
        type="email"
        placeholder="Email..."
        icon={<FaEnvelope/>}
      />

      <TextField 
        id="pass-1"
        type="password"
        placeholder="Write..."
        icon={<FaLock/>}
      />

      <Switch 
        id="a"
        toggled={checked.a}
        onChange={handleSwitchChange}
      />

      <Switch 
        id="b"
        toggled={checked.b}
        onChange={handleSwitchChange}
      />

      <Switch 
        id="c"
        disabled={true}
        toggled={checked.c}
        onChange={handleSwitchChange}
      />

      <InfoLabel>
        This is some info!
      </InfoLabel>

      <SuccessLabel>
        You succeeded!
      </SuccessLabel>

      <ErrorLabel>
        You found an error!
      </ErrorLabel>

      <Card divider={true}>
        <Header type={1}>
          Card title
        </Header>

        <ErrorLabel>
          You found another error!
        </ErrorLabel>
      </Card>

    </Body>
  )
}

export default Profile;
