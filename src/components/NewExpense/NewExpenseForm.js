import React, { useState} from "react";
import './NewExpenseForm.css'

const NewExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredExpense, setEnteredExpense] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value );
    }
    const expenseChangeHandler = (event) => {
        setEnteredExpense(event.target.value );
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value );
    }

    const submitHandler = (event) => {
        event.preventDefault();
       const expenseData = {
            title: enteredTitle,
            expense: enteredExpense,
            date: new Date(enteredDate)
        }
       // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredExpense('');
        setEnteredDate('');
    }


    return <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
            <label>Expense</label>
            <input type='number' value={enteredExpense} min='0.1' step='0.1' onChange={expenseChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type='date' value={enteredDate} onChange={dateChangeHandler} />
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>


    </div>
    </form>
}

export default NewExpenseForm;