import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [expenses, setExpenses] = useState([]);

  const onSaveExpenseDataAppHandler = (savedExpenseData) => {
    setExpenses((prevState) => {
      return [savedExpenseData, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onSaveExpenseDataApp={onSaveExpenseDataAppHandler} />
      <Expenses expenses={expenses} />
    </div>
  );

  // Before used to import React in all JS files so JSX gets converted to HTML and rendenered in browser.
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { expenses: expenses })
  // );
}

export default App;
