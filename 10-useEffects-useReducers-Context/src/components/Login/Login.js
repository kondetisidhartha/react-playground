import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import AuthContext from '../../Store/auth-context';

const reducerEmail = (state, action) => {
  if (action.type === 'INPUT_EMAIL') {
    return {
      emailAddress: action.value,
      isEmailValid: action.value.includes('@'),
    };
  }
  if (action.type === 'INPUT_EMAIL_CHECK') {
    return {
      emailAddress: state.emailAddress,
      isEmailValid: state.emailAddress.includes('@'),
    };
  }
  return { emailAddress: '', isEmailValid: false };
};

const reducerPassword = (state, action) => {
  if (action.type === 'INPUT_PASSWORD') {
    return {
      password: action.value,
      isPasswordValid: action.value.trim().length > 6,
    };
  }
  if (action.type === 'INPUT_PASSWORD_CHECK') {
    return {
      password: state.password,
      isPasswordValid: state.password.trim().length > 6,
    };
  }

  // enteredPassword.trim().length > 6
  return { password: '', isPasswordValid: false };
};

const Login = () => {
  const loginCtx = useContext(AuthContext);

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(reducerEmail, {
    emailAddress: '',
    isEmailValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(reducerPassword, {
    password: '',
    isPasswordValid: null,
  });

  const { isEmailValid: emailIsValid } = emailState;
  const { isPasswordValid } = passwordState;

  // need not add setFormIsValid to dependencies, because by React doesnot change set methods in useStates.

  useEffect(() => {
    const checkTimer = setTimeout(() => {
      setFormIsValid(emailIsValid && isPasswordValid);
    }, 200);
    return () => {
      clearTimeout(checkTimer);
    };
  }, [emailIsValid, isPasswordValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'INPUT_EMAIL', value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'INPUT_PASSWORD', value: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_EMAIL_CHECK' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_PASSWORD_CHECK' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    loginCtx.onLogin(emailState.emailAddress, passwordState.password);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          label='E-Mail'
          id='email'
          type='email'
          value={emailState.emailAddress}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          isValid={emailState.isEmailValid}
        />
        <Input
          label='Password'
          id='password'
          type='password'
          value={passwordState.password}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          isValid={passwordState.isPasswordValid}
        />
        <div className={classes.actions}>
          <Button type='submit' className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
