import React, { useState, useContext } from 'react';

import Authentication from '../api/authentication'
import Validation from '../utils/validation'
import { Context } from '../stores/Store'

import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Body from '../components/Body'
import Button from '../components/Button';
import ErrorLabel from '../components/ErrorLabel';
import InputBar from '../components/InputBar';


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
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-full sm:w-96 p-4 bg-eggshell-darker shadow rounded-md divide-y-2 divide-eggshell-dark">

          {/* Title */}
          <div className="flex flex-col items-center pb-2">
            <h1 className="text-2xl font-black">Log in</h1>
          </div>

          {/* Inputs */}
          <div className="py-2">
            <form>
              {/* Email input */}
              <InputBar 
                label="Email"
                type="email"
                name="email"
                placeholder="example@domain.com"
                autoComplete="email"
                icon={
                  <FaEnvelope/>
                }
                iconContainerClassName={
                  emailFocused && email.length > 0 ? 
                  (
                    emailValid ? 
                    "text-green-500" : 
                    "text-cinnabear-normal"
                  ) : 
                  "text-coral-normal"
                }
                onChange={onEmailChange}
                onFocus={onEmailFocus}
                onBlur={onEmailBlur}
                value={email}
                className="flex flex-col w-full"
                barContainerClassName="bg-eggshell-light text-coral-normal"
              />

              {/* Password input */}
              <InputBar 
                label="Password"
                type="password"
                name="password"
                placeholder="Password#123"
                autoComplete="current-password"
                icon={
                  <FaLock/>
                }
                iconContainerClassName={
                  passwordFocused && password.length > 0 ? 
                  (
                    passwordValid ? 
                    "text-green-500" : 
                    "text-cinnabear-normal"
                  ) : 
                  "text-coral-normal"
                }
                onChange={onPasswordChange}
                onFocus={onPasswordFocus}
                onBlur={onPasswordBlur}
                value={password}
                className="flex flex-col w-full"
                barContainerClassName="bg-eggshell-light text-coral-normal"
              />
            </form>
          </div>

          {/* Error */}
          <ErrorLabel className="py-2" label={error} />

          {/* Forgot password */}
          <div className="py-2">
            <Link to="/forgotpassword">Forgot password?</Link>
          </div>

          {/* Login button */}
          <div className="py-2">
            <Button disabled={!(emailValid && passwordValid) || loggingIn} onClick={onLoginClick}>
              <div className="flex items-center justify-center">
                <p>Log in</p>
                <FaSignInAlt />
              </div>
            </Button>
          </div>

          {/* Sign up */}
          <div className="py-2 text-coral-light">
            <Link to="/signup">Or sign up...</Link>
          </div>

        </div>
      </div>
    </Body>
  )
}

export default Login;
