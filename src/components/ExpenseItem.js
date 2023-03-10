import React, { useState } from 'react';

import ExpenseDate from './ExpenseItemDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)
  const clickHandler = () => {
    setTitle('Updated!');
    console.log('Clicked', title )}

  return (
    // <h2>Expense Component</h2>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
      </div>
      <div className='expense-item__price'>$ {props.amount}</div>
      <button onClick={clickHandler}>Change Title </button>
    </Card>
  );
}

export default ExpenseItem;
