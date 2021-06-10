import React, { useState } from 'react';
import ExpenseFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './css/Expenses.css';

const Expenses = (props) => {
  const [year, setYear] = useState('2021');
  const onYearSelectChangeHandler = (yearSelected) => {
    setYear(yearSelected);
  };

  let filteredExpenses = props.expenses.filter(
    (item) => item.date.getFullYear().toString() === year
  );

  return (
    <div>
      <Card className='expenses'>
        <ExpensesChart expenses={filteredExpenses} />
      </Card>
      <Card className='expenses'>
        <ExpenseFilter
          selectedYear={year}
          onYearSelectChange={onYearSelectChangeHandler}
        />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
