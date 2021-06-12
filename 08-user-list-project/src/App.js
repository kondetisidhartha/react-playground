import React, { useState } from 'react';
import styles from './App.module.css';
import InputUser from './components/InputUser/InputUser';
import ListUser from './components/ListUser/ListUser';

const App = () => {
  const [userDetails, setUserDetails] = useState([
    { name: 'Tester 1', age: '22', id: Math.random().toString() },
    { name: 'Tester 2', age: '32', id: Math.random().toString() },
  ]);

  const onAddUserHandler = (enteredUserDetails) => {
    setUserDetails((prevDetails) => {
      const updatedUserDetails = [...prevDetails];
      updatedUserDetails.unshift(enteredUserDetails);
      return updatedUserDetails;
    });
  };

  return (
    <div>
      <div className={styles['user-input']}>
        <InputUser onAddUser={onAddUserHandler} />
      </div>
      <div className={styles.users}>
        {userDetails.map((user) => (
          <ListUser user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
