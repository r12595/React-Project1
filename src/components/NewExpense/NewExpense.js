import React from "react";
import NewExpenseForm from "./NewExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString(2)
    };
    props.onAddExpense(expenseData)
console.log('epenseDT',expenseData)
}

return <div className="new-expense">
<NewExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
</div>

}

export default NewExpense;