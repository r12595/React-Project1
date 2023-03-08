import './ExpenseItem.css';
import ExpenseDate from './ExpenseItemDate';

function ExpenseItem(props) {
     

  return (
    // <h2>Expense Component</h2>
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
      </div>
      <div className='expense-item__price'>$ {props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
