import React, { useState, useRef } from 'react';

// import Wrapper from '../Helpers/Wrapper/Wrapper';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const inputUserNameRef = useRef();
  const inputUserAgeRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    const inputUserName = inputUserNameRef.current.value;
    const inputUserAge = inputUserAgeRef.current.value;

    event.preventDefault();
    if (inputUserName.trim().length === 0 || inputUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+inputUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(inputUserName, inputUserAge);
    inputUserNameRef.current.value = '';
    inputUserAgeRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input ref={inputUserNameRef} id='username' type='text' />
          <label htmlFor='age'>Age (Years)</label>
          <input ref={inputUserAgeRef} id='age' type='number' />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
