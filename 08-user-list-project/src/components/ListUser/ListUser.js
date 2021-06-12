import React from 'react';
import styles from './css/ListUser.module.css';

const ListUser = (props) => {
  return (
    <div className={styles['list-user']}>
      <span>
        <strong>Username:</strong> {props.user.name}
      </span>{' '}
      <span>
        <strong>Age:</strong> {props.user.age}
      </span>
    </div>
  );
};

export default ListUser;
