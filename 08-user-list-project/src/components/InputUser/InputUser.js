import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import Modal from '../../UI/Modal/Modal';
import styles from './css/InputUser.module.css';

const InputUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState();
  const [isValid, setIsValid] = useState(true);

  const setEnteredUserNameHandler = (event) => {
    setIsValid(true);
    setEnteredUserName(event.target.value);
  };

  const setEnteredAgeHandler = (event) => {
    setIsValid(true);
    setEnteredAge(event.target.value);
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge < 1) {
      setIsValid(false);
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
    setIsValid(true);
  };

  return (
    <div>
      <Modal
        showModal={isValid}
        toggleModalHandler={toggleModalHandler}
        enteredUserName={enteredUserName}
        enteredAge={enteredAge}
      />
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
