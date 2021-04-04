import React, { useState, useContext } from 'react';

import Authentication from '../api/authentication'
import Validation from '../utils/validation'
import { Context } from '../stores/Store'

import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Body from '../components/Body'
import Button from '../components/input/buttons/Button';
import ErrorLabel from '../components/ErrorLabel';
import InputBar from '../components/InputBar';
import Card from '../components/Card';
import Center from '../components/Center';
import CardItem from '../components/CardItem';


function Login(props) {

  const [state, dispatch] = useContext(Context);

  const [email, setEmail] = useState("")
  const [emailFocused, setEmailFocused] = useState(false)
  const [emailValid, setEmailValid] = useState(false)

  const [password, setPassword] = useState("")
  const [passwordFocused, setPasswordFocused] = useState(false)
  const [passwordValid, setPasswordValid] = useState(false)

  const [error, setError] = useState(null)

  const [loggingIn, setLoggingIn] = useState(false)

  // Email functions
  function onEmailChange(event) {
    const new_email = event.target.value;

    setEmail(new_email);
    setEmailValid(Validation.validEmail(new_email));
  }

  function onEmailFocus() {
    setEmailFocused(true);
  }

  function onEmailBlur() {
    setEmailFocused(false);
  }

  // Password functions
  function onPasswordChange(event) {
    const new_password = event.target.value;

    setPassword(new_password);
    setPasswordValid(Validation.validPassword(new_password));
  }

  function onPasswordFocus() {
    setPasswordFocused(true);
  }

  function onPasswordBlur() {
    setPasswordFocused(false);
  }

  async function onLoginClick() {
    if (!emailValid) {
      setError("Email format is wrong.");
      return;
    } else if (!passwordValid) {
      setError("Password format is wrong.");
      return;
    }

    setLoggingIn(true);

    // POST Login
    try {
      const result = await Authentication.login(email, password)
      if (result && result.success) {
        dispatch({
          type: "USER",
          command: "LOGIN",
          data: {
            username: result.username
          }
        });

        window.location.href = "/"

      } else if (result && result.success === false) {
        setEmail("");
        setPassword("");
        setError("Login failed.")
        setLoggingIn(false);
      }
    } catch (e) {
      setError("Internal error.")
      setLoggingIn(false);
    }
  }
  
  return (
    <Body className="login">
      <Center>
        <Card className="w-full sm:w-96">

          {/* Title */}
          <CardItem first={true}>
            <h1 className="text-2xl text-center font-black">Log in</h1>
          </CardItem>

          {/* Inputs */}
          <CardItem>
            <form>
              {/* Email input */}
              <InputBar 
                label="Email"
                type="email"
                name="email"
                placeholder="example@domain.com"
                autoComplete="email"
                icon={
                  <FaEnvelope 
                    className={
                      emailFocused && email.length > 0 ? 
                      (
                        emailValid ? 
                        "text-green-500" : 
                        "text-cinnabear-normal"
                      ) : 
                      "text-coral-normal"
                    }
                  />
                }
                onChange={onEmailChange}
                onFocus={onEmailFocus}
                onBlur={onEmailBlur}
                value={email}
                className="w-full"
              />

              {/* Password input */}
              <InputBar 
                label="Password"
                type="password"
                name="password"
                placeholder="Password#123"
                autoComplete="current-password"
                icon={
                  <FaLock 
                    className={
                      passwordFocused && password.length > 0 ? 
                      (
                        passwordValid ? 
                        "text-green-500" : 
                        "text-cinnabear-normal"
                      ) : 
                      "text-coral-normal"
                    }
                  />
                }
                onChange={onPasswordChange}
                onFocus={onPasswordFocus}
                onBlur={onPasswordBlur}
                value={password}
                className="w-full"
              />
            </form>
          </CardItem>

          {/* Error */}
          <CardItem>
            <ErrorLabel label={error} />
          </CardItem>
          

          {/* Forgot password */}
          <CardItem>
            <Link to="/forgotpassword">Forgot password?</Link>
          </CardItem>

          {/* Login button */}
          <CardItem>
            <Button 
              disabled={!(emailValid && passwordValid) || loggingIn} 
              onClick={onLoginClick}
              rightIcon={<FaSignInAlt />}
              className="w-full" 
            >
              Log in
            </Button>
          </CardItem>

          {/* Sign up */}
          <CardItem className="text-coral-light">
            <Link to="/signup">Or sign up...</Link>
          </CardItem>

        </Card>
      </Center>
    </Body>
  )
}

export default Login;
