import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import ErrorModal from '../../UI/Modal/ErrorModal';
import styles from './css/InputUser.module.css';

const InputUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState(null);

  const setEnteredUserNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const setEnteredAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0) {
      setError(() => {
        return {
          title: 'Invalid Name',
          message: 'Name cannot be empty',
        };
      });
      return;
    }
    if (+enteredAge < 1 || enteredAge.trim().length === 0) {
      setError(() => {
        return {
          title: 'Invalid Age',
          message: 'Age must be greater than 0',
        };
      });
      return;
    }
    const enteredUserDetails = {
      name: enteredUserName,
      age: enteredAge,
      id: Math.random().toString(),
    };
    props.onAddUser(enteredUserDetails);
    setEnteredUserName('');
    setEnteredAge('');
  };

  const toggleModalHandler = () => {
    setError(null);
  };

  return (
    <div>
      {/* <Modal
        showModal={isValid}
        toggleModalHandler={toggleModalHandler}
        enteredUserName={enteredUserName}
        enteredAge={enteredAge}
      /> */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={toggleModalHandler}
        />
      )}
      <form className={styles['input-user']} onSubmit={onFormSubmitHandler}>
        <label>Username</label>
        <input
          type='text'
          onChange={setEnteredUserNameHandler}
          value={enteredUserName}
        />
        <label>Age</label>
        <input
          type='number'
          onChange={setEnteredAgeHandler}
          value={enteredAge}
        />
        <Button type='submit' title='Add User' />
      </form>
    </div>
  );
};

export default InputUser;
