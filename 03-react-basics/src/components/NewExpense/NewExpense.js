import './css/NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  // This gets executed in ExpenseForm component because we are passing pointer to that component.
  const onSaveExpenseDataHandler = (savedExpenseData) => {
    const expenseData = {
      ...savedExpenseData,
      id: Math.random().toString(),
    };
    props.onSaveExpenseDataApp(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
