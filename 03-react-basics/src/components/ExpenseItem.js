import './css/ExpenseItem.css';
import './ExpenseDate';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h3>{props.title}</h3>
        <div className='expense-item__price'>€{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
