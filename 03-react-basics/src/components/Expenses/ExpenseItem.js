import React from 'react';
import './css/ExpenseItem.css';
import './ExpenseDate';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   // executes async
  //   setTitle('Updated!');
  // };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h3>{props.title}</h3>
        <div className='expense-item__price'>€{props.amount}</div>
        {/* <button onClick={clickHandler}>Change title</button> */}
      </div>
    </Card>
  );
};

export default ExpenseItem;
