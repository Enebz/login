import React, { useState, useContext } from 'react';

import Authentication from '../api/authentication'
import Validation from '../utils/validation'
import { Context } from '../stores/Store'

import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Body from '../theme/layout/Body'
import Button from '../theme/input/buttons/Button';
import ErrorLabel from '../theme/utils/labels/ErrorLabel';
import TextField from '../theme/input/fields/TextField';
import Card from '../theme/card/Card';
import Center from '../theme/utils/positioning/Center';


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
        <Card className="w-full sm:w-96 divide-y-2 space-y-2">

          {/* Title */}
          <h1 className="text-2xl text-center font-black">Log in</h1>

          {/* Inputs */}
          <form className="space-y-2">
            {/* Email input */}
            <TextField 
              id="email"
              type="email"
              placeholder="Email..."
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
            <TextField 
              id="password"
              type="password"
              placeholder="Password..."
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

          {/* Error */}
          {() => {
            if (error) {
              return(
                <ErrorLabel className="w-full">
                  {error}
                </ErrorLabel>
              )
            }
          }}

          {/* Forgot password */}
          <Link to="/forgotpassword">Forgot password?</Link>

          {/* Login button */}
          <Button 
            disabled={!(emailValid && passwordValid) || loggingIn} 
            onClick={onLoginClick}
            rightIcon={<FaSignInAlt />}
            className="w-full" 
          >
            Log in
          </Button>

          {/* Sign up */}
          <Link to="/signup">Or sign up...</Link>

        </Card>
      </Center>
    </Body>
  )
}

export default Login;
