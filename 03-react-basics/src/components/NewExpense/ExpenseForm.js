import React, { useState } from 'react';
import './css/ExpenseForm.css';

const ExpenseForm = (props) => {
  const [entertedTitle, setEntertedTitle] = useState('');
  const [entertedAmount, setEntertedAmount] = useState('');
  const [entertedDate, setEntertedDate] = useState('');
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  // const [userInput, setUserInput] = useState({
  //   entertedAmount: '',
  //   entertedDate: '',
  //   entertedTitle: '',
  // });

  const titleChangeHandler = (event) => {
    setEntertedTitle(event.target.value);

    // // Since below set methods are async/scheduled, it is possible sometimes previous state may be outdated.
    // setUserInput({
    //   ...userInput,
    //   entertedTitle: event.target.value,
    // });

    // // This anonymous function guarantees passed prevstate is the safer way to ensure that we always operate on the latest state snapshot.
    // setUserInput((prevState) => {
    //   return { ...prevState, entertedTitle: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEntertedDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   entertedDate: event.target.value,
    // });
  };

  const amountChangeHandler = (event) => {
    setEntertedAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   entertedAmount: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: entertedTitle,
      amount: +entertedAmount,
      date: new Date(entertedDate),
    };
    props.onSaveExpenseData(expenseData);
    setEntertedTitle('');
    setEntertedAmount('');
    setEntertedDate('');
    toggleShowExpense();
  };

  const toggleShowExpense = () => {
    return setShowExpenseForm((prevToggle) => {
      return !prevToggle;
    });
  };

  let toggleExpenseForm = (
    <div className='new-expense__hide-form'>
      <button onClick={toggleShowExpense}>Add Expense</button>
    </div>
  );

  if (showExpenseForm) {
    toggleExpenseForm = (
      <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input
              type='text'
              onChange={titleChangeHandler}
              value={entertedTitle}
            />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input
              type='date'
              min='2019-01-01'
              max='2022-12-31'
              value={entertedDate}
              onChange={dateChangeHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input
              type='number'
              min='0.01'
              step='0.01'
              value={entertedAmount}
              onChange={amountChangeHandler}
            />
          </div>
        </div>
        <div className='new-expense__actions'>
          <button onClick={toggleShowExpense}>Cancel</button>
          <button type='submit'>Add Expense</button>
        </div>
      </form>
    );
  }

  return <div>{toggleExpenseForm}</div>;
};

export default ExpenseForm;
