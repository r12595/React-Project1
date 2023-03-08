import ExpenseDate from './ExpenseItemDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
     

  return (
    // <h2>Expense Component</h2>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
      </div>
      <div className='expense-item__price'>$ {props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
