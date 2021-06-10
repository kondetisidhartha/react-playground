import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './css/Expenses.css';

const Expenses = (props) => {
  return (
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
  );
};

export default Expenses;
