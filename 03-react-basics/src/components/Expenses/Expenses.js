import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './css/Expenses.css';

const Expenses = (props) => {
  const [year, setYear] = useState('2021');
  const onYearSelectChangeHandler = (yearSelected) => {
    setYear(yearSelected);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          selectedYear={year}
          onYearSelectChange={onYearSelectChangeHandler}
        />
      </Card>
      <Card className='expenses'>
        {props.expenses.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
